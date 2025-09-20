"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Furniture",
    products: [
      { id: 1, title: "Modern Sofa", price: 499, image: "/Modern Sofa.jpeg", rating: 4.7 },
      { id: 2, title: "Dining Table Set", price: 350, image: "/Dining Table Set.webp", rating: 4.6 },
      { id: 3, title: "Office Chair", price: 120, image: "/Office Chair.webp", rating: 4.5 },
      { id: 4, title: "Bookshelf", price: 80, image: "/Bookshelf.jpg", rating: 4.4 },
      { id: 5, title: "Bed Frame", price: 250, image: "/Bed Frame.webp", rating: 4.6 },
    ],
  },
  {
    id: 2,
    name: "Appliances",
    products: [
      { id: 6, title: "Blender", price: 60, image: "/Blender.jpg", rating: 4.7 },
      { id: 7, title: "Microwave Oven", price: 120, image: "/Microwave Oven.jpg", rating: 4.6 },
      { id: 8, title: "Coffee Maker", price: 80, image: "/Coffee Maker.jpeg", rating: 4.5 },
      { id: 9, title: "Air Fryer", price: 100, image: "/Air Fryer.jpg", rating: 4.6 },
      { id: 10, title: "Toaster", price: 40, image: "/Toaster.webp", rating: 4.4 },
    ],
  },
  {
    id: 3,
    name: "Decor",
    products: [
      { id: 11, title: "Wall Art", price: 50, image: "/Measuring Cups.webp", rating: 4.6 },
      { id: 12, title: "Vase Set", price: 35, image: "/Mixing Bowls.webp", rating: 4.5 },
      { id: 13, title: "Rug", price: 70, image: "/best-wood-cutting-board.jpg", rating: 4.7 },
      { id: 14, title: "Curtains", price: 45, image: "/Knife Set.webp", rating: 4.4 },
      { id: 15, title: "Table Lamp", price: 30, image: "/Cookware Set.jpeg", rating: 4.5 },
    ],
  },
  {
    id: 4,
    name: "Kitchenware",
    products: [
      { id: 16, title: "Cookware Set", price: 90, image: "/Cookware Set.jpeg", rating: 4.8 },
      { id: 17, title: "Knife Set", price: 50, image: "/Knife Set.webp", rating: 4.7 },
      { id: 18, title: "Cutting Board", price: 25, image: "/best-wood-cutting-board.jpg", rating: 4.6 },
      { id: 19, title: "Mixing Bowls", price: 30, image: "/Mixing Bowls.webp", rating: 4.5 },
      { id: 20, title: "Measuring Cups", price: 20, image: "/Measuring Cups.webp", rating: 4.4 },
    ],
  },
];

export default function HomeKitchenPage() {
  return (
    <main className="mt-40 bg-white">
      <div className="w-full bg-gray-50 ">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl text-black font-bold mb-4">
            Upgrade Your Home with Style & Comfort
          </h1>
          <p className="text-gray-700 mb-6">
            Explore furniture, appliances, decor, and kitchenware to make your home cozy and functional.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-gray-300 text-black font-semibold rounded-xl hover:bg-gray-100 transition">
              Explore Categories
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:flex-1"
        >
          <Image
            src="/homekitchen.jpg" // Replace with your image
            alt="Home & Kitchen"
            width={500}
            height={500}
            className="object-contain mx-auto"
          />
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 md:px-8">
        {categories.map((cat) => (
          <div key={cat.id} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{cat.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {cat.products.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl"
                >
                  <div className="relative w-full h-44 md:h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-black font-bold">${product.price}</span>
                      <span className="text-sm text-gray-500">{product.rating}★</span>
                    </div>
                    <button className="mt-3 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-400 transition text-sm font-semibold flex items-center justify-center gap-2">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
    </main>
  );
}
