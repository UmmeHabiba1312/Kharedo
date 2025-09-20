"use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// // import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Search,
//   ShoppingCart,
//   Heart,
//   User,
//   ChevronDown,
//   ChevronRight,
//   PhoneCall,
//   MapPin,
//   Truck,
//   ShieldCheck,
//   LogIn,
//   LogOut,
//   PackageCheck,
//   CreditCard,
//   Settings,
// } from "lucide-react";

// /**
//  * Pro E‑commerce Header
//  * — Next.js + Tailwind CSS, lucide-react, framer-motion
//  * — Features:
//  *   - Sticky, transparent-on-top header switching to solid on scroll
//  *   - Mega Menu for categories (desktop hover / mobile accordion)
//  *   - Search bar with category filter + hot keywords
//  *   - Wishlist, Account menu, Cart drawer with mini‑cart
//  *   - Free shipping/info topbar
//  *   - Fully responsive & accessible
//  *
//  * Drop this file as `components/Header.tsx` and import <Header /> in your layout.
//  * Minimal external deps: `lucide-react` and `framer-motion`.
//  */

// // --------- Demo data (replace with your live data) ---------
// const CATEGORIES = [
//   {
//     label: "Electronics",
//     href: "/c/electronics",
//     columns: [
//       {
//         title: "Mobiles & Tablets",
//         items: [
//           { label: "Smartphones", href: "/c/electronics/smartphones" },
//           { label: "Tablets", href: "/c/electronics/tablets" },
//           { label: "Smartwatches", href: "/c/electronics/wearables" },
//           { label: "Accessories", href: "/c/electronics/accessories" },
//         ],
//       },
//       {
//         title: "Computing",
//         items: [
//           { label: "Laptops", href: "/c/electronics/laptops" },
//           { label: "Desktops", href: "/c/electronics/desktops" },
//           { label: "Monitors", href: "/c/electronics/monitors" },
//           { label: "Keyboards & Mice", href: "/c/electronics/peripherals" },
//         ],
//       },
//       {
//         title: "Audio & Video",
//         items: [
//           { label: "Headphones", href: "/c/electronics/headphones" },
//           { label: "Speakers", href: "/c/electronics/speakers" },
//           { label: "TVs", href: "/c/electronics/tv" },
//           { label: "Streaming", href: "/c/electronics/streaming" },
//         ],
//       },
//     ],
//     promo: {
//       image:
//         "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
//       title: "New Flagship Phones",
//       subtitle: "Up to 20% off",
//       href: "/c/electronics/smartphones",
//     },
//   },
//   {
//     label: "Fashion",
//     href: "/c/fashion",
//     columns: [
//       {
//         title: "Women",
//         items: [
//           { label: "Dresses", href: "/c/fashion/women/dresses" },
//           { label: "Tops", href: "/c/fashion/women/tops" },
//           { label: "Shoes", href: "/c/fashion/women/shoes" },
//           { label: "Bags", href: "/c/fashion/women/bags" },
//         ],
//       },
//       {
//         title: "Men",
//         items: [
//           { label: "T‑Shirts", href: "/c/fashion/men/tshirts" },
//           { label: "Shirts", href: "/c/fashion/men/shirts" },
//           { label: "Jeans", href: "/c/fashion/men/jeans" },
//           { label: "Sneakers", href: "/c/fashion/men/sneakers" },
//         ],
//       },
//       {
//         title: "Kids",
//         items: [
//           { label: "Girls", href: "/c/fashion/kids/girls" },
//           { label: "Boys", href: "/c/fashion/kids/boys" },
//           { label: "Baby", href: "/c/fashion/kids/baby" },
//           { label: "Accessories", href: "/c/fashion/kids/accessories" },
//         ],
//       },
//     ],
//     promo: {
//       image:
//         "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
//       title: "Autumn Arrivals",
//       subtitle: "Fresh fits under $49",
//       href: "/c/fashion/new",
//     },
//   },
//   {
//     label: "Grocery",
//     href: "/c/grocery",
//     columns: [
//       {
//         title: "Daily Essentials",
//         items: [
//           { label: "Beverages", href: "/c/grocery/beverages" },
//           { label: "Snacks", href: "/c/grocery/snacks" },
//           { label: "Cooking", href: "/c/grocery/cooking" },
//           { label: "Breakfast", href: "/c/grocery/breakfast" },
//         ],
//       },
//       {
//         title: "Household",
//         items: [
//           { label: "Cleaning", href: "/c/grocery/cleaning" },
//           { label: "Paper & Wraps", href: "/c/grocery/paper" },
//           { label: "Laundry", href: "/c/grocery/laundry" },
//           { label: "Baby Care", href: "/c/grocery/baby" },
//         ],
//       },
//       {
//         title: "Organic",
//         items: [
//           { label: "Fruits & Veg", href: "/c/grocery/produce" },
//           { label: "Grains & Nuts", href: "/c/grocery/grains" },
//           { label: "Dairy", href: "/c/grocery/dairy" },
//           { label: "Bakery", href: "/c/grocery/bakery" },
//         ],
//       },
//     ],
//     promo: {
//       image:
//         "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
//       title: "Weekly Fresh Picks",
//       subtitle: "Save on staples",
//       href: "/c/grocery/deals",
//     },
//   },
// ];

