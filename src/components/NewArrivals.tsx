"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";

const newArrivals = [
  {
    id: 1,
    title: "Premium Leather Backpack",
    price: 129,
    rating: 4.7,
    image: "/back.webp",
  },
  {
    id: 2,
    title: "4K Ultra HD Smart TV",
    price: 899,
    rating: 4.9,
    image: "/Tv.webp",
  },
  {
    id: 3,
    title: "Wireless Gaming Mouse",
    price: 59,
    rating: 4.6,
    image: "/mouse.webp",
  },
  {
    id: 4,
    title: "Designer Sunglasses",
    price: 79,
    rating: 4.8,
    image: "/glases.jpg",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-12 bg-white mx-auto max-w-screen-2xl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
             New Arrivals
          </h2>
          <a
            href="#"
            className="text-sm text-yellow-600 hover:underline font-medium"
          >
            View All
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg overflow-hidden group transition"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-56 group-hover:scale-105 transition"
                />
                <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-2 py-1 rounded-md shadow">
                  New
                </span>
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow hover:bg-red-100">
                  <Heart className="w-4 h-4 text-green-500" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-yellow-600">
                    ${product.price}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400"
                          : "stroke-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">
                    {product.rating}
                  </span>
                </div>

                {/* CTA */}
                <button className="mt-3 w-full flex items-center justify-center gap-2 bg-yellow-500 text-white py-2 rounded-lg text-sm hover:bg-yellow-600 transition">
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
