"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Top 10 Smartphones to Buy in 2025",
    category: "Buying Guide",
    excerpt:
      "Looking for the best smartphones this year? Here’s a curated list of top models with features and prices...",
    image: "/blogs/blog1.jpg",
    author: "Ali Khan",
    date: "Aug 10, 2025",
    link: "/blog/smartphones-2025",
  },
  {
    id: 2,
    title: "5 Tips to Save Money on Online Shopping",
    category: "Shopping Tips",
    excerpt:
      "Online shopping can save you money if done right. Discover practical tips to maximize discounts and deals...",
    image: "/blogs/blog2.jpg",
    author: "Sara Ahmed",
    date: "Aug 5, 2025",
    link: "/blog/save-money-online",
  },
  {
    id: 3,
    title: "How to Choose the Right Laptop for Work",
    category: "Tech Guide",
    excerpt:
      "Confused about which laptop to buy? Here’s a detailed guide on picking the perfect one for your needs...",
    image: "/blogs/blog3.jpg",
    author: "Hamza Iqbal",
    date: "Jul 28, 2025",
    link: "/blog/choose-laptop",
  },
];

export default function BlogSection() {
  return (
    <section  className="mx-auto max-w-screen-2xl py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest Blogs & Buying Guides
          </h2>
          <p className="mt-2 text-gray-600">
            Stay updated with expert tips, reviews, and shopping guides
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Author + Date */}
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>

                {/* Read More */}
                <Link
                  href={blog.link}
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
