import React from "react";
import { useLocation } from "wouter";
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

const NavBar = () => {
  const [location] = useLocation();

  const isHome = location === "/";
  const isFriends = location === "/friends";
  const isUpload = location === "/upload";
  const isInbox = location === "/inbox";
  const isProfile = location === "/profile";

  return (
    <footer className={styles.navbar}>
      <a className={styles.iconContainer} href="/" title="Inicio">
        {isHome ? <HomeFillIcon /> : <HomeIcon />}
        <span className={clsx({ [styles.active]: isHome })}>Inicio</span>
      </a>

      <a className={styles.iconContainer} href="/friends" title="Amigos">
        {isFriends ? <FriendsFillIcon /> : <FriendsIcon />}

        <span className={clsx({ [styles.active]: isFriends })}>Amigos</span>
      </a>

      <a
        className={clsx(styles.iconContainer, styles.uploadButton)}
        href="/upload"
        title="Subir vídeo"
      >
        <UploadIcon />
      </a>

      <a
        className={styles.iconContainer}
        href="/inbox"
        title="Bandeja de entrada"
      >
        {isInbox ? <InboxFillIcon /> : <InboxIcon />}
        <span className={clsx(styles.inboxTitle, { [styles.active]: isInbox })}>
          Bandeja de entrada
        </span>
      </a>

      <a className={styles.iconContainer} href="/profile" title="Perfil">
        {isProfile ? (
          <AvatarIcon className={styles.profileAvatar} />
        ) : (
          <ProfileIcon />
        )}
        <span className={clsx({ [styles.active]: isProfile })}>Perfil</span>
      </a>
    </footer>
  );
};

export default NavBar;
