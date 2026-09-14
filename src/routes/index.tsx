import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Check, ChevronDown, MessageCircle } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import heroAsset from "@/assets/natalia-hero.png.asset.json";
import portraitAsset from "@/assets/natalia-editorial-pb.png.asset.json";
import courseAsset from "@/assets/natalia-editorial-livros.png.asset.json";
import consultingAsset from "@/assets/natalia-editorial-blazer.png.asset.json";
import mentoringAsset from "@/assets/natalia-editorial-corpo-inteiro.png.asset.json";
import emineLogoAsset from "@/assets/emine-logo-claro.png.asset.json";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { properties } from "@/lib/properties";
import { whatsappMessages } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natalia Heiderich | Mercado Imobiliário" },
      { name: "description", content: "Orientação imobiliária, consultorias e formação profissional com clareza, método e segurança." },
      { property: "og:title", content: "Natalia Heiderich | Mercado Imobiliário" },
      { property: "og:description", content: "Clareza para decidir. Segurança para avançar no mercado imobiliário." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://natalya-clarity-guide.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return <div id="inicio"><SiteHeader /><main>
    <section className="relative min-h-[720px] overflow-hidden bg-foreground text-hero-foreground md:min-h-[800px]">
      <img src={heroAsset.url} width={768} height={1019} alt="Natalia Heiderich em retrato profissional" className="absolute inset-0 size-full object-cover object-[58%_20%] md:object-[72%_20%]" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay via-hero-overlay/65 to-transparent" />
      <div className="relative mx-auto flex min-h-[720px] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:min-h-[800px] md:pb-20 lg:px-12"><div className="max-w-3xl editorial-reveal"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-warm">Mercado imobiliário · Consultoria · Formação</p><h1 className="text-[clamp(3rem,7vw,7.2rem)] leading-[0.94]">Natalia <span className="italic text-warm">Heiderich</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-hero-foreground/80">Clareza para decidir. Segurança para avançar.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><a href="#ajuda">Como posso ajudar <ArrowDown aria-hidden="true" /></a></Button><WhatsAppLink message={whatsappMessages.general} variant="gold">Falar com Natalia</WhatsAppLink></div></div></div>
    </section>

    <section className="border-b border-border py-16 md:py-24"><div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12"><SectionLabel>Uma atuação que organiza</SectionLabel><div><h2 className="max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">Conduzir é mais do que <span className="italic text-accent">intermediar.</span></h2><p className="mt-6 max-w-2xl leading-8 text-muted-foreground">Decisões imobiliárias envolvem patrimônio, documentos, pessoas e confiança. O caminho começa com clareza e segue com segurança.</p></div></div></section>

    <section id="ajuda" className="scroll-mt-20 bg-primary py-16 text-primary-foreground md:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"><div className="grid gap-6 lg:grid-cols-2"><div><SectionLabel light>Escolha seu caminho</SectionLabel><h2 className="mt-5 text-4xl sm:text-5xl">Como posso ajudar <span className="italic text-warm">você?</span></h2></div><p className="max-w-xl self-end leading-8 text-primary-foreground/65">Escolha o assunto mais próximo do seu momento para iniciar uma conversa objetiva.</p></div><div className="mt-10 grid border-t border-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">{intentions.map((item, index) => <IntentCard key={item.title} {...item} number={index + 1} />)}</div></div></section>

    <section id="sobre" className="scroll-mt-20 bg-card py-16 md:py-24"><div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12"><img src={portraitAsset.url} width={768} height={1137} loading="lazy" alt="Natalia Heiderich em retrato profissional em preto e branco" className="aspect-[4/5] w-full object-cover object-top" /><div><SectionLabel>Sobre Natalia</SectionLabel><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Uma carreira construída para <span className="italic text-accent">conduzir.</span></h2><p className="mt-6 leading-8 text-muted-foreground">Desde 2015 no mercado imobiliário, Natalia construiu sua trajetória unindo experiência, estudo, estratégia e uma convicção: cada atendimento merece preparo, clareza e presença.</p><Button asChild variant="editorial" className="mt-7"><a href="#atuacao">Conheça minha trajetória</a></Button></div></div></section>

    <section id="atuacao" className="scroll-mt-20 py-16 md:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"><SectionLabel>Áreas de atuação</SectionLabel><div className="mt-8 grid border-y border-border md:grid-cols-3">{areas.map(([number, title, text, message], index) => <article key={title} className={`py-8 md:px-8 md:py-10 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}><span className="text-xs font-semibold text-accent">{number}</span><h3 className="mt-8 text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><WhatsAppLink message={message} variant="link" size="sm" className="mt-4 h-auto px-0 normal-case tracking-normal">Conversar sobre esta área</WhatsAppLink></article>)}</div></div></section>

    <section id="imoveis" className="scroll-mt-20 bg-card py-16 md:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionLabel>Carteira imobiliária</SectionLabel><h2 className="mt-5 text-4xl sm:text-5xl">Imóveis em <span className="italic text-accent">destaque.</span></h2></div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Conteúdo demonstrativo</p></div><div className="mt-9 grid gap-6 md:grid-cols-3">{properties.filter((item) => item.featured).slice(0, 3).map((property) => <PropertyCard key={property.slug} property={property} compact />)}</div><div className="mt-9 text-center"><Button asChild><Link to="/imoveis">Ver todos os imóveis</Link></Button></div></div></section>

    <section id="consultorias" className="scroll-mt-20 py-16 md:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"><div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionLabel>Serviços e formação</SectionLabel><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Orientação para diferentes <span className="italic text-accent">momentos.</span></h2></div><div className="grid gap-4 sm:grid-cols-2">{services.map((service) => <article id={service.id} key={service.title} className="group border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"><h3 className="text-3xl">{service.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{service.text}</p><WhatsAppLink message={service.message} variant="editorial" size="default" className="mt-6">{service.action}</WhatsAppLink></article>)}</div></div></div></section>

    <section id="emine" className="scroll-mt-20 bg-foreground py-16 text-primary-foreground md:py-24"><div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12"><div className="bg-background p-6"><img src={emineLogoAsset.url} width={768} height={768} loading="lazy" alt="EMINÉ — Elevando o padrão imobiliário" className="mx-auto aspect-square w-full max-w-sm object-contain" /></div><div><SectionLabel light>Escola de desenvolvimento profissional</SectionLabel><h2 className="mt-5 text-5xl sm:text-6xl">EMINÉ</h2><p className="mt-2 text-sm uppercase tracking-[0.16em] text-warm">Elevando o padrão imobiliário.</p><blockquote className="mt-7 border-l border-warm pl-6 font-display text-2xl italic leading-relaxed">“Método não serve para engessar o corretor. Serve para dar direção.”</blockquote><WhatsAppLink message={whatsappMessages.career} variant="hero" className="mt-7">Conhecer a EMINÉ</WhatsAppLink></div></div></section>

    <section className="bg-secondary py-16 md:py-20"><div className="mx-auto max-w-[1240px] px-5 text-center sm:px-8 lg:px-12"><SectionLabel centered>Depoimentos</SectionLabel><h2 className="mx-auto mt-5 max-w-2xl text-4xl sm:text-5xl">Experiências de quem foi <span className="italic text-accent">atendido.</span></h2><div className="mx-auto mt-8 max-w-3xl border-y border-accent/30 py-9"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Placeholder para edição posterior</p><p className="mt-4 text-sm leading-7 text-muted-foreground">Os depoimentos reais serão inseridos após confirmação e autorização de uso. Nenhum relato foi criado para esta demonstração.</p></div></div></section>

    <section id="faq" className="scroll-mt-20 bg-card py-16 md:py-24"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12"><div><SectionLabel>Perguntas frequentes</SectionLabel><h2 className="mt-5 text-4xl sm:text-5xl">Antes da nossa <span className="italic text-accent">conversa.</span></h2></div><Accordion.Root type="single" collapsible className="border-t border-border">{faqs.map((faq, index) => <Accordion.Item key={faq.question} value={`faq-${index}`} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left font-display text-xl focus-visible:outline-2 focus-visible:outline-accent"><span>{faq.question}</span><ChevronDown className="size-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden text-sm leading-7 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="pb-6 pr-8">{faq.answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>

    <section id="contato" className="scroll-mt-20 bg-accent py-16 text-accent-foreground md:py-24"><div className="mx-auto max-w-4xl px-5 text-center sm:px-8"><MessageCircle className="mx-auto size-7" aria-hidden="true" /><h2 className="mt-5 text-4xl leading-tight sm:text-6xl">Toda decisão importante merece <span className="italic">clareza.</span></h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-accent-foreground/80">Conte o que você precisa e encontre o caminho de atendimento mais adequado.</p><WhatsAppLink message={whatsappMessages.general} variant="hero" className="mt-8">Falar com Natalia</WhatsAppLink></div></section>
  </main><SiteFooter /></div>;
}

function SectionLabel({ children, light = false, centered = false }: { children: React.ReactNode; light?: boolean; centered?: boolean }) { return <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${centered ? "justify-center" : ""} ${light ? "text-warm" : "text-accent"}`}><span className="h-px w-8 bg-current" />{children}</p>; }
function IntentCard({ number, title, message, href }: { number: number; title: string; message: string; href: string }) { return <article className="border-b border-primary-foreground/20 p-5 transition-colors hover:bg-primary-foreground/5 sm:border-r lg:min-h-48"><p className="text-xs text-warm">{String(number).padStart(2, "0")}</p><h3 className="mt-7 text-2xl leading-tight">{title}</h3><div className="mt-6 flex flex-wrap gap-4"><a href={href} className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground/65 transition-colors hover:text-primary-foreground">Ver área</a><WhatsAppLink message={message} variant="link" size="sm" className="h-auto p-0 text-warm normal-case tracking-normal">Conversar</WhatsAppLink></div></article>; }

const intentions = [
  { title: "Comprar ou vender um imóvel", href: "#imoveis", message: whatsappMessages.realEstate }, { title: "Orientação para proprietários", href: "#imoveis", message: whatsappMessages.owners }, { title: "Melhorar processos da empresa", href: "#consultorias", message: whatsappMessages.enterprise }, { title: "Desenvolver minha carreira", href: "#mentoria", message: whatsappMessages.career }, { title: "Mentoria Premium", href: "#mentoria", message: whatsappMessages.mentoring }, { title: "Consultoria Premium", href: "#consultorias", message: whatsappMessages.premiumConsulting }, { title: "Consultoria Rápida", href: "#consultorias", message: whatsappMessages.quickConsulting }, { title: "Curso gravado", href: "#curso", message: whatsappMessages.course },
];
const areas: ReadonlyArray<readonly [string, string, string, string]> = [["01", "Mercado imobiliário", "Compra, venda, orientação e condução de decisões imobiliárias.", whatsappMessages.realEstate], ["02", "Desenvolvimento profissional", "Mentoria, formação, método e desenvolvimento de corretores.", whatsappMessages.career], ["03", "Consultoria estratégica", "Análise e direcionamento para empresas e profissionais.", whatsappMessages.consulting]];
const services = [
  { id: "consultoria-premium", title: "Consultorias", text: "Orientação objetiva ou aprofundada para processos, documentos e decisões do mercado imobiliário.", message: whatsappMessages.consulting, action: "Conhecer as consultorias" },
  { id: "mentoria", title: "Mentoria Premium", text: "Acompanhamento para corretores que desejam desenvolver autonomia e visão completa do processo.", message: whatsappMessages.mentoring, action: "Conhecer a mentoria" },
  { id: "curso", title: "Curso gravado", text: "Fundamentos de locação, administração imobiliária, contratos e pontos de atenção.", message: whatsappMessages.course, action: "Conhecer o curso" },
  { id: "emine-resumo", title: "EMINÉ", text: "Desenvolvimento profissional imobiliário com método, repertório e direção.", message: whatsappMessages.career, action: "Conhecer a EMINÉ" },
];
const faqs = [
  { question: "Como funciona a Mentoria Premium?", answer: "É um acompanhamento para corretores que desejam desenvolver autonomia, organização e visão do processo. As condições são informadas pelo WhatsApp." },
  { question: "Para quem é a Consultoria Premium?", answer: "Para empresas e profissionais que desejam estruturar, revisar ou aprimorar processos de locação e administração imobiliária." },
  { question: "Quando procurar a Consultoria Rápida?", answer: "Quando houver necessidade de orientação objetiva sobre documentos, contratos ou uma situação específica." },
  { question: "O que é abordado no curso gravado?", answer: "Fundamentos de legislação de locação, administração imobiliária, tipos de contratos e pontos de atenção." },
  { question: "Como funciona o atendimento imobiliário?", answer: "Cada caso é conduzido com atenção à documentação, à comunicação entre as partes e à segurança nas decisões." },
  { question: "Como acontece o primeiro contato?", answer: "Escolha a área de interesse e envie a mensagem preparada pelo WhatsApp para orientar os próximos passos." },
];