import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import HeartIcon from "../Icons/Heart";
import CommentsIcon from "../Icons/Comments";
import ShareIcon from "../Icons/Share";
import BookmarkIcon from "../Icons/Bookmark";
import { UI_TEXT } from "../../content/uiText";

const VideoPlayerActions = (props) => {
  const [hearted, setHearted] = useState(false);
  const [likes, setLikes] = useState(props.likes ?? 0);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState("");
  const canUseWebShare = typeof navigator !== "undefined" && "share" in navigator;

  const handleLike = () => {
    setHearted((wasHearted) => {
      setLikes((prevLikes) => (wasHearted ? prevLikes - 1 : prevLikes + 1));
      return !wasHearted;
    });
  };

  const notifyPendingFeature = () => window.alert(UI_TEXT.video.pendingFeature);

  const closeShareMenu = () => {
    setIsShareMenuOpen(false);
    setCopiedMessage("");
  };

  const handleShare = async () => {
    const pageUrl = window.location.href;

    if (canUseWebShare) {
      try {
        await navigator.share({
          title: `${props.username} on TikTok clone`,
          text: props.description,
          url: pageUrl,
        });
      } catch {
        return;
      }
      return;
    }

    setIsShareMenuOpen(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedMessage(UI_TEXT.video.linkCopied);
    } catch {
      setCopiedMessage("");
    }
  };

  useEffect(() => {
    if (!isShareMenuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeShareMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isShareMenuOpen]);

  const handleSystemShare = async () => {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title: `${props.username} on TikTok clone`,
        text: props.description,
        url: window.location.href,
      });
      closeShareMenu();
    } catch {
      return;
    }
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

        <button className={styles.action} onClick={notifyPendingFeature} type="button">
          <CommentsIcon />
          <span title={UI_TEXT.video.comments}>{props.comments}</span>
        </button>

        <button className={styles.action} onClick={notifyPendingFeature} type="button">
          <BookmarkIcon />
          <span title={UI_TEXT.video.bookmarks}>{props.bookmarks}</span>
        </button>

        <button className={styles.action} onClick={handleShare} type="button">
          <ShareIcon />
          <span title={UI_TEXT.video.shares}>{props.shares}</span>
        </button>
      </aside>

      {isShareMenuOpen ? (
        <div className={styles.shareOverlay} onClick={closeShareMenu} role="presentation">
          <section
            className={styles.shareMenu}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <h3>{UI_TEXT.video.shareMenuTitle}</h3>
            <div className={styles.shareButtons}>
              <button onClick={handleCopyLink} type="button">
                {UI_TEXT.video.copyLink}
              </button>
              <button onClick={notifyPendingFeature} type="button">
                {UI_TEXT.video.sendToFriend}
              </button>
              <button onClick={notifyPendingFeature} type="button">
                {UI_TEXT.video.repost}
              </button>
              {canUseWebShare ? (
                <button onClick={handleSystemShare} type="button">
                  {UI_TEXT.video.systemShare}
                </button>
              ) : null}
            </div>
            {copiedMessage ? <p>{copiedMessage}</p> : null}
            <button className={styles.cancelShare} onClick={closeShareMenu} type="button">
              {UI_TEXT.video.cancel}
            </button>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default VideoPlayerActions;
