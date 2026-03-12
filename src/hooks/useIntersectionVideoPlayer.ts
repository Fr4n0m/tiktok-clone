import { useCallback, useEffect, useState } from "react";

export default function useIntersectionVideoPlayer({ video }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const videoElement = video.current;

    if (!videoElement || !("IntersectionObserver" in window)) {
      return;
    }

    const rootElement = videoElement.closest("main");
    const visibilityThreshold = 0.6;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisibleEnough =
            entry.isIntersecting && entry.intersectionRatio >= visibilityThreshold;

          if (isVisibleEnough) {
            void videoElement.play().catch(() => {});
          } else {
            videoElement.pause();
          }
          setPlaying(!videoElement.paused);
        });
      },
      {
        root: rootElement,
        rootMargin: "0px",
        threshold: [0, visibilityThreshold, 1],
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
      observer.disconnect();
      videoElement.pause();
      setPlaying(false);
    };
  }, [video]);

  const handlePlay = useCallback(() => {
    const videoElement = video.current;
    if (!videoElement) return;

    if (videoElement.paused) {
      void videoElement.play().catch(() => {});
      setPlaying(true);
      return;
    }

    videoElement.pause();
    setPlaying(false);
  }, [video]);

  return { handlePlay, playing };
}
