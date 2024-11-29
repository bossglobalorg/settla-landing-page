import { useState } from "react";
import { countries } from "@/utils";
import assetLib from "@/lib/assets";

export const CustomDropdown = ({
  selectedValue,
  onChange,
}: {
  selectedValue: string;
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex w-20 items-center gap-4 rounded-b-none rounded-l-lg rounded-t-none border border-r-0 px-4 py-2 text-left text-gray-700"
      >
        {selectedValue}
        <img src={assetLib.arrowDown} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-[200px] w-20 overflow-y-auto rounded-lg border bg-primary-900 shadow-lg">
          {countries.map((country) => (
            <div
              key={country.code}
              className="cursor-pointer px-4 py-2 hover:bg-primary-400"
              onClick={() => handleSelect(country.code)}
            >
              {country.code}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
