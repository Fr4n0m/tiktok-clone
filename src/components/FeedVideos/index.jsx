import React, { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer/index.jsx";
import video from "../../../assets/descarga2.mp4";
import video2 from "../../../assets/descarga3.mp4";
import video3 from "../../../assets/descarga.mp4";
import styles from "./styles.module.css";
import getVideos from "../../services/index.js";

const VIDEOS = [
  {
    id: 1,
    username: "fr4n0m",
    description:
      "QUE VIVA ESPAÑA 🇪🇸 #españa #lamineyamal #eurocopa #euro2024 #fyp #parati",
    likes: 1079,
    shares: 259,
    comments: 234,
    songTitle: "Que viva España - Manolo Escobar",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273c22909b499aaee92f566e0f5",
    src: video2,
  },
  {
    id: 2,
    username: "fr4n0m",
    description:
      "Spain winning semifinals euro 24 🤌🏼⚽️🇪🇸🥹 #spain #champions #campeones #euro2024 #winners #football",
    likes: 1079,
    shares: 259,
    comments: 234,
    songTitle: "La Roja Baila - Himno Oficial",
    albumCover: "https://ichef.bbci.co.uk/images/ic/1024x576/p03yydym.jpg",
    src: video,
  },
];

export default function FeedVideos() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos().then(([error, videos]) => {
      if (error) return setError(error);
      setVideos(videos);
    });
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return videos.map((video) => {
    /*VIDEOS.map Para que se muestren los videos locales*/
    const { user = {} } = video;

    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} username={user.username} />
        {/* {video.username} Para que aparezca el nombre de usuario en local*/}
      </div>
    );
  });
}
