import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "../VideoDescription/index";

/* const SRCLink =
  "https://v19-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/oEoGIGPQsEL2GL5eIgVLTeMJZLjfyAIUIIiEgf/?a=1988&bti=NDU3ZjAwOg%3D%3D&ch=0&cr=3&dr=0&lr=unwatermarked&cd=0%7C0%7C0%7C&cv=1&br=2726&bt=1363&cs=0&ds=6&ft=4fUEKMUm8Zmo0KKoH-4jVrvtrpWrKsd.&mime_type=video_mp4&qs=0&rc=aDY7ZTY4OzZnaDtnM2g3O0BpM241c285cnl1czMzZjczM0BeYC4tYy5iXmMxX2ExNF5gYSNfczQ1MmQ0MGZgLS1kMWNzcw%3D%3D&btag=e00088000&expire=1720804614&l=2024071017163987B13301947ECA53A9C6&ply_type=2&policy=2&signature=8da866027063ca2d25a167a0563f3323&tk=tt_chain_token";
 */

const VideoPlayer = ({ src, author, albumCover, description }) => {
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
        author={author}
        description={description}
      />
    </div>
  );
};

export default VideoPlayer;
