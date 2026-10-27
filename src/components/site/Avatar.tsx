import { brand } from "@/config/portfolio";

export function Avatar({ className = "" }: { className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center overflow-hidden rounded-full border-2 border-primary/70 bg-secondary ${className}`}>
      {brand.profileImage ? (
        <img src={brand.profileImage} alt={brand.person} className="h-full w-full object-cover" />
      ) : (
        <span className="font-bold text-primary" aria-label={brand.person}>HH</span>
      )}
    </span>
  );
}
