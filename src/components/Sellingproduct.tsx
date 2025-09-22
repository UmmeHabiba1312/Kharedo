"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart } from "lucide-react";

const categories = ["All", "Electronics", "Fashion", "Home", "Sports"];

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 79,
    oldPrice: 120,
    rating: 4.5,
    sold: 320,
    image: "/headphone.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Smart Watch Series 6",
    category: "Electronics",
    price: 199,
    oldPrice: 250,
    rating: 4.8,
    sold: 500,
    image: "/watch.webp",
    badge: "Trending",
  },
  {
    id: 3,
    title: "Nike Running Shoes",
    category: "Fashion",
    price: 149,
    oldPrice: 180,
    rating: 4.6,
    sold: 280,
    image: "/shoes.jpg",
  },
  {
    id: 4,
    title: "Modern Sofa Set",
    category: "Home",
    price: 499,
    oldPrice: 650,
    rating: 4.7,
    sold: 120,
    image: "/sofa.jpg",
  },
];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="mx-auto max-w-screen-2xl py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Featured & Best Selling
          </h2>

          {/* Categories Buttons */}
          <div className="flex gap-3 mt-4 md:mt-0 overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 flex-shrink-0 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-white shadow"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden group"
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
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-md shadow">
                    {product.badge}
                  </span>
                )}
                {/* Wishlist Icon */}
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow hover:bg-red-100">
                  <Heart className="w-4 h-4 text-yellow-500" />
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
                  <span className="line-through text-gray-400 text-sm">
                    ${product.oldPrice}
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
                    {product.sold}+ sold
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
