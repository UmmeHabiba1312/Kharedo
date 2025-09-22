"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

// Sample deals data (add more for each category)
const categories = [
  {
    id: 1,
    title: "iPhone Cases",
    subtitle: "from PKR 599",
    image: "/images/iphone-case.jpg",
  },
  {
    id: 2,
    title: "Men’s Tees",
    subtitle: "Buy 2 Get 1",
    image: "/images/mens-tee.jpg",
  },
  {
    id: 3,
    title: "Kitchen Sets",
    subtitle: "30% off",
    image: "/images/kitchen-set.jpg",
  },
  {
    id: 4,
    title: "Smartwatches",
    subtitle: "under PKR 9,999",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 5,
    title: "Makeup Combos",
    subtitle: "20% off",
    image: "/images/makeup-combo.jpg",
  },
  {
    id: 6,
    title: "Bluetooth Speakers",
    subtitle: "Save PKR 500",
    image: "/images/speaker.jpg",
  },
  {
    id: 7,
    title: "Gaming Mouse",
    subtitle: "PKR 1,499",
    image: "/images/mouse.jpg",
  },
  {
    id: 8,
    title: "Laptop Bags",
    subtitle: "from PKR 799",
    image: "/images/laptop-bag.jpg",
  },
  {
    id: 9,
    title: "Fragrances",
    subtitle: "up to 25% off",
    image: "/images/fragrance.jpg",
  },
  {
    id: 10,
    title: "Wireless Earbuds",
    subtitle: "from PKR 1,299",
    image: "/images/earbuds.jpg",
  },
];

export default function SalePageExpert() {
  return (
    <section className="mx-auto max-w-screen-2xl py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-200 via-pink-100 to-yellow-100 rounded-3xl overflow-hidden mb-12">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Hot Deals & Flash Sales
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Grab the best offers on top products before they sell out!
            </p>
            <button className="bg-red-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition">
              Shop All Deals
            </button>
          </div>
          <div className="flex-1">
            <Image src="/images/sale-hero.jpg" alt="Hot Deals" width={500} height={400} className="rounded-2xl object-cover shadow-lg" />
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Todays Top Deals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((deal) => (
            <motion.div
              key={deal.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group flex flex-col"
            >
              <div className="relative h-44 w-full">
                <Image src={deal.image} alt={deal.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{deal.title}</h3>
                  <p className="text-red-500 font-bold mt-1">{deal.subtitle}</p>
                </div>
                <button className="mt-3 w-full flex items-center justify-center gap-2 bg-red-500 text-black py-2 rounded-lg text-sm hover:bg-red-600 transition">
                  <ShoppingCart className="w-4 h-4" /> Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
