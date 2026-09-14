import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { whatsappMessages } from "@/lib/whatsapp";

const navigation = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Imóveis", "#imoveis"],
  ["Consultorias", "#consultorias"],
  ["Mentoria", "#mentoria"],
  ["Curso", "#curso"],
  ["EMINÉ", "#emine"],
  ["Contato", "#contato"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-hero-foreground">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#inicio" className="font-display text-xl leading-none sm:text-2xl" aria-label="Natalia Heiderich — Início">
          Natalia <span className="italic">Heiderich</span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="text-[0.72rem] font-medium uppercase tracking-[0.12em] opacity-90 transition-opacity hover:opacity-60">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink message={whatsappMessages.general} size="sm" variant="hero" className="hidden sm:inline-flex">
            Fale comigo
          </WhatsAppLink>
          <Button
            type="button"
            variant="heroGhost"
            size="icon"
            className="xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 top-24 z-40 bg-foreground text-primary-foreground xl:hidden">
          <nav className="flex h-full flex-col px-6 py-10" aria-label="Navegação móvel">
            {navigation.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-primary-foreground/15 py-4 font-display text-3xl"
              >
                {label}<span className="font-sans text-xs opacity-50">0{index + 1}</span>
              </a>
            ))}
            <WhatsAppLink message={whatsappMessages.general} className="mt-8 w-full" showArrow={false}>
              <MessageCircle aria-hidden="true" /> Fale comigo
            </WhatsAppLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}