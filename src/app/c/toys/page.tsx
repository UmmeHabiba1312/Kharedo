"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const categories = [
  {
    id: 1,
    name: "Educational",
    products: [
      { id: 1, title: "Alphabet Blocks", price: 25, image: "/toys/edu1.jpg", rating: 4.6 },
      { id: 2, title: "Puzzle Set", price: 20, image: "/toys/edu2.jpg", rating: 4.5 },
      { id: 3, title: "Learning Tablet", price: 60, image: "/toys/edu3.jpg", rating: 4.7 },
      { id: 4, title: "Flash Cards", price: 15, image: "/toys/edu4.jpg", rating: 4.4 },
      { id: 5, title: "Math Games", price: 30, image: "/toys/edu5.jpg", rating: 4.5 },
    ],
  },
  {
    id: 2,
    name: "Soft Toys",
    products: [
      { id: 6, title: "Teddy Bear", price: 18, image: "/toys/soft1.jpg", rating: 4.7 },
      { id: 7, title: "Plush Rabbit", price: 22, image: "/toys/soft2.jpg", rating: 4.6 },
      { id: 8, title: "Cuddly Elephant", price: 25, image: "/toys/soft3.jpg", rating: 4.5 },
      { id: 9, title: "Stuffed Dog", price: 20, image: "/toys/soft4.jpg", rating: 4.4 },
      { id: 10, title: "Monkey Plush", price: 19, image: "/toys/soft5.jpg", rating: 4.6 },
    ],
  },
  {
    id: 3,
    name: "Baby Gear",
    products: [
      { id: 11, title: "Baby Stroller", price: 120, image: "/toys/baby1.jpg", rating: 4.8 },
      { id: 12, title: "Baby Carrier", price: 55, image: "/toys/baby2.jpg", rating: 4.7 },
      { id: 13, title: "High Chair", price: 90, image: "/toys/baby3.jpg", rating: 4.6 },
      { id: 14, title: "Baby Monitor", price: 70, image: "/toys/baby4.jpg", rating: 4.5 },
      { id: 15, title: "Teether Set", price: 15, image: "/toys/baby5.jpg", rating: 4.4 },
    ],
  },
];

export default function ToysPage() {
  return (
    <section className="py-12 bg-gray-50">
      {/* Hero */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white rounded-2xl p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Toys, Kids & Baby</h1>
          <p className="text-lg md:text-xl">Discover fun, safe, and educational toys for kids of all ages!</p>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 space-y-12">
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.products.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-black line-clamp-2">{product.title}</h3>
                    <div className="mt-2 text-lg font-bold text-black">${product.price}</div>
                    <div className="flex items-center mt-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400" : "stroke-gray-300"}`} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                        </svg>
                      ))}
                    </div>
                    <button className="mt-3 w-full bg-pink-400 text-black py-2 rounded-lg font-semibold hover:bg-pink-500 transition">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
