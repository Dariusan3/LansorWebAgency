"use client";

import { Zap, Shield, MessageCircle, Target } from "lucide-react";
import { useTranslations } from "next-intl";

const WhyMeSection = () => {
  const t = useTranslations("whyMe");

  const reasons = [
    {
      icon: Zap,
      title: t("reasons.custom.title"),
      description: t("reasons.custom.description"),
    },
    {
      icon: Shield,
      title: t("reasons.technical.title"),
      description: t("reasons.technical.description"),
    },
    {
      icon: MessageCircle,
      title: t("reasons.communication.title"),
      description: t("reasons.communication.description"),
    },
    {
      icon: Target,
      title: t("reasons.results.title"),
      description: t("reasons.results.description"),
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-blue mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-neutral-500">
                  {t("stats.projects")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-neutral-500">
                  {t("stats.satisfaction")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-neutral-500">
                  {t("stats.response")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
