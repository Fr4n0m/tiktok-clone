import { IS_SUPABASE_ENABLED } from "../../config/appConfig";
import mockVideoService from "./mockVideoService";
import supabaseVideoService from "./supabaseVideoService";
import { PublishVideoInput, UploadVideoInput, VideoItem } from "../../types/video";

export type VideoService = {
  getVideos: () => Promise<[Error | null, VideoItem[] | null]>;
  uploadVideo: (input: UploadVideoInput) => Promise<[Error | null, string | null]>;
  publishVideo: (
    input: PublishVideoInput
  ) => Promise<[Error | null, VideoItem[] | VideoItem | null]>;
};

const videoService: VideoService = IS_SUPABASE_ENABLED
  ? supabaseVideoService
  : mockVideoService;

export default videoService;
