import { ArrowRight, Play } from "lucide-react";
import { brand } from "@/config/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative -mb-24 overflow-hidden bg-black scroll-mt-20">
      {/* Background image: same column as the showreel (max-w-7xl + px-5). The wrapper is clipped and faded
          to black at both edges; the image is shifted right on desktop so the workstation clears the headline. */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl px-5 max-sm:bottom-28 max-sm:top-auto">
        <div className="hero-image-fade relative h-full w-full overflow-hidden max-sm:aspect-[1983/793] max-sm:h-auto">
          <img
            src={brand.heroImage}
            alt=""
            width={1983}
            height={793}
            className="h-full w-full object-cover object-[68%_center] opacity-45 max-sm:opacity-100 lg:translate-x-[8%] lg:object-left lg:opacity-100 xl:translate-x-[13%]"
          />
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 hero-scrim max-sm:[background:none]!" />

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-5 pb-36 pt-14 max-sm:pb-[calc(8rem_+_(100vw_-_2.5rem)_/_2.5)] max-sm:pt-10 sm:pt-20">
        <div className="max-w-xl fade-up">
          <p className="eyebrow text-foreground/80 max-sm:text-[0.6rem]!">
            Hi, I'm {brand.person}
          </p>

          <h1 className="mt-4 text-[1.6rem] font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl">
            Ideas to
            <br />
            Visual <span className="text-primary">Stories</span>
          </h1>

          <p className="mt-4 text-lg max-sm:mt-3 max-sm:text-sm">{brand.title}</p>

          <div className="mt-8 flex flex-wrap gap-3 max-sm:mt-5 max-sm:gap-2">
            <a
              href="#showreel"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-deep hover:text-foreground max-sm:px-4 max-sm:py-2.5 max-sm:text-[10px]"
            >
              <Play className="h-4 w-4 fill-current max-sm:h-3 max-sm:w-3" />
              Watch Showreel
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary/70 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-primary/10 max-sm:px-4 max-sm:py-2.5 max-sm:text-[10px]"
            >
              Let's work together
              <ArrowRight className="h-4 w-4 max-sm:h-3 max-sm:w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}