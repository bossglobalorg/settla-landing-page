"use client";

import assetLib from "@/lib/assets";
import { useState } from "react";

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
    <section className="bg-gray-50 px-6 py-16 lg:px-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          The Journey of Settla
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          From our roots in this vision, we’ve grown into a platform that
          empowers communities worldwide, one transaction at a time.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-12 flex flex-col items-center">
        {/* Year Navigation */}
        <div className="flex space-x-4">
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
        <div className="mt-8 w-full max-w-md rounded-3xl bg-primary-900 p-6 text-center text-white shadow-lg">
          <h3 className="text-xl font-bold text-accent-400">
            {milestones[activeIndex].year}
          </h3>
          <p className="mt-4 text-lg">{milestones[activeIndex].description}</p>
          <img
            src={milestones[activeIndex].image}
            alt={`Milestone ${milestones[activeIndex].year}`}
            className="mt-6 w-full rounded-lg"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between space-x-4">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`flex items-center justify-center rounded-full border p-3 ${
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
            className={`flex items-center justify-center rounded-full border p-3 ${
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
