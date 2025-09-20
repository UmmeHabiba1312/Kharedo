"use client";

// import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

const products = [
  { id: 1, title: "Organic Apples", price: 5, oldPrice: 7, rating: 4.7, sold: 320, image: "/images/fruits.jpg" },
  { id: 2, title: "Bananas Bunch", price: 3, oldPrice: 5, rating: 4.5, sold: 280, image: "/images/banana.jpg" },
  { id: 3, title: "Strawberries Pack", price: 6, oldPrice: 8, rating: 4.6, sold: 210, image: "/images/strawberry.jpg" },
  { id: 4, title: "Oranges", price: 4, oldPrice: 6, rating: 4.4, sold: 190, image: "/images/orange.jpg" },
  { id: 5, title: "Grapes", price: 5, oldPrice: 7, rating: 4.5, sold: 150, image: "/images/grapes.jpg" },
  { id: 6, title: "Mangoes", price: 8, oldPrice: 10, rating: 4.8, sold: 400, image: "/images/mango.jpg" },
  { id: 7, title: "Pineapple", price: 6, oldPrice: 8, rating: 4.6, sold: 180, image: "/images/pineapple.jpg" },
  { id: 8, title: "Papaya", price: 5, oldPrice: 6, rating: 4.5, sold: 170, image: "/images/papaya.jpg" },
  { id: 9, title: "Kiwi Pack", price: 7, oldPrice: 9, rating: 4.6, sold: 120, image: "/images/kiwi.jpg" },
  { id: 10, title: "Cherries", price: 10, oldPrice: 12, rating: 4.7, sold: 100, image: "/images/cherries.jpg" },
];

export default function FreshFruitsPage() {
  return (
    <section className="py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-yellow-100 rounded-2xl overflow-hidden mb-10">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh Fruits Delivered to Your Doorstep
            </h1>
            <p className="text-gray-700 mb-6">
              Organic and farm-fresh fruits to keep you healthy and happy.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Shop Fresh Fruits
            </button>
          </div>
          <div className="flex-1">
            <Image src="/images/fruits-hero.jpg" alt="Fresh Fruits" width={500} height={400} className="rounded-xl object-cover" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden group flex flex-col"
          >
            <div className="relative h-44 w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-600 font-bold">${product.price}</span>
                  <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
                </div>
                <div className="flex items-center text-yellow-400 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400" : "stroke-gray-300"}`} />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">{product.sold}+ sold</span>
                </div>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-yellow-500 text-black py-2 rounded-lg text-sm hover:bg-yellow-600 transition">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