// const HOT_KEYWORDS = [
//   "iPhone 15",
//   "Noise cancelling",
//   "4K TV",
//   "Gaming laptop",
//   "Air fryer",
// ];

// const DEMO_CART = [
//   {
//     id: "1",
//     title: "Wireless Headphones",
//     price: 89.99,
//     qty: 1,
//     image:
//       "https://images.unsplash.com/photo-1518446958256-d0a1f9f6663d?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: "2",
//     title: "Smartwatch Pro",
//     price: 129.0,
//     qty: 2,
//     image:
//       "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da0?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// // --------- Utilities ---------
// function classNames(...classes: Array<string | false | undefined>) {
//   return classes.filter(Boolean).join(" ");
// }

// function useScrollSolid(threshold = 8) {
//   const [solid, setSolid] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setSolid(window.scrollY > threshold);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [threshold]);
//   return solid;
// }

// // --------- Main Component ---------
// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [activeMega, setActiveMega] = useState<string | null>(null);
//   const [query, setQuery] = useState("");
//   const [category, setCategory] = useState("All");
//   const solid = useScrollSolid(24);

//   const cartTotal = useMemo(
//     () => DEMO_CART.reduce((sum, i) => sum + i.price * i.qty, 0),
//     []
//   );

//   // Close megamenu on ESC
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setActiveMega(null);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       {/* Top Info Bar */}
//       <div className="hidden md:block bg-black text-white text-sm">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
//           <div className="flex items-center gap-6">
//             <span className="inline-flex items-center gap-2"><Truck size={16}/> Free shipping over $50</span>
//             <span className="inline-flex items-center gap-2"><ShieldCheck size={16}/> 30‑day returns</span>
//             <span className="inline-flex items-center gap-2"><PhoneCall size={16}/> 24/7 support</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="#" className="hover:underline">Help</Link>
//             <Link href="#" className="hover:underline">Track Order</Link>
//             <span className="inline-flex items-center gap-1 opacity-80"><MapPin size={16}/> PK</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Nav */}
//       <div
//         className={classNames(
//           "transition-colors",
//           solid ? "bg- text-white backdrop-blur shadow-sm" : "bg-white/10 backdrop-blur-0"
//         )}
//       >
//         <nav className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-3 py-3 md:py-4">
//             {/* Mobile toggle */}
//             <button
//               className="md:hidden p-2 rounded-xl border border-neutral-200"
//               aria-label="Open menu"
//               onClick={() => setMobileOpen(true)}
//             >
//               <Menu />
//             </button>

//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2">
//               <div className="h-9 w-9 rounded-2xl bg-black text-black grid place-items-center dark:bg-white dark:text-black font-bold">
//                 🛍️
//               </div>
//               <span className="text-xl md:text-2xl font-extrabold tracking-tight">ShopX</span>
//             </Link>

//             {/* Search */}
//             <div className="flex-1 hidden text-black  lg:flex">
//               <SearchBar
              
//                 value={query}
//                 onChange={setQuery}
//                 category={category}
//                 onCategory={setCategory}
//               />
//             </div>

//             {/* Icons */}
//             <div className="ml-auto flex items-center gap-2 md:gap-3">
//               <Link
//                 href="/wishlist"
//                 className="p-2 rounded-xl hover:bg-yellow-600"
//                 aria-label="Wishlist"
//                 title="Wishlist"
//               >
//                 <Heart />
//               </Link>

//               {/* Account */}
//               <AccountMenu />

//               {/* Cart */}
//               <button
//                 onClick={() => setCartOpen(true)}
//                 className="relative p-2 rounded-xl hover:bg-yellow-600"
//                 aria-label="Open cart"
//               >
//                 <ShoppingCart />
//                 <span className="absolute -top-1 -right-1 text-[10px] bg-white text-red-500 font-bold rounded-full h-5 w-5 grid place-items-center">
//   {DEMO_CART.length}
// </span>
//               </button>
//             </div>
//           </div>

