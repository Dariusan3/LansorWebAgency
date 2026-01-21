"use client";

import { Bot, Code, Globe, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const services = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description:
      "Transform your business operations with intelligent automation that works 24/7. From workflow automation to custom AI agents, I build solutions that save you hours of manual work every week.",
    features: [
      "Custom AI Agents & Assistants",
      "Workflow Automation (n8n, Make, Zapier)",
      "Intelligent Chatbots & Support Bots",
      "API Integrations & Data Sync",
      "Internal Tools & Dashboards",
      "Email & Document Automation",
    ],
    benefits: [
      "Save 10+ hours per week on repetitive tasks",
      "Reduce human error by 90%",
      "24/7 automated operations",
      "Scale without hiring more staff",
    ],
  },
  {
    id: "web-development",
    icon: Code,
    title: "Custom Web Development",
    description:
      "Full-stack development for complex applications. I build robust, scalable web applications using modern technologies that grow with your business.",
    features: [
      "Full-Stack Web Applications",
      "SaaS Platform Development",
      "Admin Dashboards & Analytics",
      "REST & GraphQL APIs",
      "Database Design & Optimization",
      "Third-Party Integrations",
    ],
    benefits: [
      "Custom-built for your exact needs",
      "Scalable architecture",
      "Clean, maintainable code",
      "Full ownership of your code",
    ],
  },
  {
    id: "website-design",
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Modern, fast, and SEO-friendly websites that convert visitors into customers. From landing pages to full business websites, I create digital experiences that drive results.",
    features: [
      "Modern, Responsive Design",
      "SEO Optimization Built-in",
      "Fast Loading Performance",
      "Content Management Systems",
      "Landing Pages & Marketing Sites",
      "E-commerce Integration",
    ],
    benefits: [
      "Mobile-first responsive design",
      "Optimized for search engines",
      "Fast page load times",
      "Easy content updates",
    ],
  },
  {
    id: "ai-integration",
    icon: Cpu,
    title: "AI Integration",
    description:
      "Enhance your existing systems with cutting-edge AI capabilities. I integrate AI into your workflows, apps, and processes to unlock new possibilities.",
    features: [
      "OpenAI & LLM Integration",
      "Custom AI Feature Development",
      "Intelligent Data Processing",
      "AI-Powered Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
    ],
    benefits: [
      "Leverage latest AI technology",
      "Seamless system integration",
      "Custom-trained models",
      "Competitive advantage",
    ],
  },
];

export default function ServicesPage() {
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
              Services
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Comprehensive AI automation and web development services designed
              to help your business thrive in the digital age.
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
                        Key Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-neutral-300"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      Get Started
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
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
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
                Ready to Get Started?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                Let&apos;s discuss your project and find the best solution for
                your business needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
              >
                Book a Free Consultation
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
