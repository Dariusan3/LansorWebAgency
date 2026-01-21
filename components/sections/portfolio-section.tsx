"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const PortfolioSection = () => {
  const t = useTranslations("portfolio");
  const tServices = useTranslations("services");
  const locale = useLocale();

  const projects = [
    {
      title: "E-commerce Automation Suite",
      category: tServices("aiAutomation.title"),
      description:
        "Automated order processing, inventory management, and customer support for an online store. Reduced manual work by 80%.",
      tags: ["AI Agents", "n8n", "API Integration"],
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "SaaS Dashboard Platform",
      category: tServices("webDev.title"),
      description:
        "Full-stack analytics dashboard with real-time data visualization, user management, and subscription billing.",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "AI-Powered Customer Service Bot",
      category: tServices("aiIntegration.title"),
      description:
        "Intelligent chatbot that handles customer inquiries 24/7, integrating with CRM and ticketing systems.",
      tags: ["OpenAI", "LangChain", "Webhooks"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {t("viewAll")}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
