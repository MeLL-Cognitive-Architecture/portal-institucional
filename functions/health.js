export async function onRequest(context) {
  const healthData = {
    status: "ok",
    service: "MeLL Cognitive Architecture",
    environment: "cloudflare-pages",
    stage: "institucional-modular",
    timestamp: new Date().toISOString()
  };

  return new Response(JSON.stringify(healthData, null, 2), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*"
    }
  });
}
