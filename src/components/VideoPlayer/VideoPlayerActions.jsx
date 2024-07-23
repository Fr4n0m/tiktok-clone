import React, { useState } from "react";
import styles from "./styles.module.css";
import HeartIcon from "../Icons/Heart";
import CommentsIcon from "../Icons/Comments";
import ShareIcon from "../Icons/Share";
import BookmarkIcon from "../Icons/Bookmark";

const VideoPlayerActions = (props) => {
  const [hearted, setHearted] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  const handleLike = () => {
    setHearted((prevHearted) => !prevHearted);
    setLikes((prevLikes) => (hearted ? prevLikes - 1 : prevLikes + 1));
  };

  const handleComment = () => {
    window.alert("comment");
  };

  const handleShare = () => {
    window.alert("share");
  };

  const handleBookmark = () => {
    window.alert("bookmark");
  };

  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img alt={props.username} src={props.avatar} />
        <img
          src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg"
          width="24"
        />
      </div>

      <button className={styles.action} onClick={handleLike}>
        <HeartIcon className={hearted ? styles.hearted : styles.notHearted} />
        <span title="like">{likes}</span>
      </button>

      <button className={styles.action} onClick={handleComment}>
        <CommentsIcon />
        <span title="comments">{props.comments}</span>
      </button>

      <button className={styles.action} onClick={handleBookmark}>
        <BookmarkIcon />
        <span title="bookmarks">{props.bookmarks}</span>
      </button>

      <button className={styles.action} onClick={handleShare}>
        <ShareIcon />
        <span title="shares">{props.shares}</span>
      </button>
    </aside>
  );
};

export default VideoPlayerActions;
