import { supabase } from "../supabase/client";
import { PublishVideoInput, UploadVideoInput, VideoItem } from "../../types/video";
import { SupabaseClient } from "@supabase/supabase-js";

type ServiceResult<T> = Promise<[Error | null, T | null]>;
const toError = (error: { message: string } | null): Error | null =>
  error ? new Error(error.message) : null;

const getMissingClientError = () =>
  new Error("Supabase is not enabled. Set VITE_DATA_SOURCE=supabase and valid credentials.");

const ensureClient = (): [Error, null] | [null, SupabaseClient] => {
  if (!supabase) {
    return [getMissingClientError(), null];
  }

  return [null, supabase];
};

const getVideos = async (): ServiceResult<VideoItem[]> => {
  const [clientError, client] = ensureClient();
  if (clientError) {
    return [clientError, null];
  }

  const { data, error } = await client
    .from("videos")
    .select(
      `*, user:user_id (
        avatar,
        username,
        id
      )`
    )
    .order("created_at", { ascending: false });

  return [toError(error), (data ?? null) as VideoItem[] | null];
};

const uploadVideo = async ({ videoFile }: UploadVideoInput): ServiceResult<string> => {
  const [clientError, client] = ensureClient();
  if (clientError) {
    return [clientError, null];
  }

  if (!videoFile) {
    return [new Error("No video file provided"), null];
  }

  const filePath = `videos/${Date.now()}-${videoFile.name}`;
  const { error } = await client.storage.from("videos").upload(filePath, videoFile);

  if (error) {
    return [new Error(error.message), null];
  }

  const { data } = client.storage.from("videos").getPublicUrl(filePath);
  return [null, data.publicUrl];
};

const publishVideo = async ({ videoSrc, description }: PublishVideoInput): ServiceResult<VideoItem[]> => {
  const [clientError, client] = ensureClient();
  if (clientError) {
    return [clientError, null];
  }

  const defaultAlbum =
    "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/81fd9366b0f1841e1e6990492b5c9004~c5_720x720.jpeg?x-expires=1632060000&x-signature=lJ7S3aE3YqHr8WbhkwXNIasqkZo%3D";
  const defaultSong = "fr4n0m songs";

  const { data, error } = await client.from("videos").insert([
    {
      user_id: "",
      description,
      albumCover: defaultAlbum,
      songTitle: defaultSong,
      src: videoSrc,
    },
  ]);

  return [toError(error), (data ?? null) as VideoItem[] | null];
};

export default { getVideos, uploadVideo, publishVideo };
