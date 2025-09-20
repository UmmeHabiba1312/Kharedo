"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Truck } from "lucide-react";

interface CheckoutForm {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
}

const DEMO_CART = [
  { id: "1", name: "Wireless Headphones", qty: 1, price: 89.99, image: "/headphone.jpg" },
  { id: "2", name: "Smartwatch Pro", qty: 2, price: 129.0, image: "/watch.webp" },
];

export default function CheckoutPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutForm>();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  const onSubmit = (data: CheckoutForm) => {
    console.log("Checkout data:", data);
    alert("Payment submitted!"); // Replace with real payment integration
  };

  const subtotal = DEMO_CART.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 15.0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl bg-white mx-auto p-4 md:p-8 text-black mt-32">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing & Payment Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold mb-2">Billing Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                {...register("fullName", { required: "Full name required" })}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                {...register("email", { required: "Email required" })}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              {...register("address", { required: "Address required" })}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                {...register("city", { required: "City required" })}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ZIP</label>
              <input
                {...register("zip", { required: "ZIP code required" })}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                {...register("country", { required: "Country required" })}
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
            </div>
          </div>

          {/* Payment Options */}
          <h2 className="text-xl font-semibold mt-6 mb-2">Payment Method</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`flex-1 border rounded-xl px-4 py-3 gap-2 flex items-center justify-center font-semibold ${
                paymentMethod === "card" ? "bg-black text-white" : "bg-white hover:bg-neutral-100"
              }`}
            >
              <CreditCard /> Credit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("paypal")}
              className={`flex-1 border rounded-xl px-4 py-3 gap-2 flex items-center justify-center font-semibold ${
                paymentMethod === "paypal" ? "bg-black text-white" : "bg-white hover:bg-neutral-100"
              }`}
            >
              

<Image
  src="/PayPal.png"        // Make sure this is inside public folder
  alt="PayPal"
  width={70}               // width in px
  height={24}              // height in px
  className="object-contain"
/>
              PayPal
            </button>
          </div>

          {paymentMethod === "card" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <input
                  {...register("cardNumber", { required: "Card number required" })}
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Expiry</label>
                <input
                  {...register("cardExpiry", { required: "Expiry required" })}
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <input
                  {...register("cardCVC", { required: "CVC required" })}
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-neutral-900 transition"
          >
            Pay ${total.toFixed(2)}
          </button>
        </motion.form>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border rounded-2xl p-6 space-y-4 bg-neutral-50"
        >
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <ul className="divide-y">
            {DEMO_CART.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image height={100} width={100} src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-neutral-700">Qty: {item.qty}</p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price * item.qty).toFixed(2)}</p>
              </li>
            ))}
          </ul>

          <div className="space-y-2 mt-4">
            <div className="flex justify-between text-black font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-black font-medium">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-black font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-neutral-700">
            <Truck size={16} /> Free shipping on orders over $50
          </div>
        </motion.div>
      </div>
    </div>
  );
}
