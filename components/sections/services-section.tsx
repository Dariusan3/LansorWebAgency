"use client";

import { Bot, Code, Globe, Cpu, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { BookingButton } from "@/components/ui/booking-button";

const ServicesSection = () => {
  const t = useTranslations("services");

  const services = [
    {
      icon: Bot,
      title: t("aiAutomation.title"),
      description: t("aiAutomation.description"),
      features: t.raw("aiAutomation.features") as string[],
    },
    {
      icon: Code,
      title: t("webDev.title"),
      description: t("webDev.description"),
      features: t.raw("webDev.features") as string[],
    },
    {
      icon: Globe,
      title: t("websiteDesign.title"),
      description: t("websiteDesign.description"),
      features: t.raw("websiteDesign.features") as string[],
    },
    {
      icon: Cpu,
      title: t("aiIntegration.title"),
      description: t("aiIntegration.description"),
      features: t.raw("aiIntegration.features") as string[],
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-blue mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-primary/50 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <BookingButton className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-primary text-neutral-300 hover:text-white font-medium rounded-full transition-all duration-300">
            {t("readyToGetStarted")}
            <ArrowRight className="w-4 h-4" />
          </BookingButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
