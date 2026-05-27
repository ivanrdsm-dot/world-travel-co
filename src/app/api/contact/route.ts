import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/data/contact";

export const runtime = "nodejs";

const FROM_FALLBACK = "WTC <onboarding@resend.dev>";  // Resend's testing sender
const TO_FALLBACK   = contact.email;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, email, telefono, tipo, destino, personas, mes, presupuesto, mensaje } = data;

    if (!nombre || !email) {
      return NextResponse.json({ error: "Nombre y email son requeridos" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Graceful fallback: still works without key, just doesn't send
      console.warn("[contact] RESEND_API_KEY missing — request logged but not emailed");
      return NextResponse.json({ ok: true, mock: true });
    }

    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM ?? FROM_FALLBACK;
    const to   = process.env.CONTACT_TO   ?? TO_FALLBACK;

    const subject = `🌍 Cotización · ${tipo ?? "Viaje"} a ${destino ?? "destino"} · ${nombre}`;

    const html = `
      <div style="font-family:-apple-system,system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;color:#0F1A24">
        <div style="border-bottom:2px solid #F26B3A;padding-bottom:16px;margin-bottom:24px">
          <div style="font-size:22px;font-weight:800">world travel<span style="color:#F26B3A">.</span></div>
          <div style="font-size:12px;color:#8A97A2;text-transform:uppercase;letter-spacing:2px;margin-top:4px">Nueva cotización</div>
        </div>
        <h1 style="font-family:Georgia,serif;font-size:28px;line-height:1.1;margin:0 0 8px">${escapeHtml(nombre)}</h1>
        <p style="margin:0 0 24px;color:#5C6B78">${escapeHtml(email)}${telefono ? ` · ${escapeHtml(telefono)}` : ""}</p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          ${row("Tipo",        tipo)}
          ${row("Destino",     destino)}
          ${row("Personas",    personas)}
          ${row("Mes",         mes)}
          ${row("Presupuesto", presupuesto)}
        </table>
        ${mensaje ? `
          <div style="background:#F8FAFB;border-left:3px solid #F26B3A;padding:16px;border-radius:8px;margin-bottom:24px">
            <p style="font-size:11px;color:#8A97A2;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px">Mensaje</p>
            <p style="margin:0;line-height:1.6">${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>
          </div>
        ` : ""}
        <a href="https://wa.me/${contact.whatsappRaw}?text=Hola%20${encodeURIComponent(nombre)}%2C%20vi%20tu%20cotizaci%C3%B3n"
           style="display:inline-block;padding:14px 24px;background:#25D366;color:white;text-decoration:none;border-radius:999px;font-weight:600">
          Responder por WhatsApp →
        </a>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html
    });

    if (result.error) {
      console.error("[contact] resend error", result.error);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (e: any) {
    console.error("[contact] exception", e);
    return NextResponse.json({ error: e.message ?? "unknown" }, { status: 500 });
  }
}

function row(label: string, value: any) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 0;font-size:11px;color:#8A97A2;text-transform:uppercase;letter-spacing:2px;width:120px">${label}</td>
      <td style="padding:8px 0;font-weight:600">${escapeHtml(String(value))}</td>
    </tr>
  `;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
