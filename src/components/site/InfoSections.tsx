import { ArrowRight, Clapperboard, Facebook, Layers, Mail, Megaphone, MessageCircle, Smartphone, Sparkles } from "lucide-react";
import { brand, contact, socials } from "@/config/portfolio";
import { Avatar } from "./Avatar";
import { Logo } from "./Logo";

const services = [
  { icon: Clapperboard, title: "Video Editing", text: "Engaging edits crafted for storytelling, clarity, and impact." },
  { icon: Sparkles, title: "AI Video Production", text: "AI-powered visuals, cinematic sequences, and promotional content." },
  { icon: Layers, title: "Motion Graphics", text: "Dynamic typography, animation, and visual storytelling." },
  { icon: Megaphone, title: "Commercial Video Ads", text: "Promotional content designed to communicate a brand's message." },
  { icon: Smartphone, title: "Social Media Content", text: "Platform-ready vertical videos, reels, and short-form content." },
];

const liveSocials = socials.filter((s) => s.url);

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-20">
      <div className="grid items-center gap-10 rounded-xl border border-border bg-card/50 p-6 sm:p-10 md:grid-cols-[auto_1fr]">
        <Avatar className="h-36 w-36 text-3xl sm:h-44 sm:w-44" />
        <div>
          <p className="eyebrow text-primary">About</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase sm:text-3xl">The creative behind the edit</h2>
          <p className="mt-4 text-muted-foreground">I'm {brand.person}, a video editor and AI video producer focused on creating engaging visual content for brands, creators, and businesses.</p>
          <p className="mt-3 text-muted-foreground">From cinematic editing and motion graphics to AI-powered video production, I combine creative storytelling with modern production techniques to turn ideas into compelling visual experiences.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Video Editing", "AI Video", "Motion Graphics", "Commercials", "Social Reels"].map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Work with me <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-16">
      <h2 className="text-2xl font-bold sm:text-3xl">Services</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border border-border bg-card/50 p-5 transition-all hover:-translate-y-1 hover:border-primary/60">
            <s.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const contactButtonClass =
    "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-deep hover:text-foreground";

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-20">
      <div className="relative overflow-hidden rounded-xl border border-primary/50 bg-surface p-8 text-center frame-glow sm:p-14">
        <p className="eyebrow text-primary">Contact</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold uppercase sm:text-5xl">Let's create something <span className="text-primary">great.</span></h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">Have a project in mind? Let's turn your ideas into compelling visual content.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${contact.email}`} className={contactButtonClass}>
            <Mail className="h-4 w-4" /> Email me
          </a>
          {contact.whatsapp && (
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className={contactButtonClass}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          )}
          {contact.messenger && (
            <a href={contact.messenger} target="_blank" rel="noreferrer" className={contactButtonClass}>
              <Facebook className="h-4 w-4" /> Messenger
            </a>
          )}
        </div>
        <a href={`mailto:${contact.email}`} className="mt-5 inline-block text-sm text-muted-foreground hover:text-primary">{contact.email}</a>
        {liveSocials.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            {liveSocials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="hover:text-primary">{s.label}</a>)}
          </div>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-7xl px-5 pb-8">
      <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-3 md:items-center">
        <Logo small />
        <p className="rotate-[-4deg] font-script text-2xl text-muted-foreground md:text-center">Let's create something amazing.</p>
        <div className="space-y-2 text-sm md:text-right">
          <div className="flex gap-5 md:justify-end">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
            {liveSocials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="hover:text-primary">{s.label}</a>)}
          </div>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="h-4 w-4" />{contact.email}</a>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} EditorFX. All rights reserved.</span>
        <span className="eyebrow !text-[9px] text-primary">Edit / Create / Inspire</span>
      </div>
    </footer>
  );
}
