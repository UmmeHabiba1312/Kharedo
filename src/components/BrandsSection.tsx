"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    id: 1,
    title: "Electronics",
    image: "/electronics.jpeg",
    link: "/collections/electronics",
  },
  {
    id: 2,
    title: "Fashion & Apparel",
    image: "/perfume.jpg",
    link: "/collections/fashion",
  },
  {
    id: 3,
    title: "Home & Living",
    image: "/pot.webp",
    link: "/collections/home",
  },
  {
    id: 4,
    title: "Beauty & Personal Care",
    image: "/beautyandpersonal.jpg",
    link: "/collections/beauty",
  },
  {
    id: 5,
    title: "Sports & Fitness",
    image: "/sportsandfitness.webp",
    link: "/collections/sports",
  },
  {
    id: 6,
    title: "Toys & Kids",
    image: "/toysandkids.png",
    link: "/collections/toys",
  },
];

export default function CollectionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
        >
          Shop by Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-gray-600 text-center text-lg"
        >
          Explore curated collections tailored for you
        </motion.p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <motion.a
              key={col.id}
              href={col.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full h-64">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {col.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
