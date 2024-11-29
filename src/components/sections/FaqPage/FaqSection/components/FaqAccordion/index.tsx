"use client";
import { useState } from "react";
import { useValueContext } from "@/provider";
import { cn } from "@/lib/utils";
import FaqAccordionItem from "../FaqAccordionItem";

const FaqAccordion = () => {
  const { faqState } = useValueContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4 md:space-y-6")}>
      {faqState.filteredFAQs.map((item, index) => (
        <FaqAccordionItem
          key={index}
          item={item}
          isOpen={activeIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;
