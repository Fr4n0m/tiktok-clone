import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import HeartIcon from "../Icons/Heart";
import CommentsIcon from "../Icons/Comments";
import ShareIcon from "../Icons/Share";
import BookmarkIcon from "../Icons/Bookmark";
import { UI_TEXT } from "../../content/uiText";

const MOCK_COMMENTS = [
  { id: "1", author: "alexstream", text: "This edit is insane 🔥" },
  { id: "2", author: "mia.motion", text: "Need part 2 of this video." },
  { id: "3", author: "frankbeats", text: "The transition timing is perfect." },
];

const VideoPlayerActions = (props) => {
  const [hearted, setHearted] = useState(false);
  const [likes, setLikes] = useState(props.likes ?? 0);
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarks, setBookmarks] = useState(props.bookmarks ?? 0);
  const [comments] = useState(MOCK_COMMENTS);
  const [commentCount, setCommentCount] = useState(props.comments ?? 0);
  const [sheet, setSheet] = useState<null | "comments" | "share">(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleLike = () => {
    setHearted((wasHearted) => {
      setLikes((prevLikes) => (wasHearted ? prevLikes - 1 : prevLikes + 1));
      return !wasHearted;
    });
  };

  const closeSheet = () => {
    setSheet(null);
    setFeedbackMessage("");
  };

  useEffect(() => {
    if (!sheet) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeSheet();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [sheet]);

  const handleBookmark = () => {
    setBookmarked((wasBookmarked) => {
      setBookmarks((prevBookmarks) =>
        wasBookmarked ? prevBookmarks - 1 : prevBookmarks + 1
      );
      return !wasBookmarked;
    });
  };

  const handlePostComment = () => {
    setCommentCount((prevCount) => prevCount + 1);
    setFeedbackMessage(UI_TEXT.video.postComment);
  };

  const handleMockShare = (label) => {
    setFeedbackMessage(`${label} ${UI_TEXT.video.pendingFeature}`);
  };

  return (
    <>
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

        <button className={styles.action} onClick={() => setSheet("comments")} type="button">
          <CommentsIcon />
          <span title={UI_TEXT.video.comments}>{commentCount}</span>
        </button>

        <button className={styles.action} onClick={handleBookmark} type="button">
          <BookmarkIcon className={bookmarked ? styles.hearted : styles.notHearted} />
          <span title={UI_TEXT.video.bookmarks}>{bookmarks}</span>
        </button>

        <button className={styles.action} onClick={() => setSheet("share")} type="button">
          <ShareIcon />
          <span title={UI_TEXT.video.shares}>{props.shares}</span>
        </button>
      </aside>

      {sheet ? (
        <div className={styles.shareOverlay} onClick={closeSheet} role="presentation">
          {sheet === "share" ? (
            <section
              className={styles.shareMenu}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
            >
              <h3>{UI_TEXT.video.shareMenuTitle}</h3>
              <div className={styles.shareButtons}>
                <button onClick={() => handleMockShare(UI_TEXT.video.copyLink)} type="button">
                  {UI_TEXT.video.copyLink}
                </button>
                <button onClick={() => handleMockShare(UI_TEXT.video.sendToFriend)} type="button">
                  {UI_TEXT.video.sendToFriend}
                </button>
                <button onClick={() => handleMockShare(UI_TEXT.video.repost)} type="button">
                  {UI_TEXT.video.repost}
                </button>
                <button onClick={() => handleMockShare(UI_TEXT.video.systemShare)} type="button">
                  {UI_TEXT.video.systemShare}
                </button>
              </div>
              {feedbackMessage ? <p>{feedbackMessage}</p> : null}
              <button className={styles.cancelShare} onClick={closeSheet} type="button">
                {UI_TEXT.video.cancel}
              </button>
            </section>
          ) : (
            <section
              className={styles.shareMenu}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
            >
              <h3>{UI_TEXT.video.commentsTitle}</h3>
              <div className={styles.commentList}>
                {comments.map((comment) => (
                  <article className={styles.commentItem} key={comment.id}>
                    <strong>@{comment.author}</strong>
                    <p>{comment.text}</p>
                  </article>
                ))}
              </div>
              <div className={styles.commentComposer}>
                <input placeholder={UI_TEXT.video.commentsPlaceholder} readOnly />
                <button onClick={handlePostComment} type="button">
                  {UI_TEXT.video.postComment}
                </button>
              </div>
              {feedbackMessage ? <p>{feedbackMessage}</p> : null}
              <button className={styles.cancelShare} onClick={closeSheet} type="button">
                {UI_TEXT.video.close}
              </button>
            </section>
          )}
        </div>
      ) : null}
    </>
  );
};

export default VideoPlayerActions;
