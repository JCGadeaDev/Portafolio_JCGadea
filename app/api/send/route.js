import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { to, name, subject, message } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "Faltan parámetros requeridos (to, subject, message)" },
        { status: 400 }
      );
    }

    const emailHTML = `
      <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 12px; padding: 32px;">
          <h2>${subject}</h2>
          <p>Hola ${name || "👋"},</p>
          <p>${message}</p>
          <p style="margin-top: 32px; color: #6b7280; font-size: 14px;">— Enviado desde el portafolio de Juan Carlos</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'Juan Carlos - Portafolio <sandbox@resend.dev>', // sin dominio verificado funciona
      to,
      subject,
      html: emailHTML,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
