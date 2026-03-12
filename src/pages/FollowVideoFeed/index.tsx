import styles from "./styles.module.css";
import FeedVideos from "../../components/FeedVideos";
import Header from "../../components/Header";

const FollowVideoFeed = () => {
  return (
    <div className={styles.followVideoFeed}>
      <Header />
      <FeedVideos />
    </div>
  );
};

export default FollowVideoFeed;
