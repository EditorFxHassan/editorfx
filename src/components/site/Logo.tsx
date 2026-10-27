import { Sparkles } from "lucide-react";

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className="block">
      <span className="flex items-center gap-2">
        <span className={`${small ? "text-xl" : "text-2xl sm:text-3xl"} font-extrabold tracking-tight`}>
          Editor<span className="text-primary">FX</span>
        </span>
        <span className="inline-flex items-center gap-0.5 rounded border border-primary/70 px-1.5 py-0.5 text-[10px] font-bold text-primary">
          <Sparkles className="h-2.5 w-2.5" /> AI
        </span>
      </span>
      <span className="eyebrow mt-0.5 block truncate !text-[9px] !tracking-[0.2em] text-muted-foreground">
        Video Editor &amp; AI Video Producer
      </span>
    </span>
  );
}