//           {/* Bottom row: Categories + hot keywords (desktop) */}
//           <div className="hidden md:flex items-center gap-6 pb-3">
//             <div className="relative text-black ">
//               <button
//                 className="inline-flex items-center gap-2 cursor-pointer  px-3 py-2 rounded-xl text-black bg-neutral-100 hover:bg-neutral-200 text-sm font-medium"
//                 onMouseEnter={() => setActiveMega("All")}
//                 onFocus={() => setActiveMega("All")}
//                 aria-expanded={activeMega === "All"}
//               >
//                 <Menu size={18} className="cursor-pointer" /> All Categories <ChevronDown size={16} />
//               </button>
//               <MegaMenu
                
//                 open={activeMega === "All"}
//                 onClose={() => setActiveMega(null)}
//                 categories={CATEGORIES}
//               />
//             </div>

//             <div className="flex items-center  text-black gap-5 text-sm">
//               {CATEGORIES.map((cat) => (
//                 <div key={cat.label} className="relative "
//                   onMouseEnter={() => setActiveMega(cat.label)}
//                   onMouseLeave={() => setActiveMega(null)}
//                 >
//                   <button
//                     className="inline-flex items-center gap-1 cursor-pointer text-white font-bold"
//                     aria-expanded={activeMega === cat.label}
//                   >
//                     {cat.label} <ChevronDown size={14} />
//                   </button>
//                   <MegaMenu
//                     open={activeMega === cat.label}
//                     onClose={() => setActiveMega(null)}
//                     categories={[cat]}
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="ml-auto hidden lg:flex items-center gap-3 text-sm">
//               <span className="opacity-70">Hot:</span>
//               {HOT_KEYWORDS.map((k) => (
//                 <Link key={k} href={`/search?q=${encodeURIComponent(k)}`} className="px-2 py-1 text-black hover:text-white rounded-lg bg-neutral-100 hover:bg-neutral-900">
//                   {k}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Sheet */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.aside
//             initial={{ x: -320, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -320, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 260, damping: 28 }}
//             className="fixed inset-y-0 left-0 w-[88vw] max-w-[360px] bg-black shadow-2xl z-[60] flex flex-col"
//             role="dialog"
//             aria-modal
//           >
//             <div className="p-4 border-b flex items-center gap-2">
//               <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-neutral-100" aria-label="Close menu">
//                 <X />
//               </button>
//               <Link href="/" className="ml-1 flex items-center gap-2">
//                 <div className="h-8 w-8 rounded-xl bg-black text-black grid place-items-center font-bold">🛍️</div>
//                 <span className="text-lg font-extrabold">ShopX</span>
//               </Link>
//             </div>

//             <div className="p-4">
//               <SearchBar
//                 value={query}
//                 onChange={setQuery}
//                 category={category}
//                 onCategory={setCategory}
//                 compact
//               />
//             </div>

//             <nav className="px-2 pb-8 overflow-y-auto">
//               {CATEGORIES.map((cat) => (
//                 <MobileAccordion key={cat.label} title={cat.label} href={cat.href}>
//                   <div className="grid grid-cols-1 gap-2 pr-2">
//                     {cat.columns.map((col) => (
//                       <div key={col.title} className="">
//                         <div className="text-xs uppercase tracking-wide font-semibold text-black px-3 py-2">
//                           {col.title}
//                         </div>
//                         {col.items.map((it) => (
//                           <Link key={it.label} href={it.href} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-neutral-100">
//                             <span>{it.label}</span>
//                             <ChevronRight size={16} />
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 </MobileAccordion>
//               ))}

//               <div className="mt-4 grid grid-cols-2 gap-2 px-2">
//                 <Link href="/account" className="flex items-center gap-2 px-3 py-2 rounded-xl text-black bg-neutral-100">
//                   <User size={18} /> My Account
//                 </Link>
//                 <Link href="/wishlist" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100">
//                   <Heart size={18} /> Wishlist
//                 </Link>
//               </div>
//             </nav>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* Overlay for mobile & cart */}
//       <AnimatePresence>
//         {(mobileOpen || cartOpen) && (
//           <motion.div
//             className="fixed inset-0 bg-black/40 z-[55]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => { setMobileOpen(false); setCartOpen(false); }}
//           />
//         )}
//       </AnimatePresence>

