"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownSVG } from "@/svgs";
import { FAQItem } from "@/constants/faqs";
import { cn } from "@/lib/utils";

export interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 hover:bg-gray-50">
      <button
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between gap-6 p-4 text-left transition-colors duration-200 md:p-8",
          isOpen ? "pb-2 md:pb-4" : "md:pb-8",
        )}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-primary-900 md:text-xl md:font-medium">
          {item.question}
        </span>

        <div className="flex size-[2.625rem] min-w-[2.625rem] items-center justify-center rounded-full bg-accent-400">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDownSVG className="size-[1.125rem]" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-lg leading-7 text-gray-600 md:pb-8 md:pl-8 md:pr-24">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordionItem;
