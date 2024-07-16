import React from "react";
import AlbumDisk from "./AlbumDisk";

const VideoDescription = ({ author, description, albumCover }) => {
  return (
    <footer>
      <div>
        <strong>{author}</strong>
        <p>{description}</p>
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  );
};

export default VideoDescription;
