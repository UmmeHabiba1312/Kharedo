"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Timer } from "lucide-react";
import { useEffect, useState } from "react";

export default function PromoBanner() {
  // Countdown state (optional)
  const calculateTimeLeft = () => {
    const target = new Date("2025-09-01T23:59:59"); // Seasonal Sale end date
    const difference = +target - +new Date();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner1.jpg"
        alt="Seasonal Sale"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold drop-shadow-lg"
        >
          Mega Seasonal Sale  
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Up to <span className="text-yellow-400 font-bold">70% OFF</span> on top categories. Don’t miss out!
        </motion.p>

        {/* Countdown */}
        {timeLeft?.days !== undefined && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl"
          >
            <Timer className="w-5 h-5 text-yellow-400" />
            <div className="flex gap-4 text-sm md:text-base font-semibold">
              <span>{timeLeft.days}d</span>
              <span>{timeLeft.hours}h</span>
              <span>{timeLeft.minutes}m</span>
              <span>{timeLeft.seconds}s</span>
            </div>
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="/sale"
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Shop Now
          </a>
          <a
            href="/categories"
            className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Explore Categories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
