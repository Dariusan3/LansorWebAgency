"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/navbar";

const Book = () => {
  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-black/[0.96]  bg-grid-white/[0.02]   ">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToGraphicDesign={() => {}}
          scrollToTestimonials={() => {}}
          scrollToServices={() => {}}
        />
        <div
          className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Programează o întâlnire
        </div>

        <InlineWidget url="https://calendly.com/dariusosadici/consultan-a-personalizata" />
      </div>
    </>
  );
};

export default Book;
