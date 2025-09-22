"use client";

import { useState } from "react";
import { Mail, Gift, ShieldCheck, Check, Loader2, Copy } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  offerText?: string;        // e.g. "Get 10% off your first order"
  couponCode?: string;       // e.g. "WELCOME10"
  className?: string;
};

export default function NewsletterPro({
  title = "Join our newsletter",
  subtitle = "Get insider deals, early access & product tips. No spam, unsubscribe anytime.",
  offerText = "Get 10% OFF your first order",
  couponCode = "WELCOME10",
  className = "",
}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [couponRevealed, setCouponRevealed] = useState(false);

  // Honeypot (bot trap)
  const [website, setWebsite] = useState("");

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!validEmail(email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    if (!consent) {
      setMessage("Please accept marketing consent to continue.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          source: "newsletter-pro",
          website, // honeypot
        }),
      });

      if (res.ok) {
        setOk(true);
        // optionally show coupon after success
        setCouponRevealed(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function copyCoupon() {
    navigator.clipboard?.writeText(couponCode).catch(() => {});
  }

  return (
    <section
      className={`relative overflow-hidden rounded-3xl mt-4 border bg-white dark:bg-neutral-900 shadow-sm ${className}`}
      aria-label="Newsletter signup"
    >
      {/* Background gradient accents */}
      <div className=" mx-auto max-w-screen-2xl pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-2xl" />

      <div className="relative grid gap-8 p-6 md:p-10 md:grid-cols-2">
        {/* Left: Pitch */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300 px-3 py-1 w-fit text-sm font-semibold">
            <Gift className="h-4 w-4" /> {offerText}
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>

          <ul className="mt-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-yellow-500" />
              Early access to flash sales
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-yellow-500" />
              Weekly tips & buying guides
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-yellow-500" />
              100% privacy. No spam.
            </li>
          </ul>
        </div>

        {/* Right: Form / Success */}
        <div className="flex items-center">
          {!ok ? (
            <form
              onSubmit={onSubmit}
              className="w-full rounded-2xl bg-gray-50 dark:bg-neutral-800 p-5 md:p-6 shadow-inner"
            >
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-3">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Ali Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border bg-white dark:bg-neutral-900 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border bg-white dark:bg-neutral-900 pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>

                <label className="mt-1 inline-flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  I agree to receive marketing emails. Read our{" "}
                  <a className="underline" href="/privacy" target="_blank">
                    Privacy Policy
                  </a>
                  .
                </label>

                {message && (
                  <div className="rounded-lg bg-red-50 text-yellow-600 px-3 py-2 text-sm">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-3 transition disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Subscribing…
                    </>
                  ) : (
                    <>
                      <Gift className="h-4 w-4" />
                      Claim your discount
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-500">
                  We’ll send your welcome coupon and occasional updates. You can
                  unsubscribe anytime.
                </p>
              </div>
            </form>
          ) : (
            <div className="w-full rounded-2xl bg-emerald-50 dark:bg-yellow-600/30 p-6 text-yellow-900 dark:text-yellow-200 border border-yellow-200/50">
              <h3 className="text-xl font-bold">Youre in! </h3>
              <p className="mt-1 text-sm">
                Thanks for subscribing. Here’s your welcome coupon:
              </p>

              {couponRevealed && (
                <div className="mt-4 flex items-center gap-2">
                  <code className="rounded-lg bg-white/70 dark:bg-neutral-900/60 px-3 py-2 text-base font-bold tracking-wider">
                    {couponCode}
                  </code>
                  <button
                    onClick={copyCoupon}
                    className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm hover:bg-white/60 dark:hover:bg-neutral-800"
                  >
                    <Copy className="h-4 w-4" /> Copy
                  </button>
                </div>
              )}

              <p className="mt-3 text-xs">
                Apply this code at checkout. Also check your inbox for a
                confirmation email.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
