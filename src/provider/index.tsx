"use client";

import { createContext, useReducer, useContext, ReactNode } from "react";
import { faqReducer, initialState, FAQState, Action } from "./faqContext";

const ValueContext = createContext<{
  faqState: FAQState;
  faqDispatch: React.Dispatch<Action>;
} | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [faqState, faqDispatch] = useReducer(faqReducer, initialState);

  return (
    <ValueContext.Provider value={{ faqState, faqDispatch }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValueContext = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useValueContext must be used within a ContextProvider");
  }
  return context;
};
