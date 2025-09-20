"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight, Globe, CircleDollarSign, ShieldCheck, Truck, Headphones } from "lucide-react";

const LINKS = {
  shop: [
    { label: "New Arrivals", href: "/new" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Flash Deals", href: "/deals" },
    { label: "Gift Cards", href: "/gift-cards" },
    { label: "Brands", href: "/brands" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Track Order", href: "/orders/track" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Warranty", href: "/warranty" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Press", href: "/press" },
    { label: "Affiliates", href: "/affiliates" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
    { label: "Seller Policy", href: "/seller-policy" },
    { label: "Compliance", href: "/compliance" },
  ],
};

const SOCIAL = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter/X" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

// const PAYMENTS = [
//   { src: "/payments/visa.svg", alt: "Visa" },
//   { src: "/payments/mastercard.svg", alt: "Mastercard" },
//   { src: "/payments/amex.svg", alt: "Amex" },
//   { src: "/payments/paypal.svg", alt: "PayPal" },
//   { src: "/payments/applepay.svg", alt: "Apple Pay" },
//   { src: "/payments/googlepay.svg", alt: "Google Pay" },
//   { src: "/payments/cod.svg", alt: "Cash on Delivery" },
// ];

export default function FooterPro() {
  return (
    <footer className="mt-16 border-t bg-white dark:bg-neutral-950">
      {/* Trust bar */}
      <div className="border-b bg-gray-50/60 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">
            <TrustItem
              icon={<ShieldCheck className="h-5 w-5 text-yellow-600" />}
              title="Secure Payments"
              desc="PCI-DSS compliant checkout"
            />
            <TrustItem
              icon={<Truck className="h-5 w-5 text-yellow-600" />}
              title="Fast & Tracked Shipping"
              desc="Free over $50 in select regions"
            />
            <TrustItem
              icon={<Headphones className="h-5 w-5 text-yellow-600" />}
              title="24/7 Support"
              desc="Live chat & email"
            />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand + mini newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
      {/* Replace with your logo image */}
      <Image
        src="/logo.png" // apni logo image ka path yahan do (e.g. /public/logo.png)
        alt="ShopX Logo"
        width={36} // h-9 (9 * 4 = 36px)
        height={36}
        className="rounded-xl"
      />
      <span className="text-xl font-extrabold tracking-tight">ShopX</span>
    </Link>

            <p className="mt-4 max-w-md text-sm text-gray-600 dark:text-gray-300">
              Premium products, fast shipping, and friendly support. Join thousands of happy customers shopping smarter every day.
            </p>

            {/* mini newsletter */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex w-full max-w-md items-center rounded-xl border bg-gray-50 pr-1 focus-within:ring-2 focus-within:ring-yellow-500 dark:border-neutral-800 dark:bg-neutral-900"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-600 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-700"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* contact */}
            <ul className="mt-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> support@shopx.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +92 300 0000000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Karachi, Pakistan
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <LinkCol title="Shop" items={LINKS.shop} />
              <LinkCol title="Support" items={LINKS.support} />
              <LinkCol title="Company" items={LINKS.company} />
              <LinkCol title="Legal" items={LINKS.legal} />
            </div>

            {/* Social + payments + app badges */}
            <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
              {/* Social */}
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-yellow-200">Follow us</p>
                <div className="mt-3 flex gap-3">
                  {SOCIAL.map(({ Icon, href, label }) => (
                    <Link
                      aria-label={label}
                      key={label}
                      href={href}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-gray-100 hover:bg-gray-500 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Payments */}
              {/* <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">We accept</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {PAYMENTS.map((p) => (
                    <div key={p.alt} className="rounded-lg border bg-white p-2 dark:border-neutral-800 dark:bg-neutral-900">
                      <Image src={p.src} alt={p.alt} width={44} height={28} />
                    </div>
                  ))}
                </div>
              </div> */}

              {/* App badges */}
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Get our app</p>
                <div className="mt-3 flex gap-3">
                  <Link href="#" aria-label="Download on the App Store">
                    <Image
                      src="/google.webp"
                      alt="App Store"
                      width={140}
                      height={42}
                      className="rounded-md border dark:border-neutral-800"
                    />
                  </Link>
                  <Link href="#" aria-label="Get it on Google Play">
                    <Image
                      src="/google.webp"
                      alt="Google Play"
                      width={140}
                      height={42}
                      className="rounded-md border dark:border-neutral-800"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Locale / currency */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
                <Globe className="h-4 w-4" /> English (PK)
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
                <CircleDollarSign className="h-4 w-4" /> PKR (₨)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300 md:flex-row">
          <p>© {new Date().getFullYear()} ShopX. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/sitemap" className="hover:underline">Sitemap</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/cookies" className="hover:underline">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TrustItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm dark:bg-neutral-950 dark:shadow-none">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function LinkCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-gray-600 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-white"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
