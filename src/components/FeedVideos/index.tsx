import React, { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";
import { getVideos } from "../../services";
import { VideoItem } from "../../types/video";

export default function FeedVideos() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    getVideos().then(([requestError, responseVideos]) => {
      if (!mounted) return;
      if (requestError) {
        setError(requestError.message);
        return;
      }

      setVideos(responseVideos ?? []);
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return videos.map((video) => {
    const { user = {} } = video;
    const avatar = video.avatar ?? user.avatar;
    const username = video.username ?? user.username;

    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} username={username} avatar={avatar} />
      </div>
    );
  });
}
