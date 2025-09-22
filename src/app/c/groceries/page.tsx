"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

const categories = [
  "All", "Fresh Fruits", "Vegetables", "Dairy & Eggs", "Snacks & Beverages"
];

// Each category has 10 sample products
const products = [
  // Fresh Fruits
  { id: 1, title: "Organic Apples", category: "Fresh Fruits", price: 5, oldPrice: 7, rating: 4.7, sold: 320, image: "/images/fruits.jpg" },
  { id: 2, title: "Bananas Bunch", category: "Fresh Fruits", price: 3, oldPrice: 5, rating: 4.5, sold: 280, image: "/images/banana.jpg" },
  { id: 3, title: "Strawberries Pack", category: "Fresh Fruits", price: 6, oldPrice: 8, rating: 4.6, sold: 210, image: "/images/strawberry.jpg" },
  { id: 4, title: "Oranges", category: "Fresh Fruits", price: 4, oldPrice: 6, rating: 4.4, sold: 190, image: "/images/orange.jpg" },
  { id: 5, title: "Grapes", category: "Fresh Fruits", price: 5, oldPrice: 7, rating: 4.5, sold: 150, image: "/images/grapes.jpg" },
  { id: 6, title: "Mangoes", category: "Fresh Fruits", price: 8, oldPrice: 10, rating: 4.8, sold: 400, image: "/images/mango.jpg" },
  { id: 7, title: "Pineapple", category: "Fresh Fruits", price: 6, oldPrice: 8, rating: 4.6, sold: 180, image: "/images/pineapple.jpg" },
  { id: 8, title: "Papaya", category: "Fresh Fruits", price: 5, oldPrice: 6, rating: 4.5, sold: 170, image: "/images/papaya.jpg" },
  { id: 9, title: "Kiwi Pack", category: "Fresh Fruits", price: 7, oldPrice: 9, rating: 4.6, sold: 120, image: "/images/kiwi.jpg" },
  { id: 10, title: "Cherries", category: "Fresh Fruits", price: 10, oldPrice: 12, rating: 4.7, sold: 100, image: "/images/cherries.jpg" },

  // Vegetables
  { id: 11, title: "Carrots Pack", category: "Vegetables", price: 4, oldPrice: 6, rating: 4.6, sold: 200, image: "/images/carrots.jpg" },
  { id: 12, title: "Tomatoes", category: "Vegetables", price: 3, oldPrice: 5, rating: 4.5, sold: 250, image: "/images/tomatoes.jpg" },
  { id: 13, title: "Potatoes", category: "Vegetables", price: 2, oldPrice: 4, rating: 4.4, sold: 300, image: "/images/potatoes.jpg" },
  { id: 14, title: "Onions", category: "Vegetables", price: 2, oldPrice: 3, rating: 4.5, sold: 280, image: "/images/onions.jpg" },
  { id: 15, title: "Spinach Pack", category: "Vegetables", price: 3, oldPrice: 4, rating: 4.6, sold: 180, image: "/images/spinach.jpg" },
  { id: 16, title: "Broccoli", category: "Vegetables", price: 4, oldPrice: 5, rating: 4.7, sold: 140, image: "/images/broccoli.jpg" },
  { id: 17, title: "Cucumber", category: "Vegetables", price: 2, oldPrice: 3, rating: 4.5, sold: 160, image: "/images/cucumber.jpg" },
  { id: 18, title: "Bell Peppers", category: "Vegetables", price: 5, oldPrice: 6, rating: 4.6, sold: 120, image: "/images/bell-pepper.jpg" },
  { id: 19, title: "Cauliflower", category: "Vegetables", price: 3, oldPrice: 4, rating: 4.5, sold: 110, image: "/images/cauliflower.jpg" },
  { id: 20, title: "Zucchini", category: "Vegetables", price: 4, oldPrice: 5, rating: 4.4, sold: 90, image: "/images/zucchini.jpg" },

  // Dairy & Eggs
  { id: 21, title: "Milk 1L", category: "Dairy & Eggs", price: 2, oldPrice: 3, rating: 4.8, sold: 500, image: "/images/milk.jpg" },
  { id: 22, title: "Eggs Pack 12", category: "Dairy & Eggs", price: 3, oldPrice: 4, rating: 4.7, sold: 400, image: "/images/eggs.jpg" },
  { id: 23, title: "Cheese Block", category: "Dairy & Eggs", price: 5, oldPrice: 7, rating: 4.6, sold: 300, image: "/images/cheese.jpg" },
  { id: 24, title: "Yogurt 500g", category: "Dairy & Eggs", price: 3, oldPrice: 4, rating: 4.5, sold: 280, image: "/images/yogurt.jpg" },
  { id: 25, title: "Butter 250g", category: "Dairy & Eggs", price: 4, oldPrice: 5, rating: 4.7, sold: 200, image: "/images/butter.jpg" },
  { id: 26, title: "Cream 200ml", category: "Dairy & Eggs", price: 3, oldPrice: 4, rating: 4.5, sold: 180, image: "/images/cream.jpg" },
  { id: 27, title: "Paneer 250g", category: "Dairy & Eggs", price: 5, oldPrice: 6, rating: 4.6, sold: 150, image: "/images/paneer.jpg" },
  { id: 28, title: "Curd 500g", category: "Dairy & Eggs", price: 3, oldPrice: 4, rating: 4.5, sold: 130, image: "/images/curd.jpg" },
  { id: 29, title: "Ghee 250ml", category: "Dairy & Eggs", price: 6, oldPrice: 8, rating: 4.7, sold: 120, image: "/images/ghee.jpg" },
  { id: 30, title: "Milk Powder 500g", category: "Dairy & Eggs", price: 8, oldPrice: 10, rating: 4.6, sold: 100, image: "/images/milk-powder.jpg" },

  // Snacks & Beverages
  { id: 31, title: "Chocolate Cookies", category: "Snacks & Beverages", price: 6, oldPrice: 8, rating: 4.4, sold: 150, image: "/images/cookies.jpg" },
  { id: 32, title: "Orange Juice", category: "Snacks & Beverages", price: 4, oldPrice: 5, rating: 4.5, sold: 220, image: "/images/orange-juice.jpg" },
  { id: 33, title: "Potato Chips", category: "Snacks & Beverages", price: 3, oldPrice: 4, rating: 4.4, sold: 180, image: "/images/chips.jpg" },
  { id: 34, title: "Green Tea Pack", category: "Snacks & Beverages", price: 5, oldPrice: 6, rating: 4.6, sold: 120, image: "/images/green-tea.jpg" },
  { id: 35, title: "Coffee Beans 250g", category: "Snacks & Beverages", price: 8, oldPrice: 10, rating: 4.7, sold: 100, image: "/images/coffee.jpg" },
  { id: 36, title: "Soda Pack", category: "Snacks & Beverages", price: 6, oldPrice: 8, rating: 4.5, sold: 90, image: "/images/soda.jpg" },
  { id: 37, title: "Biscuits Pack", category: "Snacks & Beverages", price: 4, oldPrice: 5, rating: 4.4, sold: 80, image: "/images/biscuits.jpg" },
  { id: 38, title: "Energy Drink", category: "Snacks & Beverages", price: 5, oldPrice: 6, rating: 4.5, sold: 70, image: "/images/energy-drink.jpg" },
  { id: 39, title: "Nuts Mix", category: "Snacks & Beverages", price: 7, oldPrice: 9, rating: 4.6, sold: 60, image: "/images/nuts.jpg" },
  { id: 40, title: "Protein Bar", category: "Snacks & Beverages", price: 3, oldPrice: 4, rating: 4.5, sold: 50, image: "/images/protein-bar.jpg" },
];

export default function GroceriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="mx-auto max-w-screen-2xl py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-100 rounded-2xl overflow-hidden mb-10">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh Groceries Delivered to Your Doorstep
            </h1>
            <p className="text-gray-700 mb-6">
              Organic fruits, fresh vegetables, dairy & snacks – all in one place.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>
          <div className="flex-1">
            <Image src="/images/groceries-hero.jpg" alt="Groceries" width={500} height={400} className="rounded-xl object-cover" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-green-600 text-white shadow"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
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
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-600 font-bold">${product.price}</span>
                  <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
                </div>
                <div className="flex items-center text-yellow-400 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400" : "stroke-gray-300"}`} />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">{product.sold}+ sold</span>
                </div>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 transition">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
