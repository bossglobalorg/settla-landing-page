import { defaultFAQs } from "@/constants/faqs";
import { FAQState, Action } from "../types";
import { filterFAQs } from "../utils";

export const faqReducer = (state: FAQState, action: Action): FAQState => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
        filteredFAQs: filterFAQs(action.payload, state.selectedFilter),
      };
    case "SET_FILTER":
      return {
        ...state,
        selectedFilter:
          state.selectedFilter === action.payload ? "" : action.payload,
        filteredFAQs: filterFAQs(
          state.searchQuery,
          state.selectedFilter === action.payload ? "" : action.payload,
        ),
      };
    case "RESET_FILTERS":
      return {
        ...state,
        searchQuery: "",
        selectedFilter: "",
        filteredFAQs: defaultFAQs,
      };
    default:
      return state;
  }
};

export const initialState: FAQState = {
  searchQuery: "",
  selectedFilter: "",
  filteredFAQs: defaultFAQs,
};
