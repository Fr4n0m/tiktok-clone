import React from "react";
import styles from "./styles.module.css";
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
  return (
    <footer className={styles.navbar}>
      <a className={styles.iconContainer} href="/" title="Inicio">
        <HomeIcon />
        <span>Inicio</span>
      </a>

      <a className={styles.iconContainer} href="/friends" title="Amigos">
        <FriendsIcon />
        <span>Amigos</span>
      </a>

      <a className={styles.iconContainer} href="/upload" title="Subir vídeo">
        <UploadIcon />
      </a>

      <a
        className={styles.iconContainer}
        href="/inbox"
        title="Bandeja de entrada"
      >
        <InboxIcon />
        <span>Bandeja de entrada</span>
      </a>

      <a className={styles.iconContainer} href="/profile" title="Perfil">
        <ProfileIcon />
        {/* <AvatarIcon className={styles.profileAvatar} /> */}
        <span>Perfil</span>
      </a>
    </footer>
  );
};

export default NavBar;
