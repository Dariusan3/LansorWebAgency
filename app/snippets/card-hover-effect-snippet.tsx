import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Design",
    description:
      "Construim site-uri responsive, care arată excelent pe orice dispozitiv și sunt optimizate pentru SEO și conversii – astfel încât vizitatorii tăi să devină clienți.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Magazine E-commerce",
    description:
      "De la magazine mici la retaileri online de mari dimensiuni, avem expertiza necesară pentru a construi un magazin care îți va sprijini creșterea afacerii.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Autentificare sigură și găzduire performantă",
    description:
      "Asigurăm autentificare securizată, protecția datelor, domeniu și găzduire – tot ce ai nevoie pentru un site sigur și complet funcțional.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Social Media",
    description:
      "Oferim servicii de gestionare a rețelelor sociale și creare de reclame. Te putem ajuta să-ți crești prezența pe social media și să ajungi la noi clienți.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),

    title: "Design Grafic",
    description:
      "Creăm design-uri personalizate, atractive și adaptate nevoilor tale, pentru branduri și campanii vizuale de impact.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),

    title: "Suport",
    description:
      "Oferim suport pentru toți clienții noștri. Suntem aici să te ajutăm cu orice probleme sau întrebări ai avea.",
  },
];
