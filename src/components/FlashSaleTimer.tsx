"use client";
import { useEffect, useState } from "react";

export default function FlashSaleTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 45, seconds: 12 });

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // ❌ Do not render on server

  return (
    <div className="flex items-center gap-2 font-mono text-lg font-semibold bg-yellow-500 text-white px-4 py-2 rounded-lg">
      <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
      <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
      <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
  );
}
