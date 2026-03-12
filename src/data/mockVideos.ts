import videoOne from "../../assets/descarga2.mp4";
import videoTwo from "../../assets/descarga3.mp4";
import videoThree from "../../assets/descarga4.mp4";
import { VideoItem } from "../types/video";

export const MOCK_VIDEOS: VideoItem[] = [
  {
    id: "1",
    username: "fr4n0m",
    avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
    description:
      "Spain all the way #spain #lamineyamal #eurocup #euro2024 #fyp #foryou",
    likes: 1079,
    shares: 259,
    comments: 234,
    bookmarks: 123,
    songTitle: "original sound - los40es",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273c22909b499aaee92f566e0f5",
    src: videoTwo,
  },
  {
    id: "2",
    username: "fr4n0m",
    avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
    description:
      "Spain winning semifinals euro 24 #spain #champions #campeones #euro2024 #winners #football",
    likes: 2079,
    shares: 545,
    comments: 383,
    bookmarks: 419,
    songTitle: "The Red Team Dances - Official Anthem",
    albumCover: "https://ichef.bbci.co.uk/images/ic/1024x576/p03yydym.jpg",
    src: videoOne,
  },
  {
    id: "3",
    username: "fr4n0m",
    avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
    description: "Alonso X Lobato 2023 Season #alonso #lobato #f1 #f1news #f1edit",
    likes: 33333,
    shares: 333,
    comments: 3333,
    bookmarks: 333,
    songTitle: "original sound - Antonio Lobato",
    albumCover:
      "https://cdn.mobygames.com/ca057d3c-ac08-11ed-b950-02420a00012d.webp",
    src: videoThree,
  },
];
