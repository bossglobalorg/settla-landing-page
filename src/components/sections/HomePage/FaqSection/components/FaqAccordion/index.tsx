"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import FaqAccordionItem from "../FaqAccordionItem";
import { defaultFAQs, FAQItem } from "../../constants";

export interface FaqAccordionProps {
  className?: string;
  items?: FAQItem[];
  defaultOpenIndex?: number;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  className,
  items = defaultFAQs,
  defaultOpenIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className={cn("space-y-4 md:space-y-6", className)}>
      {items.map((item, index) => (
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
