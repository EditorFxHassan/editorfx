import { describe, expect, it } from "vitest";
import { featuredReels } from "./featured-reels";
import { getYouTubeEmbedUrl, getYouTubeId } from "../lib/youtube";

describe("Featured Reels selection", () => {
  it("contains exactly the five requested Shorts in order", () => {
    expect(featuredReels.map((reel) => reel.youtubeVideoId)).toEqual([
      "6aBZ9MBF1mg", "GbFZiU7s0eU", "b6IesYyp3k0", "oC_EGE57XKk", "OGri0DIw_xo",
    ]);
  });

  it("opens every selected Short in a portrait player with its own embed ID", () => {
    for (const reel of featuredReels) {
      expect(reel.aspectRatio).toBe("portrait");
      expect(getYouTubeEmbedUrl(getYouTubeId(reel.youtubeVideoId))).toContain(`/embed/${reel.youtubeVideoId}?`);
    }
  });
});