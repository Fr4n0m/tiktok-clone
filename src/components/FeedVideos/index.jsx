import React, { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer/index.jsx";
import video from "../../../assets/descarga2.mp4";
import video2 from "../../../assets/descarga3.mp4";
import video3 from "../../../assets/descarga4.mp4";
import styles from "./styles.module.css";
/* import getVideos from "../../services/index.js";
 */
const VIDEOS = [
  {
    id: 1,
    username: "fr4n0m",
    avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
    description:
      "QUE VIVA ESPAÑA 🇪🇸 #españa #lamineyamal #eurocopa #euro2024 #fyp #parati",
    likes: 1079,
    shares: 259,
    comments: 234,
    bookmarks: 123,
    songTitle: "sonido original - los40es",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273c22909b499aaee92f566e0f5",
    src: video2,
  },
  {
    id: 2,
    username: "fr4n0m",
    avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
    description:
      "Spain winning semifinals euro 24 🤌🏼⚽️🇪🇸🥹 #spain #champions #campeones #euro2024 #winners #football",
    likes: 2079,
    shares: 545,
    comments: 383,
    bookmarks: 419,
    songTitle: "La Roja Baila - Himno Oficial",
    albumCover: "https://ichef.bbci.co.uk/images/ic/1024x576/p03yydym.jpg",
    src: video,
  },
  {
    id: 3,
    username: "fr4n0m",
    avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
    description:
      "Alonso X Lobato 2023 Season #Alonso #Lobato #f1 #f1noticias #f1edit",
    likes: 33333,
    shares: 333,
    comments: 3333,
    bookmarks: 333,
    songTitle: "sonido original - Antonio Lobato",
    albumCover:
      "https://cdn.mobygames.com/ca057d3c-ac08-11ed-b950-02420a00012d.webp",
    src: video3,
  },
];

export default function FeedVideos() {
  /*   const [videos, setVideos] = useState([]);
   */ const [error, setError] = useState(null);

  /* useEffect(() => {
    getVideos().then(([error, videos]) => {
      if (error) return setError(error);
      setVideos(videos);
    });
  }, []); */

  if (error) {
    return <span>{error}</span>;
  }

  return VIDEOS.map((video) => {
    /*VIDEOS.map Para que se muestren los videos locales*/
    const { user = {} } = video;
    const { avatar, username } = user;

    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer
          {...video}
          username={video.username}
          avatar={video.avatar}
        />
        {/* {video.username} {video.username} Para que aparezca el nombre de usuario en local*/}
      </div>
    );
  });
}
