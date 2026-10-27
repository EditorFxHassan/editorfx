import { describe, expect, it } from "vitest";
import { getYouTubeId } from "./youtube";

describe("getYouTubeId", () => {
  it("accepts a raw id", () => expect(getYouTubeId("dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ"));
  it("parses watch urls", () =>
    expect(getYouTubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3")).toBe("dQw4w9WgXcQ"));
  it("parses youtu.be urls", () => expect(getYouTubeId("https://youtu.be/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ"));
  it("parses shorts urls", () =>
    expect(getYouTubeId("https://youtube.com/shorts/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ"));
  it("returns empty for blank or invalid", () => {
    expect(getYouTubeId("")).toBe("");
    expect(getYouTubeId("not a video")).toBe("");
  });
});
