"use client";
import { useValueContext } from "@/provider";
import { cn } from "@/lib/utils";

const FilterTabs = () => {
  const { faqState, faqDispatch } = useValueContext();

  const filters = [
    "pay-in",
    "account",
    "pay-outs",
    "security",
    "track a payment",
  ];

  return (
    <div className="relative mx-auto w-full">
      <div className="no-scrollbar flex items-center gap-4 overflow-x-auto lg:justify-center">
        {filters.map((filter: string) => (
          <button
            key={filter}
            onClick={() => faqDispatch({ type: "SET_FILTER", payload: filter })}
            className={cn(
              "flex-shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold leading-6 text-primary-900 transition-all duration-200 first-letter:capitalize sm:text-base",
              faqState.selectedFilter === filter
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
