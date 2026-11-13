import { useState } from "react";
import { Play } from "lucide-react";
import { showreel } from "@/config/portfolio";
import { getYouTubeEmbedUrl, getYouTubeId } from "@/lib/youtube";

export function ShowreelPlayer() {
  const [playing, setPlaying] = useState(false);
  const id = getYouTubeId(showreel.youtubeVideoId);

  return (
    <section id="showreel" className="relative mx-auto max-w-7xl scroll-mt-24 px-5">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-primary/70 bg-surface frame-glow">
        {playing && id ? (
          <iframe className="h-full w-full" src={getYouTubeEmbedUrl(id)} title="EditorFX Showreel" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <button onClick={() => id && setPlaying(true)} className="group absolute inset-0 h-full w-full cursor-pointer" aria-label={id ? "Play showreel" : "Showreel coming soon"}>
            <img src={showreel.thumbnail} alt="Showreel cover" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-scrim/45" />
            <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-scrim/70 px-4 py-1.5 text-sm font-medium text-foreground sm:top-5 sm:text-base">This is a test</span>
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-scrim/40 transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
                <Play className="ml-0.5 h-4 w-4 fill-current sm:h-5 sm:w-5" />
              </span>
            </span>
            {!id && <span className="absolute bottom-3 right-3 rounded-full bg-scrim/70 px-3 py-1 text-xs text-muted-foreground sm:bottom-5 sm:right-5">Showreel coming soon</span>}
          </button>
        )}
      </div>
    </section>
  );
}
