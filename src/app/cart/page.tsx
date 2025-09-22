"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  PackageCheck,
  Heart,
  BadgePercent,
  ChevronRight,
  Gift,
  ArrowRight,
} from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

/* -------------------- helpers -------------------- */
const currency = (n: number) => `$${n.toFixed(2)}`;
const clamp = (n: number, min = 0) => (n < min ? min : n);
const FREE_SHIP_THRESHOLD = 50;

/* -------------------- page -------------------- */
export default function CartPage() {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    incrementItem,
    decrementItem,
    removeItem,
    setItemQuantity,
  } = useShoppingCart();

  const items = useMemo(() => Object.values(cartDetails ?? {}), [cartDetails]);
  const merchandise = ((totalPrice ?? 0) / 100) || 0;

  // demo shipping: $0 over threshold else $6.99
const shipFee = merchandise >= FREE_SHIP_THRESHOLD 
  ? 0 
  : merchandise > 0 
    ? 6.99 
    : 0;
  // demo tax: 8.5%
  const tax = merchandise > 0 ? +(merchandise * 0.085).toFixed(2) : 0;

  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState<{ code: string; off: number } | null>(null);
  const discount = promoApplied?.off ?? 0;
  const grand = clamp(merchandise + shipFee + tax - discount);

  const progress = clamp(Math.min((merchandise / FREE_SHIP_THRESHOLD) * 100, 100));

  function applyPromo() {
    const code = promo.trim().toUpperCase();
    if (!code) return;
    if (code === "WELCOME10") setPromoApplied({ code, off: 10 });
    else if (code === "SALE5") setPromoApplied({ code, off: 5 });
    else setPromoApplied(null);
  }

  return (
    <main className="mx-auto max-w-screen-2xl min-h-screen bg-white text-black mt-20">
      {/* Breadcrumb */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight size={16} />
          <span className="font-medium">Cart</span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: cart items */}
        <section className="lg:col-span-8">
          <Card>
            <CardHeader
              title={`Your Cart${cartCount ? ` (${cartCount})` : ""}`}
              subtitle="Review items, update quantities, or move to wishlist."
            />

            {/* Free shipping progress */}
            <div className="mb-4 rounded-2xl border p-3">
              {progress >= 100 ? (
                <div className="text-sm font-medium flex items-center gap-2">
                  <Truck size={16} /> You’ve unlocked <span className="underline">Free Standard Shipping</span>!
                </div>
              ) : (
                <div>
                  <div className="text-sm flex items-center gap-2">
                    <Truck size={16} />
                    Add <span className="font-semibold">{currency(FREE_SHIP_THRESHOLD - merchandise)}</span> more to get free shipping.
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-neutral-100 overflow-hidden">
                    <motion.div
                      className="h-full bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Items list */}
            <AnimatePresence mode="popLayout">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="text-lg font-semibold">Your cart is empty</div>
                  <p className="text-neutral-600 mt-1">Discover our latest arrivals and deals.</p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 mt-4 rounded-2xl border px-4 py-2 font-semibold hover:bg-neutral-50"
                  >
                    Continue Shopping <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ) : (
                <ul className="space-y-3">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {items.map((it: any) => {
                    const line = ((it.price ?? 0) / 100) * (it.quantity ?? 1);
                    return (
                      <motion.li
                        key={it.id}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex gap-3 p-3 rounded-2xl border"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={it.image ?? "/images/placeholder.jpg"}
                          alt={it.name}
                          className="h-24 w-24 rounded-xl object-cover bg-neutral-100"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium line-clamp-1">{it.name}</div>
                          {it.sku && (
                            <div className="text-xs text-neutral-600 mt-0.5">SKU: {it.sku}</div>
                          )}

                          {/* qty controls */}
                          <div className="mt-2 flex items-center gap-2">
                            <div className="inline-flex items-center rounded-xl border">
                              <button
                                onClick={() => decrementItem(it.id)}
                                className="p-2 hover:bg-neutral-50"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </button>
                              <input
                                className="w-12 text-center outline-none py-1"
                                value={it.quantity ?? 1}
                                onChange={(e) => {
                                  const q = parseInt(e.target.value || "1", 10);
                                  if (!Number.isNaN(q) && q > 0) setItemQuantity(it.id, q);
                                }}
                                inputMode="numeric"
                              />
                              <button
                                onClick={() => incrementItem(it.id)}
                                className="p-2 hover:bg-neutral-50"
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </button>
                            </div>

                            <div className="ml-3 text-sm text-neutral-600">
                              Unit: {currency((it.price ?? 0) / 100)}
                            </div>
                          </div>

                          {/* actions */}
                          <div className="mt-2 flex items-center gap-3 text-sm">
                            <button
                              onClick={() => removeItem(it.id)}
                              className="inline-flex items-center gap-1 text-red-600 hover:underline"
                            >
                              <Trash2 size={16} /> Remove
                            </button>
                            <button className="inline-flex items-center gap-1 hover:underline">
                              <Heart size={16} /> Save for later
                            </button>
                          </div>
                        </div>

                        <div className="font-semibold whitespace-nowrap">{currency(line)}</div>
                      </motion.li>
                    );
                  })}
                </ul>
              )}
            </AnimatePresence>

            {/* Gift option */}
            {items.length > 0 && (
              <div className="mt-4 rounded-2xl border p-3">
                <div className="flex items-center gap-2 font-medium">
                  <Gift size={16} /> Add a gift message (optional)
                </div>
                <textarea
                  rows={3}
                  className="mt-2 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Write a short message to include with the order."
                />
              </div>
            )}
          </Card>

          {/* Recommendations (static demo) */}
          {items.length > 0 && (
            <Card>
              <CardHeader title="You may also like" subtitle="Frequently bought together by other customers." />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {DEMO_UPSELLS.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    className="group rounded-2xl border p-3 hover:shadow-sm transition"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} className="h-28 w-full rounded-xl object-cover bg-neutral-100" />
                    <div className="mt-2 text-sm font-medium line-clamp-2">{p.title}</div>
                    <div className="text-sm text-neutral-600">{currency(p.price)}</div>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold rounded-full border px-2 py-1 group-hover:bg-neutral-50">
                      Add to cart <Plus size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          )}
        </section>

        {/* Right: summary */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-6 space-y-3">
            <Card>
              <CardHeader title="Order Summary" subtitle="Shipping and taxes calculated at checkout." />
              <div className="space-y-2 text-sm">
                <Row label="Merchandise" value={currency(merchandise)} />
                <Row label="Shipping" value={shipFee === 0 ? "Free" : currency(shipFee)} />
                <Row label="Estimated Tax" value={currency(tax)} />
                {discount > 0 && <Row label="Discount" value={`- ${currency(discount)}`} />}
                <div className="border-t pt-2 flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{currency(grand)}</span>
                </div>
              </div>

              {/* promo */}
              <div className="mt-4">
                <div className="text-sm font-medium mb-1 flex items-center gap-2">
                  <BadgePercent size={16} /> Promo Code
                </div>
                <div className="flex gap-2">
                  <input
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="WELCOME10"
                    className="flex-1 rounded-xl border px-3 py-2 outline-none"
                  />
                  <button
                    onClick={applyPromo}
                    className="rounded-xl border px-3 py-2 font-semibold hover:bg-neutral-50"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied ? (
                  <div className="mt-2 text-xs text-green-700">
                    Applied <span className="font-semibold">{promoApplied.code}</span> — {currency(promoApplied.off)} off
                  </div>
                ) : promo.length > 0 ? (
                  <div className="mt-2 text-xs text-neutral-600">Try <code>WELCOME10</code> or <code>SALE5</code></div>
                ) : null}
              </div>

              {/* trust */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-neutral-600">
                <div className="rounded-xl border p-2">
                  <ShieldCheck className="mx-auto mb-1" size={16} />
                  Secure
                </div>
                <div className="rounded- xl border p-2">
                  <Truck className="mx-auto mb-1" size={16} />
                  Fast
                </div>
                <div className="rounded-xl border p-2">
                  <PackageCheck className="mx-auto mb-1" size={16} />
                  Easy Returns
                </div>
              </div>

              {/* actions */}
              <div className="mt-4 grid gap-2">
                <Link
                  href="/checkout"
                  className="block text-center w-full rounded-2xl bg-black text-white px-4 py-3 font-semibold"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/"
                  className="block text-center w-full rounded-2xl border px-4 py-3 font-semibold hover:bg-neutral-50"
                >
                  Continue Shopping
                </Link>
              </div>
            </Card>

            {/* Shipping estimator (demo) */}
            <Card>
              <div className="text-sm font-medium mb-2">Estimate Shipping</div>
              <div className="grid grid-cols-2 gap-2">
                <select className="rounded-xl border px-3 py-2 outline-none">
                  <option value="PK">Pakistan</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                </select>
                <input className="rounded-xl border px-3 py-2 outline-none" placeholder="Postal code" />
              </div>
              <div className="mt-2 text-xs text-neutral-600">
                Final shipping cost is calculated at checkout based on address and method.
              </div>
            </Card>
          </div>
        </aside>
      </div>
    </main>
  );
}

/* -------------------- UI atoms -------------------- */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      layout
      className="rounded-2xl border bg-white p-4 md:p-5 shadow-sm"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.section>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-base md:text-lg font-semibold leading-tight">{title}</h2>
      {subtitle && <p className="text-sm text-neutral-600">{subtitle}</p>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-neutral-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

/* -------------------- demo upsells -------------------- */
const DEMO_UPSELLS = [
  {
    id: "cable-1",
    title: "USB-C Fast Charging Cable (1m)",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "case-2",
    title: "Shockproof Phone Case",
    price: 18.5,
    image:
      "/SpigenMagSafeCase.jpg",
  },
  {
    id: "buds-3",
    title: "Wireless Earbuds Lite",
    price: 34.99,
    image:
      "AirPodsPro(2nd Gen).webp",
  },
  {
    id: "strap-4",
    title: "Silicone Watch Strap",
    price: 9.99,
    image:
      "/watch.webp",
  },
];
