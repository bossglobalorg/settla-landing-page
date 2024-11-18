"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FilterTabs = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filters = [
    "Pay-in",
    "Account",
    "Pay-outs",
    "Security",
    "Track a payment",
  ];

  return (
    <div className="relative mx-auto w-full">
      <div className="no-scrollbar flex items-center gap-4 overflow-x-auto md:justify-center">
        {filters.map((filter: string) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={cn(
              "flex-shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold leading-6 text-primary-900 transition-all duration-200 sm:text-base",
              selectedFilter === filter
                ? "border-primary-900 bg-primary-900 text-white"
                : "border-gray-200 bg-gray-50 hover:bg-gray-200",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
