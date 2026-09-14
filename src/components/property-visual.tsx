import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PropertyVisual({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("relative grid aspect-[4/3] w-full place-items-center overflow-hidden bg-secondary", className)} role="img" aria-label={`${label}. Espaço reservado para foto real.`}>
      <div className="absolute inset-4 border border-foreground/10" />
      <div className="relative flex max-w-52 flex-col items-center gap-3 px-5 text-center text-muted-foreground">
        <ImageIcon className="size-6" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.12em]">{label}</span>
        <span className="text-xs">Foto real a inserir</span>
      </div>
    </div>
  );
}