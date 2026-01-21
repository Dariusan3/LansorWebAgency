"use client";

import { Search, PenTool, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We start with a free consultation to understand your business goals, challenges, and requirements. I'll analyze your needs and propose the best solution.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Automation Planning",
    description:
      "I create detailed wireframes, system designs, and automation workflows. You'll see exactly how your solution will work before development begins.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Development & Integration",
    description:
      "Your solution is built with clean, scalable code. I integrate all necessary systems, APIs, and AI capabilities while keeping you updated on progress.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "After thorough testing, we launch your solution. I provide training, documentation, and ongoing support to ensure everything runs smoothly.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-blue mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A simple, transparent process designed to deliver results quickly
            and efficiently.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
