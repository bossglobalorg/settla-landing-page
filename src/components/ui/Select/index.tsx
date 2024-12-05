"use client";

import { COUNTRY_CODES } from "@/lib/utils";
import { useState, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

interface CountryOption {
  value: string;
  label: string;
  phoneCode: string;
  flag: string;
}

function CustomDropdown({
  value,
  onChange,
  onPhoneChange,
}: {
  value: string;
  onChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}) {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null,
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const options: CountryOption[] = countryList()
    .getData()
    .map((country) => ({
      value: country.value,
      label: country.label,
      phoneCode: COUNTRY_CODES[country.value] || "",
      flag: `https://flagcdn.com/w20/${country.value.toLowerCase()}.png`,
    }));

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    let formattedNumber = rawValue;

    if (rawValue.length > 0) {
      formattedNumber = `(${rawValue.slice(0, 3)}`;
      if (rawValue.length > 3) {
        formattedNumber += `) ${rawValue.slice(3, 6)}`;
      }
      if (rawValue.length > 6) {
        formattedNumber += `-${rawValue.slice(6, 10)}`;
      }
    }

    setPhoneNumber(formattedNumber);
    onPhoneChange(`${selectedCountry?.phoneCode || "+1"} ${formattedNumber}`);
  };

  const handleCountryChange = (option: CountryOption | null) => {
    setSelectedCountry(option);
    if (option) {
      onChange(option.value);
      // Preserve the phone number but update the country code
      onPhoneChange(`${option.phoneCode} ${phoneNumber}`);
    }
  };

  useEffect(() => {
    // Set default country on mount
    const defaultCountry = options.find((option) => option.value === "US");
    if (defaultCountry) {
      setSelectedCountry(defaultCountry);
    }
  }, []);

  return (
    <div className="w-full space-y-2">
      <div className="flex w-full items-center rounded-lg border border-gray-300 bg-white px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Select<CountryOption>
          options={options}
          value={selectedCountry}
          onChange={handleCountryChange}
          isSearchable
          formatOptionLabel={(option) => (
            <div className="flex items-center gap-2">
              <img
                src={option.flag}
                alt={`${option.label} flag`}
                className="h-4 w-6 object-cover"
              />
              <span>{option.value}</span>
            </div>
          )}
          styles={{
            control: (base) => ({
              ...base,
              border: "none",
              boxShadow: "none",
              minHeight: "auto",
              background: "transparent",
              width: "100px",
            }),
            menu: (base) => ({
              ...base,
              zIndex: 9999,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#f3f4f6" : "white",
              color: "#111827",
              cursor: "pointer",
              padding: "8px 12px",
            }),
            valueContainer: (base) => ({
              ...base,
              padding: "0",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              padding: "0 4px",
            }),
          }}
        />
        <div className="mx-2 text-gray-400">|</div>
        <div className="text-gray-600">
          {selectedCountry?.phoneCode || "+1"}
        </div>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="(000) 000-0000"
          className="flex-1 border-none bg-transparent px-2 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
}

export default CustomDropdown;
