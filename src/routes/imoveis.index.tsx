import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/imoveis/")({
  head: () => ({
    meta: [
      { title: "Imóveis selecionados | Natalia Heiderich" },
      { name: "description", content: "Conheça os imóveis selecionados por Natalia Heiderich e filtre por finalidade, tipo e localização." },
      { property: "og:title", content: "Imóveis selecionados | Natalia Heiderich" },
      { property: "og:description", content: "Uma seleção imobiliária apresentada com clareza e informações responsáveis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertiesPage,
});

const all = "Todos";

function PropertiesPage() {
  const [purpose, setPurpose] = useState(all);
  const [type, setType] = useState(all);
  const [location, setLocation] = useState(all);
  const [price, setPrice] = useState(all);
  const [feature, setFeature] = useState(all);

  const filtered = useMemo(() => properties.filter((property) => {
    const matchesPrice = price === all || (price === "Com valor informado" ? Boolean(property.numericPrice) : !property.numericPrice);
    const matchesFeature = feature === all || property.features.some((item) => item.toLowerCase().includes("confirmar"));
    return (purpose === all || property.purpose === purpose)
      && (type === all || property.type === type)
      && (location === all || property.location === location)
      && matchesPrice
      && matchesFeature;
  }), [feature, location, price, purpose, type]);

  const hasFilters = [purpose, type, location, price, feature].some((value) => value !== all);
  const reset = () => { setPurpose(all); setType(all); setLocation(all); setPrice(all); setFeature(all); };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-foreground px-5 pb-16 pt-36 text-primary-foreground sm:px-8 md:pb-20 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-warm">Carteira imobiliária</p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl">Imóveis <span className="italic text-warm">selecionados.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/70">Consulte a seleção disponível e converse diretamente com Natalia para confirmar informações, condições e disponibilidade.</p>
          </div>
        </section>

        <section className="border-b border-border bg-card px-5 py-8 sm:px-8 lg:px-12" aria-label="Filtros de imóveis">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <p className="flex min-w-0 items-center gap-2 text-sm font-semibold"><SlidersHorizontal className="size-4 shrink-0 text-accent" aria-hidden="true" />Filtrar imóveis</p>
              {hasFilters ? <Button variant="ghost" size="sm" onClick={reset}><X aria-hidden="true" />Limpar</Button> : null}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <Filter label="Finalidade" value={purpose} options={[all, "Venda", "Locação"]} onChange={setPurpose} />
              <Filter label="Tipo" value={type} options={[all, ...new Set(properties.map((item) => item.type))]} onChange={setType} />
              <Filter label="Localização" value={location} options={[all, ...new Set(properties.map((item) => item.location))]} onChange={setLocation} />
              <Filter label="Faixa de valor" value={price} options={[all, "Com valor informado", "Valor a confirmar"]} onChange={setPrice} />
              <Filter label="Características" value={feature} options={[all, "A confirmar"]} onChange={setFeature} />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><p className="min-w-0 text-sm text-muted-foreground" aria-live="polite">{filtered.length} {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}</p><p className="text-right text-xs font-semibold uppercase tracking-[0.1em] text-accent">Conteúdo demonstrativo</p></div>
            {filtered.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((property) => <PropertyCard key={property.slug} property={property} />)}</div> : <div className="border-y border-border py-20 text-center"><h2 className="text-3xl">Nenhum imóvel nesta combinação.</h2><p className="mt-3 text-sm text-muted-foreground">Ajuste os filtros ou volte a visualizar toda a seleção.</p><Button className="mt-7" onClick={reset}>Ver todos</Button></div>}
            <div className="mt-12 text-center"><Button asChild variant="editorial"><Link to="/">Voltar para a página inicial</Link></Button></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Filter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 min-w-0 border border-input bg-background px-3 text-sm font-normal normal-case text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/30">{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}