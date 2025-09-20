export const runtime = "edge"; // or "nodejs" if you prefer

import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// super basic in-memory rate limit (per edge instance)
const limits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQ = 5;

export async function POST(req: Request) {
  try {
    const { email, name, source, website } = await req.json();

    // Honeypot (bot fills hidden field)
    if (website && String(website).trim() !== "") {
      // pretend ok (no hint to bots)
      return NextResponse.json({ ok: true }, { status: 204 });
    }

    if (!email || !EMAIL_RE.test(String(email))) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // Rate limit
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    const now = Date.now();
    const prev = limits.get(ip) || { count: 0, ts: now };
    if (now - prev.ts > WINDOW_MS) {
      limits.set(ip, { count: 1, ts: now });
    } else {
      if (prev.count >= MAX_REQ) {
        return NextResponse.json({ error: "Too many requests." }, { status: 429 });
      }
      limits.set(ip, { count: prev.count + 1, ts: prev.ts });
    }

    // Build payload
    const userAgent = req.headers.get("user-agent") || "";
    const referer = req.headers.get("referer") || "";
    const payload = {
      email: String(email).toLowerCase().trim(),
      name: name ? String(name).trim() : undefined,
      source: source || "newsletter",
      ip,
      userAgent,
      referer,
      ts: new Date().toISOString(),
    };

    // Option A: send to n8n webhook
    const n8nUrl = process.env.N8N_NEWSLETTER_WEBHOOK_URL;
    const secret = process.env.N8N_SECRET || "";

    if (n8nUrl) {
      const r = await fetch(n8nUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-secret": secret,
        },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const txt = await r.text();
        console.error("n8n error", r.status, txt);
        // don't fail the user; you can choose to fail if needed
      }
    }

    // Option B (later): Mailchimp/Brevo/Sendgrid API integrate here

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Newsletter API error:", e);
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
}
