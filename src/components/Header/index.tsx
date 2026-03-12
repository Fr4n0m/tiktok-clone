import React from "react";
import { Link } from "wouter";
import styles from "./styles.module.css";
import SearchIcon from "../Icons/Search";
import LiveIcon from "../Icons/Live";
import ParaTi from "../ParaTi";
import { UI_TEXT } from "../../content/uiText";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link aria-label={UI_TEXT.header.live} href="/live">
        <LiveIcon />
      </Link>

      <ParaTi />

      <Link aria-label={UI_TEXT.header.search} href="/search">
        <SearchIcon />
      </Link>
    </header>
  );
};

export default Header;
