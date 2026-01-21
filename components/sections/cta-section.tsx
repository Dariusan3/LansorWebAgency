"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-neutral-900 to-neutral-900 p-12 md:p-16 text-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Automate Your Business
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ready to save time, reduce costs, and scale with AI automation and
              custom web solutions? Let&apos;s discuss how I can help transform
              your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300 glow-orange"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:contact@lansor.agency"
                className="inline-flex items-center gap-2 px-8 py-4 text-neutral-300 hover:text-white font-medium transition-colors"
              >
                or send me an email →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
