"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

const appliances = [
  { id: 1, title: "Air Fryer", price: 99, oldPrice: 129, rating: 4.6, sold: 320, image: "/images/air-fryer.jpg" },
  { id: 2, title: "Blender", price: 49, oldPrice: 70, rating: 4.5, sold: 280, image: "/images/blender.jpg" },
  { id: 3, title: "Microwave Oven", price: 120, oldPrice: 150, rating: 4.7, sold: 210, image: "/images/microwave.jpg" },
  { id: 4, title: "Electric Kettle", price: 25, oldPrice: 35, rating: 4.4, sold: 400, image: "/images/kettle.jpg" },
  { id: 5, title: "Toaster", price: 30, oldPrice: 45, rating: 4.5, sold: 190, image: "/images/toaster.jpg" },
  { id: 6, title: "Coffee Maker", price: 75, oldPrice: 99, rating: 4.6, sold: 150, image: "/images/coffee-maker.jpg" },
  { id: 7, title: "Hand Mixer", price: 20, oldPrice: 30, rating: 4.5, sold: 130, image: "/images/hand-mixer.jpg" },
  { id: 8, title: "Juicer", price: 55, oldPrice: 80, rating: 4.6, sold: 110, image: "/images/juicer.jpg" },
  { id: 9, title: "Rice Cooker", price: 65, oldPrice: 85, rating: 4.5, sold: 90, image: "/images/rice-cooker.jpg" },
  { id: 10, title: "Food Processor", price: 150, oldPrice: 180, rating: 4.7, sold: 80, image: "/images/food-processor.jpg" },
];

export default function AppliancesPage() {
  return (
    <section className="py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-100 rounded-2xl overflow-hidden mb-10">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Kitchen & Home Appliances
            </h1>
            <p className="text-gray-700 mb-6">
              Explore high-quality appliances to make your home smarter and efficient.
            </p>
            <button className="bg-blue-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              Shop Appliances
            </button>
          </div>
          <div className="flex-1">
            <Image src="/images/appliances-hero.jpg" alt="Home Appliances" width={500} height={400} className="rounded-xl object-cover" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {appliances.map((app) => (
          <motion.div
            key={app.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden group flex flex-col"
          >
            <div className="relative h-44 w-full">
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{app.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-blue-600 font-bold">${app.price}</span>
                  <span className="line-through text-gray-400 text-sm">${app.oldPrice}</span>
                </div>
                <div className="flex items-center text-yellow-400 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(app.rating) ? "fill-yellow-400" : "stroke-gray-300"}`} />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">{app.sold}+ sold</span>
                </div>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-500 text-black py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
