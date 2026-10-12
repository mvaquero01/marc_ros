// Reenvía el aviso de nueva cita a n8n. La URL del webhook y el secreto
// solo existen aquí (variables de entorno de Vercel), nunca en el navegador.
const CAMPOS = ["id", "clienteNombre", "clienteTel", "servicio", "duracionMin", "peluquero", "fecha", "hora", "precio"];

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { N8N_WEBHOOK_CITAS, N8N_WEBHOOK_SECRET } = process.env;
  if (!N8N_WEBHOOK_CITAS || !N8N_WEBHOOK_SECRET) return res.status(500).end();

  const cita = Object.fromEntries(CAMPOS.map(c => [c, req.body?.[c] ?? ""]));
  try {
    const r = await fetch(N8N_WEBHOOK_CITAS, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Webhook-Secret": N8N_WEBHOOK_SECRET },
      body: JSON.stringify(cita),
    });
    res.status(r.ok ? 200 : 502).end();
  } catch {
    res.status(502).end();
  }
}
