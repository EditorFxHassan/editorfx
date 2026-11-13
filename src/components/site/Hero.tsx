import { ArrowRight, Play } from "lucide-react";
import { brand } from "@/config/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative -mb-24 overflow-hidden bg-black scroll-mt-20">
      {/* Background image: same column as the showreel (max-w-7xl + px-5). The wrapper is clipped and faded
          to black at both edges; the image is shifted right on desktop so the workstation clears the headline. */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl px-5">
        <div className="hero-image-fade relative h-full w-full overflow-hidden">
          <img
            src={brand.heroImage}
            alt=""
            width={1983}
            height={793}
            className="h-full w-full object-cover object-[68%_center] opacity-45 lg:translate-x-[8%] lg:object-left lg:opacity-100 xl:translate-x-[13%]"
          />
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 hero-scrim" />

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-5 pb-36 pt-14 sm:pt-20">
        <div className="max-w-xl fade-up">
          <p className="eyebrow text-foreground/80">
            Hi, I'm {brand.person}
          </p>

          <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl">
            Ideas to
            <br />
            Visual <span className="text-primary">Stories</span>
          </h1>

          <p className="mt-4 text-lg">{brand.title}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#showreel"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-deep hover:text-foreground"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Showreel
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary/70 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-primary/10"
            >
              Let's work together
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}