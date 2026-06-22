# VIA+ — Busca e entrega inteligente de imóveis

Landing page institucional da VIA+ para atendimento presencial em Montes
Claros/MG e região.

## Requisitos

- Node.js 20.9 ou superior
- pnpm

## Configuração

Copie `.env.example` para `.env.local` e informe o domínio canônico:

```bash
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

Não adicione tokens ou chaves sensíveis em variáveis `NEXT_PUBLIC_*`.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Verificações

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Conteúdo centralizado

Marca, URL, WhatsApp, serviços e perguntas frequentes ficam em
`src/lib/site-config.ts`.

O simulador não envia nem armazena dados. O site não inclui analytics, pixels,
formulários ou banco de dados nesta versão.
