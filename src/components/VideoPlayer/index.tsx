import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "../VideoDescription/index";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer";
import { UI_TEXT } from "../../content/uiText";
import { VideoItem } from "../../types/video";

type VideoPlayerProps = VideoItem;
type WebKitInlineVideoElement = HTMLVideoElement & {
  webkitDisplayingFullscreen?: boolean;
  webkitSetPresentationMode?: (
    mode: "inline" | "fullscreen" | "picture-in-picture"
  ) => void;
  webkitPresentationMode?: "inline" | "fullscreen" | "picture-in-picture";
  webkitExitFullscreen?: () => void;
};

const VideoPlayer = ({ src, ...videoMeta }: VideoPlayerProps) => {
  const video = useRef<HTMLVideoElement | null>(null);
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

  useEffect(() => {
    const videoElement = video.current as WebKitInlineVideoElement | null;
    if (!videoElement) return;

    videoElement.setAttribute("playsinline", "true");
    videoElement.setAttribute("webkit-playsinline", "true");
    videoElement.setAttribute("x5-playsinline", "true");
    videoElement.setAttribute("controlslist", "nofullscreen noremoteplayback");
    videoElement.setAttribute("disablepictureinpicture", "true");
    videoElement.setAttribute("disableremoteplayback", "true");

    const forceInlinePlayback = () => {
      if (videoElement.webkitPresentationMode !== "inline") {
        videoElement.webkitSetPresentationMode?.("inline");
      }
      if (videoElement.webkitDisplayingFullscreen) {
        videoElement.webkitExitFullscreen?.();
      }
    };

    videoElement.addEventListener("play", forceInlinePlayback);
    return () => videoElement.removeEventListener("play", forceInlinePlayback);
  }, []);

  const playerClassname = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        disablePictureInPicture
        loop
        onClick={handlePlay}
        playsInline
        preload="metadata"
        ref={video}
        src={src}
      />
      <button
        aria-label={playing ? UI_TEXT.video.pause : UI_TEXT.video.play}
        className={playerClassname}
        onClick={handlePlay}
        type="button"
      />
      <VideoPlayerActions {...videoMeta} />
      <VideoDescription {...videoMeta} />
    </div>
  );
};

export default VideoPlayer;
