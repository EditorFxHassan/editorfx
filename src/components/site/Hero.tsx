import { ArrowRight, Play } from "lucide-react";
import { brand } from "@/config/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative -mb-24 overflow-hidden scroll-mt-20">
      <img src={brand.heroImage} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-right" />
      <div className="absolute inset-0 hero-scrim" />
      <div className="relative mx-auto max-w-7xl px-5 pb-36 pt-14 sm:pt-20">
        <div className="max-w-xl fade-up">
          <p className="eyebrow text-foreground/80">Hi, I'm {brand.person}</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl">
            Ideas to<br />Visual <span className="text-primary">Stories</span>
          </h1>
          <p className="mt-4 text-lg">{brand.title}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#showreel" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-deep hover:text-foreground">
              <Play className="h-4 w-4 fill-current" /> Watch Showreel
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-primary/70 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-primary/10">
              Let's work together <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="absolute right-8 top-1/3 hidden rotate-[-8deg] text-right font-script text-3xl leading-tight text-foreground/80 lg:block">
          Real Edits.<br />AI Magic.<br />Your Story.
        </p>
      </div>
    </section>
  );
}
