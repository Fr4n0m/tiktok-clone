import supabase from "./supabase";

const uploadVideo = async ({ video }) => {
  const { data, error } = await supabase.storage
    .from("videos")
    .upload("videos/", video);
  if (error) {
    console.log(error);
  }
  console.log(data);
};

const publishVideo = async ({ videoSrc, description }) => {
  const defaultAlbum =
    "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/81fd9366b0f1841e1e6990492b5c9004~c5_720x720.jpeg?x-expires=1632060000&x-signature=lJ7S3aE3YqHr8WbhkwXNIasqkZo%3D";
  const defaultSong = "fr4n0m songs";

  const { data, error } = await supabase.from("videos").insert([
    {
      user_id: "",
      description,
      albumCover: defaultAlbum,
      songTitle: defaultSong,
      src: videoSrc,
    },
  ]);

  return [error, data];
};

const getVideos = async () => {
  const { data, error } = await supabase
    .from("videos")
    .select(
      `*, user:user_id (
        avatar,
        username,
        id
      )`
    )
    .order("created_at", { ascending: false });

  return [error, data];
};

export default { getVideos, uploadVideo, publishVideo };
