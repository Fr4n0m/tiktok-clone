import {
  FriendActivity,
  FriendSuggestion,
  InboxNotification,
  ProfileAnalytics,
  ProfileStats,
  ProfileVideo,
} from "../types/social";
import { UI_TEXT } from "../content/uiText";
import devcrateCover from "../assets/projects/devcrate-1.webp";
import gmMicrocementosCover from "../assets/projects/gm-microcementos-2.webp";
import paint95Cover from "../assets/projects/paint-95-2.webp";
import cejCover from "../assets/projects/cej-10.webp";

export const MOCK_FRIEND_SUGGESTIONS: FriendSuggestion[] = [
  {
    id: "friend-1",
    name: "Nora Blaze",
    username: "norablaze",
    avatar: "https://i.pravatar.cc/150?img=5",
    mutualFollowers: 14,
  },
  {
    id: "friend-2",
    name: "Leo Vargas",
    username: "leovrg",
    avatar: "https://i.pravatar.cc/150?img=12",
    mutualFollowers: 9,
  },
  {
    id: "friend-3",
    name: "Mia Carter",
    username: "mia.motion",
    avatar: "https://i.pravatar.cc/150?img=22",
    mutualFollowers: 21,
  },
];

export const MOCK_FRIEND_ACTIVITY: FriendActivity[] = [
  {
    id: "activity-1",
    username: "alexstream",
    avatar: "https://i.pravatar.cc/150?img=16",
    type: "followedYou",
    timeAgo: "2m",
  },
  {
    id: "activity-2",
    username: "zoecreates",
    avatar: "https://i.pravatar.cc/150?img=11",
    type: "likedPost",
    timeAgo: "15m",
  },
  {
    id: "activity-3",
    username: "frankbeats",
    avatar: "https://i.pravatar.cc/150?img=33",
    type: "sentInvite",
    timeAgo: "1h",
  },
];

export const MOCK_INBOX_NOTIFICATIONS: InboxNotification[] = [
  {
    id: "inbox-1",
    avatar: "https://i.pravatar.cc/150?img=45",
    title: "@norablaze mentioned you",
    subtitle: "Check this transition idea for your next post.",
    timeAgo: "3m",
    category: "mentions",
    unread: true,
  },
  {
    id: "inbox-2",
    avatar: "https://i.pravatar.cc/150?img=18",
    title: "@mia.motion commented",
    subtitle: "This edit is fire 🔥",
    timeAgo: "18m",
    category: "comments",
    unread: true,
  },
  {
    id: "inbox-3",
    avatar: "https://i.pravatar.cc/150?img=29",
    title: "Weekly account update",
    subtitle: "Your profile gained +124 followers in the last 7 days.",
    timeAgo: "2h",
    category: "all",
    unread: false,
  },
];

export const MOCK_PROFILE = {
  name: "Fran",
  username: "fr4n0m",
  avatar: "https://avatars.githubusercontent.com/u/138864214?v=4",
  bio: "Frontend engineer building product-focused web experiences.",
};

export const MOCK_PROFILE_STATS: ProfileStats = {
  following: "312",
  followers: "8.2K",
  likes: "47.6K",
};

export const MOCK_PROFILE_ANALYTICS: ProfileAnalytics = {
  profileViews: "1,842",
  postViews: "24,519",
  likesThisWeek: "1,126",
};

export const MOCK_PROFILE_VIDEOS: ProfileVideo[] = [
  {
    id: "video-1",
    cover: devcrateCover,
    views: "12.4K",
  },
  {
    id: "video-2",
    cover: gmMicrocementosCover,
    views: "8.1K",
  },
  {
    id: "video-3",
    cover: paint95Cover,
    views: "4.9K",
  },
  {
    id: "video-4",
    cover: cejCover,
    views: "16.8K",
  },
];

export const FRIEND_ACTIVITY_LABELS: Record<FriendActivity["type"], string> = {
  followedYou: UI_TEXT.friendsPage.followedYou,
  likedPost: UI_TEXT.friendsPage.likedPost,
  sentInvite: UI_TEXT.friendsPage.sentInvite,
};
