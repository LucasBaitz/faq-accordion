import Image from "next/image";
import React from "react";
import sections from "@/app/sections.json";
import AccordionSection from "../AccordionSection/AccordionSection";
import { Icons } from "../Icons/Icons";

const Accordion: React.FC = () => {
  return (
    <div className="bg-white rounded-xl max-w-[530px] w-full p-5 px-8 z-50 ">
      <header className="flex items-center align-middle gap-5">
        <Icons.star />
        <h1 className="text-[50px] text-[#321736] font-bold">FAQs</h1>
      </header>
      <ul className="flex flex-col">
        {sections.map((s, i) => (
          <li key={s.title}>
            <AccordionSection title={s.title} content={s.content} />
            {i < sections.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
