import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyVisual } from "@/components/property-visual";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getPropertyBySlug } from "@/lib/properties";

export const Route = createFileRoute("/imoveis/$slug")({
  loader: ({ params }) => {
    const property = getPropertyBySlug(params.slug);
    if (!property) throw notFound();
    return property;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | Natalia Heiderich` : "Imóvel não encontrado | Natalia Heiderich" },
      { name: "description", content: loaderData ? `Conheça ${loaderData.title} e solicite informações atualizadas diretamente com Natalia.` : "O imóvel solicitado não foi encontrado." },
      { property: "og:title", content: loaderData ? `${loaderData.title} | Natalia Heiderich` : "Imóvel não encontrado" },
      { property: "og:description", content: "Detalhes do imóvel, galeria e contato direto para confirmar informações e disponibilidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertyDetailPage,
  notFoundComponent: PropertyNotFound,
});

function PropertyDetailPage() {
  const property = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStart = useRef<number | null>(null);
  const total = property.gallery.length;
  const move = (direction: number) => setActive((current) => (current + direction + total) % total);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox, total]);

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const touch = event.changedTouches.item(0);
    if (!touch) return;
    const delta = touch.clientX - touchStart.current;
    if (Math.abs(delta) > 45) move(delta > 0 ? -1 : 1);
    touchStart.current = null;
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pb-28">
        <section className="bg-foreground px-5 pb-10 pt-32 text-primary-foreground sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1240px]"><Button asChild variant="heroGhost" size="sm"><Link to="/imoveis"><ArrowLeft aria-hidden="true" />Todos os imóveis</Link></Button><div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-warm">{property.demonstrative ? "Conteúdo demonstrativo" : property.type}</p><h1 className="mt-4 text-5xl leading-tight sm:text-6xl">{property.title}</h1><p className="mt-4 text-primary-foreground/65">{property.location} · {property.purpose}</p></div>{property.price ? <p className="font-display text-3xl text-warm sm:text-4xl">{property.price}</p> : null}</div></div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="relative touch-pan-y" onTouchStart={(event) => { const touch = event.touches.item(0); touchStart.current = touch?.clientX ?? null; }} onTouchEnd={onTouchEnd}>
            <PropertyVisual label={property.gallery[active]?.label ?? "Foto do imóvel"} className="aspect-[4/3] max-h-[720px] md:aspect-[16/9]" />
            <Button variant="heroGhost" size="icon" className="absolute left-3 top-1/2 -translate-y-1/2" aria-label="Foto anterior" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></Button>
            <Button variant="heroGhost" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2" aria-label="Próxima foto" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></Button>
            <Button variant="heroGhost" size="icon" className="absolute right-3 top-3" aria-label="Ampliar foto" onClick={() => setLightbox(true)}><Expand aria-hidden="true" /></Button>
            <p className="absolute bottom-3 right-3 bg-hero-overlay px-3 py-2 text-xs text-hero-foreground">{active + 1} / {total}</p>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">{property.gallery.map((image, index) => <Button key={image.id} variant="ghost" onClick={() => setActive(index)} aria-label={`Mostrar ${image.label}`} aria-current={active === index ? "true" : undefined} className={`h-auto p-0 ${active === index ? "ring-2 ring-accent" : "opacity-65 hover:opacity-100"}`}><PropertyVisual label={image.label} className="aspect-[4/3]" /></Button>)}</div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Sobre o imóvel</p><h2 className="mt-4 text-4xl">Informações do imóvel</h2><p className="mt-6 text-base leading-8 text-muted-foreground">{property.description}</p><div className="mt-10"><h3 className="text-2xl">Diferenciais</h3><ul className="mt-5 border-t border-border">{property.features.map((feature) => <li key={feature} className="border-b border-border py-4 text-sm text-muted-foreground">{feature}</li>)}</ul></div><div className="mt-10"><h3 className="text-2xl">Informações adicionais</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Disponibilidade, condições comerciais e demais informações precisam ser confirmadas diretamente com Natalia.</p></div></div>
            <aside className="h-fit border border-border bg-card p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Ficha do imóvel</p><dl className="mt-5">{[{ label: "Referência", value: property.reference }, { label: "Finalidade", value: property.purpose }, { label: "Localização", value: property.location }, { label: "Valor", value: property.price ?? "Informação a confirmar." }, ...property.details].map((detail) => <div key={detail.label} className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-4 border-b border-border py-4 text-sm"><dt className="min-w-0 text-muted-foreground">{detail.label}</dt><dd className="min-w-0 text-right font-semibold">{detail.value}</dd></div>)}</dl><WhatsAppLink message={property.whatsappMessage} className="mt-7 w-full">Tenho interesse</WhatsAppLink></aside>
          </div>
        </section>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden"><WhatsAppLink message={property.whatsappMessage} className="w-full">Tenho interesse neste imóvel</WhatsAppLink></div>
      <SiteFooter />
      {lightbox ? <div className="fixed inset-0 z-[70] grid place-items-center bg-foreground p-4" role="dialog" aria-modal="true" aria-label="Galeria ampliada"><PropertyVisual label={property.gallery[active]?.label ?? "Foto do imóvel"} className="max-h-[88vh] max-w-6xl" /><Button variant="heroGhost" size="icon" className="absolute right-4 top-4" aria-label="Fechar imagem ampliada" onClick={() => setLightbox(false)} autoFocus><X aria-hidden="true" /></Button><Button variant="heroGhost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2" aria-label="Foto anterior" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></Button><Button variant="heroGhost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2" aria-label="Próxima foto" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></Button></div> : null}
    </div>
  );
}

function PropertyNotFound() {
  return <div className="grid min-h-screen place-items-center bg-background px-5 text-center"><div><h1 className="text-5xl">Imóvel não encontrado.</h1><p className="mt-4 text-muted-foreground">O anúncio pode ter sido atualizado ou removido.</p><Button asChild className="mt-7"><Link to="/imoveis">Ver imóveis</Link></Button></div></div>;
}