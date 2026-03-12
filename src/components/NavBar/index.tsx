import React from "react";
import { Link, useLocation } from "wouter";
import styles from "./styles.module.css";
import clsx from "clsx";

import FriendsIcon from "../Icons/Friends";
import FriendsFillIcon from "../Icons/FriendsFill";
import ProfileIcon from "../Icons/Profile";
import InboxIcon from "../Icons/Inbox";
import InboxFillIcon from "../Icons/InboxFill";
import UploadIcon from "../Icons/Upload";
import HomeIcon from "../Icons/Home";
import HomeFillIcon from "../Icons/HomeFill";
import AvatarIcon from "../Icons/Avatar";
import { UI_TEXT } from "../../content/uiText";

const NavBar = () => {
  const [location] = useLocation();

  const isHome = location === "/";
  const isFriends = location === "/friends";
  const isInbox = location === "/inbox";
  const isProfile = location === "/profile";

  return (
    <footer className={styles.navbar}>
      <Link className={styles.iconContainer} href="/" title={UI_TEXT.nav.home}>
        {isHome ? <HomeFillIcon /> : <HomeIcon />}
        <span className={clsx({ [styles.active]: isHome })}>{UI_TEXT.nav.home}</span>
      </Link>

      <Link className={styles.iconContainer} href="/friends" title={UI_TEXT.nav.friends}>
        {isFriends ? <FriendsFillIcon /> : <FriendsIcon />}

        <span className={clsx({ [styles.active]: isFriends })}>{UI_TEXT.nav.friends}</span>
      </Link>

      <Link
        className={clsx(styles.iconContainer, styles.uploadButton)}
        href="/upload"
        title={UI_TEXT.nav.upload}
      >
        <UploadIcon />
      </Link>

      <Link
        className={styles.iconContainer}
        href="/inbox"
        title={UI_TEXT.nav.inbox}
      >
        {isInbox ? <InboxFillIcon /> : <InboxIcon />}
        <span className={clsx(styles.inboxTitle, { [styles.active]: isInbox })}>
          {UI_TEXT.nav.inbox}
        </span>
      </Link>

      <Link className={styles.iconContainer} href="/profile" title={UI_TEXT.nav.profile}>
        {isProfile ? (
          <AvatarIcon className={styles.profileAvatar} />
        ) : (
          <ProfileIcon />
        )}
        <span className={clsx({ [styles.active]: isProfile })}>{UI_TEXT.nav.profile}</span>
      </Link>
    </footer>
  );
};

export default NavBar;
