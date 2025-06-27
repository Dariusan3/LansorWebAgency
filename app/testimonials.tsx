"use client";

import { AnimatedTestimonialsDemo } from "./snippets/animated-testimonials-snippet";

const Testimonials = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Testimoniale
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
          Încrederea clienților noștri, cea mai bună recomandare
        </p>
        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
};

export default Testimonials;
