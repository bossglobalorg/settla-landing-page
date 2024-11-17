"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownSVG } from "@/components/svgs";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  isOpen: boolean;
  onToggle: () => void;
  number: number;
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  isOpen,
  onToggle,
  number,
  title,
  content,
}) => (
  <div
    className={`rounded-xl transition-colors duration-200 ${
      isOpen ? "bg-gray-50" : "bg-white"
    }`}
  >
    <motion.button
      onClick={onToggle}
      className={cn(
        "flex w-full items-center gap-4 px-4 md:px-6",
        isOpen ? "pb-2 pt-4 md:pb-3 md:pt-6" : "py-3",
      )}
      whileTap={{ scale: 0.99 }}
    >
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-full font-medium transition-colors duration-200",
          isOpen
            ? "bg-accent-400 text-primary-900"
            : "bg-gray-100 text-gray-600",
        )}
      >
        {number}
      </div>
      <span className="flex-grow text-left font-medium leading-7 text-primary-900 md:text-lg">
        {title}
      </span>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDownSVG className="size-6" />
      </motion.div>
    </motion.button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-4 pl-[4.5rem] pr-12 leading-6 text-gray-600 md:pb-6 md:pl-20 md:pr-16">
            {content}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default AccordionItem;
