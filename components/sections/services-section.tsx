"use client";

import { Bot, Code, Globe, Cpu } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Workflow automation, AI agents, chatbots, and smart integrations that save hours of manual work every week.",
    features: [
      "Custom AI Agents",
      "Workflow Automation",
      "Chatbots & Assistants",
      "API Integrations",
    ],
  },
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Full-stack applications, dashboards, SaaS platforms, and robust APIs built for scale and performance.",
    features: [
      "Full-Stack Apps",
      "SaaS Platforms",
      "Admin Dashboards",
      "REST & GraphQL APIs",
    ],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Modern, fast, and SEO-friendly websites that convert visitors into customers and grow your online presence.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Performance",
      "Modern UI/UX",
    ],
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description:
      "Integrate cutting-edge AI capabilities into your existing systems using OpenAI, custom models, and automation tools.",
    features: [
      "OpenAI Integration",
      "Custom AI Features",
      "Data Processing",
      "Intelligent Workflows",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-blue mb-4">
            Services That Drive Results
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            From AI automation to custom web development, I deliver solutions
            that help your business save time, reduce costs, and scale
            efficiently.
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
      </div>
    </section>
  );
};

export default ServicesSection;
