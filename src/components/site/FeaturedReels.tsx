import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { type Category, type Project } from "@/config/portfolio";
import { featuredReels } from "@/config/featured-reels";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "editing", label: "Editing" },
  { id: "ai-generated", label: "AI Generated" },
  { id: "ai-motion", label: "AI + Motion" },
  { id: "motion-design", label: "Motion Design" },
];

export function FeaturedReels({ onOpen }: { onOpen: (p: Project) => void }) {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(
    () => featuredReels.filter((p) => active === "all" || p.category === active),
    [active],
  );

  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold sm:text-3xl">Featured Reels</h2>
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <Button
              variant="ghost"
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              onClick={() => setActive(f.id)}
              className={`h-auto rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:bg-transparent ${active === f.id ? "bg-primary text-primary-foreground hover:bg-primary" : "text-foreground/80 hover:text-primary"}`}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <a href="#collections" className="hidden items-center gap-1.5 text-sm text-primary md:inline-flex">View All <ArrowRight className="h-4 w-4" /></a>
      </div>
      {list.length ? (
        <div key={active} className="mt-6 grid grid-cols-1 gap-5 fade-up min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {list.map((p) => <ProjectCard key={p.id} project={p} onOpen={onOpen} thumbnailQuality="maxresdefault" />)}
        </div>
      ) : (
        <p className="mt-6 rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">New projects in this category are on the way.</p>
      )}
    </section>
  );
}
