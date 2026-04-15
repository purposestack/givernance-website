import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = "givernance+contact@protonmail.com";
const FROM = "Givernance <noreply@givernance.app>";

interface DemoFormPayload {
  firstName: string;
  lastName: string;
  orgName: string;
  role: string;
  email: string;
  orgType?: string;
  teamSize?: string;
  currentTools?: string;
  matters?: string[];
}

function validatePayload(
  body: unknown,
): { ok: true; data: DemoFormPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const b = body as Record<string, unknown>;

  const requiredFields: (keyof DemoFormPayload)[] = [
    "firstName",
    "lastName",
    "orgName",
    "role",
    "email",
  ];

  for (const field of requiredFields) {
    if (!b[field] || typeof b[field] !== "string" || !(b[field] as string).trim()) {
      return { ok: false, error: `Missing required field: ${field}` };
    }
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test((b.email as string).trim())) {
    return { ok: false, error: "Invalid email address." };
  }

  return {
    ok: true,
    data: {
      firstName: (b.firstName as string).trim(),
      lastName: (b.lastName as string).trim(),
      orgName: (b.orgName as string).trim(),
      role: (b.role as string).trim(),
      email: (b.email as string).trim(),
      orgType: typeof b.orgType === "string" ? b.orgType.trim() : undefined,
      teamSize: typeof b.teamSize === "string" ? b.teamSize.trim() : undefined,
      currentTools:
        typeof b.currentTools === "string" ? b.currentTools.trim() : undefined,
      matters: Array.isArray(b.matters)
        ? (b.matters as unknown[])
            .filter((m): m is string => typeof m === "string")
        : [],
    },
  };
}

function buildEmailHtml(d: DemoFormPayload): string {
  const row = (label: string, value: string | undefined) =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;color:#635E58;font-size:14px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;font-size:14px;color:#1C1B19;">${value}</td></tr>`
      : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New demo request — Givernance</title></head>
<body style="font-family:Inter,system-ui,sans-serif;background:#FAFAF8;margin:0;padding:32px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;border:1px solid #E4E0D9;padding:32px;">
    <div style="margin-bottom:24px;">
      <span style="background:#E8F5EE;color:#1A5240;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:4px 12px;border-radius:999px;border:1px solid #CFE2D7;">New demo request</span>
    </div>
    <h1 style="font-size:22px;color:#1C1B19;margin:0 0 8px;">
      ${d.firstName} ${d.lastName} — ${d.orgName}
    </h1>
    <p style="color:#635E58;font-size:14px;margin:0 0 24px;">
      Submitted via <a href="https://givernance.app/demo" style="color:#2E7D5E;">givernance.app/demo</a>
    </p>

    <table style="width:100%;border-collapse:collapse;">
      ${row("First name", d.firstName)}
      ${row("Last name", d.lastName)}
      ${row("Organisation", d.orgName)}
      ${row("Role", d.role)}
      ${row("Email", `<a href="mailto:${d.email}" style="color:#2E7D5E;">${d.email}</a>`)}
      ${row("Org type", d.orgType)}
      ${row("Team size", d.teamSize)}
      ${row("Currently using", d.currentTools)}
      ${row("What matters", d.matters && d.matters.length > 0 ? d.matters.join(", ") : undefined)}
    </table>

    <div style="margin-top:24px;padding-top:24px;border-top:1px solid #E4E0D9;font-size:12px;color:#635E58;">
      Reply directly to <a href="mailto:${d.email}" style="color:#2E7D5E;">${d.email}</a> to schedule the demo.
    </div>
  </div>
</body>
</html>`;
}

function buildEmailText(d: DemoFormPayload): string {
  return [
    "New demo request — Givernance",
    "=".repeat(40),
    `Name: ${d.firstName} ${d.lastName}`,
    `Organisation: ${d.orgName}`,
    `Role: ${d.role}`,
    `Email: ${d.email}`,
    d.orgType ? `Org type: ${d.orgType}` : null,
    d.teamSize ? `Team size: ${d.teamSize}` : null,
    d.currentTools ? `Currently using: ${d.currentTools}` : null,
    d.matters && d.matters.length > 0
      ? `What matters: ${d.matters.join(", ")}`
      : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const validation = validatePayload(body);
  if (!validation.ok) {
    return NextResponse.json(
      { success: false, error: validation.error },
      { status: 422 },
    );
  }

  const data = validation.data;

  const { RESEND_API_KEY } = process.env;

  // If RESEND_API_KEY is not configured → log and return success (dev fallback).
  if (!RESEND_API_KEY) {
    console.log(
      "[demo/route] RESEND_API_KEY not configured — logging form submission:\n",
      JSON.stringify(data, null, 2),
    );
    return NextResponse.json({ success: true });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      replyTo: data.email,
      subject: `Demo request: ${data.firstName} ${data.lastName} — ${data.orgName}`,
      text: buildEmailText(data),
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("[demo/route] Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[demo/route] Failed to send email:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 },
    );
  }
}
