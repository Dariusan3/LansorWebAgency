import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Aveți întrebări ?
        </div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Răspunsuri rapide.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Ce este Lansor?</AccordionTrigger>
            <AccordionContent>
              Lansor este o agenție specializată în crearea de site-uri web și
              servicii de marketing digital. Te ajutăm să îți lansezi afacerea
              online cu un website modern și promovare eficientă care atrage
              clienți.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Cum să începi?</AccordionTrigger>
            <AccordionContent>
              Poți începe prin a ne contacta. Îți vom răspunde în cel mult 24 de
              ore.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Tarife ?</AccordionTrigger>
            <AccordionContent>
              Oferim soluții personalizate pentru afacerea ta. Contactează-ne
              pentru o ofertă de preț.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Suport ?</AccordionTrigger>
            <AccordionContent>
              Oferim suport pentru toți clienții noștri, inclusiv în weekend.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
