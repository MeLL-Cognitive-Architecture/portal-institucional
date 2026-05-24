const WIDGET_SNIPPET = `
<script src="/mell-atendimento-widget.js" defer></script>`;

export default async function injectAskWidget(request, context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();

  if (html.includes("/mell-atendimento-widget.js") || !html.includes("</body>")) {
    return new Response(html, response);
  }

  const headers = new Headers(response.headers);
  headers.delete("content-length");

  return new Response(html.replace("</body>", `${WIDGET_SNIPPET}\n</body>`), {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
