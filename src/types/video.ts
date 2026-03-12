export type VideoUser = {
  id?: string;
  username?: string;
  avatar?: string;
};

export type VideoItem = {
  id: string;
  username?: string;
  avatar?: string;
  description: string;
  likes: number;
  shares: number;
  comments: number;
  bookmarks: number;
  songTitle: string;
  albumCover: string;
  src: string;
  user?: VideoUser;
};

export type UploadVideoInput = {
  videoFile: File;
};

export type PublishVideoInput = {
  videoSrc: string;
  description: string;
};
