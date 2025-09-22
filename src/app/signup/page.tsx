"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

// ---------- Validation schema ----------
const signupSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Confirm your password" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

type SignupFormInputs = z.infer<typeof signupSchema>;

export default function ExpertSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup Data:", data);
    // Call signup API here
  };

  return (
    <div className="mx-auto max-w-screen-2xl min-h-screen flex flex-col lg:flex-row mt-32 bg-white">
      {/* Left Column: Signup Form */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="lg:w-1/2 flex items-center justify-center bg-white p-10"
      >
        <div className="w-full max-w-md">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-extrabold mb-2 text-black"
          >
            Create Account
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-black mb-6"
          >
            Sign up to start shopping with ShopX
          </motion.p>

          <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <label className="block text-sm font-medium text-black mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-black outline-none text-black`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </motion.div>

            {/* Email */}
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <label className="block text-sm font-medium text-black mb-1">Email</label>
              <input
                type="email"
                placeholder="youremail@.com"
                {...register("email")}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-black outline-none text-black`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </motion.div>

            {/* Password */}
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <label className="block text-sm font-medium text-black mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password")}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-black outline-none text-black`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </motion.div>

            {/* Confirm Password */}
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <label className="block text-sm font-medium text-black mb-1">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword")}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-black outline-none text-black`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition-all"
            >
              {isSubmitting ? "Creating..." : "Sign Up"}
            </motion.button>
          </motion.form>

          {/* Social Signup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center my-6"
          >
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </motion.div>

          <motion.div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="w-full flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-100 transition-all text-black"
            >
              <Image src="/Google1.webp" alt="Google" width={60} height={20} /> 
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              className="w-full flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-100 transition-all text-black"
            >
              <Image src="/Facebook.png" alt="Facebook" width={40} height={20} /> 
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center text-sm text-black"
          >
            Already have an account?{" "}
            <Link href="/login" className="font-semibold hover:underline">
              Log In
            </Link>
          </motion.p>
        </div>
      </motion.div>

      {/* Right Column: Hero Image */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="lg:w-1/2 relative hidden lg:flex items-center justify-center bg-gray-50 mb-56"
      >
        <motion.div
          initial={{ scale: 0.95, rotate: -2 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-full max-w-lg"
        >
          <Image
            src="/signup.jpg" // replace with your pro-level hero image
            alt="Signup Hero"
            width={600}
            height={600}
            className="object-cover rounded-3xl shadow-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
