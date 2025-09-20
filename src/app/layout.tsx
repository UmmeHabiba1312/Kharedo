import CartProviderWrapper from "@/components/CartProviderWrapper";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop UI",
  description: "Expert ecommerce UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProviderWrapper>{children}</CartProviderWrapper>
      </body>
    </html>
  );
}
