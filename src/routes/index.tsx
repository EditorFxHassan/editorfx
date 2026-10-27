import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ShowreelPlayer } from "@/components/site/ShowreelPlayer";
import { FeaturedReels } from "@/components/site/FeaturedReels";
import { Collections } from "@/components/site/Collections";
import { About, Contact, Footer, Services } from "@/components/site/InfoSections";
import { VideoModal, type ActiveVideo } from "@/components/site/VideoModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EditorFX | Video Editor & AI Video Producer" },
      { name: "description", content: "Explore cinematic video editing, AI video production, motion graphics, and promotional videos by Hassan Howlader." },
      { property: "og:title", content: "EditorFX | Video Editor & AI Video Producer" },
      { property: "og:description", content: "Explore cinematic video editing, AI video production, motion graphics, and promotional videos by Hassan Howlader." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [video, setVideo] = useState<ActiveVideo | null>(null);
  const close = useCallback(() => setVideo(null), []);
  const open = useCallback((p: ActiveVideo) => setVideo({ title: p.title, youtubeVideoId: p.youtubeVideoId, aspectRatio: p.aspectRatio }), []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ShowreelPlayer />
        <FeaturedReels onOpen={open} />
        <Collections onOpen={open} />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <VideoModal video={video} onClose={close} />
    </div>
  );
}
