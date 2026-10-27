/**
 * ============================================================
 *  EDITORFX PORTFOLIO CONFIGURATION — edit your content here.
 * ============================================================
 *
 *  - youtubeVideoId accepts a plain ID ("dQw4w9WgXcQ") OR a full link
 *    (youtube.com/watch?v=..., youtu.be/..., youtube.com/shorts/...).
 *  - Leave youtubeVideoId empty ("") and the card shows "Video coming soon".
 *  - customThumbnail is optional. If empty, the YouTube thumbnail is used.
 *  - To use your own images, put them in src/assets and import them below,
 *    or paste a full https:// image URL.
 */
import heroImage from "@/assets/hero.jpg";
import reelCar from "@/assets/reel-car.jpg";
import reelLight from "@/assets/reel-light.jpg";
import reelNz from "@/assets/reel-nz.jpg";
import reelFuture from "@/assets/reel-future.jpg";
import reelKl from "@/assets/reel-kl.jpg";
import colMotion from "@/assets/col-motion.jpg";
import colSocial from "@/assets/col-social.jpg";

export type Category = "editing" | "ai-generated" | "ai-motion";
export type CollectionId = "commercial" | "ai" | "motion" | "documentary" | "social";

export interface Project {
  id: string;
  title: string;
  youtubeVideoId: string;
  customThumbnail?: string;
  category: Category;
  projectType: string;
  duration: string;
  description: string;
  featured: boolean;
  collection: CollectionId;
}

/* ---------- BRAND & PROFILE ---------- */
export const brand = {
  name: "EditorFX",
  person: "Hassan Howlader",
  title: "Video Editor & AI Video Producer",
  tagline: "Your work. Your story. Your brand.",
  /** Replace with your own photo URL or imported image. Empty = initials placeholder. */
  profileImage: "",
  heroImage,
};

/* ---------- SHOWREEL ---------- */
export const showreel = {
  /** Paste your showreel YouTube ID or link here. */
  youtubeVideoId: "",
  thumbnail: heroImage,
  title: "Showreel",
  label: "Video Editing / AI Video Production",
};

/* ---------- CONTACT & SOCIAL ---------- */
export const contact = {
  email: "editorfx.hassan@gmail.com",
  /** International format without + or spaces, e.g. "8801XXXXXXXXX". Empty = hidden. */
  whatsapp: "",
};

/** Add your profile URLs. Empty links are not shown. */
export const socials: { label: string; url: string }[] = [
  { label: "YouTube", url: "" },
  { label: "Instagram", url: "" },
  { label: "TikTok", url: "" },
  { label: "LinkedIn", url: "" },
  { label: "X", url: "" },
];

/* ---------- CATEGORY LABELS ---------- */
export const categoryLabels: Record<Category, string> = {
  editing: "Video Editing",
  "ai-generated": "AI Generated",
  "ai-motion": "AI + Motion",
};

/* ---------- COLLECTIONS ---------- */
export const collections: { id: CollectionId; title: string; description: string; thumbnail: string; isAI?: boolean }[] = [
  { id: "commercial", title: "Commercial & Promotional Videos", description: "Brand ads, product promos, business videos and marketing content.", thumbnail: reelCar },
  { id: "ai", title: "AI Video Production", description: "AI-generated videos, cinematic visuals, and creative AI storytelling.", thumbnail: reelFuture, isAI: true },
  { id: "motion", title: "Motion Graphics", description: "After Effects animations, visual effects and motion design.", thumbnail: colMotion },
  { id: "documentary", title: "Documentary & Storytelling", description: "Narrative edits, cinematic sequences and real-life stories.", thumbnail: heroImage },
  { id: "social", title: "Social Media Reels", description: "Short-form content, vertical videos and engaging reels for social media.", thumbnail: colSocial },
];

/* ---------- PROJECTS (placeholder examples — replace with your own) ---------- */
export const projects: Project[] = [
  { id: "dream-drive", title: "Dream Drive", youtubeVideoId: "", customThumbnail: reelCar, category: "editing", projectType: "Car Commercial | Brand Promo", duration: "1:02", description: "Placeholder commercial edit.", featured: true, collection: "commercial" },
  { id: "last-light", title: "The Last Light", youtubeVideoId: "", customThumbnail: reelLight, category: "ai-generated", projectType: "Cinematic AI Short Film", duration: "0:48", description: "Placeholder AI short film.", featured: true, collection: "ai" },
  { id: "new-zealand", title: "New Zealand", youtubeVideoId: "", customThumbnail: reelNz, category: "editing", projectType: "Travel Promo", duration: "0:37", description: "Placeholder travel promo.", featured: true, collection: "documentary" },
  { id: "think-bigger", title: "Think Bigger", youtubeVideoId: "", customThumbnail: reelFuture, category: "ai-motion", projectType: "AI Brand Film", duration: "0:52", description: "Placeholder AI brand film.", featured: true, collection: "ai" },
  { id: "kuala-lumpur", title: "Kuala Lumpur", youtubeVideoId: "", customThumbnail: reelKl, category: "editing", projectType: "Travel Vlog", duration: "0:41", description: "Placeholder travel vlog.", featured: true, collection: "social" },
  { id: "motion-pack", title: "Kinetic Lines", youtubeVideoId: "", customThumbnail: colMotion, category: "ai-motion", projectType: "Motion Design", duration: "0:30", description: "Placeholder motion piece.", featured: false, collection: "motion" },
];
