import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Gemini ko message bhejna
    const result = await model.generateContent(message);
    const reply = result.response.text();

    // Agar user "products" bole to product cards bhejo
    if (message.toLowerCase().includes("product")) {
      return NextResponse.json({
        messages: [
          { role: "bot", text: "Here are some products you might like 👇" },
          {
            role: "bot",
            text: "",
            products: [
              {
                id: "1",
                title: "iPhone 15 Pro",
                price: 1200,
                image: "https://images.unsplash.com/photo-1695044807842-xxxx?q=80&w=400",
                href: "/products/iphone-15-pro",
              },
              {
                id: "2",
                title: "Samsung Galaxy S24",
                price: 1100,
                image: "https://images.unsplash.com/photo-169765720xxxx?q=80&w=400",
                href: "/products/galaxy-s24",
              },
              {
                id: "3",
                title: "Apple iPad Air",
                price: 800,
                image: "https://images.unsplash.com/photo-1508898578281-xxxx?q=80&w=400",
                href: "/products/ipad-air",
              },
            ],
          },
        ],
      });
    }

    // Agar normal reply ho
    return NextResponse.json({
      messages: [{ role: "bot", text: reply }],
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ messages: [{ role: "bot", text: "⚠️ Something went wrong. Please try again." }] });
  }
}
