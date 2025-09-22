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
    name: "T-Shirts",
    products: [
      { id: 1, title: "Slim Fit T-Shirt", price: 25, image: "/SlimFitT-Shirt.webp", rating: 4.6 },
      { id: 2, title: "V-Neck Tee", price: 22, image: "/V-Neck Tee.webp", rating: 4.5 },
      { id: 3, title: "Graphic T-Shirt", price: 28, image: "/Graphic T-Shirt.avif", rating: 4.7 },
      { id: 4, title: "Cotton Basic Tee", price: 20, image: "/Cotton Basic Tee.webp", rating: 4.4 },
      { id: 5, title: "Long Sleeve T-Shirt", price: 30, image: "/Long Sleeve T-Shirt.webp", rating: 4.6 },
    ],
  },
  {
    id: 2,
    name: "Jackets",
    products: [
      { id: 6, title: "Leather Jacket", price: 150, image: "/Leather Jacket.jpg", rating: 4.8 },
      { id: 7, title: "Denim Jacket", price: 120, image: "/Denim Jacket.jpg", rating: 4.7 },
      { id: 8, title: "Bomber Jacket", price: 140, image: "/Bomber Jacket.jpg", rating: 4.6 },
      { id: 9, title: "Hooded Jacket", price: 110, image: "/Hooded Jacket.webp", rating: 4.5 },
      { id: 10, title: "Windbreaker", price: 100, image: "/Windbreaker.webp", rating: 4.4 },
    ],
  },
  {
    id: 3,
    name: "Shoes",
    products: [
      { id: 11, title: "Sneakers", price: 80, image: "/Sneakers.jpg", rating: 4.7 },
      { id: 12, title: "Loafers", price: 90, image: "/Loafers.jpeg", rating: 4.6 },
      { id: 13, title: "Boots", price: 120, image: "/Boots.webp", rating: 4.8 },
      { id: 14, title: "Running Shoes", price: 85, image: "/Running Shoes.jpg", rating: 4.5 },
      { id: 15, title: "Casual Shoes", price: 70, image: "/Casual Shoes.webp", rating: 4.4 },
    ],
  },
  {
    id: 4,
    name: "Accessories",
    products: [
      { id: 16, title: "Watch", price: 150, image: "/Watch1.webp", rating: 4.9 },
      { id: 17, title: "Belt", price: 40, image: "/Belt.jpg", rating: 4.6 },
      { id: 18, title: "Sunglasses", price: 60, image: "/Sunglasses.jpg", rating: 4.7 },
      { id: 19, title: "Cap", price: 20, image: "/Cap.webp", rating: 4.5 },
      { id: 20, title: "Wallet", price: 50, image: "/Wallet.webp", rating: 4.6 },
    ],
  },
];

export default function MensFashionPage() {
  return (
    <div className="mx-auto max-w-screen-2xl w-full bg-gray-50 mt-24">

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
            Upgrade Your Daily Tech
          </h1>
          <p className="text-gray-700 mb-6">
            Shop flagship phones, powerful tablets, premium smartwatches and must‑have accessories. Hand‑picked deals and the latest launches.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-gray-300 text-black font-semibold rounded-xl hover:bg-gray-100 transition">
              Explore Accessories
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
            src="/MensFashion.jpg" // Replace with your image
            alt="Featured Tech"
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
  );
}
