import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronDown, MessageCircle } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import heroImage from "@/assets/natalia-hero-architecture.jpg";
import portraitImage from "@/assets/natalia-portrait-placeholder.jpg";
import consultingImage from "@/assets/natalia-consultoria.jpg";
import mentoringImage from "@/assets/natalia-mentoria.jpg";
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
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="inicio">
      <SiteHeader />
      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-foreground text-hero-foreground md:min-h-[820px]">
          <img src={heroImage} width={1440} height={1600} alt="Interior contemporâneo com luz natural e arquitetura elegante" className="absolute inset-0 size-full object-cover object-[62%_55%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay via-hero-overlay/65 to-transparent" />
          <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-20 pt-32 sm:px-8 md:min-h-[820px] md:pb-24 lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-warm">Mercado imobiliário · Consultoria · Formação</p>
              <h1 className="text-[clamp(3.25rem,7vw,7.6rem)] leading-[0.92]">Clareza para decidir.<br /><span className="italic text-warm">Segurança</span> para avançar.</h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">Experiência, estratégia e orientação para quem deseja comprar, vender, administrar ou se desenvolver no mercado imobiliário.</p>
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
              <h2 className="max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">O mercado imobiliário pode ser mais <span className="italic text-accent">claro, organizado e seguro.</span></h2>
              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">Entre documentos, contratos, negociações, clientes e decisões importantes, ter orientação faz toda a diferença. Meu trabalho é simplificar processos, compartilhar conhecimento e ajudar pessoas e profissionais a avançarem com mais segurança.</p>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-card py-20 md:py-28">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <figure className="relative mx-auto max-w-lg">
              <img src={portraitImage} width={1200} height={1504} loading="lazy" alt="Imagem demonstrativa para futura foto profissional de Natalia Heiderich" className="aspect-[4/5] w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-background px-4 py-2 text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">Imagem demonstrativa</figcaption>
            </figure>
            <div>
              <SectionLabel>Sobre Natalia</SectionLabel>
              <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Experiência prática, método e uma forma <span className="italic text-accent">próxima</span> de orientar.</h2>
              <p className="mt-7 text-base leading-8 text-muted-foreground">Minha atuação reúne experiência prática no mercado imobiliário, conhecimento dos processos de locação e administração e dedicação à formação de profissionais mais preparados, autônomos e seguros para atuar.</p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">Cada atendimento parte da escuta e da organização: entender o cenário, tornar as etapas compreensíveis e conduzir escolhas com responsabilidade.</p>
              <WhatsAppLink message={whatsappMessages.about} variant="editorial" className="mt-8">Conheça minha trajetória</WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <SectionLabel>Áreas de atuação</SectionLabel>
            <div className="mt-8 grid border-y border-border md:grid-cols-3">
              {[
                ["01", "Mercado imobiliário", "Orientação para decisões de compra, venda e relacionamento com proprietários e clientes.", whatsappMessages.realEstate, "Conhecer atuação imobiliária"],
                ["02", "Consultorias", "Orientação prática para profissionais e empresas que desejam organizar, revisar e aprimorar seus processos.", whatsappMessages.consulting, "Conhecer consultorias"],
                ["03", "Formação profissional", "Mentoria e cursos para corretores que desejam desenvolver autonomia, conhecimento e segurança.", whatsappMessages.career, "Conhecer formações"],
              ].map(([number, title, text, message, action], index) => (
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
            <img src={consultingImage} width={1200} height={912} loading="lazy" alt="Atendimento demonstrativo com análise de documentos e planta de imóvel" className="aspect-[4/3] w-full object-cover" />
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
            <img src={mentoringImage} width={1200} height={912} loading="lazy" alt="Sessão demonstrativa de mentoria para profissionais do mercado imobiliário" className="h-full min-h-[420px] w-full object-cover" />
            <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="max-w-xl"><SectionLabel>Mentoria Premium</SectionLabel><h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Do improviso à visão completa do <span className="italic text-accent">processo.</span></h2><p className="mt-7 text-base leading-8 text-muted-foreground">Um acompanhamento ao longo de meses para corretores que desejam desenvolver autonomia e compreender o processo imobiliário de ponta a ponta — da captação ao relacionamento de longo prazo.</p><div className="mt-7 grid grid-cols-2 gap-3 text-sm text-muted-foreground">{["Visão de processo", "Autonomia", "Organização", "Comunicação segura", "Captação", "Relacionamento"].map((item) => <span key={item} className="flex gap-2"><Check className="size-4 text-accent" aria-hidden="true" />{item}</span>)}</div><p className="mt-7 text-sm italic text-muted-foreground">Consulte as condições da próxima turma.</p><WhatsAppLink message={whatsappMessages.mentoring} className="mt-7">Quero saber mais sobre a mentoria</WhatsAppLink></div></div>
          </div>
        </section>

        <section id="curso" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 border-y border-border py-12 lg:grid-cols-[0.75fr_1.25fr] lg:py-16"><div><SectionLabel>Curso gravado</SectionLabel><p className="mt-7 text-sm leading-7 text-muted-foreground">Conteúdo para consultar no seu ritmo, com fundamentos aplicáveis à rotina profissional.</p></div><div><h2 className="text-4xl leading-tight sm:text-5xl">Locação e administração imobiliária com <span className="italic text-accent">mais segurança.</span></h2><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">Um curso para quem deseja compreender melhor os fundamentos da locação, da administração imobiliária e dos diferentes tipos de contratos utilizados no setor.</p><div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">{["Legislação de locação", "Administração imobiliária", "Tipos de contratos", "Pontos de atenção"].map((item) => <span key={item} className="flex gap-2"><Check className="size-4 text-accent" aria-hidden="true" />{item}</span>)}</div><WhatsAppLink message={whatsappMessages.course} variant="editorial" className="mt-8">Quero saber mais sobre o curso</WhatsAppLink></div></div>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 text-center sm:px-8 lg:px-12"><SectionLabel centered>Depoimentos</SectionLabel><h2 className="mx-auto mt-6 max-w-2xl text-4xl sm:text-5xl">Experiências contadas por quem foi <span className="italic text-accent">atendido.</span></h2><div className="mx-auto mt-10 max-w-3xl border-y border-accent/30 py-12"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Placeholder para edição posterior</p><p className="mt-5 font-display text-2xl leading-relaxed text-muted-foreground">Os depoimentos reais serão inseridos neste espaço após a confirmação de texto, nome, imagem e autorização de uso.</p><p className="mt-5 text-sm text-muted-foreground">Nenhum relato ou resultado foi criado para esta demonstração.</p></div></div>
        </section>

        <section id="faq" className="bg-card py-20 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12"><div><SectionLabel>Perguntas frequentes</SectionLabel><h2 className="mt-6 text-4xl leading-tight sm:text-5xl">Antes da nossa <span className="italic text-accent">conversa.</span></h2></div><Accordion.Root type="single" collapsible className="border-t border-border">{faqs.map((faq, index) => <Accordion.Item key={faq.question} value={`faq-${index}`} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-6 text-left font-display text-xl focus-visible:outline-2 focus-visible:outline-accent"><span>{faq.question}</span><ChevronDown className="size-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden text-sm leading-7 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="pb-6 pr-8">{faq.answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div>
        </section>

        <section id="contato" className="bg-accent py-20 text-accent-foreground md:py-28"><div className="mx-auto max-w-4xl px-5 text-center sm:px-8"><MessageCircle className="mx-auto size-7" aria-hidden="true" /><h2 className="mt-6 text-4xl leading-tight sm:text-6xl">Vamos tornar sua próxima decisão mais <span className="italic">clara?</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-accent-foreground/80">Conte qual é o seu momento. A conversa começa pelo WhatsApp e segue de forma direta, próxima e personalizada.</p><WhatsAppLink message={whatsappMessages.contact} variant="hero" className="mt-9">Conversar pelo WhatsApp</WhatsAppLink></div></section>
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
  { title: "Melhorar processos da empresa", href: "#consultorias", message: whatsappMessages.premiumConsulting },
  { title: "Desenvolver minha carreira", href: "#mentoria", message: whatsappMessages.career },
  { title: "Mentoria Premium", href: "#mentoria", message: whatsappMessages.mentoring },
  { title: "Consultoria Premium", href: "#consultorias", message: whatsappMessages.premiumConsulting },
  { title: "Consultoria Rápida", href: "#consultorias", message: whatsappMessages.quickConsulting },
  { title: "Curso gravado", href: "#curso", message: whatsappMessages.course },
];

const faqs = [
  { question: "Como funciona a Mentoria Premium?", answer: "É um acompanhamento contínuo para corretores que desejam desenvolver autonomia, organização e visão completa do processo imobiliário. As condições da próxima turma são informadas pelo WhatsApp." },
  { question: "Para quem é a Consultoria Premium?", answer: "Para empresas e profissionais que desejam estruturar, revisar ou aprimorar processos de locação e administração imobiliária com orientação aplicada à realidade da operação." },
  { question: "Quando procurar a Consultoria Rápida?", answer: "Quando houver necessidade de uma orientação objetiva sobre documentos, contratos ou uma situação específica. Quando necessário, será indicada a busca por análise jurídica especializada." },
  { question: "O que é abordado no curso gravado?", answer: "Fundamentos de legislação de locação, administração imobiliária, tipos de contratos e pontos de atenção da rotina profissional. Informações comerciais podem ser solicitadas pelo WhatsApp." },
  { question: "Como funciona o atendimento imobiliário?", answer: "O trabalho considera o contexto de cada compra, venda ou imóvel, com atenção à organização documental, à comunicação entre as partes e à segurança nas decisões." },
  { question: "Como acontece o primeiro contato?", answer: "Escolha a área de interesse e envie a mensagem já preparada pelo WhatsApp. Natalia poderá entender sua necessidade e orientar os próximos passos." },
];