//       {/* Cart Drawer */}
//       <AnimatePresence>
//         {cartOpen && (
//           <motion.aside
//             initial={{ x: 360, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 360, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 260, damping: 28 }}
//             className="fixed inset-y-0 right-0 w-[88vw] max-w-[420px] bg-white shadow-2xl z-[60] flex flex-col"
//             role="dialog"
//             aria-modal
//           >
//             <div className="p-4 border-b flex items-center justify-between">
//               <div className="text-lg font-semibold text-black">Your Cart</div>
//               <button onClick={() => setCartOpen(false)} className="p-2 rounded-xl text-black hover:bg-yellow-100" aria-label="Close cart">
//                 <X />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4">
//               {DEMO_CART.length === 0 ? (
//                 <div className="text-center  py-10">Your cart is empty</div>
//               ) : (
//                 <ul className="space-y-3">
//                   {DEMO_CART.map((item) => (
//                     <li key={item.id} className="flex gap-3 text-black p-3 rounded-xl border">
//                       <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-neutral-100">
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="font-medium leading-tight">{item.title}</div>
//                         <div className="text-sm opacity-70">Qty: {item.qty}</div>
//                       </div>
//                       <div className="font-semibold text-black">${item.price.toFixed(2)}</div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <div className="p-4 border-t space-y-3">
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-black">Subtotal</span>
//                 <span className="font-semibold text-black">${cartTotal.toFixed(2)}</span>
//               </div>
//               <Link href="/checkout" className="block text-center w-full px-4 py-3 rounded-xl bg-black text-white font-semibold">
//                 Checkout
//               </Link>
//               <Link href="/cart" className="block text-center bg-black text-white w-full px-4 py-3 rounded-xl border font-semibold">
//                 View Cart
//               </Link>
//             </div>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// // --------- Subcomponents ---------
// function SearchBar({
//   value,
//   onChange,
//   category,
//   onCategory,
//   compact = false,
// }: {
//   value: string;
//   onChange: (v: string) => void;
//   category: string;
//   onCategory: (v: string) => void;
//   compact?: boolean;
// }) {
//   const [open, setOpen] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (!ref.current) return;
//       if (!ref.current.contains(e.target as Node)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div className={classNames(
//       "w-full", compact ? "" : "max-w-3xl mx-auto"
//     )}>
//       <div className="flex items-stretch rounded-2xl border overflow-hidden text-white bg-white shadow-sm">
//         <button
//           onClick={() => setOpen((s) => !s)}
//           className="hidden sm:flex items-center gap-2 px-3 text-black text-sm bg-neutral-50 hover:bg-neutral-100 border-r"
//           aria-haspopup="listbox"
//           aria-expanded={open}
//         >
//           <span className="font-medium">{category}</span>
//           <ChevronDown size={16} />
//         </button>
//         <input
//           className="flex-1 px-4 py-2 text-black outline-none"
//           placeholder="Search products, brands and more..."
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//         <button className="px-4 py-2 bg-black text-white font-semibold flex items-center gap-2">
//           <Search size={18} />
//           <span className="hidden cursor-pointer sm:inline">Search</span>
//         </button>
//       </div>
//       <div ref={ref} className="relative  ">
//         <AnimatePresence>
//           {open && (
//             <motion.ul
//               initial={{ opacity: 0, y: -6 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -6 }}
//               className="absolute z-20 mt-2 w-56 rounded-xl border text-black  bg-white shadow-lg overflow-hidden"
//               role="listbox"
//             >
//               {["All", ...CATEGORIES.map((c) => c.label)].map((opt) => (
//                 <li key={opt}>
//                   <button
//                     onClick={() => { onCategory(opt); setOpen(false); }}
//                     className={classNames(
//                       "w-full text-black cursor-pointer text-left px-3 py-2  hover:bg-neutral-100",
//                       category === opt && "bg-neutral-50 font-semibold"
//                     )}
//                     role="option"
//                     aria-selected={category === opt}
//                   >
//                     {opt}
//                   </button>
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// function MegaMenu({
//   open,
//   onClose,
//   categories,
// }: {
//   open: boolean;
//   onClose: () => void;
//   categories: typeof CATEGORIES;
// }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           onMouseLeave={onClose}
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 6 }}
//           transition={{ duration: 0.18 }}
//           className="absolute left-0 top-full mt-2 w-[900px] max-w-[90vw] bg-white border  rounded-2xl shadow-xl p-6 grid grid-cols-12 gap-6"
//         >
//           {/* columns */}
//           <div className="col-span-8 grid grid-cols-3 gap-6">
//             {categories[0].columns.map((col) => (
//               <div key={col.title}>
//                 <div className="text-xs uppercase tracking-wide font-semibold text-neutral-500 mb-3">
//                   {col.title}
//                 </div>
//                 <ul className="space-y-2">
//                   {col.items.map((it) => (
//                     <li key={it.label}>
//                       <Link href={it.href} className="hover:underline">
//                         {it.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Promo card */}
//           <Link
//             href={categories[0].promo?.href || "#"}
//             className="col-span-4 relative overflow-hidden rounded-2xl group"
//           >
//             {categories[0].promo && (
//               <>
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={categories[0].promo.image}
//                   alt={categories[0].promo.title}
//                   className="h-full w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
//                 <div className="absolute bottom-3 left-3 right-3 text-white">
//                   <div className="text-lg font-bold leading-tight">
//                     {categories[0].promo.title}
//                   </div>
//                   <div className="opacity-90">{categories[0].promo.subtitle}</div>
//                   <div className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-black font-semibold">
//                     Shop now <ChevronRight size={16} />
//                   </div>
//                 </div>
//               </>
//             )}
//           </Link>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AccountMenu() {
//   const [open, setOpen] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (!ref.current) return;
//       if (!ref.current.contains(e.target as Node)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div className="relative" ref={ref}>
//       <button
//         onClick={() => setOpen((s) => !s)}
//         className="p-2 rounded-xl hover:bg-yellow-600 inline-flex items-center gap-2"
//         aria-haspopup="menu"
//         aria-expanded={open}
//       >
//         <User />
//         <span className="hidden sm:inline text-white  font-medium">Account</span>
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -6 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -6 }}
//             className="absolute right-0 mt-2 w-56 rounded-2xl border bg-white text-black shadow-lg overflow-hidden"
//             role="menu"
//           >
//             <Link href="/account" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
//               <Settings size={18} /> Account Settings
//             </Link>
//             <Link href="/orders" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
//               <PackageCheck size={18} /> Orders
//             </Link>
//             <Link href="/payments" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
//               <CreditCard size={18} /> Payments
//             </Link>
//             <div className="border-t" />
//             <Link href="/login" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
//               <LogIn size={18} /> Login
//             </Link>
//             <button className="w-full text-left flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
//               <LogOut size={18} /> Logout
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function MobileAccordion({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="">
//       <button
//         className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-neutral-100"
//         onClick={() => setOpen((s) => !s)}
//         aria-expanded={open}
//       >
//         <span className="font-medium">{title}</span>
//         <ChevronDown className={classNames("transition-transform", open && "rotate-180")} />
//       </button>
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="overflow-hidden"
//           >
//             <div className="pb-2">{children}</div>
//             <Link href={href} className="mx-3 mb-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg border">
//               Shop all {title} <ChevronRight size={16} />
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  MapPin,
  Truck,
  ShieldCheck,
  LogIn,
  LogOut,
  PackageCheck,
  CreditCard,
  Settings,
} from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

// ---------- Types ----------
interface CategoryItem { label: string; href: string; }
interface CategoryColumn { title: string; items: CategoryItem[]; }
interface Category {
  label: string;
  href: string;
  columns: CategoryColumn[];
  promo?: { image: string; title: string; subtitle: string; href: string; };
}

// ---------- Demo Categories (plug in your data/api later) ----------
const CATEGORIES: Category[] = [
  {
    label: "Electronics",
    href: "/c/electronics",
    columns: [
      {
        title: "Mobiles & Tablets",
        items: [
          { label: "Smartphones", href: "/c/electronics/smartphones" },
          { label: "Tablets", href: "/c/electronics/tablets" },
          { label: "Wearables", href: "/c/electronics/wearables" },
          { label: "Accessories", href: "/c/electronics/accessories" },
        ],
      },
      {
        title: "Computing",
        items: [
          { label: "Laptops", href: "/c/electronics/laptops" },
          { label: "Desktops", href: "/c/electronics/desktops" },
          { label: "Monitors", href: "/c/electronics/monitors" },
          { label: "Peripherals", href: "/c/electronics/peripherals" },
        ],
      },
      {
        title: "Audio & Video",
        items: [
          { label: "Headphones", href: "/c/electronics/headphones" },
          { label: "Speakers", href: "/c/electronics/speakers" },
          { label: "TVs", href: "/c/electronics/tv" },
          { label: "Streaming", href: "/c/electronics/streaming" },
        ],
      },
    ],
    promo: {
      image: "/images/promo-electronics.jpg", // put file in /public/images/
      title: "New Flagship Phones",
      subtitle: "Up to 20% off",
      href: "/c/electronics/smartphones",
    },
  },
  {
    label: "Fashion",
    href: "/c/fashion",
    columns: [
      {
        title: "Women",
        items: [
          { label: "Dresses", href: "/c/fashion/women/dresses" },
          { label: "Tops", href: "/c/fashion/women/tops" },
          { label: "Shoes", href: "/c/fashion/women/shoes" },
          { label: "Bags", href: "/c/fashion/women/bags" },
        ],
      },
      {
        title: "Men",
        items: [
          { label: "T-Shirts", href: "/c/fashion/men/tshirts" },
          { label: "Shirts", href: "/c/fashion/men/shirts" },
          { label: "Jeans", href: "/c/fashion/men/jeans" },
          { label: "Sneakers", href: "/c/fashion/men/sneakers" },
        ],
      },
      {
        title: "Kids",
        items: [
          { label: "Girls", href: "/c/fashion/kids/girls" },
          { label: "Boys", href: "/c/fashion/kids/boys" },
          { label: "Baby", href: "/c/fashion/kids/baby" },
          { label: "Accessories", href: "/c/fashion/kids/accessories" },
        ],
      },
    ],
    promo: {
      image: "/images/promo-fashion.jpg",
      title: "Autumn Arrivals",
      subtitle: "Fresh fits under $49",
      href: "/c/fashion/new",
    },
  },
];

const HOT_KEYWORDS = ["iPhone 15", "Noise cancelling", "4K TV", "Gaming laptop", "Air fryer"];

// ---------- Utilities ----------
function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useScrollSolid(threshold = 24) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return solid;
}

