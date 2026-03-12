export type FriendSuggestion = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFollowers: number;
};

export type FriendActivity = {
  id: string;
  username: string;
  avatar: string;
  type: "followedYou" | "likedPost" | "sentInvite";
  timeAgo: string;
};

export type InboxNotification = {
  id: string;
  avatar: string;
  title: string;
  subtitle: string;
  timeAgo: string;
  category: "all" | "mentions" | "comments";
  unread: boolean;
};

export type ProfileStats = {
  following: string;
  followers: string;
  likes: string;
};

export type ProfileAnalytics = {
  profileViews: string;
  postViews: string;
  likesThisWeek: string;
};

export type ProfileVideo = {
  id: string;
  cover: string;
  views: string;
};
