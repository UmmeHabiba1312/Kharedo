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
    name: "Skincare",
    products: [
      { id: 1, title: "Face Moisturizer", price: 25, image: "/beauty/skincare1.jpg", rating: 4.7 },
      { id: 2, title: "Sunscreen SPF50", price: 18, image: "/beauty/skincare2.jpg", rating: 4.6 },
      { id: 3, title: "Face Cleanser", price: 15, image: "/beauty/skincare3.jpg", rating: 4.5 },
      { id: 4, title: "Night Cream", price: 30, image: "/beauty/skincare4.jpg", rating: 4.6 },
      { id: 5, title: "Serum", price: 35, image: "/beauty/skincare5.jpg", rating: 4.8 },
    ],
  },
  {
    id: 2,
    name: "Haircare",
    products: [
      { id: 6, title: "Shampoo", price: 12, image: "/beauty/haircare1.jpg", rating: 4.5 },
      { id: 7, title: "Conditioner", price: 14, image: "/beauty/haircare2.jpg", rating: 4.6 },
      { id: 8, title: "Hair Oil", price: 20, image: "/beauty/haircare3.jpg", rating: 4.7 },
      { id: 9, title: "Hair Mask", price: 25, image: "/beauty/haircare4.jpg", rating: 4.6 },
      { id: 10, title: "Styling Gel", price: 10, image: "/beauty/haircare5.jpg", rating: 4.4 },
    ],
  },
  {
    id: 3,
    name: "Makeup",
    products: [
      { id: 11, title: "Lipstick", price: 15, image: "/beauty/makeup1.jpg", rating: 4.7 },
      { id: 12, title: "Foundation", price: 20, image: "/beauty/makeup2.jpg", rating: 4.6 },
      { id: 13, title: "Mascara", price: 12, image: "/beauty/makeup3.jpg", rating: 4.5 },
      { id: 14, title: "Blush", price: 10, image: "/beauty/makeup4.jpg", rating: 4.4 },
      { id: 15, title: "Eyeliner", price: 8, image: "/beauty/makeup5.jpg", rating: 4.5 },
    ],
  },
  {
    id: 4,
    name: "Grooming",
    products: [
      { id: 16, title: "Shaving Kit", price: 25, image: "/beauty/grooming1.jpg", rating: 4.6 },
      { id: 17, title: "Beard Oil", price: 15, image: "/beauty/grooming2.jpg", rating: 4.7 },
      { id: 18, title: "Trimmer", price: 50, image: "/beauty/grooming3.jpg", rating: 4.8 },
      { id: 19, title: "Aftershave", price: 12, image: "/beauty/grooming4.jpg", rating: 4.5 },
      { id: 20, title: "Hair Comb Set", price: 10, image: "/beauty/grooming5.jpg", rating: 4.4 },
    ],
  },
];

export default function BeautyPage() {
  return (
    <div className="mx-auto max-w-screen-2xl w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Beauty & Personal Care</h1>
          <p className="mt-2 text-sm md:text-lg">Look beautiful, feel confident</p>
        </div>
      </section>

      {/* Categories */}
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
                    <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm font-semibold flex items-center justify-center gap-2">
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
