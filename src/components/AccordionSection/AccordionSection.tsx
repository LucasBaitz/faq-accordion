"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "../Icons/Icons";

interface AccordionSectionProps {
  title: string;
  content: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  content,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="my-5" onClick={() => setOpen(!open)}>
      <div className="w-full flex justify-between align-middle items-start">
        <h3 className="text-bas text-black font-semibold transition ease-in-out duration-300 hover:text-[#A92BEA] cursor-pointer">
          {title}
        </h3>
        <span className="cursor-pointer">
          {open ? (
            <Icons.minus />
          ) : (
            <Icons.plus />
          )}
        </span>
      </div>
      {open && (
        <div className="mt-5">
          <p className="text-[#445940]">{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
