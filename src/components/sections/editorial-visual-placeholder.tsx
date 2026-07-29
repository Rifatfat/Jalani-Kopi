import { cn } from "@/lib/utils";

interface EditorialVisualPlaceholderProps {
  className?: string;
  glowClassName?: string;
}

export function EditorialVisualPlaceholder({
  className,
  glowClassName,
}: EditorialVisualPlaceholderProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-[linear-gradient(145deg,rgba(244,223,189,0.08),rgba(21,18,15,0.42)_38%,rgba(9,8,6,0.9)),radial-gradient(circle_at_32%_18%,rgba(244,223,189,0.16),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(196,122,55,0.18),transparent_30%)]",
        className,
      )}
    >
      {/* Future product image goes here */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/18 blur-3xl transition duration-700 group-hover:scale-110 group-hover:bg-primary/24",
          glowClassName,
        )}
      />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-black/30 blur-2xl" />
      <div className="cinematic-grain absolute inset-0 opacity-[0.12] mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,6,0.08),rgba(9,8,6,0.34)_42%,rgba(9,8,6,0.82))]" />
    </div>
  );
}
