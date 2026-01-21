"use client";

import { Code, Bot, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const skills = [
  {
    category: "AI & Automation",
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
    category: "Frontend",
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
    category: "Backend",
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
    category: "Tools & Workflow",
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
    title: "Results-Driven",
    description:
      "Every line of code I write is focused on delivering measurable business outcomes. I don't just build features—I solve problems.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description:
      "Quick turnaround without compromising quality. I respect deadlines and keep you updated throughout the project.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "I write maintainable, scalable code that your team can easily understand and extend. No shortcuts, no technical debt.",
  },
  {
    icon: Bot,
    title: "AI-First Thinking",
    description:
      "I always look for opportunities to leverage AI for automation and efficiency gains that give you a competitive edge.",
  },
];

export default function AboutPage() {
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
                  AI Automation Engineer & Full-Stack Developer
                </h1>
                <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                  I help businesses save time, reduce costs, and scale by
                  building smart AI automations and high-quality web
                  applications.
                </p>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  With deep expertise in both AI technologies and full-stack
                  development, I bridge the gap between cutting-edge automation
                  and practical business solutions. My approach is simple:
                  understand your challenges, design efficient solutions, and
                  deliver results that actually impact your bottom line.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
                >
                  Let&apos;s Work Together
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats Card */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
                <h2 className="text-lg font-semibold text-white mb-8">
                  By the Numbers
                </h2>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-sm text-neutral-500">
                      Projects Delivered
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      3+
                    </div>
                    <div className="text-sm text-neutral-500">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      100%
                    </div>
                    <div className="text-sm text-neutral-500">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      24h
                    </div>
                    <div className="text-sm text-neutral-500">
                      Response Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How I Work
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
              Technical Expertise
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
                Ready to Start a Project?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                Whether you need AI automation, a custom web application, or
                both—let&apos;s discuss how I can help your business grow.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
              >
                Get in Touch
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
