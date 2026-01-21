"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const projects = [
    {
      title: t("items.ecommerce.title"),
      category: t("items.ecommerce.category"),
      description: t("items.ecommerce.description"),
      challenge: t("items.ecommerce.challenge"),
      solution: t("items.ecommerce.solution"),
      results: t.raw("items.ecommerce.results"),
      tags: ["n8n", "OpenAI", "Shopify API", "Postgres"],
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: t("items.analytics.title"),
      category: t("items.analytics.category"),
      description: t("items.analytics.description"),
      challenge: t("items.analytics.challenge"),
      solution: t("items.analytics.solution"),
      results: t.raw("items.analytics.results"),
      tags: ["Next.js", "PostgreSQL", "Stripe", "WebSockets"],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: t("items.customerService.title"),
      category: t("items.customerService.category"),
      description: t("items.customerService.description"),
      challenge: t("items.customerService.challenge"),
      solution: t("items.customerService.solution"),
      results: t.raw("items.customerService.results"),
      tags: ["OpenAI GPT-4", "LangChain", "Zendesk API", "Node.js"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: t("items.landingPage.title"),
      category: t("items.landingPage.category"),
      description: t("items.landingPage.description"),
      challenge: t("items.landingPage.challenge"),
      solution: t("items.landingPage.solution"),
      results: t.raw("items.landingPage.results"),
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
      gradient: "from-pink-500/20 to-purple-500/20",
    },
    {
      title: t("items.internalTools.title"),
      category: t("items.internalTools.category"),
      description: t("items.internalTools.description"),
      challenge: t("items.internalTools.challenge"),
      solution: t("items.internalTools.solution"),
      results: t.raw("items.internalTools.results"),
      tags: ["React", "Node.js", "PostgreSQL", "Slack API"],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: t("items.docProcessing.title"),
      category: t("items.docProcessing.category"),
      description: t("items.docProcessing.description"),
      challenge: t("items.docProcessing.challenge"),
      solution: t("items.docProcessing.solution"),
      results: t.raw("items.docProcessing.results"),
      tags: ["OpenAI", "OCR", "Python", "REST API"],
      gradient: "from-violet-500/20 to-fuchsia-500/20",
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
              {t("title")}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </section>

          {/* Projects Grid */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 p-8 md:p-10">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2">
                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                          {project.category}
                        </span>

                        <h2 className="text-2xl font-bold text-white mb-4">
                          {project.title}
                        </h2>

                        <p className="text-neutral-400 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Challenge & Solution */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h3 className="text-sm font-semibold text-neutral-300 mb-2">
                              {t("challenge")}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {project.challenge}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-neutral-300 mb-2">
                              {t("solution")}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="lg:border-l lg:border-neutral-800 lg:pl-8">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                          {t("results")}
                        </h3>
                        <ul className="space-y-3">
                          {project.results.map(
                            (result: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-neutral-400"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                                {result}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto px-6 mt-24 text-center">
            <div className="p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-neutral-900 to-neutral-900">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("haveSimilar")}
              </h2>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                {t("similarDescription")}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
              >
                {t("startProject")}
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
