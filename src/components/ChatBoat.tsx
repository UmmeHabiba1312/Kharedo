"use client"
import { useRouter } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  // Minimize2,
  ShoppingCart,
  Sparkles,
  Paperclip,
  ChevronLeft,
} from "lucide-react"

// ——— Types ———
type Product = {
  id: string
  title: string
  price: number
  image?: string
  href?: string
}

type ChatMessage = {
  id: string
  role: "user" | "bot" | "system"
  text?: string
  products?: Product[]
  suggestions?: string[]
}

// ——— Component ———
export default function Chatbot() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m0",
      role: "bot",
      text: "Hi 👋 I’m Khareedo Customer Support Agent. Ask me to show products, track orders or browse categories. Try: ‘show me your products’.",
      suggestions: [
        "Show me top deals",
        "Track order #1023",
        "Browse running shoes",
      ],
    },
  ])
  const [input, setInput] = useState("") // ✅ error solved
  const [loading, setLoading] = useState(false)

  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (open && !minimized) focusInput()
  }, [open, minimized])

  useEffect(() => {
    scrollToBottom()
  }, [messages, minimized])

  // ✅ webhook listener
  useEffect(() => {
    const evtSource = new EventSource("https://kharedo-api.vercel.app/webhook")
    evtSource.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.action === "show_categories") {
        router.push("/categories")
      }
    }
    return () => evtSource.close()
  }, [router])

  function focusInput() {
    setTimeout(
      () => document.querySelector<HTMLInputElement>("#chat-input")?.focus(),
      80
    )
  }

  function scrollToBottom() {
    if (!listRef.current) return
    listRef.current.scrollTop = listRef.current.scrollHeight + 200
  }

  function pushMessage(m: ChatMessage) {
    setMessages((s) => [...s, m])
  }

  async function handleSend(raw?: string) {
  const text = (raw ?? input).trim()
  if (!text) return

  pushMessage({ id: `u_${Date.now()}`, role: "user", text })
  setInput("")
  setLoading(true)

  try {
    const res = await fetch("https://kharedo-api.vercel.app/chat/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: text }], // ✅ FIXED
      }),
    })

    if (!res.ok) throw new Error("Network error")
    const data = await res.json()

    if (data.response) {
      const msg = data.response.toLowerCase()
      if (msg.includes("categories")) {
        router.push("/categories")
      }
      pushMessage({
        id: `b_${Date.now()}`,
        role: "bot",
        text: data.response,
      })
    } else {
      pushMessage({
        id: `b_${Date.now()}`,
        role: "bot",
        text: "⚠️ Sorry, no response.",
      })
    }
  } catch (err) {
    console.error("Chat API error:", err)
    pushMessage({
      id: `b_err_${Date.now()}`,
      role: "bot",
      text: "⚠️ Something went wrong. Try again.",
    })
  } finally {
    setLoading(false)
    focusInput()
  }
}


  function handleSuggestion(s: string) {
    handleSend(s)
  }

  function handleAddToCart(productId?: string) {
    void productId;
    pushMessage({
      id: `sys_${Date.now()}`,
      role: "system",
      text: "Added to cart ✅",
    })
  }

  const bubble = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  const FloatingGlow = () => (
    <div className='pointer-events-none absolute inset-0 -z-10'>
      <div className='absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-3xl bg-yellow-200/30' />
      <div className='absolute -top-20 -left-16 h-72 w-72 rounded-full blur-3xl bg-orange-200/30' />
    </div>
  )

  // ✅ Final single return (pehle 2 return the, ab sirf ek hai)
  return (
    <div className='mx-auto max-w-screen-2xl'>
      {/* Floating Button */}
      <div className='fixed bottom-6 right-6 z-[60]'>
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileTap={{ scale: 0.98 }}
              className='relative flex items-center gap-2 bg-gradient-to-br from-yellow-500 to-orange-400 text-black px-4 py-3 rounded-full shadow-2xl focus:outline-none'
              onClick={() => setOpen(true)}
              aria-label='Open chat'
            >
              <motion.span
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                className='grid place-items-center'
              >
                <MessageSquare className='w-5 h-5' />
              </motion.span>
              <span className='hidden md:inline font-semibold'>Help</span>
              <span className='absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold px-1 text-yellow-600 shadow'>
                1
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Minimized pill */}
        <AnimatePresence>
          {open && minimized && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className='flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-2 shadow cursor-pointer ring-1 ring-black/5'
              onClick={() => setMinimized(false)}
            >
              <MessageSquare className='w-4 h-4 text-gray-700' />
              <span className='text-sm text-gray-700'>ShopBot</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && !minimized && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className='fixed bottom-6 right-6 z-[60] w-[92vw] max-w-[420px] md:w-[420px] h-[60vh] md:h-[520px]'
            role='dialog'
            aria-modal='true'
            aria-label='Customer support chat'
          >
            {/* Outer gradient ring */}
            <div className='relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/60 via-orange-400/40 to-transparent shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]'>
              {/* Card */}
              <div className='relative h-full w-full rounded-2xl bg-white/90 backdrop-blur-md overflow-hidden flex flex-col ring-1 ring-black/5'>
                <FloatingGlow />

                {/* Header */}
                <div className='flex items-center px-4 py-3 border-b bg-gradient-to-r from-yellow-50 to-orange-50'>
                  {/* Left side: bot info */}
                  <div className='flex items-center gap-3 flex-1 min-w-0'>
                    <div className='h-9 w-9 rounded-xl bg-yellow-500/10 grid place-items-center ring-1 ring-yellow-500/20 shrink-0'>
                      <span className='text-lg'>🤖</span>
                    </div>
                    <div className='min-w-0'>
                      <div className='font-semibold text-gray-900 flex items-center gap-2'>
                        <span className='truncate'>ShopBot</span>
                        <span className='inline-flex items-center gap-1 text-xs text-green-600'>
                          <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />
                          Online
                        </span>
                      </div>
                      <div className='text-xs text-gray-500 truncate'>
                        Ask about products, orders & offers
                      </div>
                    </div>
                  </div>

                  {/* Right side: controls */}
                  <div className='flex items-center gap-1 shrink-0 ml-2'>
                    {/* <button
      aria-label="Minimize chat"
      onClick={() => setMinimized(true)}
      className="p-2 rounded-lg hover:bg-black/5 text-black"
    >
      <Minimize2 className="w-4 h-4" />
    </button> */}
                    <button
                      aria-label='Close chat'
                      onClick={() => setOpen(false)}
                      className='p-2 rounded-lg hover:bg-black/5 text-black'
                    >
                      <X className='w-4 h-4' />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div
                  ref={listRef}
                  className='flex-1 overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-white/60 to-white'
                >
                  {messages.map((m) => (
                    <motion.div
                      key={m.id}
                      variants={bubble}
                      initial='hidden'
                      animate='show'
                      transition={{ duration: 0.18 }}
                      className={`flex ${
                        m.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[82%] ${
                          m.role === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`inline-flex items-start gap-3 ${
                            m.role === "user" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div className='w-8 h-8 rounded-full bg-gray-200 grid place-items-center text-[10px] font-semibold text-gray-700'>
                            {m.role === "user" ? "YOU" : "SB"}
                          </div>
                          <div
                            className={`${
                              m.role === "user"
                                ? "bg-yellow-100 text-gray-900"
                                : "bg-white text-gray-900"
                            } rounded-2xl p-3 shadow ring-1 ring-black/5`}
                          >
                            {m.text && (
                              <div className='text-sm leading-relaxed whitespace-pre-wrap'>
                                {m.text}
                              </div>
                            )}

                            {/* products */}
                            {m.products && (
                              <div className='mt-3 overflow-x-auto'>
                                <div className='flex gap-3 snap-x snap-mandatory pr-2'>
                                  {m.products.map((p) => (
                                    <div
                                      key={p.id}
                                      className='min-w-[260px] max-w-[260px] snap-start border rounded-xl overflow-hidden bg-white ring-1 ring-black/5'
                                    >
                                      <div className='relative h-28 w-full bg-gray-100'>
                                        <Image
                                          src={p.image || "/sport.jpg"}
                                          alt={p.title}
                                          fill
                                          className='object-cover'
                                        />
                                      </div>
                                      <div className='p-3 space-y-2'>
                                        <div className='font-semibold text-sm line-clamp-2'>
                                          {p.title}
                                        </div>
                                        <div className='text-sm text-gray-600'>
                                          ${p.price}
                                        </div>
                                        <div className='flex items-center gap-2'>
                                          <button
                                            onClick={() =>
                                              handleAddToCart(p.id)
                                            }
                                            className='px-3 py-1 rounded-lg bg-yellow-500 text-black text-sm inline-flex items-center gap-2 hover:bg-yellow-400 transition'
                                          >
                                            <ShoppingCart className='w-4 h-4' />{" "}
                                            Add
                                          </button>
                                          <Link
                                            href={p.href || "#"}
                                            className='px-3 py-1 rounded-lg border text-sm hover:bg-gray-50'
                                          >
                                            View
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* suggestions */}
                            {m.suggestions && (
                              <div className='mt-3 flex flex-wrap gap-2'>
                                {m.suggestions.map((s) => (
                                  <button
                                    key={s}
                                    onClick={() => handleSuggestion(s)}
                                    className='px-3 py-1 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition'
                                  >
                                    {s}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {loading && (
                    <div className='flex items-center gap-2'>
                      <div className='w-8 h-8 rounded-full bg-gray-200 grid place-items-center'>
                        <Sparkles className='w-4 h-4 animate-pulse' />
                      </div>
                      <div className='bg-gray-200 rounded-xl px-3 py-2 text-sm animate-pulse'>
                        Typing…
                      </div>
                    </div>
                  )}
                </div>

                {/* Composer */}
                <div className='border-t p-3 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70'>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSend()
                    }}
                    className='flex items-end gap-2'
                  >
                    <button
                      type='button'
                      className='flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-gray-50'
                      aria-label='Toggle sidebar'
                    >
                      <ChevronLeft className='w-4 h-4 text-black' />
                    </button>

                    <div className='flex-1 relative'>
                      <input
                        id='chat-input'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Ask about products, orders or offers…'
                        className='w-full border rounded-2xl text-black pl-4 pr-12 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400'
                      />
                      <button
                        type='button'
                        className='absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-50'
                        aria-label='Attach file'
                      >
                        <Paperclip className='w-4 h-4 text-black' />
                      </button>
                    </div>

                    <button
                      type='submit'
                      disabled={loading}
                      className='inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-2xl font-semibold hover:bg-yellow-400 disabled:opacity-60'
                    >
                      {loading ? (
                        <Loader2 className='w-4 h-4 animate-spin' />
                      ) : (
                        <Send className='w-4 h-4' />
                      )}{" "}
                      <span className='hidden sm:inline'>Send</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
