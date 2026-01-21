"use client";

import { Zap, Shield, MessageCircle, Target } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Custom-Built Solutions",
    description:
      "No templates or cookie-cutter approaches. Every solution is designed and built specifically for your unique business needs and goals.",
  },
  {
    icon: Shield,
    title: "Strong Technical Background",
    description:
      "Deep expertise in full-stack development, AI/ML technologies, and automation tools. I stay current with the latest technologies and best practices.",
  },
  {
    icon: MessageCircle,
    title: "Fast Communication",
    description:
      "Clear, regular updates throughout the project. You'll always know the status of your project and have direct access to me for questions.",
  },
  {
    icon: Target,
    title: "Focus on Business Results",
    description:
      "I don't just write code—I solve business problems. Every feature is designed to drive measurable outcomes and ROI for your company.",
  },
];

const WhyMeSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-blue mb-6">
              Why Work With Me?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              When you work with me, you get a dedicated partner who is invested
              in your success. I combine technical expertise with a deep
              understanding of business needs to deliver solutions that actually
              make a difference.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-neutral-500">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-neutral-500">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-neutral-500">Response Time</div>
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
