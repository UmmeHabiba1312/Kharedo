"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Heart } from "lucide-react";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
}

const DEMO_WISHLIST: WishlistItem[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1518446958256-d0a1f9f6663d?q=80&w=800&auto=format&fit=crop",
    stock: 5,
  },
  {
    id: "2",
    name: "Smartwatch Pro",
    price: 129.0,
    image:
      "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da0?q=80&w=800&auto=format&fit=crop",
    stock: 0,
  },
  {
    id: "3",
    name: "Gaming Laptop",
    price: 1299.0,
    image:
      "https://images.unsplash.com/photo-1612832021616-ff61c8c6a7d2?q=80&w=800&auto=format&fit=crop",
    stock: 3,
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(DEMO_WISHLIST);

  const removeItem = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={64} className="mx-auto text-red-500 mb-4 animate-pulse" />
            <p className="text-xl font-medium">Your wishlist is empty!</p>
            <Link
              href="/"
              className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-2xl font-semibold hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {wishlist.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="relative h-64 w-full overflow-hidden group">
                   <div className="relative h-64 w-full overflow-hidden group">
  <Image
    src="/MacBookPro16.jpg" // your local image path
    alt="Product 1"
    fill // makes it responsive within parent div
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>

                    {item.stock === 0 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-lg">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold mb-1">{item.name}</h2>
                      <p className="text-black font-semibold mb-2">${item.price}</p>
                      <p
                        className={`text-sm ${
                          item.stock > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.stock > 0
                          ? `In Stock: ${item.stock}`
                          : "Currently unavailable"}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        href={`/product/${item.id}`}
                        className={`flex-1 text-center px-4 py-2 rounded-xl font-semibold transition ${
                          item.stock > 0
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                        }`}
                      >
                        {item.stock > 0 ? "Add to Cart" : "Unavailable"}
                      </Link>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-3 rounded-xl hover:bg-red-100 text-red-500 transition-all duration-300"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
