"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, ChevronRight } from "lucide-react";

// ---------- Demo Data for Laptops & Desktops ----------
const laptops = [
  {
    id: "lp1",
    title: "MacBook Pro 16",
    price: 2399,
    oldPrice: 2599,
    rating: 4.9,
    sold: 540,
    badge: "Top Rated",
    image: "/MacBookPro16.jpg",
  },
  {
    id: "lp2",
    title: "Dell XPS 15",
    price: 1899,
    oldPrice: 2099,
    rating: 4.8,
    sold: 420,
    badge: "Trending",
    image: "/DellXPS15.webp",
  },
  {
    id: "lp3",
    title: "HP Spectre x360",
    price: 1450,
    oldPrice: 1599,
    rating: 4.7,
    sold: 380,
    badge: "Best Value",
    image: "/HPSpectrex360.webp",
  },
  {
    id: "lp4",
    title: "Lenovo ThinkPad X1",
    price: 1600,
    oldPrice: 1799,
    rating: 4.6,
    sold: 320,
    image: "/LenovoThinkPadX1.jpeg",
  },
  {
    id: "lp5",
    title: "Asus ROG Zephyrus",
    price: 1750,
    oldPrice: 1899,
    rating: 4.5,
    sold: 290,
    image: "/AsusROGZephyrus.jpg",
  },
  {
    id: "lp6",
    title: "Acer Predator Helios 300",
    price: 1400,
    oldPrice: 1599,
    rating: 4.4,
    sold: 210,
    image: "/AcerPredatorHelios300.jpg",
  },
];

const desktops = [
  {
    id: "dt1",
    title: "iMac 27-inch M1",
    price: 2199,
    oldPrice: 2399,
    rating: 4.8,
    sold: 340,
    badge: "Top Rated",
    image: "/iMac27-inchM1.webp",
  },
  {
    id: "dt2",
    title: "Dell Inspiron Desktop",
    price: 999,
    oldPrice: 1199,
    rating: 4.6,
    sold: 280,
    image: "/Dell Inspiron Desktop.jpg",
  },
  {
    id: "dt3",
    title: "HP Omen 45L",
    price: 1799,
    oldPrice: 1999,
    rating: 4.7,
    sold: 190,
    badge: "Gaming",
    image: "/HP Omen 45L.webp",
  },
  {
    id: "dt4",
    title: "Lenovo Legion Tower 7i",
    price: 1650,
    oldPrice: 1799,
    rating: 4.5,
    sold: 210,
    image: "/Lenovo Legion Tower 7i.webp",
  },
  {
    id: "dt5",
    title: "Corsair One i300",
    price: 2499,
    oldPrice: 2699,
    rating: 4.6,
    sold: 150,
    image: "/Corsair One i300.jpg",
  },
  {
    id: "dt6",
    title: "MSI MEG Trident X",
    price: 2399,
    oldPrice: 2599,
    rating: 4.5,
    sold: 130,
    image: "/MSI MEG Trident X.jpg",
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

// ---------- Main Page ----------
export default function LaptopsCategoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      <Section
        title="Laptops"
        href="/c/computers/laptops"
        subtitle="High performance, gaming & ultrabooks"
        products={laptops}
      />

      <Section
        title="Desktops"
        href="/c/computers/desktops"
        subtitle="Powerful gaming & workstations"
        products={desktops}
      />
    </main>
  );
}

// ---------- Hero Section (same as mobile page) ----------
function Hero() {
  return (
    <section className="relative overflow-hidden mt-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero1.jpg" // same hero image
          width={1920}
          height={1080}
          alt="Laptops & Desktops"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-black max-w-2xl lg:flex-1"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/30 text-sm mb-4">
            Laptops & Desktops
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Upgrade your daily tech expertly curated
          </h1>
          <p className="mt-3 text-black/80 max-w-xl">
            Shop flagship laptops, powerful desktops, premium gaming rigs and workstations. Hand‑picked deals and latest models.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href="#laptops"
              className="px-5 py-3 rounded-2xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
            >
              Shop Laptops
            </Link>
            <Link
              href="#desktops"
              className="px-5 py-3 rounded-2xl bg-white/10 text-black backdrop-blur hover:bg-white/20 transition"
            >
              Explore Desktops
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:flex-1 hidden lg:block"
        >
          <Image
            src="/hero1.jpg" // same hero image
            alt="Featured Devices"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
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
  rating: number;
  sold?: number;
  image: string;
  badge?: string;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 px-2 py-1 rounded-md text-[11px] font-semibold bg-yellow-500 text-black shadow">
            {product.badge}
          </span>
        )}
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
          <span className="text-lg font-bold text-yellow-600">${product.price}</span>
          {product.oldPrice && (
            <span className="text-xs sm:text-sm line-through text-gray-400">${product.oldPrice}</span>
          )}
        </div>

        <div className="mt-2 flex items-center">
          <StarRating value={product.rating} />
          {product.sold ? <span className="ml-2 text-xs text-gray-500">{product.sold}+ sold</span> : null}
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
