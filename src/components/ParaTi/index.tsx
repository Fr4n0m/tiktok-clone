import { Link, useLocation } from "wouter";
import styles from "./styles.module.css";
import { UI_TEXT } from "../../content/uiText";
import { setFeedTabDirection } from "../../hooks/useFeedTabTransition";

const ParaTi = () => {
  const [location] = useLocation();
  const isFollowing = location === "/followVideoFeed";
  const isForYou = location === "/";
  const activeTab = isFollowing ? "following" : "forYou";

  return (
    <div className={styles.paraTi} data-active-tab={activeTab}>
      <Link
        className={isFollowing ? styles.active : ""}
        href="/followVideoFeed"
        onClick={() => setFeedTabDirection("from-left")}
      >
        {UI_TEXT.header.following}
      </Link>
      <Link
        className={isForYou ? styles.active : ""}
        href="/"
        onClick={() => setFeedTabDirection("from-right")}
      >
        {UI_TEXT.header.forYou}
      </Link>
    </div>
  );
};

export default ParaTi;
