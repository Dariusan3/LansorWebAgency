"use client";

import { InlineWidget } from "react-calendly";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Book = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-16 pb-24">
          <div className="max-w-4xl mx-auto px-6 text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue mb-4">
              Book a Free Consultation
            </h1>
            <p className="text-lg text-neutral-400">
              Let&apos;s discuss your project and find the best solution for
              your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-6">
            <InlineWidget url="https://calendly.com/dariusosadici/consultan-a-personalizata" />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Book;
