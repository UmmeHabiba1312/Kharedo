// "use client"; // 🔑 must be at top

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useCart } from "../context/CartContext";
// import FlashSaleTimer from "./FlashSaleTimer";

// const products = [
//   { id: 1, name: "Wireless Headphones", image: "/headphone.jpg", oldPrice: 120, price: 79, discount: 34 },
//   { id: 2, name: "Smart Watch", image: "/watch.webp", oldPrice: 200, price: 129, discount: 36 },
//   { id: 3, name: "Gaming Mouse", image: "/mouse.webp", oldPrice: 60, price: 39, discount: 35 },
//   { id: 4, name: "4K Action Camera", image: "/cameran.jpeg", oldPrice: 350, price: 229, discount: 34 },
//   { id: 5, name: "Bluetooth Speaker", image: "/blutoh.jpg", oldPrice: 99, price: 59, discount: 40 },
// ];

// export default function FlashSale() {
//   const { addToCart } = useCart(); // ✅ will work now



//   return (
//     <section className="py-12 bg-white dark:bg-neutral-950">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">Flash Sale</h2>
//             <p className="text-gray-500 dark:text-gray-400">Hurry up! Limited time deals</p>
//           </div>
//           <div className="flex items-center gap-2 font-mono text-lg font-semibold bg-yellow-500 text-white px-4 py-2 rounded-lg">
//             <FlashSaleTimer />

//             {/* <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
//             <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
//             <span>{String(timeLeft.seconds).padStart(2, "0")}</span> */}
//           </div>
//         </div>

//         <div className="relative">
//           <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
//             {products.map((product) => (
//               <motion.div key={product.id} whileHover={{ scale: 1.05 }} className="min-w-[220px] bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg transition-all">
//                 <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
//                   <Image src={product.image} alt={product.name} fill className="object-cover" />
//                   <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
//                     -{product.discount}%
//                   </span>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
//                   <div className="mt-2 flex items-center gap-2">
//                     <span className="text-lg font-bold text-yellow-500">${product.price}</span>
//                     <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
//                   </div>
//                   <button
//   onClick={() => addToCart({
//     id: product.id,
//     name: product.name,
//     image: product.image,
//     price: product.price,
//   })}
//   className="mt-3 w-full bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-white text-sm py-2 rounded-lg font-medium transition"
// >
//   Add to Cart
// </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import FlashSaleTimer from "./FlashSaleTimer";

const products = [
  { id: "1", name: "Wireless Headphones", image: "/headphone.jpg", price: 79 },
  { id: "2", name: "Smart Watch", image: "/watch.webp", price: 129 },
  { id: "3", name: "Gaming Mouse", image: "/mouse.webp", price: 39 },
  { id: "4", name: "4K Action Camera", image: "/cameran.jpeg", price: 229 },
  { id: "5", name: "Bluetooth Speaker", image: "/blutoh.jpg", price: 59 },
];

export default function FlashSale() {
  const { addItem } = useShoppingCart();

  return (
    <section className="py-12 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">Flash Sale</h2>
            <p className="text-gray-500 dark:text-gray-400">Hurry up! Limited time deals</p>
          </div>
          <div className="flex items-center gap-2 font-mono text-lg font-semibold bg-yellow-500 text-white px-4 py-2 rounded-lg">
            <FlashSaleTimer />
          </div>
        </div>

        {/* Products */}
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="min-w-[220px] bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-yellow-500">${product.price}</span>
                </div>
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price * 100, // cents (Stripe ke liye)
                      currency: "USD",
                      image: product.image,
                    })
                  }
                  className="cursor-pointer mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 rounded-lg font-medium transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
