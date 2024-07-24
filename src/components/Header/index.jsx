import React from "react";
import styles from "./styles.module.css";
import SearchIcon from "../Icons/Search";
import LiveIcon from "../Icons/Live";
import ParaTi from "../ParaTi";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/live">
        <LiveIcon />
      </a>

      <a href="/">
        <ParaTi />
      </a>

      <a href="/search">
        <SearchIcon />
      </a>
    </header>
  );
};

export default Header;
