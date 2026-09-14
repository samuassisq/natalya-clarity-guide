import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  children: ReactNode;
  message: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
  showArrow?: boolean;
};

export function WhatsAppLink({
  children,
  message,
  variant = "default",
  size = "lg",
  className,
  showArrow = true,
}: WhatsAppLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={createWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">
        {children}
        {showArrow ? <ArrowUpRight aria-hidden="true" /> : null}
      </a>
    </Button>
  );
}