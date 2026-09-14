import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { PropertyVisual } from "@/components/property-visual";
import type { Property } from "@/lib/properties";

export function PropertyCard({ property, compact = false }: { property: Property; compact?: boolean }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg focus-within:border-accent">
      <div className="overflow-hidden">
        <PropertyVisual label={property.gallery[0]?.label ?? "Foto do imóvel"} className="transition-transform duration-500 group-hover:scale-[1.025]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
          <span>{property.purpose} · {property.type}</span>
          {property.demonstrative ? <span>Conteúdo demonstrativo</span> : null}
        </div>
        <h3 className="mt-4 text-2xl leading-tight">{property.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 shrink-0" aria-hidden="true" />{property.location}</p>
        {property.price ? <p className="mt-4 font-display text-2xl">{property.price}</p> : null}
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{property.summary}</p>
        <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
          <Button asChild variant="editorial" className="flex-1">
            <Link to="/imoveis/$slug" params={{ slug: property.slug }} preload="intent">{compact ? "Ver detalhes" : "Ver imóvel"}<ArrowRight aria-hidden="true" /></Link>
          </Button>
          {!compact ? <WhatsAppLink message={property.whatsappMessage} size="default" className="flex-1">Tenho interesse</WhatsAppLink> : null}
        </div>
      </div>
    </article>
  );
}