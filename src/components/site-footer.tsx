import { ArrowUp } from "lucide-react";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { whatsappMessages } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">Natalia <span className="italic">Heiderich</span></p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/65">
              Clareza, método e segurança para decisões imobiliárias e para o desenvolvimento de profissionais do setor.
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Navegação</p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-primary-foreground/75">
              <a href="#sobre">Sobre</a><a href="#imoveis">Imóveis</a>
              <a href="#consultorias">Consultorias</a><a href="#mentoria">Mentoria</a>
              <a href="#curso">Curso</a><a href="#faq">Dúvidas</a>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Contato oficial</p>
            <p className="mb-5 text-sm text-primary-foreground/70">WhatsApp: +55 19 99100-0996</p>
            <WhatsAppLink message={whatsappMessages.contact} variant="hero" size="sm">Conversar agora</WhatsAppLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Natalia Heiderich. Todos os direitos reservados.</p>
          <a href="#inicio" className="inline-flex items-center gap-2 text-primary-foreground/75">Voltar ao início <ArrowUp className="size-3" aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}