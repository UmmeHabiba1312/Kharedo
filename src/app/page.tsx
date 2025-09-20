'use client'
import React from 'react'
import HeroPro from "@/components/Hero";
// import FeaturedCategories, { CATEGORIES } from "@/components/FeaturedCategories";
import FeaturedCategoriesPro, { CATEGORIES } from "@/components/FeaturedCategories";
// import FlashSale from "@/components/FlashSale";
import FeaturedProducts from "@/components/Sellingproduct";
import NewArrivals from "@/components/NewArrivals";
import Recommendations from "@/components/Recommendations";
import PromoBanner from "@/components/PromoBanner";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterPro from "@/components/NewsletterPro";
// import FooterPro from "@/components/footer";
import FlashSale from "@/components/FlashSale";
import Header from '@/components/Header';

// import Header from '@/components/Header';
// import MegaMenu from "@/components/MegaMenu";

const Homepage = () => {
  return (
    <main>
       <Header />
        <HeroPro/>
        <FeaturedCategoriesPro items={CATEGORIES} />
        <FlashSale />
        <FeaturedProducts />
        <NewArrivals />
        <Recommendations/>
        <PromoBanner/>
        <BrandsSection/>
        <TestimonialsSection/>
        <NewsletterPro />
        
    </main>
  )
}

export default Homepage