# MeLL Cognitive Architecture — Site institucional

Estrutura de publicação estática para Netlify.

## Versão v1.1 — Alinhamento institucional

Esta versão ajusta o site público para maior coerência com a tipologia CIA-Tec™ v4.7:

- **MeLL Cognitive Architecture** — organização institucional.
- **CIA-Tec™ v4.7** — arquitetura de governança cognitiva.
- **Framework CIA-Tec™ v4.7** — modelo estruturante.
- **DataCore** — Data Layer de evidência, integridade e rastreabilidade.
- **ERSC-Core** — plataforma operacional.
- **SovereignGuard / SCGA-Core** — módulo especializado de governança ativa.
- **GPTs, apps e assistentes** — interfaces governadas.

## Estrutura

```text
functions/
  health.js
public/
  index.html
  robots.txt
  sitemap.xml
  README.md
  docs/
  privacypolicy/
  terms/
netlify.toml
```

## Deploy

O deploy deve publicar a pasta `public/` e preservar os ativos já existentes no repositório, como favicons, imagens e `site.webmanifest`.
