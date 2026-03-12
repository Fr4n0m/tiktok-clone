import React from "react";
import AlbumDisk from "./AlbumDisk";
import SongTicker from "../SongTicker/index";
import styles from "./styles.module.css";
import { VideoItem } from "../../types/video";

type VideoDescriptionProps = Pick<
  VideoItem,
  "username" | "description" | "albumCover" | "songTitle"
>;

const VideoDescription = ({
  username = "",
  description,
  albumCover,
  songTitle,
}: VideoDescriptionProps) => {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a href={`/user/${username}`} className={styles.username}>
              @{username}
            </a>
          </strong>
          <p className={styles.text}>{description}</p>
        </section>

        <SongTicker songTitle={songTitle} />
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  );
};

export default VideoDescription;
