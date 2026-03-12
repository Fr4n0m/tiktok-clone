import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import FeedVideos from "../../components/FeedVideos";
import Header from "../../components/Header";
import {
  consumeFeedTabDirection,
  FeedTabDirection,
} from "../../hooks/useFeedTabTransition";

const FollowVideoFeed = () => {
  const [direction, setDirection] = useState<FeedTabDirection>("none");

  useEffect(() => {
    setDirection(consumeFeedTabDirection());
  }, []);

  return (
    <div
      className={clsx(styles.followVideoFeed, {
        [styles.enterFromLeft]: direction === "from-left",
        [styles.enterFromRight]: direction === "from-right",
      })}
    >
      <Header />
      <FeedVideos />
    </div>
  );
};

export default FollowVideoFeed;
