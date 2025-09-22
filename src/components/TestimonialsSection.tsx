"use client";

import { Star, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    role: "Verified Buyer",
    image: "/testi1.jpg",
    rating: 5,
    review:
      "Amazing quality! The shoes I ordered are super comfortable and exactly like the pictures. Will shop again!",
    product: "/testi1.jpg",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Verified Buyer",
    image: "/testi1.jpg",
    rating: 4,
    review:
      "Fast delivery and great service. The mobile cover I got is stylish and durable. Worth the price.",
    product: "/testi1.jpg",
  },
  {
    id: 3,
    name: "Hamza Iqbal",
    role: "Verified Buyer",
    image: "/testi1.jpg",
    rating: 5,
    review:
      "Best deals during the flash sale. Got my headphones at half price and they sound amazing!",
    product: "/testi1.jpg",
  },
  {
    id: 4,
    name: "Ayesha Noor",
    role: "Verified Buyer",
    image: "/testi1.jpg",
    rating: 5,
    review:
      "Very happy with my purchase. The dress fabric is premium quality and delivery was on time.",
    product: "/testi1.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-screen-2xl py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Customer Reviews
          </h2>
          <p className="mt-2 text-gray-600">
            What real shoppers are saying about us
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 h-full flex flex-col justify-between">
                {/* Top Section: User */}
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-1">
                      {t.name}{" "}
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                {/* Review */}
                <p className="mt-4 text-gray-600 leading-relaxed">{t.review}</p>

                {/* Rating */}
                <div className="mt-4 flex items-center">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Product Thumbnail */}
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.product}
                    alt="Reviewed Product"
                    width={60}
                    height={60}
                    className="rounded-md object-cover border"
                  />
                  <span className="text-sm text-gray-700">
                    Reviewed this product
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
