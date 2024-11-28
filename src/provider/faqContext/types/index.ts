import { FAQItem } from "@/constants/faqs";

export interface FAQState {
  searchQuery: string;
  selectedFilter: string;
  filteredFAQs: FAQItem[];
}

export type Action =
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_FILTER"; payload: string }
  | { type: "RESET_FILTERS" };
