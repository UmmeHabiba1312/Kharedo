"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";

const recommendedProducts = [
  {
    id: 1,
    title: "Noise Headphones",
    price: 199,
    rating: 4.8,
    image: "/headphone.jpg",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 149,
    rating: 4.6,
    image: "/watch.webp",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    price: 249,
    rating: 4.7,
    image: "/chair.webp",
  },
  {
    id: 4,
    title: "Portable Bluetooth Speaker",
    price: 89,
    rating: 4.5,
    image: "/blutoh.jpg",
  },
  {
    id: 5,
    title: " Mechanical Keyboard",
    price: 129,
    rating: 4.9,
    image: "/jeyboard.jpg",
  },
];

export default function Recommendations() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
             Recommended For You
          </h2>
          <a
            href="#"
            className="text-sm text-yellow-600 hover:underline font-medium"
          >
            See All
          </a>
        </div>

        {/* Scrollable Row */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
          {recommendedProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="min-w-[220px] max-w-[220px] bg-white border rounded-xl shadow-sm hover:shadow-md transition flex-shrink-0"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-48 rounded-t-xl"
                />
                <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow hover:bg-red-100">
                  <Heart className="w-4 h-4 text-green-600" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="mt-2 text-lg font-bold text-yellow-600">
                  ${product.price}
                </div>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 mt-1">
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
                  <span className="ml-1 text-xs text-gray-500">
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
