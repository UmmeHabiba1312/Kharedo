"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, ChevronRight } from "lucide-react";

/**
 * Drop-in expert category page for Next.js (App Router)
 * Path suggestion: app/mobiles/page.tsx
 * Deps: tailwindcss, framer-motion, lucide-react
 *
 * Notes:
 * - Replace demo images with your own /public assets OR allow remote images via next.config.js
 * - Each section renders exactly 6 cards (demo data included)
 * - Fully responsive: 2 cols (mobile) → 3 cols (md) → 6 cols (xl)
 * - Smooth staggered animations on scroll + hover effects
 */

// ---------- Demo Data (replace with live data) ----------
const smartphones = [
  {
    id: "sp1",
    title: "iPhone 15 Pro Max",
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    sold: 1240,
    badge: "Top Rated",
    image:
      "/iPhone 15 Pro Max.webp",
  },
  {
    id: "sp2",
    title: "Samsung Galaxy S24 Ultra",
    price: 1099,
    oldPrice: 1199,
    rating: 4.8,
    sold: 980,
    badge: "Trending",
    image:
      "/SamsungGalaxyS24Ultra.webp",
  },
  {
    id: "sp3",
    title: "Google Pixel 8 Pro",
    price: 999,
    oldPrice: 1099,
    rating: 4.7,
    sold: 640,
    image:
      "/GooglePixel8Pro.webp",
  },
  {
    id: "sp4",
    title: "OnePlus 12",
    price: 799,
    oldPrice: 899,
    rating: 4.6,
    sold: 420,
    badge: "Best Value",
    image:
      "/OnePlus12.avif",
  },
  {
    id: "sp5",
    title: "Xiaomi 14 Pro",
    price: 749,
    oldPrice: 829,
    rating: 4.5,
    sold: 510,
    image:
      "/Xiaomi14Pro.jpg",
  },
  {
    id: "sp6",
    title: "Nothing Phone (2)",
    price: 699,
    oldPrice: 759,
    rating: 4.4,
    sold: 360,
    image:
      "/NothingPhone(2).webp",
  },
];

const tablets = [
  {
    id: "tb1",
    title: "iPad Pro 12.9 (M2)",
    price: 1099,
    oldPrice: 1199,
    rating: 4.8,
    sold: 870,
    badge: "Creator's Choice",
    image:
      "/iPadPro12.9(M2).jpg",
  },
  {
    id: "tb2",
    title: "Samsung Galaxy Tab S9+",
    price: 899,
    oldPrice: 999,
    rating: 4.6,
    sold: 610,
    image:
      "/SamsungGalaxyTabS9+.jpg",
  },
  {
    id: "tb3",
    title: "Xiaomi Pad 6",
    price: 449,
    oldPrice: 499,
    rating: 4.4,
    sold: 400,
    image:
      "/XiaomiPad6.jpg",
  },
  {
    id: "tb4",
    title: "Lenovo Tab P12 Pro",
    price: 649,
    oldPrice: 699,
    rating: 4.3,
    sold: 250,
    image:
      "/LenovoTabP12Pro.webp",
  },
  {
    id: "tb5",
    title: "iPad Air (M1)",
    price: 599,
    oldPrice: 649,
    rating: 4.6,
    sold: 540,
    image:
      "/iPadAir(M1).webp",
  },
  {
    id: "tb6",
    title: "Amazon Fire HD 10",
    price: 149,
    oldPrice: 179,
    rating: 4.2,
    sold: 720,
    image:
      "/AmazonFireHD10.jpg",
  },
];

const watches = [
  {
    id: "sw1",
    title: "Apple Watch Series 9",
    price: 399,
    oldPrice: 449,
    rating: 4.8,
    sold: 950,
    badge: "Bestseller",
    image:
      "/AppleWatchSeries9.webp",
  },
  {
    id: "sw2",
    title: "Samsung Galaxy Watch 6",
    price: 329,
    oldPrice: 379,
    rating: 4.6,
    sold: 610,
    image:
      "/SamsungGalaxyWatch6.jpg",
  },
  {
    id: "sw3",
    title: "Garmin Forerunner 265",
    price: 449,
    oldPrice: 499,
    rating: 4.7,
    sold: 340,
    image:
      "/GarminForerunner265.jpeg",
  },
  {
    id: "sw4",
    title: "Fitbit Versa 4 Best Smartwatch",
    price: 229,
    oldPrice: 259,
    rating: 4.3,
    sold: 720,
    image:
      "/FitbitVersa4.jpg",
  },
  {
    id: "sw5",
    title: "Amazfit GTR 4 Best Smartwatch",
    price: 199,
    oldPrice: 229,
    rating: 4.2,
    sold: 410,
    image:
      "/AmazfitGTR4.webp",
  },
  {
    id: "sw6",
    title: "Nothing Watch (Concept)",
    price: 249,
    oldPrice: 279,
    rating: 4.1,
    sold: 160,
    image:
      "/NothingWatch(Concept).jpg",
  },
];

