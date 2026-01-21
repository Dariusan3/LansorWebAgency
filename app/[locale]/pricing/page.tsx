"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description:
      "Perfect for small businesses needing a professional web presence with basic automation.",
    features: [
      "Custom Website (up to 5 pages)",
      "Responsive Design",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "1 Simple Automation Workflow",
      "30 Days Support",
    ],
    cta: "Get Started",
    href: "/contact",
    popular: false,
  },
  {
    name: "Growth",
    price: "$5,000",
    description:
      "Ideal for growing businesses that need more automation and custom development.",
    features: [
      "Custom Website (up to 10 pages)",
      "Advanced UI/UX Design",
      "Full SEO Optimization",
      "3 Automation Workflows",
      "AI Chatbot Integration",
      "CRM Integration",
      "Analytics Dashboard",
      "60 Days Support",
    ],
    cta: "Get Started",
    href: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For businesses with complex needs requiring custom solutions and dedicated support.",
    features: [
      "Unlimited Pages & Features",
      "Custom Web Application",
      "Unlimited Automations",
      "Custom AI Solutions",
      "Full System Integration",
      "Dedicated Project Manager",
      "Priority Support",
      "Ongoing Maintenance",
    ],
    cta: "Contact Us",
    href: "/contact",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-16 pb-24">
          {/* Header */}
          <section className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include custom
              solutions tailored to your business.
            </p>
          </section>

          {/* Pricing Cards */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    plan.popular
                      ? "border-primary bg-primary/5"
                      : "border-neutral-800 bg-neutral-900/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h2>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {plan.price}
                    </div>
                    <p className="text-neutral-400 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-neutral-300 text-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : "border border-neutral-700 hover:border-primary text-neutral-300 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Note */}
          <section className="max-w-4xl mx-auto px-6 mt-16 text-center">
            <p className="text-neutral-500">
              Have questions about pricing?{" "}
              <Link
                href="/contact"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Get in touch
              </Link>{" "}
              for a custom quote tailored to your specific needs.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
