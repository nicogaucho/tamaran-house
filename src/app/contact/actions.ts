"use server";

import { Resend } from "resend";

export type ContactResult = { success: true } | { success: false; error: string };

export async function sendContactEmail(formData: FormData): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: "Server configuration error." };

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const checkin = (formData.get("checkin") as string | null)?.trim() ?? "";
  const checkout = (formData.get("checkout") as string | null)?.trim() ?? "";
  const room = (formData.get("room") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name) return { success: false, error: "Name is required." };
  if (!email) return { success: false, error: "Email address is required." };
  if (!message) return { success: false, error: "Message is required." };

  const resend = new Resend(apiKey);

  const html = `
<table cellpadding="8" cellspacing="0" style="font-family:sans-serif;font-size:14px;color:#1a1a1a;border-collapse:collapse;width:100%;max-width:560px">
  <tr><td colspan="2" style="background:#b5531a;color:#fff;padding:16px 20px;font-size:18px;font-weight:700;letter-spacing:0.04em">
    New enquiry from ${name}
  </td></tr>
  <tr style="background:#fdf6ef"><td style="width:140px;font-weight:600;border-bottom:1px solid #e5ddd3">Name</td><td style="border-bottom:1px solid #e5ddd3">${name}</td></tr>
  <tr><td style="font-weight:600;border-bottom:1px solid #e5ddd3">Email</td><td style="border-bottom:1px solid #e5ddd3"><a href="mailto:${email}" style="color:#b5531a">${email}</a></td></tr>
  <tr style="background:#fdf6ef"><td style="font-weight:600;border-bottom:1px solid #e5ddd3">Room type</td><td style="border-bottom:1px solid #e5ddd3">${room || "—"}</td></tr>
  <tr><td style="font-weight:600;border-bottom:1px solid #e5ddd3">Check-in</td><td style="border-bottom:1px solid #e5ddd3">${checkin || "—"}</td></tr>
  <tr style="background:#fdf6ef"><td style="font-weight:600;border-bottom:1px solid #e5ddd3">Check-out</td><td style="border-bottom:1px solid #e5ddd3">${checkout || "—"}</td></tr>
  <tr><td colspan="2" style="font-weight:600;padding-bottom:4px">Message</td></tr>
  <tr><td colspan="2" style="white-space:pre-wrap;background:#fdf6ef;padding:12px">${message}</td></tr>
</table>`;

  const { error } = await resend.emails.send({
    from: "Tamaran House <onboarding@resend.dev>",
    to: "tamaran.house@gmail.com",
    replyTo: email,
    subject: `New enquiry from ${name} — ${room || "room not specified"}`,
    html,
  });

  if (error) return { success: false, error: "Failed to send message. Please try again." };
  return { success: true };
}
