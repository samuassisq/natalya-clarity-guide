export type PropertyPurpose = "Venda" | "Locação";

export type Property = {
  slug: string;
  title: string;
  reference: string;
  purpose: PropertyPurpose;
  type: string;
  location: string;
  price?: string;
  numericPrice?: number;
  summary: string;
  description: string;
  features: string[];
  details: Array<{ label: string; value: string }>;
  gallery: Array<{ id: string; label: string }>;
  whatsappMessage: string;
  demonstrative: boolean;
  featured: boolean;
};

const confirm = "Informação a confirmar.";

export const properties: Property[] = [
  {
    slug: "imovel-werner-plas",
    title: "Imóvel no Werner Plas",
    reference: confirm,
    purpose: "Venda",
    type: "Imóvel residencial",
    location: "Werner Plas",
    price: "R$ 8.000.000",
    numericPrice: 8000000,
    summary: "Informações e fotos reais serão adicionadas após confirmação.",
    description: confirm,
    features: [confirm],
    details: [
      { label: "Metragem", value: confirm },
      { label: "Quartos", value: confirm },
      { label: "Suítes", value: confirm },
      { label: "Banheiros", value: confirm },
      { label: "Vagas", value: confirm },
      { label: "Condomínio", value: confirm },
      { label: "IPTU", value: confirm },
      { label: "Endereço completo", value: confirm },
    ],
    gallery: [
      { id: "werner-1", label: "Foto principal do imóvel" },
      { id: "werner-2", label: "Foto de ambiente" },
      { id: "werner-3", label: "Foto de detalhe" },
      { id: "werner-4", label: "Foto da área externa" },
    ],
    whatsappMessage: "Olá, Natalia! Gostaria de receber mais informações sobre o imóvel no Werner Plas.",
    demonstrative: true,
    featured: true,
  },
  {
    slug: "imovel-demonstrativo-02",
    title: "Imóvel demonstrativo 02",
    reference: "Conteúdo demonstrativo",
    purpose: "Locação",
    type: "Apartamento",
    location: "Localização a confirmar",
    summary: "Estrutura preparada para receber as informações reais do imóvel.",
    description: confirm,
    features: ["Características a confirmar"],
    details: [
      { label: "Metragem", value: confirm },
      { label: "Quartos", value: confirm },
      { label: "Suítes", value: confirm },
      { label: "Banheiros", value: confirm },
      { label: "Vagas", value: confirm },
    ],
    gallery: [{ id: "demo-2-1", label: "Foto do imóvel" }, { id: "demo-2-2", label: "Foto de ambiente" }],
    whatsappMessage: "Olá, Natalia! Gostaria de receber mais informações sobre o imóvel demonstrativo 02.",
    demonstrative: true,
    featured: true,
  },
  {
    slug: "imovel-demonstrativo-03",
    title: "Imóvel demonstrativo 03",
    reference: "Conteúdo demonstrativo",
    purpose: "Venda",
    type: "Casa",
    location: "Localização a confirmar",
    summary: "Estrutura preparada para receber as informações reais do imóvel.",
    description: confirm,
    features: ["Características a confirmar"],
    details: [
      { label: "Metragem", value: confirm },
      { label: "Quartos", value: confirm },
      { label: "Suítes", value: confirm },
      { label: "Banheiros", value: confirm },
      { label: "Vagas", value: confirm },
    ],
    gallery: [{ id: "demo-3-1", label: "Foto do imóvel" }, { id: "demo-3-2", label: "Foto de ambiente" }],
    whatsappMessage: "Olá, Natalia! Gostaria de receber mais informações sobre o imóvel demonstrativo 03.",
    demonstrative: true,
    featured: true,
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}