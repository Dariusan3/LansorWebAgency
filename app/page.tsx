"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import WhyMeSection from "@/components/sections/why-me-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <WhyMeSection />
          <PortfolioSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
