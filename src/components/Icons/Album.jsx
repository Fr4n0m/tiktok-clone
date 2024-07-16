import React from "react";

const AlbumIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 49">
      <path
        fill="url(#a)"
        fill-rule="evenodd"
        d="M24.5 49a24.5 24.5 0 1 0 0-49 24.5 24.5 0 0 0 0 49Z"
        clip-rule="evenodd"
      />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(24.5 0 0 24.5 24.5 24.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".1" stop-color="#151515" />
          <stop offset=".4" stop-color="#393939" />
          <stop offset=".6" stop-color="#161616" />
          <stop offset=".9" stop-color="#393939" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default AlbumIcon;
