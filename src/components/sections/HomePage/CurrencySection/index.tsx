"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  BaseCurrencyType,
  Currency,
  CurrencyCardProps,
  CurrencySectionProps,
  Feature,
  CurrencyOption,
} from "@/types/rates";
import { ChevronDownSVG } from "@/svgs";
import assetLib from "@/lib/assets";

// API Types
interface RatesResponse {
  data: {
    [key: string]: number;
  };
  message: string;
  meta: null;
  status: string;
}

interface ExchangeRates {
  [key: string]: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  flag,
  symbol,
  currency,
  exchangeRate,
  showRate = true,
  baseCurrency,
}) => {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-xl bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-50 sm:h-10 sm:w-10">
          <img
            src={flag}
            alt={currency}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-base font-medium text-gray-900 sm:text-lg">
              {symbol}
            </p>
            {symbol === "CAD" && (
              <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                Primary
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">{currency}</p>
          <p className="text-xs text-gray-400">
            (1 {baseCurrency} → {symbol})
          </p>
        </div>
      </div>
      {showRate && (
        <div className="flex items-center gap-2">
          <p className="text-base font-medium text-gray-900">
            {exchangeRate.toFixed(2)} {symbol}
          </p>
          <div className="flex items-center text-emerald-500">
            <ChevronDownSVG className="h-4 w-4" />
            <span className="text-xs">10.5%</span>
          </div>
        </div>
      )}
    </div>
  );
};

const CurrencySection: React.FC<CurrencySectionProps> = ({ className }) => {
  const [baseCurrency, setBaseCurrency] = useState<BaseCurrencyType>("USD");
  const [rates, setRates] = useState<ExchangeRates>({});
  const [loading, setLoading] = useState(true);

  const currencyOptions: CurrencyOption[] = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];

  const currencyInfo = {
    CAD: { flag: assetLib.canadaFlagIcon, name: "Canadian Dollar" },
    EUR: { flag: assetLib.europeFlagIcon, name: "Euro" },
    GBP: { flag: assetLib.ukFlagIcon, name: "Great Britain Pound" },
    NGN: { flag: assetLib.nigeriaFlagIcon, name: "Nigerian Naira" },
    ZAR: { flag: assetLib.saFlagIcon, name: "South African Rand" },
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.useoval.com/rate");
        const data: RatesResponse = await response.json();

        if (data.status === "success") {
          setRates(data.data);
        }
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    // Fetch rates every minute
    const interval = setInterval(fetchRates, 60000);

    return () => clearInterval(interval);
  }, [baseCurrency]);

  const getRateForCurrency = (symbol: string): number => {
    const key = `${baseCurrency}-${symbol}`;
    return rates[key] || 0;
  };

  const currencies: Currency[] = Object.entries(currencyInfo).map(
    ([symbol, info]) => ({
      flag: info.flag,
      symbol,
      currency: info.name,
      exchangeRate: getRateForCurrency(symbol),
    }),
  );

  const features: Feature[] = [
    { id: "1", text: "One account, multiple currencies" },
    { id: "2", text: "Regulated & secure" },
    { id: "3", text: "1 business day for bank withdrawals" },
  ];

  const handleCurrencyChange = (option: CurrencyOption | null): void => {
    if (option) {
      setBaseCurrency(option.value);
    }
  };

  const customStyles = {
    control: (base: any) => ({
      ...base,
      height: "44px",
      minHeight: "44px",
      borderRadius: "0.5rem",
      border: "1px solid #E2E8F0",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #CBD5E0",
      },
    }),
    option: (base: any, state: { isSelected: boolean }) => ({
      ...base,
      backgroundColor: state.isSelected ? "#F7FAFC" : "white",
      color: "#2D3748",
      "&:hover": {
        backgroundColor: "#EDF2F7",
      },
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: "0.5rem",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    }),
  };

  return (
    <section className={`container mx-auto px-4 py-16 ${className || ""}`}>
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="w-full max-w-xl">
          <h2 className="mb-6 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
            Settle suppliers in any currency
          </h2>

          <div className="mb-8 space-y-4 text-gray-600">
            <p>
              Hold over 35 currencies and exchange to the currency you need,
              when you need it.
            </p>
            <p>
              Expand to new markets with ease. No more barriers to paying
              partners, vendors, or suppliers around the globe.
            </p>
          </div>

          <ul className="mb-8 space-y-4">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                  <svg
                    className="h-4 w-4 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <button
            className="rounded-full bg-gray-900 px-6 py-3 text-white hover:bg-gray-800"
            type="button"
          >
            Learn more
          </button>
        </div>

        <div className="w-full max-w-2xl rounded-3xl bg-gray-50 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Today's Rates
              </h3>
              <div className="mb-6">
                <p className="mb-2 text-sm text-gray-600">Base currency</p>
                <Select
                  value={currencyOptions.find(
                    (option) => option.value === baseCurrency,
                  )}
                  onChange={handleCurrencyChange}
                  options={currencyOptions}
                  styles={customStyles}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  isSearchable={false}
                />
              </div>
              <p className="mb-4 text-sm text-gray-600">List of currencies</p>
            </div>

            <div className="space-y-3">
              {loading ? (
                <div className="py-4 text-center">Loading rates...</div>
              ) : (
                currencies.map((currency) => (
                  <CurrencyCard
                    key={currency.symbol}
                    {...currency}
                    baseCurrency={baseCurrency}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencySection;
