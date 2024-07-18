import React, { useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "../VideoDescription/index";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer.js";

const VideoPlayer = (props) => {
  const video = useRef(null);
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

  const playerClassname = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  const { src } = props;

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassname} onClick={handlePlay} />
      <VideoPlayerActions {...props} />
      <VideoDescription {...props} />
    </div>
  );
};

export default VideoPlayer;
