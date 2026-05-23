# EXECUTE → REGISTER → SEAL → CONFIRM

## EXECUTE

Estrutura de publicação corrigida para repositório com pasta pública.

## REGISTER

Árvore esperada após aplicar o pacote:

```text
main/
├── functions/
│   └── health.js
├── public/
│   ├── README.md
│   ├── android-chrome-192x192.png        # preservar se já existir
│   ├── android-chrome-512x512.png        # preservar se já existir
│   ├── apple-touch-icon.png              # preservar se já existir
│   ├── favicon-16x16.png                 # preservar se já existir
│   ├── favicon-32x32.png                 # preservar se já existir
│   ├── favicon.ico                       # preservar se já existir
│   ├── index.html
│   ├── mell-brand-round.png              # preservar se já existir
│   ├── robots.txt
│   ├── site.webmanifest                  # preservar se já existir
│   ├── sitemap.xml
│   ├── docs/
│   │   └── Politica_Privacidade_LGPD_CIA-Tec_v4.7.1_MeLL.pdf
│   ├── privacypolicy/
│   │   └── index.html
│   └── terms/
│       └── index.html
└── README.md
```

## SEAL

Validações mínimas pós-deploy:

```text
/                         → 200
/robots.txt               → 200
/sitemap.xml              → 200
/privacypolicy/           → 200
/terms/                   → 200
/docs/Politica_Privacidade_LGPD_CIA-Tec_v4.7.1_MeLL.pdf → 200
```

## CONFIRM

A publicação deve apontar para `public/` como diretório público. As pastas `privacypolicy/` e `terms/` precisam ficar dentro de `public/`, não na raiz isolada do repositório.
