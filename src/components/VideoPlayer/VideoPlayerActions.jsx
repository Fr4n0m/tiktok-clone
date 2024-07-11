import React from "react";
import styles from "./styles.module.css";
import HeartIcon from "../Icons/Heart";
import CommentsIcon from "../Icons/Comments";
import ShareIcon from "../Icons/Share";
import MusicIcon from "../Icons/MusicIcon";
import BookmarkIcon from "../Icons/Bookmark";

const VideoPlayerActions = () => {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <HeartIcon />
      </div>

      <div className={styles.action}>
        <CommentsIcon />
      </div>

      <div className={styles.action}>
        <ShareIcon />
      </div>

      <div className={styles.action}>
        <BookmarkIcon />
      </div>

      <div className={styles.action}>
        <MusicIcon />
      </div>
    </aside>
  );
};

export default VideoPlayerActions;
