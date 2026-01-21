"use client";

import { Code, Bot, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLocale, useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  const skills = [
    {
      category: t("skills.ai"),
      items: [
        "OpenAI / GPT-4",
        "LangChain",
        "n8n / Make / Zapier",
        "Custom AI Agents",
        "Chatbots",
        "OCR & Document Processing",
      ],
    },
    {
      category: t("skills.frontend"),
      items: [
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
        "UI/UX Best Practices",
      ],
    },
    {
      category: t("skills.backend"),
      items: [
        "Node.js",
        "Python",
        "PostgreSQL / MongoDB",
        "REST & GraphQL APIs",
        "Supabase / Firebase",
        "AWS / Vercel",
      ],
    },
    {
      category: t("skills.tools"),
      items: [
        "Git / GitHub",
        "CI/CD Pipelines",
        "Agile Methodology",
        "Technical Documentation",
        "Performance Optimization",
        "Security Best Practices",
      ],
    },
  ];

  const values = [
    {
      icon: Target,
      title: t("values.results.title"),
      description: t("values.results.description"),
    },
    {
      icon: Zap,
      title: t("values.efficient.title"),
      description: t("values.efficient.description"),
    },
    {
      icon: Code,
      title: t("values.cleanCode.title"),
      description: t("values.cleanCode.description"),
    },
    {
      icon: Bot,
      title: t("values.aiFirst.title"),
      description: t("values.aiFirst.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-16 pb-24">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue mb-6">
                  {t("title")}
                </h1>
                <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                  {t("intro")}
                </p>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  {t("description")}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
                >
                  {t("letsWork")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats Card */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
                <h2 className="text-lg font-semibold text-white mb-8">
                  {t("byTheNumbers")}
                </h2>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-sm text-neutral-500">
                      {t("projectsDelivered")}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      3+
                    </div>
                    <div className="text-sm text-neutral-500">
                      {t("yearsExperience")}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      100%
                    </div>
                    <div className="text-sm text-neutral-500">
                      {t("clientSatisfaction")}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      24h
                    </div>
                    <div className="text-sm text-neutral-500">
                      {t("responseTime")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t("howIWork")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t("technicalExpertise")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30"
                >
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-neutral-400"
                      >
                        <div className="w-1 h-1 rounded-full bg-neutral-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto px-6 py-16">
            <div className="p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-neutral-900 to-neutral-900 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("readyToStart")}
              </h2>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                {t("readyDescription")}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
              >
                {t("getInTouch")}
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
