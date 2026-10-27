import { useEffect } from "react";
import { X, ExternalLink, Film } from "lucide-react";
import { getYouTubeEmbedUrl, getYouTubeId, getYouTubeWatchUrl } from "@/lib/youtube";

export interface ActiveVideo {
  title: string;
  youtubeVideoId: string;
}

export function VideoModal({ video, onClose }: { video: ActiveVideo | null; onClose: () => void }) {
  useEffect(() => {
    if (!video) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [video, onClose]);

  if (!video) return null;
  const id = getYouTubeId(video.youtubeVideoId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-scrim/90 p-3 backdrop-blur-sm animate-in fade-in sm:p-8"
      onClick={onClose}
    >
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="truncate text-sm font-semibold sm:text-base">{video.title}</h3>
          <button
            autoFocus
            onClick={onClose}
            aria-label="Close video"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg border border-primary/50 bg-surface">
          {id ? (
            <iframe
              className="h-full w-full"
              src={getYouTubeEmbedUrl(id)}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <Film className="h-10 w-10 text-primary" />
              <p className="text-lg font-semibold">Video coming soon</p>
              <p className="max-w-sm text-sm text-muted-foreground">This project hasn't been linked to a YouTube video yet.</p>
            </div>
          )}
        </div>
        {id && (
          <a
            href={getYouTubeWatchUrl(id)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
          >
            Video not playing? Watch on YouTube <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
