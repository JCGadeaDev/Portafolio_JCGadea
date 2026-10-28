import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

// El destinatario SIEMPRE se define en el servidor, nunca desde el navegador.
const TO = process.env.CONTACT_TO_EMAIL || "jcgambeta89@gmail.com";
// Dominio verificado en Resend (send.jcgadeadev.com)
const FROM = process.env.RESEND_FROM || "Portafolio JCGadeaDev <contacto@send.jcgadeadev.com>";
// Respuesta automática al visitante: solo si AUTO_REPLY=true
const AUTO_REPLY = process.env.AUTO_REPLY === "true";

const LOCALES = ["es", "en", "it"];

const autoReplies = {
  es: {
    subject: "Recibí tu mensaje · Juan Carlos Gadea",
    hello: (n) => `Hola ${n},`,
    body: "Gracias por escribirme. Recibí tu mensaje y te responderé personalmente en menos de 24 horas.",
    sign: "Juan Carlos Gadea",
  },
  en: {
    subject: "I got your message · Juan Carlos Gadea",
    hello: (n) => `Hi ${n},`,
    body: "Thanks for reaching out. I received your message and I will reply personally within 24 hours.",
    sign: "Juan Carlos Gadea",
  },
  it: {
    subject: "Ho ricevuto il tuo messaggio · Juan Carlos Gadea",
    hello: (n) => `Ciao ${n},`,
    body: "Grazie per avermi scritto. Ho ricevuto il tuo messaggio e ti risponderò personalmente entro 24 ore.",
    sign: "Juan Carlos Gadea",
  },
};

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const clean = (s, max) => String(s ?? "").trim().slice(0, max);
const oneLine = (s) => s.replace(/[\r\n]+/g, " ");
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot: los bots rellenan este campo oculto; respondemos "ok" sin enviar nada.
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const firstName = oneLine(clean(body.firstName, 60));
    const name = oneLine(clean(`${body.firstName ?? ""} ${body.lastName ?? ""}`, 120));
    const email = clean(body.email, 200);
    const phone = oneLine(clean(body.phone, 40));
    const service = oneLine(clean(body.service, 120));
    const message = clean(body.message, 5000);
    const lang = LOCALES.includes(body.locale) ? body.locale : "es";

    if (!name || !isEmail(email) || !message) {
      return NextResponse.json(
        { success: false, error: "Completa nombre, un correo válido y el mensaje." },
        { status: 400 }
      );
    }

    const subject = `Nuevo mensaje del portafolio${service ? ` · ${service}` : ""}`;

    // 1) Notificación para ti
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email, // al pulsar "Responder" le escribes directo al visitante
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:32px 0;">
          <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:12px; padding:28px;">
            <h2 style="margin:0 0 16px;">${esc(subject)}</h2>
            <p style="margin:4px 0;"><b>Nombre:</b> ${esc(name)}</p>
            <p style="margin:4px 0;"><b>Email:</b> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
            <p style="margin:4px 0;"><b>Teléfono:</b> ${esc(phone) || "—"}</p>
            <p style="margin:4px 0;"><b>Servicio:</b> ${esc(service) || "—"}</p>
            <p style="margin:4px 0;"><b>Idioma:</b> ${lang.toUpperCase()}</p>
            <hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;" />
            <p style="white-space:pre-wrap; margin:0;">${esc(message)}</p>
            <p style="margin-top:28px; color:#6b7280; font-size:13px;">Enviado desde el formulario de contacto de portafolio.jcgadeadev.com</p>
          </div>
        </div>
      `,
    });

    // Resend NO lanza excepción: devuelve { data, error }.
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "No se pudo enviar el mensaje. Intenta de nuevo." },
        { status: 502 }
      );
    }

    // 2) Respuesta automática al visitante (opcional). Si falla, no afecta al resultado.
    if (AUTO_REPLY) {
      const t = autoReplies[lang];
      const { error: ackError } = await resend.emails.send({
        from: FROM,
        to: email,
        replyTo: TO, // si el visitante responde, te llega a tu Gmail
        subject: t.subject,
        html: `
          <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:32px 0;">
            <div style="max-width:560px; margin:0 auto; background:#fff; border-radius:12px; padding:28px;">
              <p style="margin:0 0 12px;">${esc(t.hello(firstName || ""))}</p>
              <p style="margin:0 0 20px;">${esc(t.body)}</p>
              <p style="margin:0; font-weight:bold;">${esc(t.sign)}</p>
              <p style="margin:2px 0 0; color:#6b7280; font-size:13px;">Data Engineer &amp; Full Stack Developer</p>
              <p style="margin:2px 0 0; font-size:13px;"><a href="https://portafolio.jcgadeadev.com">portafolio.jcgadeadev.com</a></p>
            </div>
          </div>
        `,
      });
      if (ackError) console.error("Auto-reply error:", ackError);
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Error en /api/send:", err);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    );
  }
}