"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const plans = [
  {
    index: 0,
    name: "Web Basic",
    price: "500 lei",
    features: [
      "Până la 3 pagini",
      "Design modern cu Tailwind CSS",
      "Cod curat și rapid cu Next.js",
      "Complet responsive",
      "Livrare în 1–3 zile",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Ideal pentru site-uri de prezentare simple. Fără panou de administrare, perfect pentru afaceri mici sau proiecte personale.",
    button: "Cumpără acum",
  },
  {
    index: 1,
    name: "Web Business",
    price: "1000 lei",
    features: [
      "Până la 10 pagini",
      "Design modern personalizat",
      "Dezvoltare cu Next.js ",
      "Website complet responsive",
      "Optimizat pentru performanță",
      "Răspuns în 24h la suport",
      "Canal privat de comunicare",
      "Timp de livrare 3-5 zile",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Perfect pentru afaceri mici și freelanceri care doresc un site profesionist, rapid și adaptat nevoilor lor. Nu include panou de administrare.",
    button: "Cumpără acum",
  },
  {
    index: 2,
    name: "Web Enterprise",
    feature: "Contactează-ne",
    price: "Hai să vorbim!",
    features: [
      "Website complet responsive",
      "Design personalizat avansat",
      "Cod modern: Next.js",
      "Optimizare SEO și performanță",
      "Revizii nelimitate",
      "Răspuns rapid (max 24h)",
      "Comunicare directă și constantă",
      "Prioritate în dezvoltare",
      "Manager de proiect dedicat",
    ],
    style:
      "h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Pentru afaceri care au nevoie de o prezență online puternică, personalizată și scalabilă. Ideal pentru proiecte extinse sau cu cerințe speciale.",
    button: "Contactează-ne",
  },
];

const Pricing = () => {
  return (
    <div
      className="w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToTestimonials={() => {}}
        scrollToServices={() => {}}
      />

      <div className="flex items-center justify-center flex-col   ">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Prețuri transparente
          <br /> Alegeți planul
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6  "
            >
              <div className={plan.style}>
                <div className="text-4xl flex  items-center font-medium">
                  {plan.name}
                  {/* render feature tag only for enterprise tab*/}
                  {plan.feature === "Contact Us" && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
                      Contact Us
                    </div>
                  )}
                </div>
                <div className="text-3xl pt-6 ">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg  py-2 flex space-x-2 items-center"
                    >
                      {/* render checkmark only for enterprise tab*/}
                      {plan.feature === "Contact Us" ? (
                        <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                      ) : (
                        <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      )}

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href="https://buy.stripe.com/test_5kQcN5fxF10wfcQfNqfMA00"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Cumpără acum
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="https://buy.stripe.com/test_28EcN54T1aB62q4fNqfMA01"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Cumpără acum
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Contactează-ne
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
