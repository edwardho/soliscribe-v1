import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Soliscribe SaaS Boilerplate",
  description: "This is Home for Soliscribe Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <Feature />
      <FeaturesTab />
      <FunFact />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
