import { Link, useLocation } from "wouter";
import styles from "./styles.module.css";
import { UI_TEXT } from "../../content/uiText";

const ParaTi = () => {
  const [location] = useLocation();
  const isFollowing = location === "/followVideoFeed";
  const isForYou = location === "/";

  return (
    <div className={styles.paraTi}>
      <Link className={isFollowing ? styles.active : ""} href="/followVideoFeed">
        {UI_TEXT.header.following}
      </Link>
      <Link className={isForYou ? styles.active : ""} href="/">
        {UI_TEXT.header.forYou}
      </Link>
    </div>
  );
};

export default ParaTi;
