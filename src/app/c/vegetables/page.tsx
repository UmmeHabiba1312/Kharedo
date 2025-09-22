"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

const vegetables = [
  { id: 1, title: "Organic Carrots", price: 4, oldPrice: 6, rating: 4.6, sold: 220, image: "/images/carrot.jpg" },
  { id: 2, title: "Broccoli", price: 3, oldPrice: 5, rating: 4.5, sold: 180, image: "/images/broccoli.jpg" },
  { id: 3, title: "Bell Peppers", price: 5, oldPrice: 7, rating: 4.7, sold: 160, image: "/images/bell-pepper.jpg" },
  { id: 4, title: "Tomatoes", price: 2, oldPrice: 3, rating: 4.4, sold: 200, image: "/images/tomato.jpg" },
  { id: 5, title: "Cucumbers", price: 3, oldPrice: 4, rating: 4.5, sold: 140, image: "/images/cucumber.jpg" },
  { id: 6, title: "Spinach Pack", price: 3, oldPrice: 5, rating: 4.6, sold: 130, image: "/images/spinach.jpg" },
  { id: 7, title: "Lettuce", price: 2, oldPrice: 3, rating: 4.5, sold: 120, image: "/images/lettuce.jpg" },
  { id: 8, title: "Cauliflower", price: 4, oldPrice: 6, rating: 4.6, sold: 110, image: "/images/cauliflower.jpg" },
  { id: 9, title: "Green Beans", price: 3, oldPrice: 4, rating: 4.5, sold: 100, image: "/images/green-beans.jpg" },
  { id: 10, title: "Zucchini", price: 3, oldPrice: 5, rating: 4.4, sold: 90, image: "/images/zucchini.jpg" },
];

export default function VegetablesPage() {
  return (
    <section className="mx-auto max-w-screen-2xl py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-100 rounded-2xl overflow-hidden mb-10">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh Vegetables Delivered to Your Home
            </h1>
            <p className="text-gray-700 mb-6">
              Healthy, organic, and fresh vegetables picked directly from farms.
            </p>
            <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              Shop Vegetables
            </button>
          </div>
          <div className="flex-1">
            <Image src="/images/vegetables-hero.jpg" alt="Fresh Vegetables" width={500} height={400} className="rounded-xl object-cover" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {vegetables.map((veg) => (
          <motion.div
            key={veg.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden group flex flex-col"
          >
            <div className="relative h-44 w-full">
              <Image
                src={veg.image}
                alt={veg.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{veg.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-600 font-bold">${veg.price}</span>
                  <span className="line-through text-gray-400 text-sm">${veg.oldPrice}</span>
                </div>
                <div className="flex items-center text-yellow-400 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(veg.rating) ? "fill-yellow-400" : "stroke-gray-300"}`} />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">{veg.sold}+ sold</span>
                </div>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-500 text-black py-2 rounded-lg text-sm hover:bg-green-600 transition">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
