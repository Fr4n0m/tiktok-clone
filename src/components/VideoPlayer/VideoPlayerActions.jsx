import React from "react";
import styles from "./styles.module.css";
import HeartIcon from "../Icons/Heart";
import CommentsIcon from "../Icons/Comments";
import ShareIcon from "../Icons/Share";
import BookmarkIcon from "../Icons/Bookmark";

const VideoPlayerActions = ({
  likes = 1242,
  comments = 300,
  bookmarks = 123,
  shares = 103,
  hearted = false,
}) => {
  const handleLike = () => {
    window.alert("like");
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
      <button className={styles.action} onClick={handleLike}>
        <HeartIcon />
        <span title="like">{likes}</span>
      </button>

      <button className={styles.action} onClick={handleComment}>
        <CommentsIcon />
        <span title="comments">{comments}</span>
      </button>

      <button className={styles.action} onClick={handleBookmark}>
        <BookmarkIcon />
        <span title="bookmarks">{bookmarks}</span>
      </button>

      <button className={styles.action} onClick={handleShare}>
        <ShareIcon />
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
};

export default VideoPlayerActions;