// Simple debounce for search UX
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function useDebounced<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}


// ---------- Header ----------
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const solid = useScrollSolid(32);

  // const debouncedQuery = useDebounced(query, 250);
  
  const {
    cartCount,
    cartDetails,
    totalPrice,
    removeItem,
  } = useShoppingCart();

  // derive items array safely
  const items = useMemo(() => Object.values(cartDetails ?? {}), [cartDetails]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-black">
      {/* Top Info Bar */}
      <div className="hidden md:block bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2"><Truck size={16}/> Free shipping over $50</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16}/> 30-day returns</span>
            <span className="inline-flex items-center gap-2"><PhoneCall size={16}/> 24/7 support</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/help" className="hover:underline">Help</Link>
            <Link href="/track-order" className="hover:underline">Track Order</Link>
            <span className="inline-flex items-center gap-1 opacity-80"><MapPin size={16}/> PK</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={cn(
          "transition-colors duration-300",
          solid ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white/60 backdrop-blur"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4">
          {/* Top Row */}
          <div className="flex items-center gap-3 py-3 md:py-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl border border-neutral-200"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </button>

            {/* Logo */}
            <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href="/" className="flex items-center gap-2">
        <motion.span
          whileHover={{ scale: 1.1, color: "#16a34a" }} // green on hover
          whileTap={{ scale: 0.95 }}
          className="text-xl md:text-2xl font-extrabold t   racking-tight"
        >
          Khareedo
        </motion.span>
      </Link>
    </motion.div>

            {/* Search */}
            <div className="flex-1 hidden lg:flex">
              <SearchBar
                value={query}
                onChange={setQuery}
                category={category}
                onCategory={setCategory}
                suggestions={HOT_KEYWORDS}
              />
            </div>

            {/* Quick Icons */}
            <div className="ml-auto flex items-center gap-2 md:gap-3">
              <Link
                href="/wishlist"
                className="p-2 rounded-xl hover:bg-yellow-100"
                aria-label="Wishlist"
                title="Wishlist"
              >
                <Heart />
              </Link>

              <AccountMenu />

              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 rounded-xl hover:bg-yellow-100"
                aria-label="Open cart"
              >
                <ShoppingCart />
                {cartCount ? (
                  <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white font-bold rounded-full h-5 w-5 grid place-items-center">
                    {cartCount}
                  </span>
                ) : null}
              </button>
            </div>
          </div>

          {/* Bottom Row: Categories + Hot keywords */}
          <div className="hidden md:flex items-center gap-6 pb-3">
            {/* All Categories button + Mega Menu on hover */}
            <div className="relative">
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-sm font-semibold"
                onMouseEnter={() => setActiveMega("All")}
                onFocus={() => setActiveMega("All")}
                aria-expanded={activeMega === "All"}
              >
                <Menu size={18} /> All Categories <ChevronDown size={16} />
              </button>
              <MegaMenu
                open={activeMega === "All"}
                onClose={() => setActiveMega(null)}
                categories={CATEGORIES}
              />
            </div>

            {/* Individual root categories */}
            <div className="flex items-center gap-5 text-sm">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.label}
                  className="relative"
                  onMouseEnter={() => setActiveMega(cat.label)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <button
                    className="inline-flex items-center gap-1 font-semibold hover:opacity-80"
                    aria-expanded={activeMega === cat.label}
                  >
                    {cat.label} <ChevronDown size={14} />
                  </button>
                  <MegaMenu
                    open={activeMega === cat.label}
                    onClose={() => setActiveMega(null)}
                    categories={[cat]}
                  />
                </div>
              ))}
            </div>

            {/* Hot keywords */}
            <div className="ml-auto hidden lg:flex items-center gap-3 text-sm">
              <span className="opacity-70">Hot:</span>
              {HOT_KEYWORDS.map((k) => (
                <Link
                  key={k}
                  href={`/search?q=${encodeURIComponent(k)}`}
                  className="px-2 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-900 hover:text-white transition"
                >
                  {k}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay (shared for sheets) */}
      <AnimatePresence>
        {(mobileOpen || cartOpen) && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-[55]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setMobileOpen(false); setCartOpen(false); }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed inset-y-0 left-0 w-[88vw] max-w-[360px] bg-white shadow-2xl z-[60] flex flex-col"
            role="dialog"
            aria-modal
          >
            <div className="p-4 border-b flex items-center gap-2">
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-neutral-100" aria-label="Close menu">
                <X />
              </button>
              <Link href="/" className="ml-1 flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-black text-white grid place-items-center font-bold">🛍️</div>
                <span className="text-lg font-extrabold">ShopX</span>
              </Link>
            </div>

            <div className="p-4">
              <SearchBar
                value={query}
                onChange={setQuery}
                category={category}
                onCategory={setCategory}
                suggestions={HOT_KEYWORDS}
                compact
              />
            </div>

            <nav className="px-2 pb-8 overflow-y-auto">
              {CATEGORIES.map((cat) => (
                <MobileAccordion key={cat.label} title={cat.label} href={cat.href}>
                  <div className="grid grid-cols-1 gap-2 pr-2">
                    {cat.columns.map((col) => (
                      <div key={col.title}>
                        <div className="text-xs uppercase tracking-wide font-semibold text-neutral-500 px-3 py-2">
                          {col.title}
                        </div>
                        {col.items.map((it) => (
                          <Link key={it.label} href={it.href} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-neutral-100">
                            <span>{it.label}</span>
                            <ChevronRight size={16} />
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </MobileAccordion>
              ))}

              <div className="mt-4 grid grid-cols-2 gap-2 px-2">
                <Link href="/account" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100">
                  <User size={18} /> My Account
                </Link>
                <Link href="/wishlist" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100">
                  <Heart size={18} /> Wishlist
                </Link>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <motion.aside
            initial={{ x: 360, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 360, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed inset-y-0 right-0 w-[88vw] max-w-[420px] bg-white shadow-2xl z-[60] flex flex-col"
            role="dialog"
            aria-modal
          >
            <div className="p-4 border-b flex items-center justify-between">
              <div className="text-lg font-semibold">Your Cart</div>
              <button onClick={() => setCartOpen(false)} className="p-2 rounded-xl hover:bg-neutral-100" aria-label="Close cart">
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {(cartCount ?? 0) === 0 ? (
                <div className="text-center py-10">Your cart is empty</div>
              ) : (
                <ul className="space-y-3">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {items.map((item: any) => (
                    <li key={item.id} className="flex gap-3 p-3 rounded-xl border items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image ?? "/images/placeholder.jpg"}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover bg-neutral-100"
                      />
                      <div className="flex-1">
                        <div className="font-medium leading-tight">{item.name}</div>
                        <div className="text-sm opacity-70">Qty: {item.quantity}</div>
                      </div>
                      <div className="font-semibold">${((item.price ?? 0) / 100).toFixed(2)}</div>
                      <button onClick={() => removeItem(item.id)} className="ml-2 text-red-500 text-xs hover:underline">
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="p-4 border-t space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">${(((totalPrice ?? 0) as number) / 100).toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="block text-center w-full px-4 py-3 rounded-xl bg-black text-white font-semibold">
                Checkout
              </Link>
              <Link href="/cart" className="block text-center w-full px-4 py-3 rounded-xl border font-semibold">
                View Cart
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---------- Subcomponents ----------
function SearchBar({
  value, onChange, category, onCategory, suggestions = [], compact = false,
}: {
  value: string;
  onChange: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
  suggestions?: string[];
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setCatOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={cn("w-full", compact ? "" : "max-w-3xl mx-auto")} ref={wrapRef}>
      <div className="flex items-stretch rounded-2xl border overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => setCatOpen((s) => !s)}
          className="hidden sm:flex items-center gap-2 px-3 text-sm bg-neutral-50 hover:bg-neutral-100 border-r"
          aria-haspopup="listbox"
          aria-expanded={catOpen}
        >
          <span className="font-semibold">{category}</span>
          <ChevronDown size={16} />
        </button>
        <input
          className="flex-1 px-4 py-2 outline-none"
          placeholder="Search products, brands and more..."
          value={value}
          onFocus={() => setOpen(true)}
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="px-4 py-2 bg-black text-white font-semibold flex items-center gap-2">
          <Search size={18} />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>

      {/* Category dropdown */}
      <AnimatePresence>
        {catOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute z-40 mt-2 w-56 rounded-xl border bg-white shadow-lg overflow-hidden"
            role="listbox"
          >
            {["All", ...CATEGORIES.map((c) => c.label)].map((opt) => (
              <li key={opt}>
                <button
                  onClick={() => { onCategory(opt); setCatOpen(false); }}
                  className={cn(
                    "w-full text-left px-3 py-2 hover:bg-neutral-100",
                    category === opt && "bg-neutral-50 font-semibold"
                  )}
                  role="option"
                  aria-selected={category === opt}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Suggestions */}
      <AnimatePresence>
        {open && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="relative"
          >
            <div className="absolute z-30 mt-2 w-full rounded-xl border bg-white shadow-lg overflow-hidden">
              <div className="px-3 py-2 text-xs uppercase tracking-wide text-neutral-500">Popular</div>
              <div className="flex flex-wrap gap-2 px-3 pb-3">
                {suggestions.map((s) => (
                  <Link
                    key={s}
                    href={`/search?q=${encodeURIComponent(s)}`}
                    className="px-2 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-900 hover:text-white text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MegaMenu({ open, onClose, categories }: { open: boolean; onClose: () => void; categories: Category[]; }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onMouseLeave={onClose}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.18 }}
          className="absolute left-0 top-full mt-2 w-[980px] max-w-[92vw] bg-white border rounded-2xl shadow-xl p-6 grid grid-cols-12 gap-6"
        >
          {/* Columns */}
          <div className="col-span-8 grid grid-cols-3 gap-6">
            {categories[0].columns.map((col) => (
              <div key={col.title}>
                <div className="text-xs uppercase tracking-wide font-semibold text-neutral-500 mb-3">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link href={it.href} className="hover:underline">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promo (optional) */}
          {categories[0].promo && (
            <Link href={categories[0].promo.href} className="col-span-4 relative overflow-hidden rounded-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={categories[0].promo.image}
                alt={categories[0].promo.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-lg font-bold leading-tight">{categories[0].promo.title}</div>
                <div className="opacity-90">{categories[0].promo.subtitle}</div>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-black font-semibold">
                  Shop now <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AccountMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-xl hover:bg-neutral-100 inline-flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <User />
        <span className="hidden sm:inline text-sm font-medium">Account</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute right-0 mt-2 w-56 rounded-2xl border bg-white shadow-lg overflow-hidden"
            role="menu"
          >
            <Link href="/account" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
              <Settings size={18} /> Account Settings
            </Link>
            <Link href="/orders" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
              <PackageCheck size={18} /> Orders
            </Link>
            <Link href="/payments" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
              <CreditCard size={18} /> Payments
            </Link>
            <div className="border-t" />
            <Link href="/login" className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
              <LogIn size={18} /> Login
            </Link>
            <button className="w-full text-left flex items-center gap-3 px-3 py-3 hover:bg-neutral-100" role="menuitem">
              <LogOut size={18} /> Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({ title, href, children }: { title: string; href: string; children: React.ReactNode; }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-neutral-100"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span className="font-semibold">{title}</span>
        <ChevronDown className={cn("transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pb-2">{children}</div>
            <Link href={href} className="mx-3 mb-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg border">
              Shop all {title} <ChevronRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
