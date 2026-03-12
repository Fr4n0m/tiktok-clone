import React, { useState } from "react";
import styles from "./styles.module.css";
import HeartIcon from "../Icons/Heart";
import CommentsIcon from "../Icons/Comments";
import ShareIcon from "../Icons/Share";
import BookmarkIcon from "../Icons/Bookmark";
import { UI_TEXT } from "../../content/uiText";

const VideoPlayerActions = (props) => {
  const [hearted, setHearted] = useState(false);
  const [likes, setLikes] = useState(props.likes ?? 0);

  const handleLike = () => {
    setHearted((wasHearted) => {
      setLikes((prevLikes) => (wasHearted ? prevLikes - 1 : prevLikes + 1));
      return !wasHearted;
    });
  };

  const notifyPendingFeature = () => window.alert(UI_TEXT.video.pendingFeature);

  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img alt={props.username} src={props.avatar} />
        <img
          src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg"
          width="24"
          alt={UI_TEXT.video.followUser}
        />
      </div>

      <button className={styles.action} onClick={handleLike} type="button">
        <HeartIcon className={hearted ? styles.hearted : styles.notHearted} />
        <span title={UI_TEXT.video.likes}>{likes}</span>
      </button>

      <button className={styles.action} onClick={notifyPendingFeature} type="button">
        <CommentsIcon />
        <span title={UI_TEXT.video.comments}>{props.comments}</span>
      </button>

      <button className={styles.action} onClick={notifyPendingFeature} type="button">
        <BookmarkIcon />
        <span title={UI_TEXT.video.bookmarks}>{props.bookmarks}</span>
      </button>

      <button className={styles.action} onClick={notifyPendingFeature} type="button">
        <ShareIcon />
        <span title={UI_TEXT.video.shares}>{props.shares}</span>
      </button>
    </aside>
  );
};

export default VideoPlayerActions;
