import React from "react";
import styles from "./styles.module.css";
import AlbumIcon from "../Icons/Album";

const AlbumDisk = ({ albumCover }) => {
  return (
    <div className={styles.album}>
      <img src={albumCover} alt="Album Cover" />
    </div>
  );
};

export default AlbumDisk;
