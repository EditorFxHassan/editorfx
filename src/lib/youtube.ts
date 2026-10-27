// Helpers for working with YouTube videos.

/** Extracts an 11-character video ID from a raw ID or common YouTube URL. Returns "" if none. */
export function getYouTubeId(input: string | undefined | null): string {
  if (!input) return "";
  const value = input.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  const patterns = [
    /[?&]v=([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/(?:shorts|embed|live)\/([\w-]{11})/,
  ];
  for (const p of patterns) {
    const m = value.match(p);
    if (m) return m[1];
  }
  return "";
}

/** Thumbnail URL for a video. hqdefault exists for every public video. */
export function getYouTubeThumbnail(id: string, quality: "hqdefault" | "maxresdefault" = "hqdefault") {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

export function getYouTubeEmbedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
}

export function getYouTubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}
