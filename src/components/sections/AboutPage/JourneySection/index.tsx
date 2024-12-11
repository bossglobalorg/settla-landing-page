"use client";

import { useState } from "react";
import Image from "next/image";
import assetLib from "@/lib/assets";

const JourneySection = () => {
  const milestones = [
    {
      year: "2019",
      description: "Settla's first transaction",
      image: assetLib.discoveryImage,
    },
    {
      year: "2020",
      description: "Expanded to new markets",
      image: assetLib.discoveryImage,
    },
    {
      year: "2021",
      description: "Launched mobile app",
      image: assetLib.discoveryImage,
    },
    {
      year: "2022",
      description: "Reached 1M users",
      image: assetLib.discoveryImage,
    },
    {
      year: "2023",
      description: "Introduced advanced AI solutions",
      image: assetLib.discoveryImage,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % milestones.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? milestones.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="space-y-4 bg-gray-50 px-6 py-16 md:space-y-10 lg:px-20">
      {/* Heading */}
      <header className="space-y-4 text-center md:space-y-6">
        <h2 className="font-inter text-2xl font-semibold leading-8 text-primary-900 md:text-[3.625rem] md:font-medium md:leading-[4rem]">
          The Journey of Settla
        </h2>
        <p className="mx-auto max-w-[50rem] text-lg text-gray-600">
          From our roots in this vision, we&apos;ve grown into a platform that
          empowers communities worldwide, one transaction at a time.
        </p>
      </header>

      {/* Timeline */}
      <div className="flex flex-col items-center gap-6 md:gap-16">
        {/* Year Navigation */}
        <div className="no-scrollbar flex w-full max-w-[calc(100dvw-3rem)] gap-3 overflow-x-auto sm:justify-center">
          {milestones.map((milestone, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-4 py-2 ${
                activeIndex === index
                  ? "border-accent-400 bg-accent-400 text-primary-900"
                  : "border-primary-900 text-primary-900"
              } transition`}
            >
              {milestone.year}
            </button>
          ))}
        </div>

        {/* Active Card */}
        <div className="flex min-h-80 w-full max-w-64 flex-col rounded-[2rem] bg-primary-900 py-8 text-center text-white shadow-lg md:min-h-[30rem] md:max-w-96">
          <h3 className="text-xl font-medium text-accent-400 md:text-4xl">
            {milestones[activeIndex].year}
          </h3>
          <p className="mt-2 text-xs md:mt-4 md:text-lg">
            {milestones[activeIndex].description}
          </p>
          <Image
            src={milestones[activeIndex].image}
            alt={`Milestone ${milestones[activeIndex].year}`}
            className="mt-auto w-full rounded-lg max-md:-mb-8 max-md:mt-6"
            width={320}
            height={290}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between space-x-4 md:-mt-6">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`flex size-10 items-center justify-center rounded-full border p-2.5 ${
              activeIndex === 0
                ? "cursor-not-allowed border-gray-300 bg-white text-gray-300"
                : "border-primary-900 bg-primary-900 text-white hover:shadow-md"
            }`}
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === milestones.length - 1}
            className={`fle size-10 items-center justify-center rounded-full border p-2.5 ${
              activeIndex === milestones.length - 1
                ? "cursor-not-allowed border-gray-300 bg-white text-gray-300"
                : "border-primary-900 bg-primary-900 text-white hover:shadow-md"
            }`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
