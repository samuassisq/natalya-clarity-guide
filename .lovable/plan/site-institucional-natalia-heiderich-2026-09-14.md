# Site institucional — Natalia Heiderich

## Objetivo
Construir um site editorial, sofisticado e acolhedor que apresente Natalia como profissional do mercado imobiliário, consultora e formadora, conduzindo cada interesse para uma conversa contextualizada no WhatsApp.

## Direção visual
- Aplicar a paleta fornecida em tons de marfim, grafite, bege e dourado discreto, sempre por meio de tokens semânticos.
- Usar Fraunces nos títulos e Work Sans em textos e controles.
- Criar composição editorial com respiro amplo, linhas finas, imagens arquitetônicas e profissionais, cantos discretos e movimento sutil.
- Gerar imagens originais e coerentes entre si para evitar aparência genérica de banco de imagens.
- Preservar contraste, foco visível, navegação por teclado e boa leitura em celular, tablet e desktop.

## Etapa 1 — Página inicial completa
- Criar cabeçalho responsivo com assinatura tipográfica, navegação completa, menu móvel e acesso ao WhatsApp.
- Construir a primeira dobra com a mensagem “Clareza para decidir. Segurança para avançar.”, imagem marcante e dois caminhos principais.
- Organizar a jornada por intenção em “Como posso ajudar você?”, com oito caminhos: compra ou venda, proprietários, processos empresariais, carreira, Mentoria Premium, Consultoria Premium, Consultoria Rápida e curso gravado. Cada opção terá destino e mensagem de WhatsApp próprios.
- Montar as seções de posicionamento, apresentação da Natalia, três áreas de atuação, compra e venda, consultorias, mentoria, curso, depoimentos identificados como placeholders, perguntas frequentes, CTA final e rodapé.
- Usar apenas afirmações fornecidas; nenhuma credencial, número, resultado ou contato será inventado.

## Etapa 2 — Páginas internas (somente após aprovação da home)
- Criar `/sobre`, `/imoveis`, `/imoveis/$slug`, `/colunas`, `/colunas/$slug`, `/consultorias`, `/mentoria`, `/curso` e `/contato`.
- Manter a mesma linguagem visual e navegação em todas as páginas.
- Preparar imóveis e artigos demonstrativos, claramente rotulados, com páginas de detalhe reutilizáveis.
- Exibir aviso informativo em conteúdos relacionados a legislação.
- Criar a página de contato com resumo dos serviços, opções contextuais de WhatsApp e formulário visual claramente marcado como pendente de integração.
- Não implementar login, administração, pagamentos, agendamento, área de alunos, CRM, banco complexo ou integrações externas nesta versão; manter os conteúdos preparados para futuras fontes de dados.

## Conversão e conteúdo
- Centralizar o número oficial e todas as mensagens em uma única configuração, consumida pela função reutilizável `createWhatsAppLink(message)`.
- Codificar corretamente as mensagens, abrir os links em nova aba com segurança e personalizar cada chamada conforme a seção.
- Testar cada botão individualmente para confirmar número, texto pré-preenchido e contexto.
- Não adicionar e-mail, endereço, CRECI, redes sociais, preços, datas, vagas ou outras informações não fornecidas.
- Identificar explicitamente imóveis, artigos e depoimentos não confirmados como demonstrativos ou placeholders.

## Estrutura técnica
- Criar componentes reutilizáveis para cabeçalho, rodapé, títulos de seção, chamadas, cards e links de WhatsApp.
- Usar rotas nativas do projeto e metadados únicos por página: título, descrição, Open Graph e Twitter Card.
- Adicionar estados de interação, menu móvel acessível e animações leves com respeito à preferência de movimento reduzido.
- Validar links, navegação, visual em desktop e celular, ausência de sobreposições e carregamento das imagens.

## Entrega desta etapa
Entregar somente a página inicial finalizada, testada e apresentada para aprovação. Nenhuma página interna, tela falsa ou integração incompleta será criada antes dessa aprovação.

## Resultado esperado
Uma home confiável e estrategicamente organizada, pronta para servir como referência de acabamento às futuras páginas internas.
