"use client";
import Footer from "./footer";
import Gallery from "./gallery";
import Header from "./header";
import Hero from "./hero";
import Testimonial from "./testimonial";
import Vedio from "./vedio";

export default function MyPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonial />
      <Vedio />
      <Gallery />
      <Footer />
    </div>
  );
}
