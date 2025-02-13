// types/rates.ts
import { ReactNode } from "react";

export interface Currency {
  flag: string;
  symbol: string;
  currency: string;
  exchangeRate: number;
}

export type BaseCurrencyType = "USD" | "EUR" | "GBP";

export interface CurrencyCardProps extends Currency {
  showRate?: boolean;
  baseCurrency: BaseCurrencyType; // Add this line
}

export interface Feature {
  id: string;
  text: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface CurrencySectionProps {
  className?: string;
  children?: ReactNode;
}

export interface CurrencyOption {
  value: BaseCurrencyType;
  label: string;
}

export interface RatesResponse {
  data: {
    [key: string]: number;
  };
  message: string;
  meta: null;
  status: string;
}
