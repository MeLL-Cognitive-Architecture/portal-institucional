const SERVICE_NAME = "MeLL Cognitive Architecture";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600"
};

const baseHeaders = {
  ...corsHeaders,
  "Content-Type": "application/json; charset=UTF-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff"
};

function jsonResponse(payload, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: {
      ...baseHeaders,
      ...extraHeaders
    }
  });
}

export async function onRequest(context) {
  const { request } = context;
  const method = request.method;

  if (method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  if (!["GET", "HEAD"].includes(method)) {
    return jsonResponse(
      {
        status: "rejected",
        service: SERVICE_NAME,
        component: "Cloudflare Pages Health Check",
        message: "Método HTTP não permitido.",
        allowed_methods: ["GET", "HEAD", "OPTIONS"],
        governance: {
          decision_authority: "humana-soberana",
          effect: "sem-efeito-institucional"
        },
        timestamp: new Date().toISOString()
      },
      405,
      {
        "Allow": "GET, HEAD, OPTIONS"
      }
    );
  }

  const healthData = {
    status: "ok",
    service: SERVICE_NAME,
    component: "Cloudflare Pages Health Check",
    environment: "cloudflare-pages",
    stage: "institucional-modular",
    governance: {
      model: "autonomia-supervisionada",
      decision_authority: "humana-soberana",
      flow: "EXECUTE_REGISTER_SEAL_CONFIRM"
    },
    checks: {
      runtime: "available",
      response: "json",
      cache_policy: "no-store"
    },
    timestamp: new Date().toISOString()
  };

  if (method === "HEAD") {
    return new Response(null, {
      status: 200,
      headers: baseHeaders
    });
  }

  return jsonResponse(healthData, 200);
}
