import { useState } from "react";
import { Play } from "lucide-react";
import { categoryLabels, type Project } from "@/config/portfolio";
import { getYouTubeId, getYouTubeThumbnail } from "@/lib/youtube";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const id = getYouTubeId(project.youtubeVideoId);
  const [failed, setFailed] = useState(false);
  const src = project.customThumbnail || (id ? getYouTubeThumbnail(id) : "");

  return (
    <button
      onClick={() => onOpen(project)}
      className="group block w-full text-left"
      aria-label={`Play ${project.title}`}
    >
      <div className={`relative ${project.aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video"} overflow-hidden rounded-md border border-border bg-surface shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/70`}>
        {src && !failed ? (
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
        <span className="absolute left-2 top-2 grid h-5 w-7 place-items-center rounded bg-youtube">
          <Play className="h-3 w-3 fill-current" />
        </span>
        <span className="absolute bottom-2 left-3 max-w-[70%] text-lg font-extrabold uppercase leading-tight tracking-wide">
          {project.title}
        </span>
        <span className="absolute bottom-2 right-2 rounded bg-scrim/80 px-1.5 py-0.5 text-[11px] font-semibold">
          {project.duration}
        </span>
        <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-foreground/80 bg-scrim/50">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </span>
      </div>
      <span className="mt-2.5 inline-block rounded-full border border-primary/60 bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
        {categoryLabels[project.category]}
      </span>
      <p className="mt-1.5 truncate text-sm font-medium">{project.projectType}</p>
      {!id && <p className="text-xs text-muted-foreground">Video coming soon</p>}
    </button>
  );
}
