import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Check, ChevronDown, MessageCircle } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import heroAsset from "@/assets/natalia-hero.png.asset.json";
import portraitAsset from "@/assets/natalia-sobre.png.asset.json";
import courseAsset from "@/assets/natalia-curso.png.asset.json";
import emineLogoAsset from "@/assets/emine-logo-claro.png.asset.json";
import consultingAsset from "@/assets/natalia-consultorias.png.asset.json";
import mentoringAsset from "@/assets/natalia-mentoria.png.asset.json";
import demonstrativeArchitecture from "@/assets/natalia-hero-architecture.jpg";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { whatsappMessages } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natalia Heiderich | Mercado Imobiliário e Mentoria" },
      { name: "description", content: "Orientação imobiliária, consultorias e formação profissional com clareza, método e segurança." },
      { property: "og:title", content: "Natalia Heiderich | Mercado Imobiliário e Mentoria" },
      { property: "og:description", content: "Clareza para decidir. Segurança para avançar no mercado imobiliário." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://natalya-clarity-guide.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://natalya-clarity-guide.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="inicio">
      <SiteHeader />
      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-foreground text-hero-foreground md:min-h-[820px]">
          <img src={heroAsset.url} width={768} height={1019} alt="Natalia Heiderich em retrato profissional" className="absolute inset-0 size-full object-cover object-[58%_25%] md:object-[72%_20%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay via-hero-overlay/65 to-transparent" />
          <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-20 pt-32 sm:px-8 md:min-h-[820px] md:pb-24 lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-warm">Mercado imobiliário · Consultoria · Formação</p>
              <h1 className="text-[clamp(3.25rem,7vw,7.6rem)] leading-[0.92]">Clareza para decidir.<br /><span className="italic text-warm">Segurança</span> para avançar.</h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">Uma atuação que une experiência no mercado imobiliário, estratégia, orientação e desenvolvimento profissional.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg"><a href="#sobre">Conheça meu trabalho <ArrowDown aria-hidden="true" /></a></Button>
                <WhatsAppLink message={whatsappMessages.general} variant="gold">Fale comigo</WhatsAppLink>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-20 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <SectionLabel>Uma atuação que organiza</SectionLabel>
            <div>
              <h2 className="max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">Conduzir é mais do que <span className="italic text-accent">intermediar.</span></h2>
              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">No mercado imobiliário, cada decisão envolve patrimônio, expectativas, documentos, pessoas e confiança. Por isso, o trabalho de Natalia parte de uma premissa simples: clareza antes da decisão e segurança durante o caminho.</p>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-card py-20 md:py-28">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <figure className="relative mx-auto max-w-lg">
              <img src={portraitAsset.url} width={768} height={1019} loading="lazy" alt="Natalia Heiderich sorrindo em retrato profissional em preto e branco" className="aspect-[4/5] w-full object-cover object-top" />
            </figure>
            <div>
              <SectionLabel>Sobre Natalia</SectionLabel>
              <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Uma carreira construída para <span className="italic text-accent">conduzir.</span></h2>
              <p className="mt-7 text-base leading-8 text-muted-foreground">Desde 2015 no mercado imobiliário, Natalia construiu sua trajetória unindo experiência, estudo, estratégia e uma convicção.</p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">Intermediar um imóvel é participar de decisões que envolvem vidas, patrimônio e confiança. É por isso que cada atendimento merece preparo, clareza e presença.</p>
              <p className="mt-6 font-display text-2xl italic">Natalia Heiderich</p>
              <WhatsAppLink message={whatsappMessages.about} variant="editorial" className="mt-8">Conheça minha trajetória</WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <SectionLabel>Áreas de atuação</SectionLabel>
            <div className="mt-8 grid border-y border-border md:grid-cols-3">
              {areas.map(([number, title, text, message, action], index) => (
                <article key={title} className={`group py-9 md:px-8 md:py-12 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
                  <span className="text-xs font-semibold text-accent">{number}</span>
                  <h3 className="mt-12 text-3xl">{title}</h3>
                  <p className="mt-5 min-h-24 text-sm leading-7 text-muted-foreground">{text}</p>
                  <WhatsAppLink message={message} variant="link" size="sm" className="mt-4 px-0 normal-case tracking-normal">{action}</WhatsAppLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div><SectionLabel light>Escolha seu caminho</SectionLabel><h2 className="mt-6 max-w-xl text-4xl leading-tight sm:text-5xl">Como posso ajudar <span className="italic text-warm">você?</span></h2></div>
              <p className="max-w-xl self-end text-base leading-8 text-primary-foreground/65">Comece pelo assunto que mais se aproxima do seu momento. Cada caminho abre uma conversa específica, para que o primeiro contato já seja claro e objetivo.</p>
            </div>
            <div className="mt-14 grid border-t border-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
              {intentions.map((item, index) => <IntentCard key={item.title} {...item} number={index + 1} />)}
            </div>
          </div>
        </section>

        <section id="imoveis" className="bg-card py-20 md:py-28">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
            <div><SectionLabel>Compra e venda</SectionLabel><h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Decisões importantes pedem uma condução <span className="italic text-accent">atenta.</span></h2><p className="mt-7 text-base leading-8 text-muted-foreground">Da organização documental à comunicação entre as partes, o atendimento acompanha cada etapa com proximidade, método e clareza — tanto para quem compra quanto para quem vende.</p><ul className="mt-7 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">{["Compra de imóveis", "Venda de imóveis", "Organização documental", "Comunicação entre as partes", "Orientação durante o processo", "Segurança nas decisões"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul><WhatsAppLink message={whatsappMessages.property} className="mt-9">Quero conversar sobre meu imóvel</WhatsAppLink></div>
            <img src={consultingAsset.url} width={768} height={1019} loading="lazy" alt="Natalia Heiderich com computador e materiais profissionais" className="aspect-[4/3] w-full object-cover object-top" />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <SectionLabel>Carteira imobiliária</SectionLabel>
            <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><h2 className="text-4xl sm:text-5xl">Imóveis <span className="italic text-accent">selecionados.</span></h2><p className="mt-4 max-w-xl text-muted-foreground">Você não precisa conhecer todos os imóveis. Precisa encontrar os imóveis certos.</p></div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Conteúdo demonstrativo</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{propertyCards.map((card) => <article key={card.title} className="border border-border bg-card"><img src={card.image} width={1200} height={912} loading="lazy" alt="Imagem arquitetônica demonstrativa" className="aspect-[4/3] w-full object-cover" /><div className="p-6"><p className="text-xs uppercase tracking-[0.12em] text-accent">Conteúdo demonstrativo</p><h3 className="mt-4 text-2xl">{card.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Localização e disponibilidade a confirmar. Estrutura preparada para dados reais.</p><WhatsAppLink message={whatsappMessages.property} variant="link" size="sm" className="mt-5 h-auto px-0 normal-case tracking-normal">Tenho interesse</WhatsAppLink></div></article>)}</div>
          </div>
        </section>

        <section id="consultorias" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-7 lg:grid-cols-2 lg:items-end"><div><SectionLabel>Consultorias</SectionLabel><h2 className="mt-6 text-4xl sm:text-5xl">Orientação para organizar e <span className="italic text-accent">aprimorar.</span></h2></div><p className="text-base leading-8 text-muted-foreground">Duas modalidades para necessidades diferentes, da análise objetiva de uma situação ao acompanhamento aprofundado de processos.</p></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <ServicePanel eyebrow="Acompanhamento aprofundado" title="Consultoria Premium" text="Para empresas e profissionais que desejam entrar, organizar ou aprimorar sua atuação no setor de locação e administração imobiliária." points={["Análise de estrutura e processos", "Rotinas administrativas na prática", "Encontros ao vivo e acompanhamento posterior"]} message={whatsappMessages.premiumConsulting} />
              <ServicePanel eyebrow="Orientação objetiva" title="Consultoria Rápida" text="Para corretores que precisam de apoio na análise de documentos, contratos ou situações específicas, com atenção aos pontos mais importantes." points={["Análise documental", "Leitura e compreensão de contratos", "Esclarecimento de dúvidas específicas"]} message={whatsappMessages.quickConsulting} />
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">A Consultoria Rápida oferece orientação profissional e não substitui eventual análise jurídica especializada quando necessária.</p>
          </div>
        </section>

        <section id="mentoria" className="bg-card">
          <div className="grid lg:grid-cols-2">
            <img src={mentoringAsset.url} width={768} height={1019} loading="lazy" alt="Natalia Heiderich em retrato profissional de corpo inteiro" className="h-full min-h-[420px] w-full object-cover object-top" />
            <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="max-w-xl"><SectionLabel>Mentoria Premium</SectionLabel><h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Do improviso à visão completa do <span className="italic text-accent">processo.</span></h2><p className="mt-7 text-base leading-8 text-muted-foreground">Um acompanhamento ao longo de meses para corretores que desejam desenvolver autonomia e compreender o processo imobiliário de ponta a ponta — da captação ao relacionamento de longo prazo.</p><div className="mt-7 grid grid-cols-2 gap-3 text-sm text-muted-foreground">{["Visão de processo", "Autonomia", "Organização", "Comunicação segura", "Captação", "Relacionamento"].map((item) => <span key={item} className="flex gap-2"><Check className="size-4 text-accent" aria-hidden="true" />{item}</span>)}</div><p className="mt-7 text-sm italic text-muted-foreground">Consulte as condições da próxima turma.</p><WhatsAppLink message={whatsappMessages.mentoring} className="mt-7">Quero saber mais sobre a mentoria</WhatsAppLink></div></div>
          </div>
        </section>

        <section id="curso" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 border-y border-border py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16"><img src={courseAsset.url} width={768} height={1019} loading="lazy" alt="Natalia Heiderich com computador e livros" className="aspect-[4/5] max-h-[620px] w-full object-cover object-top" /><div><SectionLabel>Curso gravado</SectionLabel><h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Locação e administração imobiliária com <span className="italic text-accent">mais segurança.</span></h2><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">Um curso para quem deseja compreender melhor os fundamentos da locação, da administração imobiliária e dos diferentes tipos de contratos utilizados no setor.</p><div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">{["Legislação de locação", "Administração imobiliária", "Tipos de contratos", "Pontos de atenção"].map((item) => <span key={item} className="flex gap-2"><Check className="size-4 text-accent" aria-hidden="true" />{item}</span>)}</div><WhatsAppLink message={whatsappMessages.course} variant="editorial" className="mt-8">Quero saber mais sobre o curso</WhatsAppLink></div></div>
          </div>
        </section>

        <section id="emine" className="bg-foreground py-20 text-primary-foreground md:py-28">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12"><div className="bg-background p-8"><img src={emineLogoAsset.url} width={768} height={768} loading="lazy" alt="EMINÉ — Elevando o padrão imobiliário" className="mx-auto aspect-square w-full max-w-md object-contain" /></div><div><SectionLabel light>Escola de desenvolvimento profissional</SectionLabel><h2 className="mt-6 text-5xl sm:text-6xl">EMINÉ</h2><p className="mt-2 text-sm uppercase tracking-[0.16em] text-warm">Elevando o padrão imobiliário.</p><p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/75">Escola de Desenvolvimento Profissional Imobiliário para quem quer deixar de apenas atender e aprender a conduzir.</p><blockquote className="mt-8 border-l border-warm pl-6 font-display text-2xl italic leading-relaxed">“Método não serve para engessar o corretor. Serve para dar direção.”</blockquote><WhatsAppLink message={whatsappMessages.career} variant="hero" className="mt-8">Conhecer a EMINÉ</WhatsAppLink></div></div>
        </section>

        <section className="bg-secondary py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 text-center sm:px-8 lg:px-12"><SectionLabel centered>Depoimentos</SectionLabel><h2 className="mx-auto mt-6 max-w-2xl text-4xl sm:text-5xl">Experiências contadas por quem foi <span className="italic text-accent">atendido.</span></h2><div className="mx-auto mt-10 max-w-3xl border-y border-accent/30 py-12"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Placeholder para edição posterior</p><p className="mt-5 font-display text-2xl leading-relaxed text-muted-foreground">Os depoimentos reais serão inseridos neste espaço após a confirmação de texto, nome, imagem e autorização de uso.</p><p className="mt-5 text-sm text-muted-foreground">Nenhum relato ou resultado foi criado para esta demonstração.</p></div></div>
        </section>

        <section id="faq" className="bg-card py-20 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12"><div><SectionLabel>Perguntas frequentes</SectionLabel><h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Antes da nossa <span className="italic text-accent">conversa.</span></h2></div><Accordion.Root type="single" collapsible className="border-t border-border">{faqs.map((faq, index) => <Accordion.Item key={faq.question} value={`faq-${index}`} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-6 text-left font-display text-xl focus-visible:outline-2 focus-visible:outline-accent"><span>{faq.question}</span><ChevronDown className="size-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden text-sm leading-7 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="pb-6 pr-8">{faq.answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div>
        </section>

        <section id="contato" className="bg-accent py-20 text-accent-foreground md:py-28"><div className="mx-auto max-w-4xl px-5 text-center sm:px-8"><MessageCircle className="mx-auto size-7" aria-hidden="true" /><h2 className="mt-6 text-4xl leading-tight sm:text-6xl">Toda decisão importante merece <span className="italic">clareza.</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-accent-foreground/80">Conte o que você precisa e encontre o caminho de atendimento mais adequado.</p><WhatsAppLink message={whatsappMessages.general} variant="hero" className="mt-9">Falar com Natalia</WhatsAppLink></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}

function SectionLabel({ children, light = false, centered = false }: { children: React.ReactNode; light?: boolean; centered?: boolean }) {
  return <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${centered ? "justify-center" : ""} ${light ? "text-warm" : "text-accent"}`}><span className="h-px w-8 bg-current" />{children}</p>;
}

function IntentCard({ number, title, message, href }: { number: number; title: string; message: string; href: string }) {
  return <article className="group border-b border-primary-foreground/20 p-6 transition-colors hover:bg-primary-foreground/5 sm:border-r lg:min-h-56"><p className="text-xs text-warm">{String(number).padStart(2, "0")}</p><h3 className="mt-10 text-2xl leading-tight">{title}</h3><div className="mt-7 flex gap-4"><a href={href} className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground/65 hover:text-primary-foreground">Ver área</a><WhatsAppLink message={message} variant="link" size="sm" className="h-auto p-0 text-warm normal-case tracking-normal">Conversar</WhatsAppLink></div></article>;
}

function ServicePanel({ eyebrow, title, text, points, message }: { eyebrow: string; title: string; text: string; points: string[]; message: string }) {
  return <article className="border border-border bg-card p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p><h3 className="mt-5 text-3xl">{title}</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">{text}</p><ul className="mt-6 space-y-3 text-sm text-muted-foreground">{points.map((point) => <li key={point} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{point}</li>)}</ul><WhatsAppLink message={message} variant="editorial" className="mt-8">Quero saber mais</WhatsAppLink></article>;
}

const intentions = [
  { title: "Comprar ou vender um imóvel", href: "#imoveis", message: whatsappMessages.realEstate },
  { title: "Orientação para proprietários", href: "#imoveis", message: whatsappMessages.owners },
  { title: "Tenho uma demanda empresarial", href: "#consultorias", message: whatsappMessages.enterprise },
  { title: "Desenvolver minha carreira", href: "#mentoria", message: whatsappMessages.career },
  { title: "Mentoria Premium", href: "#mentoria", message: whatsappMessages.mentoring },
  { title: "Consultoria Premium", href: "#consultorias", message: whatsappMessages.premiumConsulting },
  { title: "Consultoria Rápida", href: "#consultorias", message: whatsappMessages.quickConsulting },
  { title: "Curso gravado", href: "#curso", message: whatsappMessages.course },
];

const areas: ReadonlyArray<readonly [string, string, string, string, string]> = [
  ["01", "Mercado imobiliário", "Atuação relacionada a imóveis, compra, venda, orientação e condução de decisões imobiliárias.", whatsappMessages.realEstate, "Conhecer atuação imobiliária"],
  ["02", "Desenvolvimento profissional", "Mentorias, formação, método e desenvolvimento de profissionais do mercado imobiliário.", whatsappMessages.career, "Conhecer formações"],
  ["03", "Consultoria estratégica", "Orientação para empresas e profissionais que precisam de clareza, análise e direcionamento.", whatsappMessages.consulting, "Conhecer consultorias"],
];

const propertyCards = [
  { title: "Residência contemporânea", image: demonstrativeArchitecture },
  { title: "Arquitetura integrada", image: demonstrativeArchitecture },
  { title: "Interiores com luz natural", image: demonstrativeArchitecture },
];

const faqs = [
  { question: "Como funciona a Mentoria Premium?", answer: "É um acompanhamento contínuo para corretores que desejam desenvolver autonomia, organização e visão completa do processo imobiliário. As condições da próxima turma são informadas pelo WhatsApp." },
  { question: "Para quem é a Consultoria Premium?", answer: "Para empresas e profissionais que desejam estruturar, revisar ou aprimorar processos de locação e administração imobiliária com orientação aplicada à realidade da operação." },
  { question: "Quando procurar a Consultoria Rápida?", answer: "Quando houver necessidade de uma orientação objetiva sobre documentos, contratos ou uma situação específica. Quando necessário, será indicada a busca por análise jurídica especializada." },
  { question: "O que é abordado no curso gravado?", answer: "Fundamentos de legislação de locação, administração imobiliária, tipos de contratos e pontos de atenção da rotina profissional. Informações comerciais podem ser solicitadas pelo WhatsApp." },
  { question: "Como funciona o atendimento imobiliário?", answer: "O trabalho considera o contexto de cada compra, venda ou imóvel, com atenção à organização documental, à comunicação entre as partes e à segurança nas decisões." },
  { question: "Como acontece o primeiro contato?", answer: "Escolha a área de interesse e envie a mensagem já preparada pelo WhatsApp. Natalia poderá entender sua necessidade e orientar os próximos passos." },
];
