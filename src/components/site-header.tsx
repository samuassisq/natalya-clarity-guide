import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { whatsappMessages } from "@/lib/whatsapp";

const navigation = [
  { label: "Início", to: "/", hash: "" },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Imóveis", to: "/imoveis", hash: "" },
  { label: "Consultorias", to: "/", hash: "consultorias" },
  { label: "Mentoria", to: "/", hash: "mentoria" },
  { label: "Curso", to: "/", hash: "curso" },
  { label: "EMINÉ", to: "/", hash: "emine" },
  { label: "Contato", to: "/", hash: "contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const firstMobileLink = useRef<HTMLAnchorElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) firstMobileLink.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`absolute inset-x-0 top-0 z-50 ${isHome ? "text-hero-foreground" : "bg-foreground text-primary-foreground"}`}>
      <div className="mx-auto grid h-24 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:px-12">
        <Link to="/" className="min-w-0 truncate font-display text-xl leading-none sm:text-2xl" aria-label="Natalia Heiderich — Início">Natalia <span className="italic">Heiderich</span></Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
          {navigation.map((item) => <Link key={`${item.to}-${item.hash}`} to={item.to} hash={item.hash} activeOptions={{ exact: item.to === "/", includeHash: Boolean(item.hash) }} activeProps={{ className: "text-warm" }} className="text-[0.72rem] font-medium uppercase tracking-[0.12em] opacity-90 transition-opacity hover:opacity-60">{item.label}</Link>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2"><WhatsAppLink message={whatsappMessages.general} size="sm" variant="hero" className="hidden sm:inline-flex">Fale comigo</WhatsAppLink><Button type="button" variant="heroGhost" size="icon" className="xl:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</Button></div>
      </div>
      {open ? <div id="mobile-menu" className="fixed inset-0 top-24 z-40 overflow-y-auto bg-foreground text-primary-foreground xl:hidden"><nav className="flex min-h-full flex-col px-6 py-6" aria-label="Navegação móvel">{navigation.map((item, index) => <Link key={`${item.to}-${item.hash}`} ref={index === 0 ? firstMobileLink : undefined} to={item.to} hash={item.hash} onClick={() => setOpen(false)} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-primary-foreground/15 py-3 font-display text-2xl"><span className="min-w-0">{item.label}</span><span className="shrink-0 font-sans text-xs opacity-50">0{index + 1}</span></Link>)}<WhatsAppLink message={whatsappMessages.general} className="mt-6 w-full" showArrow={false}><MessageCircle aria-hidden="true" /> Fale comigo</WhatsAppLink></nav></div> : null}
    </header>
  );
}