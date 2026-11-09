# Ecosesi

Revista de divulgação científica em Astro. Site estático, preparado para a Vercel. Não precisa de banco de dados. O conteúdo inicial é demonstrativo.

## Rodar

Requer Node.js 22 ou superior e npm (ou pnpm).

```sh
npm install
npm run dev
```

Abra o endereço informado no terminal. Para verificar a versão de produção: `npm run build` e `npm run preview`.

## Publicar uma matéria

1. Duplique um arquivo em `src/content/articles/`.
2. Renomeie para o endereço desejado, como `nova-descoberta.md`. Use letras minúsculas, sem espaços ou acentos. Não altere nomes de matérias já publicadas para preservar os links.
3. Edite os campos entre `---`: título (`title`), resumo (`description`), editoria (`category`), data (`date`, no formato AAAA-MM-DD), autor (`author`), imagem (`image`) e descrição acessível (`imageAlt`).
4. Escreva o texto abaixo do segundo `---`. Use `## Subtítulo`, `**negrito**`, listas e `[texto](https://endereco.com)`.
5. `draft: true` deixa o texto fora do site. Troque para `false` quando estiver revisado. Rascunhos continuam visíveis a quem tem acesso ao repositório.
6. Use `featured: true` em uma única matéria para escolher a capa. Se houver várias, a mais recente será usada. As demais são ordenadas por data.
7. Faça commit e push. Com o repositório conectado à Vercel, o site será atualizado automaticamente.

Editorias aceitas: `Meio ambiente`, `Ciência`, `Tecnologia`, `Saúde`, `Universo`. O build valida os campos e avisa se algo estiver incorreto. Revise fontes, créditos, direitos de imagem e texto antes de publicar. Substitua as matérias demonstrativas pelos conteúdos da equipe.

### Imagens

Para evitar dependência de imagens externas, coloque suas fotos em `public/imagens/` e use `image: "/imagens/foto.jpg"`. Informe o crédito em `credit`. Prefira imagens horizontais comprimidas em WebP/JPEG. As fotos de demonstração usam Unsplash; as fontes usam Google Fonts com alternativas locais.

## Vercel

1. Envie a pasta deste projeto para um repositório GitHub, GitLab ou Bitbucket.
2. Importe o repositório na Vercel. Se o repositório contiver a pasta `ecosesi`, selecione-a em Root Directory.
3. Framework: Astro. Build: `npm run build`. Output: `dist`. Não há variáveis de ambiente obrigatórias.
4. Clique em Deploy. Novos pushes geram novas versões.

O `vercel.json` já registra as configurações. Não houve publicação automática em uma conta Vercel.

## Personalização

- Cores e tipografia: `src/styles/global.css`, variáveis no começo do arquivo.
- Cabeçalho e rodapé: `src/layouts/Layout.astro`.
- Capa: `src/pages/index.astro`.
- Sobre: `src/pages/sobre.astro`.

Busca e filtros funcionam no navegador, sem serviços pagos. Cada matéria tem uma página HTML própria, descrição para buscadores e botão de compartilhamento. Não há painel administrativo nem coleta de dados pessoais. Para publicação por uma equipe sem editar Markdown, o próximo passo pode ser conectar um CMS; nenhuma conta externa foi configurada neste projeto.
