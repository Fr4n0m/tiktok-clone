import { useEffect, useState } from "react";
import clsx from "clsx";
import FeedVideos from "../../components/FeedVideos/index";
import Header from "../../components/Header";
import styles from "./styles.module.css";
import {
  consumeFeedTabDirection,
  FeedTabDirection,
} from "../../hooks/useFeedTabTransition";

const Home = () => {
  const [direction, setDirection] = useState<FeedTabDirection>("none");

  useEffect(() => {
    setDirection(consumeFeedTabDirection());
  }, []);

  return (
    <div
      className={clsx(styles.home, {
        [styles.enterFromLeft]: direction === "from-left",
        [styles.enterFromRight]: direction === "from-right",
      })}
    >
      <Header />
      <FeedVideos />
    </div>
  );
};

export default Home;
