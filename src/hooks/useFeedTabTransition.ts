const FEED_TAB_TRANSITION_KEY = "feed-tab-transition-direction";

export type FeedTabDirection = "from-left" | "from-right" | "none";

export const setFeedTabDirection = (direction: Exclude<FeedTabDirection, "none">): void => {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(FEED_TAB_TRANSITION_KEY, direction);
};

export const consumeFeedTabDirection = (): FeedTabDirection => {
  if (typeof window === "undefined") return "none";

  const value = window.sessionStorage.getItem(FEED_TAB_TRANSITION_KEY);
  window.sessionStorage.removeItem(FEED_TAB_TRANSITION_KEY);

  if (value === "from-left" || value === "from-right") {
    return value;
  }

  return "none";
};
