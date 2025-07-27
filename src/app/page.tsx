import React from "react";
import Hero from "./components/Hero"
import CategoryGrid from "./components/CategoryGrid";
import FeaturedProducts from "./components/FeaturedProducts";
import SpecialOfferBanner from "./components/SpecialOfferBanner";
import Testimonials from "./components/Testimonials";
import FollowUs from "./components/FollowUs";
import NewsLetter from "./components/NewsLetter";

export default function page() {
  return (
    <div>
      <Hero />
      <CategoryGrid/>
      <FeaturedProducts/>
      <SpecialOfferBanner/>
      <Testimonials/>
      <FollowUs/>
      <NewsLetter/>

    </div>
  );
}
