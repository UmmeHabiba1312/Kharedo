"use client";

import { CartProvider } from "use-shopping-cart";
import Header from "@/components/Header";
import Chatbot from "@/components/ChatBoat";
import FooterPro from "@/components/footer";

export default function CartProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      currency="USD"
      shouldPersist
      successUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/cancel`}
    >
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Chatbot />
      <FooterPro />
    </CartProvider>
  );
}
