"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import GetStartedAccordionItem from "../GetStartedAccordionItem";

interface GetStartedAccordionItemType {
  title: string;
  content: string;
}

interface GetStartedAccordionProps {
  className?: string;
  defaultOpenIndex?: number;
  items?: GetStartedAccordionItemType[];
}

const GetStartedAccordion: React.FC<GetStartedAccordionProps> = ({
  className,
  defaultOpenIndex = 0,
  items: propItems,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultOpenIndex);

  const defaultItems: GetStartedAccordionItemType[] = [
    {
      title: "Sign Up and Verify",
      content: "Create an account and complete KYC/KYB verification with ease.",
    },
    {
      title: "Fund Your Account",
      content: "Add funds to your account through various payment methods.",
    },
    {
      title: "Send and Convert Money Instantly",
      content: "Transfer and exchange money quickly and securely.",
    },
    {
      title: "Track and Manage Payments",
      content: "Monitor your transactions and manage your payment activities.",
    },
  ];

  const items = propItems || defaultItems;

  const handleToggle = (index: number): void => {
    setActiveIndex(activeIndex === index ? index : index);
  };

  return (
    <div className={cn("", className)}>
      {items.map((item, index) => (
        <GetStartedAccordionItem
          key={index}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
          number={index + 1}
          {...item}
        />
      ))}
    </div>
  );
};

export default GetStartedAccordion;
