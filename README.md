# Josi Oliveira Preview

Landing page estatica da Josi Oliveira.

## Estrutura

- `josi-oliveira.html`: pagina principal
- `josi-oliveira.css`: estilos
- `josi-oliveira.js`: interacoes e animacoes
- `index.html`: entrada da raiz (redirect)
- `vercel.json`: configuracao de deploy no Vercel

## Rodar localmente

Como e um projeto estatico, basta abrir `josi-oliveira.html` no navegador.

Se quiser usar servidor local:

```bash
npx serve .
```

## Deploy no Vercel

### Opcao 1: pela interface

1. Acesse o painel do Vercel.
2. Clique em "Add New Project".
3. Importe este repositorio: `jailsonsntn/josi-oliveira-preview`.
4. Framework Preset: `Other`.
5. Build Command: vazio.
6. Output Directory: vazio.
7. Clique em "Deploy".

### Opcao 2: via CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Observacoes

- A rota `/` esta configurada para abrir `josi-oliveira.html`.
- O projeto nao depende de backend.