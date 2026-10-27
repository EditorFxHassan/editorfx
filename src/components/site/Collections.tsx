import { useState } from "react";
import { Camera, ChevronDown, Clapperboard, Layers, Smartphone, Sparkles, type LucideIcon } from "lucide-react";
import { collections, projects, type CollectionId, type Project } from "@/config/portfolio";
import { ProjectCard } from "./ProjectCard";

const icons: Record<CollectionId, LucideIcon> = {
  commercial: Clapperboard,
  ai: Sparkles,
  motion: Layers,
  documentary: Camera,
  social: Smartphone,
};

export function Collections({ onOpen }: { onOpen: (p: Project) => void }) {
  const [open, setOpen] = useState<Set<CollectionId>>(new Set(["commercial"]));
  const toggle = (id: CollectionId) =>
    setOpen((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  return (
    <section id="collections" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-16">
      <h2 className="text-2xl font-bold sm:text-3xl">Collections</h2>
      <div className="mt-5 space-y-3">
        {collections.map((c) => {
          const Icon = icons[c.id];
          const isOpen = open.has(c.id);
          const items = projects.filter((p) => p.collection === c.id);
          return (
            <div key={c.id} id={c.isAI ? "ai-production" : undefined} className={`scroll-mt-24 overflow-hidden rounded-lg border bg-card/60 transition-colors ${isOpen ? "border-primary/60" : "border-border hover:border-primary/40"}`}>
              <button
                onClick={() => toggle(c.id)}
                aria-expanded={isOpen}
                aria-controls={`col-${c.id}`}
                className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 text-left sm:grid-cols-[10rem_auto_minmax(0,1fr)_auto] sm:gap-6"
              >
                <span className="relative hidden h-20 sm:block">
                  <img src={c.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover" />
                  {c.isAI && <span className="absolute left-2 top-2 rounded bg-scrim/80 px-1.5 text-[10px] font-bold">AI</span>}
                </span>
                <Icon className="ml-4 h-6 w-6 shrink-0 sm:ml-0" />
                <span className="min-w-0 py-4">
                  <span className="block font-medium">{c.title}</span>
                  <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">{c.description}</span>
                </span>
                <ChevronDown className={`mr-5 h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
              </button>
              <div id={`col-${c.id}`} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="border-t border-border p-5">
                    {items.length ? (
                      <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {items.map((p) => <ProjectCard key={p.id} project={p} onOpen={onOpen} />)}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">Projects coming soon.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
