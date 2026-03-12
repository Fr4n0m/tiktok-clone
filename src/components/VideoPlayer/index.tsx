import React, { useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "../VideoDescription/index";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer";
import { UI_TEXT } from "../../content/uiText";
import { VideoItem } from "../../types/video";

type VideoPlayerProps = VideoItem;
let hasSyncedVideoAspectRatio = false;
const TIKTOK_RATIO = 9 / 16;

const VideoPlayer = ({ src, ...videoMeta }: VideoPlayerProps) => {
  const video = useRef<HTMLVideoElement | null>(null);
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

  const playerClassname = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  const handleLoadedMetadata = () => {
    const videoElement = video.current;
    if (!videoElement || hasSyncedVideoAspectRatio) return;

    const { videoWidth, videoHeight } = videoElement;
    if (!videoWidth || !videoHeight) return;

    const sourceRatio = videoWidth / videoHeight;
    const normalizedRatio = sourceRatio > 1 ? TIKTOK_RATIO : sourceRatio;

    document.documentElement.style.setProperty(
      "--video-aspect-ratio",
      `${normalizedRatio}`
    );
    hasSyncedVideoAspectRatio = true;
  };

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onLoadedMetadata={handleLoadedMetadata}
        onClick={handlePlay}
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
