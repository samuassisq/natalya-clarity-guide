# Refinamento da home e área interativa de imóveis

## Objetivo
Preservar a identidade editorial já aprovada, reduzir a extensão da home e transformar a área imobiliária em uma experiência completa, navegável e funcional em computador e celular.

## Home reorganizada
- Reordenar as seções conforme solicitado: cabeçalho, abertura, posicionamento, intenções, apresentação, áreas, imóveis, serviços, depoimentos, FAQ, chamada final e rodapé.
- Condensar textos repetidos e transformar Consultorias, Mentoria, Curso e EMINÉ em chamadas objetivas para páginas próprias.
- Exibir somente três imóveis em destaque, com “Ver detalhes” e acesso a todos os imóveis.
- Manter as fotos oficiais, identidade visual, textos confirmados e todas as mensagens específicas de WhatsApp.

## Área de imóveis
- Criar `/imoveis` com introdução, grade e filtros funcionais por finalidade, tipo, localização e dados disponíveis.
- Identificar claramente os anúncios sem dados reais como “Conteúdo demonstrativo”.
- Criar uma fonte de dados reutilizável para que novos imóveis e informações possam ser adicionados sem refazer as páginas.
- Incluir estados de resultado, nenhum resultado e limpeza dos filtros.

## Detalhe do imóvel
- Criar `/imoveis/$slug` com o protótipo “Imóvel no Werner Plas”, valor confirmado de R$ 8.000.000 e todos os demais campos não fornecidos como “Informação a confirmar”.
- Implementar galeria com imagem principal, miniaturas, setas, ampliação em lightbox, teclado e gesto de deslizar no celular.
- Destacar o aviso de confirmação de disponibilidade e condições e usar a mensagem específica de WhatsApp fornecida.
- Preparar a mesma estrutura para os outros dois anúncios demonstrativos, sem inventar características.

## Navegação e interatividade
- Atualizar cabeçalho e rodapé para navegação real com indicação da página atual e menu móvel que fecha após a escolha.
- Usar links internos nativos, foco visível, áreas de toque adequadas, transições sutis, zoom discreto em imagens e elevação moderada nos cards.
- Manter o FAQ funcional e adicionar entradas suaves de conteúdo respeitando `prefers-reduced-motion`.
- Não criar páginas de serviços fora desta entrega; os blocos da home continuarão direcionando para a conversa contextualizada até essas páginas serem construídas.

## Validação
- Verificar a home, a listagem e o detalhe em desktop, notebook, tablet, celular pequeno e celular grande.
- Testar menu, filtros, galeria, miniaturas, setas, lightbox, gesto, FAQ, links internos e todos os WhatsApps.
- Conferir ausência de cortes, sobreposições, rolagem horizontal e imagens deformadas, além de contraste, foco por teclado e metadados próprios das novas páginas.
