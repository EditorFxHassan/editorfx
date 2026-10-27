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
          <button onClick={() => id && setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label={id ? "Play showreel" : "Showreel coming soon"}>
            <img src={showreel.thumbnail} alt="Showreel cover" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-scrim/45" />
            <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-5 sm:top-5">
              <span className="grid h-5 w-7 place-items-center rounded bg-youtube"><Play className="h-3 w-3 fill-current" /></span>
              <span className="text-sm font-semibold">{showreel.title} {new Date().getFullYear()}</span>
              <span className="hidden rounded-full border border-primary/70 px-2 py-0.5 text-[10px] font-bold uppercase text-primary sm:inline">Video Editing + AI</span>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-foreground bg-scrim/40 transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8" />
              </span>
              <span className="text-lg font-medium uppercase tracking-[0.5em] sm:text-3xl">{showreel.title}</span>
              <span className="eyebrow text-[9px] text-foreground/80 sm:text-xs">{showreel.label}</span>
              {!id && <span className="rounded-full bg-scrim/70 px-3 py-1 text-xs text-muted-foreground">Showreel coming soon</span>}
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
