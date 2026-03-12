import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Accept, useDropzone } from "react-dropzone";
import clsx from "clsx";
import { publishVideo, uploadVideo } from "../../services";
import { UI_TEXT } from "../../content/uiText";

const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [publishedMessage, setPublishedMessage] = useState("");

  const onDrop = async (files: File[]) => {
    const [file] = files;
    if (!file) return;

    setUploading(true);
    setErrorMessage("");
    setPublishedMessage("");

    const [error, fileUrl] = await uploadVideo({ videoFile: file });
    setUploading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setUploaded(fileUrl);
  };

  const { isDragAccept, isDragReject, getRootProps, getInputProps } =
    useDropzone({
      disabled: uploading || Boolean(uploaded),
      maxFiles: 1,
      accept: {
        "video/*": [".mp4", ".m4v", ".webm"],
      } satisfies Accept,
      onDrop,
    });

  useEffect(() => {
    if (isDragReject && "vibrate" in navigator) {
      navigator.vibrate(100);
    }
  }, [isDragReject]);

  const dndClassNames = clsx(styles.dnd, {
    [styles.uploaded]: uploaded,
    [styles.uploading]: uploading && !uploaded,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept,
  });

  const renderDndContent = () => {
    if (uploaded) {
      return <h4>{UI_TEXT.upload.uploadedSuccess}</h4>;
    }
    if (uploading) {
      return <h4>{UI_TEXT.upload.uploading}</h4>;
    }
    if (isDragReject) return <h4>{UI_TEXT.upload.unsupportedFile}</h4>;
    if (isDragAccept) return <h4>{UI_TEXT.upload.dropToUpload}</h4>;

    return (
      <>
        <h4>{UI_TEXT.upload.selectVideo}</h4>
        <h5>{UI_TEXT.upload.dragAndDrop}</h5>
        <ul>
          <li>{UI_TEXT.upload.formatRequirement}</li>
          <li>{UI_TEXT.upload.resolutionRequirement}</li>
          <li>{UI_TEXT.upload.durationRequirement}</li>
        </ul>
      </>
    );
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!uploaded) return;

    setIsPublishing(true);
    setErrorMessage("");
    setPublishedMessage("");

    const form = evt.currentTarget;
    const description = new FormData(form).get("description")?.toString() ?? "";
    const [error] = await publishVideo({ videoSrc: uploaded, description });
    setIsPublishing(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setPublishedMessage(UI_TEXT.upload.publishSuccess);
    setUploaded(null);
    form.reset();
  };

  return (
    <div className={styles.upload}>
      <h1>{UI_TEXT.upload.title}</h1>
      <p>{UI_TEXT.upload.subtitle}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={dndClassNames}>
            <img
              src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg"
              width="49"
              alt={UI_TEXT.upload.cloudIconAlt}
            />
            {renderDndContent()}
          </div>
        </div>

        <label>
          {UI_TEXT.upload.caption}
          <input name="description" placeholder="" />
        </label>

        <button disabled={!uploaded || isPublishing} type="submit">
          {isPublishing ? UI_TEXT.upload.publishing : UI_TEXT.upload.submit}
        </button>

        {errorMessage ? <p>{errorMessage}</p> : null}
        {publishedMessage ? <p>{publishedMessage}</p> : null}
      </form>
    </div>
  );
};

export default Upload;
