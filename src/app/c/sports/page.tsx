"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   rating: number;
// };

const categories = [
  {
    id: 1,
    name: "Fitness",
    products: [
      { id: 1, title: "Yoga Mat", price: 30, image: "/sports/fitness1.jpg", rating: 4.7 },
      { id: 2, title: "Dumbbell Set", price: 50, image: "/sports/fitness2.jpg", rating: 4.6 },
      { id: 3, title: "Resistance Bands", price: 20, image: "/sports/fitness3.jpg", rating: 4.5 },
      { id: 4, title: "Treadmill", price: 499, image: "/sports/fitness4.jpg", rating: 4.8 },
      { id: 5, title: "Kettlebell", price: 45, image: "/sports/fitness5.jpg", rating: 4.4 },
    ],
  },
  {
    id: 2,
    name: "Outdoor Gear",
    products: [
      { id: 6, title: "Camping Tent", price: 120, image: "/sports/outdoor1.jpg", rating: 4.6 },
      { id: 7, title: "Hiking Backpack", price: 80, image: "/sports/outdoor2.jpg", rating: 4.7 },
      { id: 8, title: "Sleeping Bag", price: 60, image: "/sports/outdoor3.jpg", rating: 4.5 },
      { id: 9, title: "Outdoor Lantern", price: 25, image: "/sports/outdoor4.jpg", rating: 4.3 },
      { id: 10, title: "Water Bottle", price: 15, image: "/sports/outdoor5.jpg", rating: 4.4 },
    ],
  },
  {
    id: 3,
    name: "Team Sports",
    products: [
      { id: 11, title: "Football", price: 30, image: "/sports/team1.jpg", rating: 4.6 },
      { id: 12, title: "Basketball", price: 25, image: "/sports/team2.jpg", rating: 4.5 },
      { id: 13, title: "Tennis Racket", price: 70, image: "/sports/team3.jpg", rating: 4.7 },
      { id: 14, title: "Cricket Bat", price: 60, image: "/sports/team4.jpg", rating: 4.6 },
      { id: 15, title: "Volleyball", price: 20, image: "/sports/team5.jpg", rating: 4.4 },
    ],
  },
];

export default function SportsPage() {
  return (
    <section className="mx-auto max-w-screen-2xl py-12 bg-gray-50">
      {/* Hero */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Sports & Outdoor</h1>
          <p className="text-lg md:text-xl">Explore top products for fitness, outdoor adventures & team sports!</p>
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
                    <button className="mt-3 w-full bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-600 transition">
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
