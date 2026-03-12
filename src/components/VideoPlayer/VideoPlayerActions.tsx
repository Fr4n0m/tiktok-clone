import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import HeartIcon from "../Icons/Heart";
import CommentsIcon from "../Icons/Comments";
import ShareIcon from "../Icons/Share";
import BookmarkIcon from "../Icons/Bookmark";
import { UI_TEXT } from "../../content/uiText";
import { useLocation } from "wouter";
import { VideoItem } from "../../types/video";

const MOCK_COMMENTS = [
  { id: "1", author: "alexstream", text: "This edit is insane 🔥" },
  { id: "2", author: "mia.motion", text: "Need part 2 of this video." },
  { id: "3", author: "frankbeats", text: "The transition timing is perfect." },
];

type VideoPlayerActionsProps = Pick<
  VideoItem,
  "id" | "likes" | "bookmarks" | "comments" | "shares" | "username" | "avatar"
>;

type EngagementState = {
  hearted: boolean;
  likes: number;
  bookmarked: boolean;
  bookmarks: number;
};

const createInitialEngagementState = (props: VideoPlayerActionsProps): EngagementState => ({
  hearted: false,
  likes: props.likes ?? 0,
  bookmarked: false,
  bookmarks: props.bookmarks ?? 0,
});

const VideoPlayerActions = (props: VideoPlayerActionsProps) => {
  const [, setLocation] = useLocation();
  const [engagement, setEngagement] = useState<EngagementState>(
    createInitialEngagementState(props)
  );
  const [following, setFollowing] = useState(false);
  const [comments] = useState(MOCK_COMMENTS);
  const [commentCount, setCommentCount] = useState(props.comments ?? 0);
  const [sheet, setSheet] = useState<null | "comments" | "share">(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleLike = () => {
    setEngagement((previousState) => {
      const nextHearted = !previousState.hearted;
      return {
        ...previousState,
        hearted: nextHearted,
        likes: Math.max(
          0,
          previousState.likes + (nextHearted ? 1 : -1)
        ),
      };
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
    setEngagement((previousState) => {
      const nextBookmarked = !previousState.bookmarked;
      return {
        ...previousState,
        bookmarked: nextBookmarked,
        bookmarks: Math.max(
          0,
          previousState.bookmarks + (nextBookmarked ? 1 : -1)
        ),
      };
    });
  };

  useEffect(() => {
    setEngagement(createInitialEngagementState(props));
    setCommentCount(props.comments ?? 0);
  }, [props.id, props.likes, props.bookmarks, props.comments]);

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
        <button
          className={styles.userButton}
          onClick={() => setLocation("/profile")}
          type="button"
        >
          <div className={styles.user}>
            <img alt={props.username} src={props.avatar} />
            <button
              aria-label={following ? UI_TEXT.video.following : UI_TEXT.video.follow}
              className={styles.followBadge}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setFollowing((value) => !value);
              }}
              type="button"
            >
              <span
                className={
                  following
                    ? `${styles.followBadgeIcon} ${styles.checkIcon}`
                    : `${styles.followBadgeIcon} ${styles.plusIcon}`
                }
              >
                {following ? "✓" : "+"}
              </span>
            </button>
          </div>
        </button>

        <button className={styles.action} onClick={handleLike} type="button">
          <HeartIcon className={engagement.hearted ? styles.hearted : styles.notHearted} />
          <span title={UI_TEXT.video.likes}>{engagement.likes}</span>
        </button>

        <button className={styles.action} onClick={() => setSheet("comments")} type="button">
          <CommentsIcon />
          <span title={UI_TEXT.video.comments}>{commentCount}</span>
        </button>

        <button className={styles.action} onClick={handleBookmark} type="button">
          <BookmarkIcon
            className={engagement.bookmarked ? styles.bookmarked : styles.notHearted}
          />
          <span title={UI_TEXT.video.bookmarks}>{engagement.bookmarks}</span>
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
