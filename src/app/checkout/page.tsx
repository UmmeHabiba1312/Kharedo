"use client";

import {useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CreditCard,
  Truck,
  Wallet,
  BadgePercent,
  ShieldCheck,
  PackageCheck,
  MapPin,
  Phone,
  Mail,
  // ChevronDown,
  ChevronRight,
  Lock,
} from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

// ---- helpers ----
const currency = (n: number) => `$${n.toFixed(2)}`;
const clamp = (n: number, min = 0) => (n < min ? min : n);

type ShippingMethod = "standard" | "express";
type PaymentMethod = "cod" | "card" | "wallet";

export default function CheckoutPage() {
  const { cartDetails,  totalPrice } = useShoppingCart();
  const items = useMemo(() => Object.values(cartDetails ?? {}), [cartDetails]);
  const merchandise = ((totalPrice ?? 0) / 100) || 0;

  const [shipping, setShipping] = useState<ShippingMethod>("standard");
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState<{ code: string; off: number } | null>(null);

  // shipping fees
  const shipFee = shipping === "express" ? 14.99 : merchandise >= 50 ? 0 : 6.99;
  // simple tax: 8.5% (adjust for your region)
  const tax = merchandise > 0 ? +(merchandise * 0.085).toFixed(2) : 0;
  const discount = promoApplied?.off ?? 0;
  const grand = clamp(merchandise + shipFee + tax - discount);

  function applyPromo() {
    const code = promo.trim().toUpperCase();
    if (!code) return;
    // demo rules
    if (code === "WELCOME10") setPromoApplied({ code, off: 10 });
    else if (code === "SALE5") setPromoApplied({ code, off: 5 });
    else setPromoApplied(null);
  }

  // ---- simple form state (no external libs needed) ----
  const [form, setForm] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    saveAsDefault: true,
    gift: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    agree: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    // minimal required checks
    if (!form.agree) {
      alert("Please agree to the Terms & Privacy to continue.");
      return;
    }
    if (!form.firstName || !form.lastName || !form.address || !form.city || !form.postal) {
      alert("Please complete shipping address.");
      return;
    }
    if (payment === "card" && (!form.cardNumber || !form.cardExpiry || !form.cardCvc)) {
      alert("Please enter card details.");
      return;
    }
    // Normally: call your /api/checkout -> create order -> redirect to success/payment
    alert("Order placed successfully (demo). You can wire this to your API now.");
  }

  return (
    <main className="min-h-screen bg-white text-black mt-20">
      {/* Top breadcrumb / banner */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight size={16} />
          <span className="font-medium">Checkout</span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Forms */}
        <form onSubmit={placeOrder} className="lg:col-span-8 space-y-6">
          {/* Contact */}
          <Card>
            <CardHeader title="Contact" subtitle="We’ll use these to send updates about your order." icon={<Mail />} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={onChange}
                icon={<Mail size={16} />}
                required
              />
              <TextInput
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+92 3XX XXXXXXX"
                value={form.phone}
                onChange={onChange}
                icon={<Phone size={16} />}
                pattern="^[0-9+\-() ]{7,}$"
              />
            </div>
          </Card>

          {/* Shipping */}
          <Card>
            <CardHeader title="Shipping Address" subtitle="Enter the address where you want your order delivered." icon={<MapPin />} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TextInput label="First name" name="firstName" value={form.firstName} onChange={onChange} required />
              <TextInput label="Last name" name="lastName" value={form.lastName} onChange={onChange} required />
            </div>
            <TextInput label="Address" name="address" value={form.address} onChange={onChange} placeholder="Street, house no." required />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <TextInput label="City" name="city" value={form.city} onChange={onChange} required />
              <TextInput label="State/Province" name="state" value={form.state} onChange={onChange} />
              <TextInput label="Postal Code" name="postal" value={form.postal} onChange={onChange} required />
            </div>
            <div className="flex items-center gap-2 pt-2">
              <input id="saveAsDefault" name="saveAsDefault" type="checkbox" checked={form.saveAsDefault} onChange={onChange} className="h-4 w-4 rounded border-neutral-300" />
              <label htmlFor="saveAsDefault" className="text-sm">Save this address for next time</label>
            </div>
          </Card>

          {/* Shipping Method */}
          <Card>
            <CardHeader title="Shipping Method" subtitle="Choose how fast you want it delivered." icon={<Truck />} />
            <div className="grid gap-3">
              <RadioRow
                checked={shipping === "standard"}
                onChange={() => setShipping("standard")}
                title="Standard (3–5 business days)"
                desc={merchandise >= 50 ? "Free over $50" : currency(6.99)}
                badge="Best value"
              />
              <RadioRow
                checked={shipping === "express"}
                onChange={() => setShipping("express")}
                title="Express (1–2 business days)"
                desc={currency(14.99)}
              />
            </div>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader title="Payment" subtitle="All transactions are secure and encrypted." icon={<ShieldCheck />} />
            <div className="grid gap-3">
              <RadioRow
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
                title="Cash on Delivery"
                desc="Pay with cash when your order arrives."
                icon={<PackageCheck />}
              />
              <RadioRow
                checked={payment === "card"}
                onChange={() => setPayment("card")}
                title="Credit / Debit Card"
                desc="Visa, Mastercard"
                icon={<CreditCard />}
              />
              <AnimatePresence initial={false}>
                {payment === "card" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      <TextInput label="Name on card" name="cardName" value={form.cardName} onChange={onChange} required />
                      <TextInput label="Card number" name="cardNumber" value={form.cardNumber} onChange={onChange} placeholder="4242 4242 4242 4242" inputMode="numeric" pattern="^[0-9 ]{12,22}$" required />
                      <TextInput label="Expiry (MM/YY)" name="cardExpiry" value={form.cardExpiry} onChange={onChange} placeholder="12/27" pattern="^(0[1-9]|1[0-2])\/\d{2}$" required />
                      <TextInput label="CVC" name="cardCvc" value={form.cardCvc} onChange={onChange} placeholder="123" inputMode="numeric" pattern="^[0-9]{3,4}$" required />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <RadioRow
                checked={payment === "wallet"}
                onChange={() => setPayment("wallet")}
                title="Wallet / PayPal"
                desc="Pay using your wallet balance or PayPal account."
                icon={<Wallet />}
              />
            </div>

            <div className="pt-3">
              <label htmlFor="gift" className="text-sm font-medium">Gift message (optional)</label>
              <textarea
                id="gift"
                name="gift"
                value={form.gift}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                rows={3}
                placeholder="Write a short message to include with the order."
              />
            </div>

            <div className="flex items-start gap-2 pt-3">
              <input id="agree" name="agree" type="checkbox" checked={form.agree} onChange={onChange} className="h-4 w-4 rounded border-neutral-300 mt-1" />
              <label htmlFor="agree" className="text-sm">
                I agree to the <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </label>
            </div>
          </Card>

          {/* Place order button (mobile shows full width; desktop aligns left) */}
          <div className="lg:hidden">
            <button
              type="submit"
              className="w-full rounded-2xl bg-black text-white px-4 py-3 font-semibold flex items-center justify-center gap-2"
            >
              <Lock size={18} /> Place Order  {currency(grand)}
            </button>
          </div>
        </form>

        {/* Right: Summary */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-6">
            <SummaryCard
              items={items}
              merchandise={merchandise}
              shipFee={shipFee}
              tax={tax}
              discount={discount}
              grand={grand}
              promo={promo}
              setPromo={setPromo}
              promoApplied={promoApplied}
              applyPromo={applyPromo}
            />

            <div className="hidden lg:block mt-3">
              <button
                formAction=""
                onClick={(e) => {
                  e.preventDefault();
                  const formEl = document.querySelector("form");
                  (formEl as HTMLFormElement)?.requestSubmit();
                }}
                className="w-full rounded-2xl bg-black text-white px-4 py-3 font-semibold flex items-center justify-center gap-2"
              >
                <Lock size={18} /> Place Order {currency(grand)}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

/* ----------------- UI atoms ----------------- */

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

function CardHeader({ title, subtitle, icon }: { title: string; subtitle?: string; icon?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <h2 className="text-base md:text-lg font-semibold leading-tight">{title}</h2>
        {subtitle && <p className="text-sm text-neutral-600">{subtitle}</p>}
      </div>
    </div>
  );
}

function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: React.ReactNode;
  }
) {
  const { label, icon, ...rest } = props;
  const id = rest.id || rest.name || `${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium">{label}</span>
      <div className="mt-1 flex items-center rounded-xl border bg-white px-3">
        {icon && <span className="mr-2 opacity-70">{icon}</span>}
        <input
          id={id}
          {...rest}
          className="w-full py-2 outline-none placeholder:text-neutral-400"
        />
      </div>
    </label>
  );
}

function RadioRow({
  checked,
  onChange,
  title,
  desc,
  badge,
  icon,
}: {
  checked: boolean;
  onChange: () => void;
  title: string;
  desc: string;
  badge?: string;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-full text-left rounded-2xl border px-4 py-3 transition ${
        checked ? "border-black shadow-[0_0_0_3px_rgba(0,0,0,0.05)]" : "hover:border-neutral-400"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`h-5 w-5 rounded-full border grid place-items-center ${checked ? "border-black" : "border-neutral-400"}`}>
          <div className={`h-2.5 w-2.5 rounded-full ${checked ? "bg-black" : "bg-transparent"}`} />
        </div>
        {icon && <div className="opacity-80">{icon}</div>}
        <div className="flex-1">
          <div className="font-semibold flex items-center gap-2">
            {title}
            {badge && <span className="text-xs rounded-full bg-neutral-100 px-2 py-0.5">{badge}</span>}
          </div>
          <div className="text-sm text-neutral-600">{desc}</div>
        </div>
      </div>
    </button>
  );
}

function SummaryCard({
  items,
  merchandise,
  shipFee,
  tax,
  discount,
  grand,
  promo,
  setPromo,
  promoApplied,
  applyPromo,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  merchandise: number;
  shipFee: number;
  tax: number;
  discount: number;
  grand: number;
  promo: string;
  setPromo: (v: string) => void;
  promoApplied: { code: string; off: number } | null;
  applyPromo: () => void;
}) {
  return (
    <Card>
      <CardHeader
        title="Order Summary"
        subtitle="Review your items and totals before placing the order."
        icon={<BadgePercent />}
      />

      {/* Items */}
      <div className="space-y-3 max-h-[320px] overflow-auto pr-1">
        {items.length === 0 ? (
          <div className="text-sm text-neutral-600">No items in cart.</div>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          items.map((item: any) => (
            <div key={item.id} className="flex gap-3 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image ?? "/images/placeholder.jpg"}
                alt={item.name}
                className="h-14 w-14 rounded-lg object-cover bg-neutral-100"
              />
              <div className="flex-1">
                <div className="text-sm font-medium line-clamp-1">{item.name}</div>
                <div className="text-xs text-neutral-600">Qty: {item.quantity}</div>
              </div>
              <div className="text-sm font-semibold">
                {currency(((item.price ?? 0) / 100) * (item.quantity ?? 1))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Promo */}
      <div className="mt-4">
        <div className="text-sm font-medium mb-1">Promo Code</div>
        <div className="flex items-stretch gap-2">
          <input
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            placeholder="WELCOME10"
            className="flex-1 rounded-xl border px-3 py-2 outline-none"
          />
          <button
            onClick={applyPromo}
            className="px-4 py-2 rounded-xl border font-semibold hover:bg-neutral-50"
          >
            Apply
          </button>
        </div>
        {promoApplied ? (
          <div className="mt-2 text-xs text-green-700">
            Applied <span className="font-semibold">{promoApplied.code}</span> — {currency(promoApplied.off)} off
          </div>
        ) : promo.length > 0 ? (
          <div className="mt-2 text-xs text-neutral-600">Try codes: <code>WELCOME10</code> or <code>SALE5</code></div>
        ) : null}
      </div>

      {/* Totals */}
      <div className="mt-4 space-y-2 text-sm">
        <Row label="Merchandise" value={currency(merchandise)} />
        <Row label="Shipping" value={shipFee === 0 ? "Free" : currency(shipFee)} />
        <Row label="Tax" value={currency(tax)} />
        {discount > 0 && <Row label="Discount" value={`- ${currency(discount)}`} />}
        <div className="border-t pt-2 flex items-center justify-between text-base font-semibold">
          <span>Total</span>
          <span>{currency(grand)}</span>
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-neutral-600">
        <div className="rounded-xl border p-2">
          <ShieldCheck className="mx-auto mb-1" size={16} />
          Secure
        </div>
        <div className="rounded-xl border p-2">
          <Truck className="mx-auto mb-1" size={16} />
          Fast Delivery
        </div>
        <div className="rounded-xl border p-2">
          <PackageCheck className="mx-auto mb-1" size={16} />
          Easy Returns
        </div>
      </div>
    </Card>
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
