// types/rates.ts
import { ReactNode } from "react";

export interface Currency {
  flag: string;
  symbol: string;
  currency: string;
  exchangeRate: number;
}

export interface CurrencyCardProps extends Currency {
  showRate?: boolean;
}

export interface Feature {
  id: string;
  text: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export type BaseCurrencyType = "USD" | "EUR" | "GBP";

export interface CurrencySectionProps {
  className?: string;
  children?: ReactNode;
}

export interface CurrencyOption {
  value: BaseCurrencyType;
  label: string;
}
