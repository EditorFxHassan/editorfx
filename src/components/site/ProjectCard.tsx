import { useState } from "react";
import { Play } from "lucide-react";
import { categoryLabels, type Project } from "@/config/portfolio";
import { getYouTubeId, getYouTubeThumbnail } from "@/lib/youtube";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project, onOpen, thumbnailQuality = "hqdefault", compact = false }: { project: Project; onOpen: (p: Project) => void; thumbnailQuality?: "hqdefault" | "maxresdefault"; compact?: boolean }) {
  const id = getYouTubeId(project.youtubeVideoId);
  const [failed, setFailed] = useState(false);
  const src = project.customThumbnail || (id ? getYouTubeThumbnail(id, failed ? "hqdefault" : thumbnailQuality) : "");

  return (
    <Button
      variant="ghost"
      onClick={() => onOpen(project)}
      className={`group block h-auto w-full whitespace-normal rounded-none p-0 text-left hover:bg-transparent ${compact ? "min-w-0" : ""}`}
      aria-label={`Play ${project.title}`}
    >
      <div className={`relative ${project.aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video"} overflow-hidden rounded-md border border-border bg-surface shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/70`}>
        {src && (!failed || thumbnailQuality === "maxresdefault") ? (
          <img
            src={src}
            alt={project.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-secondary" />
        )}
        <div className="absolute inset-0 thumb-scrim" />
        <span className={`absolute left-2 top-2 grid h-5 w-7 place-items-center rounded bg-youtube ${compact ? "max-sm:left-1 max-sm:top-1 max-sm:h-3 max-sm:w-4" : ""}`}>
          <Play className={`h-3 w-3 fill-current ${compact ? "max-sm:h-2 max-sm:w-2" : ""}`} />
        </span>
        <span className={`absolute bottom-2 left-3 max-w-[70%] text-lg font-extrabold uppercase leading-tight tracking-wide ${compact ? "max-sm:hidden" : ""}`}>
          {project.title}
        </span>
        <span className={`absolute bottom-2 right-2 rounded bg-scrim/80 px-1.5 py-0.5 text-[11px] font-semibold ${compact ? "max-sm:hidden" : ""}`}>
          {project.duration}
        </span>
        <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-foreground/80 bg-scrim/50">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </span>
      </div>
      <span className={`mt-2.5 inline-block rounded-full border border-primary/60 bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary ${compact ? "max-sm:hidden" : ""}`}>
        {categoryLabels[project.category]}
      </span>
      <p className={`mt-1.5 truncate text-sm font-medium ${compact ? "max-sm:mt-1 max-sm:line-clamp-2 max-sm:whitespace-normal max-sm:text-[9px] max-sm:leading-tight" : ""}`}>{project.projectType}</p>
      {!id && <p className="text-xs text-muted-foreground">Video coming soon</p>}
    </Button>
  );
}
