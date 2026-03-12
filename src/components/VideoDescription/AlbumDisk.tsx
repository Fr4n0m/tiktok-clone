import React from "react";
import styles from "./styles.module.css";
import { UI_TEXT } from "../../content/uiText";

const AlbumDisk = ({ albumCover }) => {
  return (
    <div className={styles.album}>
      <img className={styles.albumImage} src={albumCover} alt={UI_TEXT.video.albumCover} />
    </div>
  );
};

export default AlbumDisk;
