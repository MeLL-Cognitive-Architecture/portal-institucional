const ASK_WIDGET_THEME = '<style id="mell-ask-theme">.button.ghost.mell-ask-inline-trigger{gap:.5rem;border-color:rgba(125,211,252,.44);background:linear-gradient(135deg,rgba(56,189,248,.18),rgba(215,183,95,.1)),rgba(255,255,255,.04);color:#f8fafc;font-size:.96rem;font-weight:920;letter-spacing:.01em;box-shadow:0 14px 36px rgba(56,189,248,.11),inset 0 1px 0 rgba(255,255,255,.08)}.button.ghost.mell-ask-inline-trigger::before{content:"";display:inline-block;width:.46rem;height:.46rem;border-radius:999px;background:#f1d27a;box-shadow:0 0 0 .28rem rgba(241,210,122,.12),0 0 18px rgba(125,211,252,.28)}.button.ghost.mell-ask-inline-trigger:hover{border-color:rgba(125,211,252,.7);background:linear-gradient(135deg,rgba(56,189,248,.24),rgba(215,183,95,.14)),rgba(255,255,255,.055);color:#fff}</style>';
const ASK_WIDGET_SNIPPET = ASK_WIDGET_THEME + '<script src="/mell-atendimento-widget.js?v=20260524-hero-button-theme" defer></script>';

export async function onRequest(context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  return new HTMLRewriter()
    .on("body", {
      element(element) {
        element.append(ASK_WIDGET_SNIPPET, { html: true });
      },
    })
    .transform(response);
}
