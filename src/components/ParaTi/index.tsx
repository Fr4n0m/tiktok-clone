import React from "react";
import { Link } from "wouter";
import styles from "./styles.module.css";
import { UI_TEXT } from "../../content/uiText";

const ParaTi = () => {
  return (
    <div className={styles.paraTi}>
      <Link href="/followVideoFeed">{UI_TEXT.header.following}</Link>
      <Link href="/">{UI_TEXT.header.forYou}</Link>
    </div>
  );
};

export default ParaTi;
