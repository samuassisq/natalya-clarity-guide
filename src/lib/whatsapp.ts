export const WHATSAPP_NUMBER = "5519991000996";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const whatsappMessages = {
  general:
    "Olá, Natalia! Gostaria de conhecer melhor o seu trabalho e saber como você pode me ajudar.",
  realEstate: "Olá, Natalia! Gostaria de conversar sobre compra e venda de imóveis.",
  property:
    "Olá, Natalia! Gostaria de conversar sobre compra, venda ou orientação relacionada a um imóvel.",
  owners:
    "Olá, Natalia! Sou proprietário(a) e gostaria de saber como funciona o seu atendimento para imóveis.",
  premiumConsulting:
    "Olá, Natalia! Gostaria de saber mais sobre a Consultoria Premium para empresas e profissionais do mercado imobiliário.",
  quickConsulting:
    "Olá, Natalia! Gostaria de saber mais sobre a Consultoria Rápida para análise de documentos e contratos.",
  mentoring:
    "Olá, Natalia! Gostaria de saber mais sobre a Mentoria Premium para corretores de imóveis.",
  course:
    "Olá, Natalia! Gostaria de saber mais sobre o curso gravado de locação e administração imobiliária.",
  career:
    "Olá, Natalia! Gostaria de saber mais sobre suas opções de formação profissional.",
  consulting:
    "Olá, Natalia! Gostaria de conhecer melhor as opções de consultoria.",
  columns:
    "Olá, Natalia! Gostaria de receber mais informações sobre seus conteúdos e orientações para o mercado imobiliário.",
  about: "Olá, Natalia! Gostaria de conhecer melhor sua trajetória e seu trabalho.",
  contact:
    "Olá, Natalia! Gostaria de entrar em contato para conhecer melhor seus serviços.",
} as const;

export function createWhatsAppLink(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}