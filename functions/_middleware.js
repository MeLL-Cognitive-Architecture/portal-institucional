const ASK_WIDGET_THEME = '<style id="mell-ask-theme">.button.ghost.mell-ask-inline-trigger{gap:.5rem;border:1px solid #0f172a;background:#f8fafc;color:#02111f;font-size:1rem;font-weight:900;letter-spacing:0;box-shadow:0 14px 34px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.72);transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease;color 180ms ease}.button.ghost.mell-ask-inline-trigger::before{content:none}.button.ghost.mell-ask-inline-trigger:hover{transform:translateY(-4px);border-color:#0f172a;background:#fff;color:#020617;box-shadow:0 20px 46px rgba(0,0,0,.34),0 0 0 1px rgba(125,211,252,.52),inset 0 1px 0 rgba(255,255,255,.9)}.button.ghost.mell-ask-inline-trigger:focus-visible{outline:3px solid rgba(125,211,252,.9);outline-offset:4px}</style>';
const ASK_WIDGET_SNIPPET = ASK_WIDGET_THEME + '<script src="/mell-atendimento-widget.js?v=20260524-light-hero-cta" defer></script>';

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
