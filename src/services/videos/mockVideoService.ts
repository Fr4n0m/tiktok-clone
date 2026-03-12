import { MOCK_VIDEOS } from "../../data/mockVideos";
import { PublishVideoInput, UploadVideoInput, VideoItem } from "../../types/video";

type ServiceResult<T> = Promise<[Error | null, T | null]>;

let mockStore: VideoItem[] = [...MOCK_VIDEOS];

const createMockUploadUrl = (videoFile: File): string => URL.createObjectURL(videoFile);

const normalizePublishedVideo = ({ videoSrc, description }: PublishVideoInput): VideoItem => ({
  id: `mock-${Date.now()}`,
  username: "fr4n0m",
  avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
  description,
  likes: 0,
  shares: 0,
  comments: 0,
  bookmarks: 0,
  songTitle: "original sound - mock demo",
  albumCover:
    "https://i.scdn.co/image/ab67616d0000b273c22909b499aaee92f566e0f5",
  src: videoSrc,
});

const getVideos = async (): ServiceResult<VideoItem[]> => [null, [...mockStore]];

const uploadVideo = async ({ videoFile }: UploadVideoInput): ServiceResult<string> => {
  return [null, createMockUploadUrl(videoFile)];
};

const publishVideo = async ({ videoSrc, description }: PublishVideoInput): ServiceResult<VideoItem> => {
  if (!videoSrc) {
    return [new Error("No uploaded video source found"), null];
  }

  const publishedVideo = normalizePublishedVideo({
    videoSrc,
    description: description?.trim() ?? "",
  });

  mockStore = [publishedVideo, ...mockStore];
  return [null, publishedVideo];
};

export default { getVideos, uploadVideo, publishVideo };
