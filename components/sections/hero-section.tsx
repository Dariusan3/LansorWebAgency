"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 pr-4 pl-1 py-1 rounded-full border border-primary/30 bg-primary/10 mb-8 overflow-hidden hover:border-primary/50 transition-colors cursor-default">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/20">
            <Image
              src="/darius-profile.png"
              alt="Darius Osadici"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-sm font-medium text-neutral-200">
            {t("trustBadge")}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient-blue">{t("title1")}</span>
          <br />
          <span className="text-white">{t("title2")}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300 glow-orange"
          >
            {tCommon("bookCall")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-700 hover:border-primary text-neutral-300 hover:text-white font-medium rounded-full transition-all duration-300"
          >
            {tCommon("viewServices")}
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-neutral-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>{tCommon("available")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🚀</span>
            <span>{tCommon("fastDelivery")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💼</span>
            <span>{tCommon("trustedByStartups")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
