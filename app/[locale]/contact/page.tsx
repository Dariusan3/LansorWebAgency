"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLocale, useTranslations } from "next-intl";
import {
  CheckCircle,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const ContactPage = () => {
  const t = useTranslations("contact");
  const locale = useLocale();

  const FormSchema = z.object({
    name: z.string().min(2, t("name") + " is required"),
    email: z.string().email("Please enter a valid email"),
    company: z.string().optional(),
    service: z.enum([
      "AI Automation",
      "Web Development",
      "Website Design",
      "AI Integration",
      "Other",
    ]),
    budget: z.enum([
      "Under $5K",
      "$5K - $10K",
      "$10K - $25K",
      "$25K+",
      "Not sure yet",
    ]),
    message: z.string().min(10, t("projectPlaceholder")),
  });

  type FormValues = z.infer<typeof FormSchema>;

  const benefits = [
    {
      icon: Clock,
      title: t("quickResponse"),
      description: t("quickResponseDesc"),
    },
    {
      icon: MessageCircle,
      title: t("freeConsult"),
      description: t("freeConsultDesc"),
    },
    {
      icon: CheckCircle,
      title: t("customSolutions"),
      description: t("customSolutionsDesc"),
    },
  ];

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "AI Automation",
      budget: "Not sure yet",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: t("errorTitle"),
        description: t("errorMessage"),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear_gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-16 pb-24">
          {/* Header */}
          <section className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </section>

          {/* Main Content */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {t("whatToExpect")}
                  </h2>

                  <div className="space-y-6 mb-12">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-neutral-500">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Email Alternative */}
                  <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="font-medium text-white">
                        {t("preferEmail")}
                      </span>
                    </div>
                    <a
                      href="mailto:contact@lansor.agency"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      contact@lansor.agency
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                {!submitted ? (
                  <div className="p-8 md:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/50">
                    <h2 className="text-xl font-semibold text-white mb-8">
                      {t("formTitle")}
                    </h2>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-neutral-300">
                                  {t("name")} *
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder={t("namePlaceholder")}
                                    {...field}
                                    className="bg-neutral-800 border-neutral-700"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-neutral-300">
                                  {t("email")} *
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder={t("emailPlaceholder")}
                                    {...field}
                                    className="bg-neutral-800 border-neutral-700"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-300">
                                {t("company")}
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={t("companyPlaceholder")}
                                  {...field}
                                  className="bg-neutral-800 border-neutral-700"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-neutral-300">
                                  {t("serviceNeeded")} *
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                                      <SelectValue
                                        placeholder={t("selectService")}
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="AI Automation">
                                      AI Automation
                                    </SelectItem>
                                    <SelectItem value="Web Development">
                                      Web Development
                                    </SelectItem>
                                    <SelectItem value="Website Design">
                                      Website Design
                                    </SelectItem>
                                    <SelectItem value="AI Integration">
                                      AI Integration
                                    </SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-neutral-300">
                                  {t("budgetRange")}
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                                      <SelectValue
                                        placeholder={t("selectBudget")}
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Under $5K">
                                      Under $5K
                                    </SelectItem>
                                    <SelectItem value="$5K - $10K">
                                      $5K - $10K
                                    </SelectItem>
                                    <SelectItem value="$10K - $25K">
                                      $10K - $25K
                                    </SelectItem>
                                    <SelectItem value="$25K+">$25K+</SelectItem>
                                    <SelectItem value="Not sure yet">
                                      Not sure yet
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-300">
                                {t("projectDetails")} *
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder={t("projectPlaceholder")}
                                  className="min-h-[150px] bg-neutral-800 border-neutral-700"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full md:w-auto px-8 py-6 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300"
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </div>
                ) : (
                  <div className="p-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {t("successTitle")}
                    </h2>
                    <p className="text-neutral-400 max-w-md mx-auto">
                      {t("successMessage")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
