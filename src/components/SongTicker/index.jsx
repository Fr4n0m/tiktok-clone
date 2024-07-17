import styles from "./styles.module.css";
import MusicIcon from "../Icons/MusicIcon";
import Marquee from "react-fast-marquee";

const SongTicker = ({ songTitle }) => {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee gradient={false} speed={100}>
        {songTitle}
      </Marquee>
    </div>
  );
};

export default SongTicker;
