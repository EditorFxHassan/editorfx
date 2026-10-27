import { useState } from "react";
import { Clapperboard, Menu, Sparkles, X } from "lucide-react";
import { brand } from "@/config/portfolio";
import { Logo } from "./Logo";
import { Avatar } from "./Avatar";

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <a href="#home" className="min-w-0">
          <Logo />
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          <a href="#work" className="flex items-center gap-2 text-[11px] leading-tight text-muted-foreground hover:text-primary">
            <Clapperboard className="h-5 w-5 text-foreground" /> Video<br />Editing
          </a>
          <a href="#ai-production" className="flex items-center gap-2 text-[11px] leading-tight text-muted-foreground hover:text-primary">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-primary/60"><Sparkles className="h-4 w-4 text-primary" /></span> AI Video<br />Production
          </a>
          <span className="h-8 w-px bg-border" />
          <nav className="flex gap-8 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-foreground/85 transition-colors hover:text-primary">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="hidden h-12 w-12 sm:grid" />
          <button className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {[...links, { href: "#work", label: "Video Editing" }, { href: "#ai-production", label: "AI Video Production" }].map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base hover:text-primary">{l.label}</a>
          ))}
          <p className="sr-only">{brand.title}</p>
        </nav>
      )}
    </header>
  );
}
