"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Timer, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function PromoBanner() {
  const calculateTimeLeft = (): TimeLeft | null => {
    // Change this date whenever you launch a new campaign
    const target = new Date("2026-12-31T23:59:59");
    const difference = target.getTime() - Date.now();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden rounded-3xl">
      {/* Background */}
      <Image
        src="/assets/promo-banner.jpg"
        alt="Kharedo Mega Sale"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-500/20 px-5 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm font-semibold tracking-wide">
            LIMITED TIME OFFER
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl"
        >
          Kharedo Mega Seasonal Sale
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 max-w-2xl text-lg text-gray-200 md:text-xl"
        >
          Save up to
          <span className="mx-2 font-bold text-yellow-400">
            70% OFF
          </span>
          on Electronics, Fashion, Home Essentials and much more.
        </motion.p>

        {timeLeft && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-8 py-5 backdrop-blur-xl"
          >
            <Timer className="h-5 w-5 text-yellow-400" />

            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-bold">{item.value}</p>
                <span className="text-xs uppercase tracking-wider text-gray-300">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/sale"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Shop Now
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/categories"
            className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            Browse Categories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}