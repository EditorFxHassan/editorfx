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
import studioHero from "@/assets/studio-hero.png.asset.json";
import reelCar from "@/assets/reel-car.jpg";
import reelLight from "@/assets/reel-light.jpg";
import reelNz from "@/assets/reel-nz.jpg";
import reelFuture from "@/assets/reel-future.jpg";
import reelKl from "@/assets/reel-kl.jpg";
import colMotion from "@/assets/col-motion.jpg";
import colSocial from "@/assets/col-social.jpg";

export type Category = "editing" | "ai-generated" | "ai-motion" | "motion-design";
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
  /** Display shape for the video player and card. Shorts use portrait (9:16). */
  aspectRatio?: "portrait" | "landscape";
}

/* ---------- BRAND & PROFILE ---------- */
export const brand = {
  name: "EditorFX",
  person: "Hassan Howlader",
  title: "Video Editor & AI Video Producer",
  tagline: "Your work. Your story. Your brand.",
  /** Replace with your own photo URL or imported image. Empty = initials placeholder. */
  profileImage: "/profile.png",
  /** Hero background image. */
  heroImage: studioHero.url,
};

/* ---------- SHOWREEL ---------- */
export const showreel = {
  /** Paste your showreel YouTube ID or link here. */
  youtubeVideoId: "zgcljZ5mODo",
  thumbnail: "https://img.youtube.com/vi/zgcljZ5mODo/hqdefault.jpg",
  title: "Showreel",
  label: "Video Editing / AI Video Production",
};

/* ---------- CONTACT & SOCIAL ---------- */
export const contact = {
  email: "editorfx.hassan@gmail.com",
  /** International format without + or spaces, e.g. "8801XXXXXXXXX". Empty = hidden. */
  whatsapp: "8801616896868",
  /** Messenger profile link. */
  messenger: "https://m.me/EditorFx.Hassan",
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
  "motion-design": "Motion Design",
};

/* ---------- COLLECTIONS ---------- */
export const collections: { id: CollectionId; title: string; description: string; thumbnail: string; isAI?: boolean }[] = [
  { id: "commercial", title: "Commercial & Promotional Videos", description: "Brand ads, product promos, business videos and marketing content.", thumbnail: reelCar },
  { id: "ai", title: "AI Video Production", description: "AI-generated videos, cinematic visuals, and creative AI storytelling.", thumbnail: reelFuture, isAI: true },
  { id: "motion", title: "Motion Graphics", description: "After Effects animations, visual effects and motion design.", thumbnail: colMotion },
  { id: "documentary", title: "Documentary & Storytelling", description: "Narrative edits, cinematic sequences and real-life stories.", thumbnail: heroImage },
  { id: "social", title: "Social Media Reels", description: "Short-form content, vertical videos and engaging reels for social media.", thumbnail: colSocial },
];

/* ---------- PROJECTS ---------- */
export const projects: Project[] = [
  {
    id: "product-promo-01",
    title: "Product Promo 01",
    youtubeVideoId: "6aBZ9MBF1mg",
    category: "editing",
    projectType: "Product Promotional Video",
    duration: "Shorts",
    description: "Product promotional video edited by EditorFX.",
    featured: true,
    collection: "commercial",
    aspectRatio: "portrait",
  },
  {
    id: "ai-generated-01",
    title: "AI Generated 01",
    youtubeVideoId: "b6IesYyp3k0",
    category: "ai-generated",
    projectType: "AI-Generated Video",
    duration: "Shorts",
    description: "AI-generated promotional video by EditorFX.",
    featured: true,
    collection: "ai",
    aspectRatio: "portrait",
  },
  {
    id: "europe-study-abroad",
    title: "Europe Study Abroad",
    youtubeVideoId: "GbFZiU7s0eU",
    category: "editing",
    projectType: "Europe Study Abroad Promo",
    duration: "Shorts",
    description: "Europe Study Abroad Promo | Video Editing Showcase",
    featured: false,
    collection: "social",
    aspectRatio: "portrait",
  },
  {
    id: "book-promo",
    title: "Book Promo",
    youtubeVideoId: "OGri0DIw_xo",
    category: "editing",
    projectType: "Book Promo Video Editing Showcase",
    duration: "Shorts",
    description: "Book Promo Video Editing Showcase",
    featured: false,
    collection: "commercial",
    aspectRatio: "portrait",
  },
  {
    id: "defense-explained",
    title: "Defense Explained",
    youtubeVideoId: "oC_EGE57XKk",
    category: "editing",
    projectType: "Israel's Multi-Layer Defense Explained",
    duration: "Shorts",
    description: "Israel's Multi-Layer Defense Explained",
    featured: false,
    collection: "documentary",
    aspectRatio: "portrait",
  },
];
