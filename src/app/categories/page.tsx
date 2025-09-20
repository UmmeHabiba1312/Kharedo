"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Flame, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

const categories = [
  { id: 1, name: "Mobiles & Tablets", image: "/categories/mobile.jpg", tag: "Trending" },
  { id: 2, name: "Laptops & Computers", image: "/categories/laptop.jpg", tag: "Hot" },
  { id: 3, name: "Fashion & Clothing", image: "/categories/fashion.jpg", tag: "Popular" },
  { id: 4, name: "Home & Living", image: "/categories/home.jpg", tag: "New" },
  { id: 5, name: "Shoes & Accessories", image: "/categories/shoes.jpg", tag: "Hot" },
  { id: 6, name: "Beauty & Health", image: "/categories/beauty.jpg", tag: "Trending" },
  { id: 7, name: "Cameras & Drones", image: "/categories/camera.jpg", tag: "Popular" },
  { id: 8, name: "Gaming & Consoles", image: "/categories/gaming.jpg", tag: "Trending" },
  { id: 9, name: "Sports & Fitness", image: "/categories/sports.jpg", tag: "Hot" },
  { id: 10, name: "Groceries", image: "/categories/groceries.jpg", tag: "Daily" },
  { id: 11, name: "Watches & Jewelry", image: "/categories/watches.jpg", tag: "Luxury" },
  { id: 12, name: "Books & Stationery", image: "/categories/books.jpg", tag: "Popular" },
];

export default function CategoriesPage() {
  const [query, setQuery] = useState("");

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 mt-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-3xl shadow-xl p-14 mb-16 overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">
            Discover Categories
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mb-6">
            Shop by department and explore thousands of products just like Amazon, Daraz & Alibaba.
          </p>
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-xl text-gray-800 border-0 focus:ring-4 focus:ring-yellow-400 outline-none shadow-md"
            />
            <Search className="w-5 h-5 absolute right-4 top-3.5 text-gray-500" />
          </div>
        </div>
        {/* Decorative gradient circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        <button className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center gap-2">
          <Flame className="w-4 h-4 text-red-500" /> Hot Deals
        </button>
        <button className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-500" /> Trending
        </button>
        <button className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" /> Popular
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {filtered.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer group"
          >
            <div className="relative w-full h-40">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 text-black transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                Shop Now →
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.tag}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-12 text-lg">
          No categories found for {query}
        </p>
      )}
    </div>
  );
}
