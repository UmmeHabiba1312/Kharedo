"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Zap,
  ChevronRight,
} from "lucide-react";

/**
 * HeroUltra — Expert e‑commerce hero (Amazon/Daraz/Alibaba vibes)
 * - Smart top promo strip with marquee (pauses on hover, respects reduced motion)
 * - Tall headers supported (negative margin + top blend gradient)
 * - Desktop left nav (category rail) + primary hero + promo cards
 * - Floating glass deal chips (animated)
 * - Trust badges row
 * - Bottom deals ticker
 *
 * Drop-in usage: <HeroUltra />
 * Tailwind required, lucide-react + framer-motion installed.
 */

// ---------- Small UI Atoms ----------
function Chip({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-2xl border px-3 py-1.5 text-xs md:text-sm bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-800 transition shadow-sm hover:shadow"
    >
      {label}
    </Link>
  );
}

function Badge({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border bg-white/70 dark:bg-neutral-900/70 p-3 shadow-sm">
      <div className="rounded-xl border bg-white/60 dark:bg-neutral-900/60 p-2">
        <Icon className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs opacity-70">{desc}</div>
      </div>
    </div>
  );
}

export default function HeroUltra() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-20 mx-auto max-w-screen-2xl">
      {/* Top blend for big headers */}
      <div className="pointer-events-none mt-20 absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/20 to-transparent dark:from-black/40 z-10" />

      {/* === Top Promo Strip === */}
      <div className="relative  text-white">
        <div className="container mx-auto flex items-center gap-4 px-4 py-2 text-sm font-semibold">
          <span className="flex items-center gap-1 shrink-0">
            <Sparkles className="h-4 w-4" /> 
          </span>

          <div
            className={`flex gap-8 whitespace-nowrap overflow-hidden group ${
              prefersReducedMotion ? "" : "hero-ultra-marquee"
            }`}
            aria-live="polite"
          >
            {[
              
            ].map((t, i) => (
              <span key={i} className="opacity-95 group-hover:[animation-play-state:paused]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* === Background (subtle radial glow) === */}
      <div className="absolute inset-0 -z-10 ">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.35),transparent)] blur-2xl" />
      </div>

      {/* === Main Grid === */}
      <div className="container mx-auto grid gap-6 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-12">
        {/* Left Category Rail (desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="rounded-2xl border bg-white/80 p-2 shadow-sm backdrop-blur dark:bg-neutral-900/80">
            {[
              "Mobiles",
              "Laptops",
              "Fashion",
              "Home & Kitchen",
              "Beauty",
              "Appliances",
              "Gaming",
              "Grocery",
            ].map((c) => (
              <Link
                key={c}
                href={`/c/${c.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
              >
                <span>{c}</span>
                <ChevronRight className="h-4 w-4 opacity-50" />
              </Link>
            ))}
          </nav>
        </aside>

        {/* Center: Big Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border shadow-lg lg:col-span-6"
        >
          <Image
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600"
            alt="New season essentials"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />

          <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-white md:left-10">
            <div className="inline-flex items-center gap-1 rounded-full bg-yellow-400/90 px-3 py-1 text-[11px] tracking-wide text-black">
              <Star className="h-3.5 w-3.5 fill-black" /> Top Rated: 4.8/5 by 50k+ shoppers
            </div>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] md:text-5xl">
              Mega Savings on <span className="text-yellow-300">New Season</span> Drops
            </h1>
            <p className="mt-3 max-w-md text-base opacity-90 md:text-lg">
              Curated bestsellers, official warranties, and next‑day delivery in major cities across Pakistan.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/collections/new"
                className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-black shadow hover:bg-yellow-300"
              >
                Shop New Arrivals <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/sale"
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/15"
              >
                View Mega Deals
              </Link>
            </div>

            {/* Category Chips (mobile/desktop) */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { l: "Mobiles", h: "/c/mobiles" },
                { l: "Laptops", h: "/c/laptops" },
                { l: "Fashion", h: "/c/fashion" },
                { l: "Home & Kitchen", h: "/c/home" },
                { l: "Beauty", h: "/c/beauty" },
              ].map((x) => (
                <Chip key={x.l} label={x.l} href={x.h} />
              ))}
            </div>
          </div>

          {/* Floating glass promos */}
          {/* <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="absolute bottom-6 left-6 hidden rounded-2xl border bg-white/90 p-3 shadow-md backdrop-blur md:block dark:bg-neutral-900/90"
          > */}
            {/* <div className="text-xs opacity-70">Today’s pick</div> */}
            {/* <div className="text-sm font-semibold">Noise‑Canceling Buds</div> */}
            {/* <div className="text-xs">PKR 5,499</div> */}
          {/* </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute right-6 top-6 hidden rounded-2xl border bg-white/90 p-3 shadow-md backdrop-blur md:block dark:bg-neutral-900/90"
          >
            <div className="text-xs opacity-70">Hot</div>
            <div className="text-sm font-semibold">Gaming Monitors</div>
            <div className="text-xs">From PKR 39,999</div>
          </motion.div>
        </motion.div>

        {/* Right: Stacked Promo Cards (desktop) */}
        <div className="grid grid-cols-1 gap-6 lg:col-span-3">
          {[
            {
              title: "Ultrabooks & Creator Gear",
              line: "Up to 25% off • Limited stock",
              href: "/c/laptops",
              img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600",
            },
            {
              title: "Smart Home & Appliances",
              line: "Bundle & Save",
              href: "/c/appliances",
              img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1600",
            },
          ].map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="relative overflow-hidden rounded-3xl border bg-white shadow-lg dark:bg-neutral-900"
            >
              <div className="relative h-44 w-full">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-xs opacity-80">Featured</div>
                <div className="text-lg font-bold leading-tight">{card.title}</div>
                <div className="mt-0.5 text-xs opacity-90">{card.line}</div>
                <Link
                  href={card.href}
                  className="mt-2 inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Explore now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto grid grid-cols-2 gap-4 px-4 pb-6 md:grid-cols-4">
        <Badge icon={Truck} title="Fast Delivery" desc="2–5 days nationwide" />
        <Badge icon={RotateCcw} title="7‑day Returns" desc="Hassle‑free process" />
        <Badge icon={ShieldCheck} title="Warranty" desc="Official brand warranty" />
        <Badge icon={Zap} title="Best Prices" desc="Price‑match promise" />
      </div>

      {/* Bottom Deals Ticker */}
      <div className="border-t bg-white/70 backdrop-blur dark:bg-neutral-950/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm">
            <div className="shrink-0 font-semibold">🔥 Mega Deals:</div>
            {[
              "iPhone cases from PKR 599",
              "Men’s Tees buy 2 get 1",
              "Kitchen sets 30% off",
              "Smartwatches under PKR 9,999",
              "Makeup combos 20% off",
            ].map((d) => (
              <Link
                key={d}
                href="/c/sale"
                className="shrink-0 rounded-xl bg-black/5 px-3 py-1 hover:bg-black/10 dark:bg-white/10"
              >
                {d}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for marquee (kept local to component) */}
      <style jsx global>{`
        .hero-ultra-marquee {
          display: flex;
          gap: 2rem;
          animation: hero-marquee 22s linear infinite;
        }
        .hero-ultra-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes hero-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
