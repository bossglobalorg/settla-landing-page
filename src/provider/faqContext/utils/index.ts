import { FAQItem, defaultFAQs } from "@/constants/faqs";

export const filterFAQs = (searchQuery: string, selectedFilter: string): FAQItem[] => {
  return defaultFAQs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter
      ? faq.tags.includes(selectedFilter.toLowerCase())
      : true;
    return matchesSearch && matchesFilter;
  });
};
