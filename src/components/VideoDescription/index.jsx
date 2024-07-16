import React from "react";
import AlbumDisk from "./AlbumDisk";
import styles from "./styles.module.css";

const VideoDescription = ({ author, description, albumCover }) => {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <strong>
          <a href={`/user/${author}`} className={styles.author}>
            @{author}
          </a>
        </strong>
        <p className={styles.text}>{description}</p>
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  );
};

export default VideoDescription;
