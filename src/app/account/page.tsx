"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Lock,
  PackageCheck,
  CreditCard,
  MapPin,
  LogOut,
  Camera,
} from "lucide-react";
import Link from "next/link";

// ---------------- Tabs ----------------
const TABS = [
  { label: "Profile", icon: <User size={18} /> },
  { label: "Password", icon: <Lock size={18} /> },
  { label: "Orders", icon: <PackageCheck size={18} /> },
  { label: "Payment", icon: <CreditCard size={18} /> },
  { label: "Addresses", icon: <MapPin size={18} /> },
];

// ---------------- Zod Schemas ----------------
const profileSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 letters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
});

const passwordSchema = z
  .object({
    currentPassword: z.string().min(6),
    newPassword: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .refine((data: { newPassword: any; confirmPassword: any; }) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ---------------- Main Component ----------------
export default function AccountSettingsPro() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="mx-auto max-w-screen-2xl min-h-screen text-black bg-gray-50 py-10 px-4 md:px-8 mt-32">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden md:flex">
        {/* Sidebar */}
        <aside className="md:w-72 border-r border-gray-200 bg-gray-100 p-6">
          <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        </aside>

        {/* Content */}
        <main className="flex-1 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "Profile" && <ProfileTab />}
              {activeTab === "Password" && <PasswordTab />}
              {activeTab === "Orders" && <OrdersTab />}
              {activeTab === "Payment" && <PaymentTab />}
              {activeTab === "Addresses" && <AddressesTab />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// ---------------- Sidebar Component ----------------
function Sidebar({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}) {
  return (
    <div>
      <div className="text-center mb-6">
        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-300">
          <Image
            src="/testi1.jpg"
            alt="User Avatar"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-yellow-500 rounded-full p-1 cursor-pointer">
            <Camera size={18} className="text-white" />
          </div>
        </div>
        <h2 className="mt-3 font-bold text-lg">Full Name</h2>
        <p className="text-sm text-gray-500">your@123umar.com</p>
      </div>

      <nav className="space-y-2">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg text-left font-medium ${
              activeTab === tab.label
                ? "bg-white shadow text-black"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
        <Link
          href="/logout"
          className="flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-red-600 hover:bg-red-100 font-medium"
        >
          <LogOut size={18} /> Logout
        </Link>
      </nav>
    </div>
  );
}

// ---------------- Profile Tab ----------------
function ProfileTab() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(profileSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Profile Data:", data);
  };

  return (
    <div className="space-y-6 max-w-md">
      <h3 className="text-2xl text-black font-semibold mb-4">Profile Information</h3>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Full Name" {...register("name")} error={formState.errors.name?.message} />
        <Input label="Email" type="email" {...register("email")} error={formState.errors.email?.message} />
        <Input label="Phone" type="tel" {...register("phone")} error={formState.errors.phone?.message} />
        <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-900">
          Save Changes
        </button>
      </form>
    </div>
  );
}

// ---------------- Password Tab ----------------
function PasswordTab() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Password Data:", data);
  };

  return (
    <div className="space-y-6 max-w-md">
      <h3 className="text-2xl font-semibold mb-4">Change Password</h3>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Current Password" type="password" {...register("currentPassword")} error={formState.errors.currentPassword?.message} />
        <Input label="New Password" type="password" {...register("newPassword")} error={formState.errors.newPassword?.message} />
        <Input label="Confirm Password" type="password" {...register("confirmPassword")} error={formState.errors.confirmPassword?.message} />
        <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-900">
          Update Password
        </button>
      </form>
    </div>
  );
}

// ---------------- Orders Tab ----------------
function OrdersTab() {
  const orders = [
    { id: 101, status: "Delivered", date: "2025-08-20", total: "$120.00" },
    { id: 102, status: "Processing", date: "2025-08-15", total: "$220.00" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-4">Your Orders</h3>
      <table className="w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-2">{o.id}</td>
              <td className="px-4 py-2">{o.date}</td>
              <td className="px-4 py-2">{o.status}</td>
              <td className="px-4 py-2">{o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------------- Payment Tab ----------------
function PaymentTab() {
  return (
    <div className="space-y-4 max-w-md">
      <h3 className="text-2xl font-semibold mb-4">Payment Methods</h3>
      <ul className="space-y-2">
        <Card title="Visa **** 1234" />
        <Card title="Mastercard **** 5678" />
      </ul>
      <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 mt-4">
        Add New Payment
      </button>
    </div>
  );
}

// ---------------- Addresses Tab ----------------
function AddressesTab() {
  return (
    <div className="space-y-4 max-w-md">
      <h3 className="text-2xl font-semibold mb-4">Addresses</h3>
      <ul className="space-y-2">
        <Card title="123 Main St, City, Country" />
      </ul>
      <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 mt-4">
        Add New Address
      </button>
    </div>
  );
}

// ---------------- Reusable Input ----------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Input({ label, error, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

// ---------------- Reusable Card ----------------
function Card({ title }: { title: string }) {
  return (
    <li className="border rounded-lg p-4 flex justify-between items-center">
      <span>{title}</span>
      <button className="text-red-500 hover:underline">Remove</button>
    </li>
  );
}
