"use client";

import { Bot, Code, Globe, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLocale, useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const services = [
    {
      id: "ai-automation",
      icon: Bot,
      title: t("aiAutomation.title"),
      description: t("aiAutomation.description"),
      features: t.raw("aiAutomation.features"),
      benefits: t.raw("aiAutomation.benefits"),
    },
    {
      id: "web-development",
      icon: Code,
      title: t("webDev.title"),
      description: t("webDev.description"),
      features: t.raw("webDev.features"),
      benefits: t.raw("webDev.benefits"),
    },
    {
      id: "website-design",
      icon: Globe,
      title: t("websiteDesign.title"),
      description: t("websiteDesign.description"),
      features: t.raw("websiteDesign.features"),
      benefits: t.raw("websiteDesign.benefits"),
    },
    {
      id: "ai-integration",
      icon: Cpu,
      title: t("aiIntegration.title"),
      description: t("aiIntegration.description"),
      features: t.raw("aiIntegration.features"),
      benefits: t.raw("aiIntegration.benefits"),
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-16 pb-24">
          {/* Header */}
          <section className="max-w-6xl mx-auto px-6 text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue mb-6">
              {t("pageTitle")}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              {t("pageSubtitle")}
            </p>
          </section>

          {/* Services List */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                        {t("keyBenefits")}
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map(
                          (benefit: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-neutral-300"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              {benefit}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      {tCommon("getStarted")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Features Card */}
                  <div
                    className={`p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                      {t("whatsIncluded")}
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-neutral-400 py-2 border-b border-neutral-800 last:border-0"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto px-6 mt-24 text-center">
            <div className="p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-neutral-900 to-neutral-900">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("readyToGetStarted")}
              </h2>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                {t("readySubtitle")}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
              >
                {tCommon("bookCall")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
