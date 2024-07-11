import React from "react";
import VideoPlayer from "../VideoPlayer/index.jsx";
import video from "../../../assets/descarga.mp4";
import styles from "./styles.module.css";

const VIDEOS = [
  {
    id: 1,
    /* title: "The First Video", */
    author: "eledginho",
    description:
      "QUE VIVA ESPAÑA 🇪🇸 #españa #lamineyamal #eurocopa #euro2024 #fyp #parati",
    likes: 1079,
    shares: 259,
    comments: 234,
    songTitle: "sonido original - ElEdginho",
    albumCover:
      "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/6af385c4581bd0b610e5db574c7d522f~c5_100x100.jpeg?lk3s=a5d48078&nonce=54051&refresh_token=5b2afa3d32422d5f0f4b7fe2ca7f557f&x-expires=1720868400&x-signature=PgukunTGIhpkb12dQPN2MUTHuGY%3D&shp=a5d48078&shcp=b59d6b55",
    src: video,
  },
  {
    id: 2,
    author: "eledginho",
    description:
      "QUE VIVA ESPAÑA 🇪🇸 #españa #lamineyamal #eurocopa #euro2024 #fyp #parati",
    likes: 1079,
    shares: 259,
    comments: 234,
    songTitle: "sonido original - ElEdginho",
    albumCover:
      "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/6af385c4581bd0b610e5db574c7d522f~c5_100x100.jpeg?lk3s=a5d48078&nonce=54051&refresh_token=5b2afa3d32422d5f0f4b7fe2ca7f557f&x-expires=1720868400&x-signature=PgukunTGIhpkb12dQPN2MUTHuGY%3D&shp=a5d48078&shcp=b59d6b55",
    src: video,
  },
];

export default function FeedVideos() {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    );
  });
}
