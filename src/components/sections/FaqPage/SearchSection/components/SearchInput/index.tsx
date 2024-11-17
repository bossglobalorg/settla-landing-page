"use client";
import { FormEvent, useState } from "react";
import { SearchIconSVG } from "@/components/svgs";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-[37rem]">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search help articles"
          className="w-full rounded-full border border-gray-300 px-6 py-4 text-lg text-gray-700 placeholder-gray-500 transition-all duration-200 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
          aria-label="Search help articles"
        />
        <button
          type="submit"
          className="absolute right-1.5 size-[3.125rem] rounded-full bg-accent-400 p-3.5 transition-colors duration-200"
          aria-label="Submit search"
        >
          <SearchIconSVG />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
