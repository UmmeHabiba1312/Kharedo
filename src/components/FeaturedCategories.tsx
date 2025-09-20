"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * FeaturedCategoriesPro
 * Amazon/Daraz level professional Featured Categories section
 * - Mosaic layout with 2 mega tiles + smaller tiles (responsive)
 * - Smooth hover parallax, elevation, and overlay
 * - Accessible, keyboard-focusable cards
 * - Data-driven (plug your CMS data)
 *
 * Usage:
 *   <FeaturedCategoriesPro items={CATEGORIES} />
 */

export type CategoryItem = {
  id: string | number;
  title: string;
  href: string;
  image: string; // absolute or public/ path
  count?: number; // products count
  badge?: string; // e.g., "New", "Hot", "-20%"
  accent?: string; // Tailwind color token e.g., "from-pink-500/20"
};

export default function FeaturedCategoriesPro({
  items,
  className = "",
}: {
  items: CategoryItem[];
  className?: string;
}) {
  const [megaA, megaB, ...rest] = useMemo(() => items, [items]);

  return (
    <section className={`py-12 md:py-14 ${className}`} aria-label="Featured categories">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Featured Categories</h2>
            <p className="mt-1 text-sm md:text-base opacity-70">Browse our top picks across tech, fashion, home & more</p>
          </div>
          <Link href="/categories" className="inline-flex items-center text-amber-500 gap-2 text-sm font-semibold hover:underline">
            View all <ArrowRight className="h-4 w-4 text-amber-400" />
          </Link>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-5">
          {/* Mega A */}
          {megaA && (
            <CategoryCard
              item={megaA}
              className="col-span-2 md:col-span-3 xl:col-span-6 row-span-2 h-[260px] md:h-[320px]"
              priority
            />
          )}

          {/* Mega B */}
          {megaB && (
            <CategoryCard
              item={megaB}
              className="col-span-2 md:col-span-3 xl:col-span-6 row-span-2 h-[260px] md:h-[320px]"
            />
          )}

          {/* Rest */}
          {rest.map((it) => (
            <CategoryCard
              key={it.id}
              item={it}
              className="h-[160px] md:h-[200px] col-span-1 md:col-span-3 xl:col-span-3"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------- Card ---------------------------------------
function  CategoryCard({
  item,
  className = "",
  priority = false,
}: {
  item: CategoryItem;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`group relative overflow-hidden rounded-3xl border bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow-sm hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30 ${className}`}
      aria-label={`Shop ${item.title}`}
    >
      {/* Accent gradient */}
      <div className={`pointer-events-none absolute inset-0 ${item.accent ?? "from-indigo-500/15"} to-transparent bg-gradient-to-br`} />

      {/* Image with subtle parallax */}
      <motion.div
        initial={{ scale: 1.02 }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "tween", duration: 0.35 }}
        className="absolute inset-0"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </motion.div>

      {/* Content overlay */}
      <div className="relative h-full p-4 md:p-5 flex flex-col justify-end">
        <div>
          {item.badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-neutral-800/90 px-2 py-0.5 text-[11px] font-semibold shadow mb-2">
              {item.badge}
            </span>
          )}
          <h3 className="text-white drop-shadow text-lg md:text-2xl font-extrabold leading-tight">
            {item.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-white/90 text-xs md:text-sm">
            {item.count ? <span>{Intl.NumberFormat().format(item.count)}+ items</span> : null}
            <span className="opacity-80">•</span>
            <span className="inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Shop now <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ------------------------------- Demo Data ----------------------------------
export const CATEGORIES: CategoryItem[] = [
  {
    id: 1,
    title: "Mobiles & Tablets",
    href: "/c/mobiles",
    image: "/mobileandlaptop.avif", // ✅ local image
    badge: "Hot",
    count: 5400,
    accent: "from-rose-500/20",
  },
  {
    id: 2,
    title: "Laptops & Desktops",
    href: "/c/laptops",
    image: "/hero1.jpg",
    badge: "Top Rated",
    count: 2200,
    accent: "from-indigo-500/20",
  },
  {
    id: 3,
    title: "Men's Fashion",
    href: "/c/mens-fashion",
    image: "/MensFashion.jpg",
    count: 8900,
    accent: "from-amber-500/20",
  },
  {
    id: 4,
    title: "Home & Kitchen",
    href: "/c/home",
    image: "/homekitchen.jpg",
    count: 12000,
    accent: "from-emerald-500/20",
  },
  {
    id: 5,
    title: "Beauty & Personal ",
    href: "/c/beauty",
    image: "/beauty.jpg",
    count: 3100,
    accent: "from-fuchsia-500/20",
  },
  {
    id: 6,
    title: "Sports & Outdoor",
    href: "/c/sports",
    image: "/sport.jpg",
    count: 2700,
    accent: "from-sky-500/20",
  },
  {
    id: 7,
    title: "Toys, Kids & Baby",
    href: "/c/toys",
    image: "/toys.jpg",
    count: 3400,
    accent: "from-purple-500/20",
  },
 {
    id: 8,
    title: "Groceries",
    href: "/c/groceries",
    image: "/Groceries.webp",
    count: 1500,
    accent: "from-lime-500/20",
  },
  {
    id: 9,
    title: "Fresh Fruits",
    href: "/c/fresh-fruits",
    image: "/Fresh Fruits.jpeg",
    count: 800,
    accent: "from-orange-300/20",
  },
  {
    id: 10,
    title: "Vegetables",
    href: "/c/vegetables",
    image: "/Vegetables.jpg",
    count: 1200,
    accent: "from-green-400/20",
  },
];


/** Example Usage:
 *
 * import FeaturedCategoriesPro, { CATEGORIES } from "@/components/FeaturedCategoriesPro";
 *
 * export default function HomePage() {
 *   return (
 *     <main>
 *       <FeaturedCategoriesPro items={CATEGORIES} />
 *     </main>
 *   );
 * }
 */
