# Política de Segurança — MeLL Cognitive Architecture 🛡️

A segurança de dados e a governança cognitiva corporativa são as fundações do framework **CIA-Tec™** e do módulo **SovereignGuard/Gatekeeper**. Levamos a integridade do ecossistema a sério.

## Versões Suportadas

Apenas as baselines validadas e ativas recebem patches de segurança oficiais:

| Versão | Suportado | Notas |
| :--- | :---: | :--- |
| v5.0 (Baseline Ativa) |  | Versão atual estável implantada via IaC. |
| v4.x ou inferior | ❌ | Descontinuada em ambientes produtivos. |

## Reportando uma Vulnerabilidade

**Por favor, não abra uma Issue pública no GitHub para reportar uma vulnerabilidade ou falha de segurança.**

Se você descobrir um desvio na governança cognitiva, contornabilidade do *Gatekeeper*, ou vazamento em trânsito de dados confidenciais, siga o protocolo de segurança:

1. Envie um relatório detalhado diretamente ao proprietário e arquiteto principal (**Luiz Carlos Rezende da Silva**).
2. Inclua no relatório:
   * Passos exatos para reproduzir o comportamento (PoC).
   * O impacto estimado sobre o isolamento do ecossistema de nuvem.
   * Logs limpos (garantindo a exclusão de chaves privadas e tokens de ambiente).

### Tempo de Resposta (SLA)

Um posicionamento oficial com a triagem da falha será emitido em até **48 horas**. Se a falha for validada, um patch corretivo será gerado diretamente na infraestrutura declarativa do Terraform de forma silenciosa para proteger os clientes ativos.


