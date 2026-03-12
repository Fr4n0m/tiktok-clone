import { MOCK_VIDEOS } from "../../data/mockVideos";
import { PublishVideoInput, UploadVideoInput, VideoItem } from "../../types/video";

type ServiceResult<T> = Promise<[Error | null, T | null]>;
const STORAGE_KEY = "tiktok-clone:mock-uploaded-videos:v1";
const MAX_LOCAL_VIDEO_BYTES = 3 * 1024 * 1024;

const hasStorage = typeof window !== "undefined" && Boolean(window.localStorage);

const parseStoredVideos = (): VideoItem[] => {
  if (!hasStorage) return [];

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    if (!rawValue) return [];

    const parsed = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) return [];
    return parsed as VideoItem[];
  } catch {
    return [];
  }
};

const persistUploadedVideos = (uploadedVideos: VideoItem[]) => {
  if (!hasStorage) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(uploadedVideos));
  } catch {
    // If quota is exceeded, keep app functional without blocking the user.
  }
};

const readVideoAsDataUrl = (videoFile: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not process the selected file"));
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.readAsDataURL(videoFile);
  });

const normalizePublishedVideo = ({ videoSrc, description }: PublishVideoInput): VideoItem => {
  return {
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
  };
};

let uploadedVideos: VideoItem[] = parseStoredVideos();
let mockStore: VideoItem[] = [...uploadedVideos, ...MOCK_VIDEOS];

const getVideos = async (): ServiceResult<VideoItem[]> => [null, [...mockStore]];

const uploadVideo = async ({ videoFile }: UploadVideoInput): ServiceResult<string> => {
  if (!videoFile) {
    return [new Error("No video file provided"), null];
  }

  if (videoFile.size > MAX_LOCAL_VIDEO_BYTES) {
    return [
      new Error("For this demo, videos must be under 3MB to be stored in your browser."),
      null,
    ];
  }

  try {
    const dataUrl = await readVideoAsDataUrl(videoFile);
    return [null, dataUrl];
  } catch (error) {
    return [error as Error, null];
  }
};

const publishVideo = async ({ videoSrc, description }: PublishVideoInput): ServiceResult<VideoItem> => {
  if (!videoSrc) {
    return [new Error("No uploaded video source found"), null];
  }

  const publishedVideo = normalizePublishedVideo({
    videoSrc,
    description: description?.trim() ?? "",
  });

  uploadedVideos = [publishedVideo, ...uploadedVideos];
  persistUploadedVideos(uploadedVideos);
  mockStore = [publishedVideo, ...mockStore];
  return [null, publishedVideo];
};

export default { getVideos, uploadVideo, publishVideo };
