import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "../VideoDescription/index";

const VideoPlayer = ({ src, username, albumCover, description, songTitle }) => {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);

  const handlePlay = () => {
    const { current: videoEl } = video;
    playing ? video.current.pause() : video.current.play();
    setPlaying(!playing);
  };

  const playerClassname = clsx(styles.player, {
    [styles.hidden]: playing,
  });

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
      <VideoPlayerActions />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>
  );
};

export default VideoPlayer;
