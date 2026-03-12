import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Accept, useDropzone } from "react-dropzone";
import clsx from "clsx";
import { publishVideo, uploadVideo } from "../../services";
import { UI_TEXT } from "../../content/uiText";
import UploadIcon from "../../components/Icons/Upload";

const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [publishedMessage, setPublishedMessage] = useState("");

  const releaseUploadedUrl = (url: string | null) => {
    if (url?.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  };

  const onDrop = async (files: File[]) => {
    const [file] = files;
    if (!file) return;

    releaseUploadedUrl(uploaded);
    setUploading(true);
    setErrorMessage("");
    setPublishedMessage("");
    setSelectedFileName(file.name);

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

  useEffect(() => {
    return () => releaseUploadedUrl(uploaded);
  }, [uploaded]);

  const dndClassNames = clsx(styles.dnd, {
    [styles.uploaded]: uploaded,
    [styles.uploading]: uploading && !uploaded,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept,
  });

  const renderDndContent = () => {
    if (uploaded) {
      return (
        <>
          <h4>{UI_TEXT.upload.uploadedSuccess}</h4>
          <h5>{UI_TEXT.upload.readyToPublish}</h5>
        </>
      );
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
    releaseUploadedUrl(uploaded);
    setUploaded(null);
    setSelectedFileName("");
    form.reset();
  };

  return (
    <div className={styles.upload}>
      <h1>{UI_TEXT.upload.title}</h1>
      <p>{UI_TEXT.upload.subtitle}</p>
      <small className={styles.notice}>{UI_TEXT.upload.mockNotice}</small>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div {...getRootProps()} className={styles.dropzoneRoot}>
          <input {...getInputProps()} />
          <div className={dndClassNames}>
            <UploadIcon aria-hidden />
            {renderDndContent()}
          </div>
        </div>

        <div className={styles.formFooter}>
          {selectedFileName ? (
            <p className={styles.fileName}>
              {UI_TEXT.upload.selectedFile}: <strong>{selectedFileName}</strong>
            </p>
          ) : null}

          <label>
            {UI_TEXT.upload.caption}
            <input name="description" placeholder={UI_TEXT.upload.descriptionPlaceholder} />
          </label>

          <button disabled={!uploaded || isPublishing} type="submit">
            {isPublishing ? UI_TEXT.upload.publishing : UI_TEXT.upload.submit}
          </button>

          {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
          {publishedMessage ? <p className={styles.success}>{publishedMessage}</p> : null}
        </div>
      </form>
    </div>
  );
};

export default Upload;