const accessories = [
  {
    id: "ac1",
    title: "AirPods Pro (2nd Gen)",
    price: 229,
    oldPrice: 249,
    rating: 4.8,
    sold: 1320,
    badge: "Hot Deal",
    image:
      "/AirPodsPro(2nd Gen).webp",
  },
  {
    id: "ac2",
    title: "Anker 20W Fast Charger",
    price: 19,
    oldPrice: 24,
    rating: 4.6,
    sold: 4120,
    image:
      "/Anker20WFastCharger.jpg",
  },
  {
    id: "ac3",
    title: "Spigen MagSafe Case",
    price: 34,
    oldPrice: 39,
    rating: 4.5,
    sold: 980,
    image:
      "/SpigenMagSafeCase.jpg",
  },
  {
    id: "ac4",
    title: "Samsung 45W USB‑C Charger",
    price: 39,
    oldPrice: 49,
    rating: 4.4,
    sold: 560,
    image:
      "/Samsung45WUSB‑CCharger.webp",
  },
  {
    id: "ac5",
    title: "Belkin 3‑in‑1 MagSafe Dock",
    price: 129,
    oldPrice: 149,
    rating: 4.3,
    sold: 210,
    image:
      "/maxresdefault.jpg",
  },
  {
    id: "ac6",
    title: "UGREEN USB‑C Cable (2m)",
    price: 12,
    oldPrice: 15,
    rating: 4.7,
    sold: 5210,
    image:
      "/UGREENUSB‑CCable(2m).avif",
  },
];

// ---------- Animations ----------
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 220, damping: 20 } },
};

export default function MobilesCategoryPage() {
  return (
    <main className="min-h-screen bg-gray-50 mt-20">
      <Hero />

      <Section
        title="Smartphones"
        href="/c/electronics/smartphones"
        subtitle="Flagship, mid‑range & budget picks"
        products={smartphones}
      />

      <Section
        title="Tablets"
        href="/c/electronics/tablets"
        subtitle="Work, study & entertainment tablets"
        products={tablets}
      />

      <Section
        title="Smartwatches"
        href="/c/electronics/wearables"
        subtitle="Fitness, calling & premium wearables"
        products={watches}
      />

      <Section
        title="Accessories"
        href="/c/electronics/accessories"
        subtitle="Audio, chargers, cases & more"
        products={accessories}
      />
    </main>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="relative overflow-hidden">
  <div className="absolute inset-0 -z-10">
    {/* Background image */}
    <Image
      src="/mobileandlaptop.avif"
      width={1920}
      height={1080}
      alt="Mobiles & Tablets"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
  </div>

  <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-10">
    {/* Left Side - Text */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-black max-w-2xl lg:flex-1"
    >
      <span className="inline-block px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/30 text-sm mb-4">
        Mobiles & Tablets
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        Upgrade your daily tech expertly curated
      </h1>
      <p className="mt-3 text-black/80 max-w-xl">
        Shop flagship phones, powerful tablets, premium smartwatches and must‑have accessories. Hand‑picked deals and the latest launches.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Link
          href="#smartphones"
          className="px-5 py-3 rounded-2xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Shop Smartphones
        </Link>
        <Link
          href="#accessories"
          className="px-5 py-3 rounded-2xl bg-white/10 text-black backdrop-blur hover:bg-white/20 transition"
        >
          Explore Accessories
        </Link>
      </div>
    </motion.div>

    {/* Right Side - Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="lg:flex-1 hidden lg:block"
    >
      <Image
        src="/mobileandlaptop.avif" // replace with your image
        alt="Featured Device"
        width={500}
        height={500}
        className="object-contain"
      />
    </motion.div>
  </div>
</section>

  );
}

// ---------- Section ----------
function Section({
  title,
  subtitle,
  href,
  products,
}: {
  title: string;
  subtitle?: string;
  href: string;
  products: Array<Product>;
}) {
  const anchor = title.toLowerCase();
  return (
    <section id={anchor} className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-black"
          >
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5"
        >
          {products.slice(0, 6).map((p) => (
            <motion.div variants={item} key={p.id}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Product Card ----------
export type Product = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number; // 0..5
  sold?: number;
  image: string;
  badge?: string;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative aspect-[4/3]">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 px-2 py-1 rounded-md text-[11px] font-semibold bg-yellow-500 text-black shadow">
            {product.badge}
          </span>
        )}
        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur shadow hover:bg-white"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-yellow-600">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="text-xs sm:text-sm line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center">
          <StarRating value={product.rating} />
          {product.sold ? (
            <span className="ml-2 text-xs text-gray-500">{product.sold}+ sold</span>
          ) : null}
        </div>

        <button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-500 text-black font-semibold py-2.5 hover:bg-yellow-400 transition">
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

function StarRating({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (half && i === full);
        return (
          <Star
            key={i}
            className={`w-4 h-4 ${filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        );
      })}
      <span className="ml-1 text-xs text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
}
