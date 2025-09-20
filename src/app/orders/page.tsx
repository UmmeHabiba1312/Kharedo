"use client";

import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type OrderStatus = "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";

interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
}

// ---- Demo Data ----
const DEMO_ORDERS: Order[] = [
  {
    id: "ORD-1001",
    date: "2025-08-21",
    status: "Processing",
    total: 199.99,
    items: [
      { id: "1", name: "Wireless Headphones", qty: 1, price: 89.99, image: "/headphone.jpg" },
      { id: "2", name: "Smartwatch Pro", qty: 2, price: 55, image: "/watch.webp" },
    ],
  },
  {
    id: "ORD-1002",
    date: "2025-08-19",
    status: "Shipped",
    total: 89.99,
    items: [
      { id: "3", name: "Gaming Mouse", qty: 1, price: 89.99, image: "/mouse.jpg" },
    ],
  },
  {
    id: "ORD-1003",
    date: "2025-08-15",
    status: "Delivered",
    total: 349.99,
    items: [
      { id: "4", name: "Laptop Pro 15", qty: 1, price: 349.99, image: "/laptop.jpg" },
    ],
  },
];

// ---- Status Colors ----
const statusColor: Record<OrderStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Processing: "bg-blue-100 text-blue-800",
  Shipped: "bg-purple-100 text-purple-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

export default function OrdersPage() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [filter, setFilter] = useState<OrderStatus | "All">("All");
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    return DEMO_ORDERS.filter(
      (o) =>
        (filter === "All" || o.status === filter) &&
        o.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [filter, search]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-black">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Order ID"
          className="border rounded-xl px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s as OrderStatus | "All")}
              className={`px-4 py-2 rounded-xl border text-black font-medium ${
                filter === s ? "bg-black text-white" : "bg-white hover:bg-neutral-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="space-y-4">
        {filteredOrders.length === 0 && (
          <div className="text-center py-10 text-black">No orders found.</div>
        )}

        {filteredOrders.map((order) => {
          const isOpen = expandedOrder === order.id;
          return (
            <div key={order.id} className="border rounded-2xl shadow-sm overflow-hidden">
              {/* Order Header */}
              <button
                onClick={() => setExpandedOrder(isOpen ? null : order.id)}
                className="w-full flex justify-between items-center px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 text-left">
                  <span className="font-semibold">{order.id}</span>
                  <span className="text-sm text-neutral-700">{order.date}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[order.status]}`}
                  >
                    {order.status}
                  </span>
                  <span className="font-semibold">${order.total.toFixed(2)}</span>
                </div>
                <div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
              </button>

              {/* Order Details */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white border-t"
                  >
                    <ul className="divide-y">
                      {order.items.map((item) => (
                        <li key={item.id} className="flex items-center gap-4 p-4 hover:bg-neutral-50 transition">
                          <div className="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                            <Image height={100} width={100} src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-neutral-700">Qty: {item.qty}</p>
                          </div>
                          <p className="font-semibold">${(item.price * item.qty).toFixed(2)}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 flex flex-col sm:flex-row sm:justify-between items-center gap-3">
                      <Link
                        href={`/account/orders/${order.id}`}
                        className="px-4 py-2 bg-black text-white rounded-xl font-semibold hover:bg-neutral-900"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 border rounded-xl font-semibold hover:bg-neutral-100">
                        Reorder
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
