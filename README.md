# MeLL Cognitive Architecture

**IA governada para ambientes críticos e regulamentados.**

A **MeLL Cognitive Architecture** é um ecossistema institucional e técnico voltado à arquitetura cognitiva aplicada, governança de inteligência documental, rastreabilidade, segurança cognitiva, autonomia supervisionada e preservação da autoridade humana em decisões críticas.

O projeto estrutura uma presença digital estática, modular e auditável, com publicação em **Cloudflare Pages**, assets institucionais versionados, endpoint operacional de verificação de saúde e documentação mínima para manutenção controlada.

---

## Visão

A inteligência artificial aplicada a contextos críticos não deve operar como camada improvisada, opaca ou autônoma sem controle.

A MeLL propõe uma arquitetura orientada a:

- governança cognitiva federada;
- separação entre apoio cognitivo e autoridade decisória;
- rastreabilidade de comandos, premissas, evidências e conclusões;
- controle proporcional ao risco;
- segurança cognitiva;
- integridade documental;
- supervisão humana explícita.

---

## Princípio central

> Sem confirmação humana explícita, a saída da IA permanece consultiva e não produz efeito institucional governado.

A arquitetura segue o fluxo operacional:

```text
EXECUTE → REGISTER → SEAL → CONFIRM
```

| Etapa | Função |
|---|---|
| **EXECUTE** | A IA executa análise, organização, classificação, comparação e proposta técnica. |
| **REGISTER** | O sistema registra comando, escopo, premissas, fontes, riscos, lacunas e evidências. |
| **SEAL** | O artefato ou estado é estabilizado quando há consistência, escopo definido e autorização aplicável. |
| **CONFIRM** | O humano aprova, rejeita, ajusta, bloqueia, escalona ou autoriza exceção. |

---

## Pilares operacionais

- **Soberania humana:** decisões críticas, aprovações e mudanças estruturais permanecem sob autoridade humana explícita.
- **Autonomia supervisionada:** a IA pode analisar, estruturar e recomendar, mas não substitui responsabilidade humana.
- **Governança documental:** documentos, versões, evidências e decisões possuem origem, escopo, validade e rastreabilidade.
- **Segurança cognitiva:** ambiguidade, excesso de autonomia e uso indevido de contexto são tratados como riscos operacionais.
- **Observabilidade:** eventos, recomendações, riscos, decisões e evidências devem ser passíveis de análise e auditoria.
- **Evolução controlada:** mudanças estruturais exigem cut-off, avaliação de impacto e aprovação aplicável.

---

## Estrutura do projeto

```text
/
├── functions/
│   └── health.js
│
├── public/
│   ├── index.html
│   ├── mell-brand-round.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
│
└── README.md
```

---

## Deploy em Cloudflare Pages

Configuração recomendada:

| Campo | Valor |
|---|---|
| **Framework preset** | `None` |
| **Build command** | vazio ou `exit 0` |
| **Build output directory** | `public` |
| **Root directory** | raiz do repositório |

A pasta `public/` contém os arquivos estáticos publicados na raiz pública do domínio.

Exemplos de rotas esperadas:

```text
https://mellcognitivearchitecture.com.br/
https://mellcognitivearchitecture.com.br/mell-brand-round.png
https://mellcognitivearchitecture.com.br/site.webmanifest
https://mellcognitivearchitecture.com.br/robots.txt
https://mellcognitivearchitecture.com.br/sitemap.xml
```

---

## Endpoint operacional

O projeto contém uma Cloudflare Pages Function em:

```text
/functions/health.js
```

Rota pública esperada:

```text
/health
```

Resposta esperada:

```json
{
  "status": "ok",
  "service": "MeLL Cognitive Architecture",
  "component": "Cloudflare Pages Health Check",
  "environment": "cloudflare-pages",
  "stage": "institucional-modular",
  "governance": {
    "model": "autonomia-supervisionada",
    "decision_authority": "humana-soberana",
    "flow": "EXECUTE_REGISTER_SEAL_CONFIRM"
  }
}
```

O endpoint deve permanecer operacional e consultivo, sem exposição de variáveis sensíveis, chaves, tokens, dependências internas ou dados privados.

---

## SEO e presença institucional

O site utiliza:

- metadados HTML básicos;
- Open Graph;
- Twitter Card;
- JSON-LD para organização;
- `robots.txt`;
- `sitemap.xml`;
- favicon e manifest para instalação/identidade visual;
- links institucionais e documentos legais.

Rotas legais:

```text
https://mellcognitivearchitecture.com.br/privacypolicy/
https://mellcognitivearchitecture.com.br/terms/
```

---

## Segurança e governança

Este repositório deve manter apenas artefatos públicos e não sensíveis.

Não versionar:

- chaves de API;
- tokens;
- senhas;
- variáveis de ambiente privadas;
- dados pessoais não necessários;
- documentos internos restritos;
- evidências operacionais confidenciais;
- informações de clientes, fornecedores ou ambientes produtivos.

Mudanças estruturais devem ser registradas, revisadas e publicadas apenas após validação humana aplicável.

---

## Checklist de publicação

Antes de publicar:

- [ ] Confirmar que `index.html` está dentro de `public/`.
- [ ] Confirmar que `mell-brand-round.png` está dentro de `public/`.
- [ ] Confirmar que favicons e `site.webmanifest` estão dentro de `public/`.
- [ ] Confirmar que `robots.txt` e `sitemap.xml` estão atualizados.
- [ ] Confirmar que `functions/health.js` está na raiz do projeto, fora de `public/`.
- [ ] Confirmar `Build output directory = public` no Cloudflare Pages.
- [ ] Testar `/`, `/health`, `/sitemap.xml`, `/robots.txt` e `/mell-brand-round.png`.
- [ ] Validar visual em desktop e mobile.
- [ ] Validar links de privacidade, termos, GitHub, LinkedIn e e-mail institucional.

---

## Contato

**E-mail institucional:** [contato@mellcognitivearchitecture.com.br](mailto:contato@mellcognitivearchitecture.com.br)

**Site:** <https://mellcognitivearchitecture.com.br/>

**Política de Privacidade:** <https://mellcognitivearchitecture.com.br/privacypolicy/>

**Termos de Uso:** <https://mellcognitivearchitecture.com.br/terms/>

---

## Status

Projeto em evolução controlada.

**Classificação:** presença institucional pública  
**Modelo operacional:** autonomia supervisionada  
**Autoridade decisória:** humana soberana  
**Fluxo:** `EXECUTE_REGISTER_SEAL_CONFIRM`

---

## Direitos

© 2026 MeLL Cognitive Architecture. Todos os direitos reservados.

IA aplicada · Governança cognitiva · Autonomia supervisionada
