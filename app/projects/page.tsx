"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const projects = [
  {
    title: "E-commerce Automation Suite",
    category: "AI Automation",
    description:
      "Built a comprehensive automation system for an online retail store. The solution automatically processes orders, syncs inventory across multiple platforms, handles customer inquiries with an AI chatbot, and generates daily reports.",
    challenge:
      "The client was spending 40+ hours per week on manual order processing and customer support.",
    solution:
      "Implemented AI agents for customer support, automated order processing pipelines, and real-time inventory sync.",
    results: [
      "80% reduction in manual work",
      "24/7 customer support availability",
      "99.9% order accuracy",
      "30% increase in customer satisfaction",
    ],
    tags: ["n8n", "OpenAI", "Shopify API", "Postgres"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Development",
    description:
      "Designed and developed a full-stack analytics platform for a B2B SaaS company. Features real-time data visualization, user management, subscription billing, and white-label capabilities.",
    challenge:
      "The company needed a scalable dashboard solution that could handle 10,000+ users with real-time updates.",
    solution:
      "Built with Next.js and PostgreSQL, implemented real-time WebSocket updates and optimized database queries.",
    results: [
      "Sub-100ms response times",
      "99.99% uptime",
      "Handles 50K+ concurrent users",
      "Reduced infrastructure costs by 40%",
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe", "WebSockets"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "AI Customer Service Platform",
    category: "AI Integration",
    description:
      "Created an intelligent customer service bot that handles inquiries 24/7, integrates with the company CRM, creates support tickets, and escalates complex issues to human agents.",
    challenge:
      "Support team was overwhelmed with 500+ daily inquiries, causing long response times and customer frustration.",
    solution:
      "Deployed GPT-4 powered chatbot with custom training data, CRM integration, and smart escalation logic.",
    results: [
      "70% of inquiries resolved automatically",
      "Average response time: 30 seconds",
      "50% reduction in support costs",
      "NPS score increased by 25 points",
    ],
    tags: ["OpenAI GPT-4", "LangChain", "Zendesk API", "Node.js"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Startup Landing Page",
    category: "Website Design",
    description:
      "Designed and built a high-converting landing page for a tech startup. Focused on clear messaging, fast performance, and SEO optimization to drive organic traffic and conversions.",
    challenge:
      "The startup needed to launch quickly with a professional web presence that could convert visitors into leads.",
    solution:
      "Created a mobile-first, SEO-optimized landing page with clear CTAs and lead capture forms.",
    results: [
      "12% conversion rate",
      "95+ PageSpeed score",
      "300% increase in organic traffic",
      "Launched in 2 weeks",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Internal Tools Dashboard",
    category: "Web Development",
    description:
      "Built a comprehensive internal tools platform for a growing company. Includes employee management, project tracking, time logging, and automated reporting.",
    challenge:
      "Team was using 5+ different tools for daily operations, causing inefficiency and data silos.",
    solution:
      "Consolidated all tools into a single, custom-built platform with integrations to existing systems.",
    results: [
      "60% improvement in team productivity",
      "Single source of truth",
      "Automated weekly reports",
      "ROI achieved in 3 months",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Slack API"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Document Processing Automation",
    category: "AI Automation",
    description:
      "Automated document processing workflow for a legal firm. The system extracts key information from contracts, categorizes documents, and populates the case management system.",
    challenge:
      "Paralegals spent 20+ hours weekly manually reviewing and categorizing incoming documents.",
    solution:
      "Implemented OCR and GPT-based extraction with custom validation rules and CMS integration.",
    results: [
      "95% extraction accuracy",
      "20 hours saved weekly",
      "Instant document categorization",
      "Searchable document archive",
    ],
    tags: ["OpenAI", "OCR", "Python", "REST API"],
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
];

export default function ProjectsPage() {
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
              Projects
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A showcase of AI automation, web development, and integration
              projects that delivered real business results.
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
                              Challenge
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {project.challenge}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-neutral-300 mb-2">
                              Solution
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
                          Results
                        </h3>
                        <ul className="space-y-3">
                          {project.results.map((result, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-neutral-400"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                              {result}
                            </li>
                          ))}
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
                Have a Similar Project in Mind?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                Let&apos;s discuss how I can help you achieve similar results
                for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
              >
                Start Your Project
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
