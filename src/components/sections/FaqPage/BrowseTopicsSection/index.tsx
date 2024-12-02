"use client";
import Image from "next/image";
import { topics } from "./constants";
import { useValueContext } from "@/provider";
import { cn } from "@/lib/utils";

const BrowseTopicsSection = () => {
  const { faqState, faqDispatch } = useValueContext();

  return (
    <section className="content-grid overflow-hidden">
      <div className="mx-auto w-full max-w-[63rem] space-y-8">
        <h2 className="text-2xl font-medium leading-8 text-primary-900">
          Browse topics
        </h2>

        <div className="md:no-scrollbar flex grid-cols-1 place-items-center gap-8 max-lg:overflow-auto max-md:mb-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon, title, items }, index) => {
            return (
              <article
                key={`topic ${index + 1}`}
                onClick={() =>
                  faqDispatch({ type: "SET_FILTER", payload: title })
                }
                className={cn(
                  "size-full min-w-80 max-w-80 cursor-pointer rounded-2xl bg-gray-50 px-6 py-8",
                  faqState.selectedFilter === title
                    ? "border-primary-900 bg-primary-900 text-white"
                    : "border-gray-200 bg-gray-50 hover:bg-gray-200",
                )}
              >
                <figure className="relative mb-6 size-12 rounded-full bg-accent-400">
                  <Image src={icon} alt={`topic ${index + 1} icon`} fill />
                </figure>

                <h3
                  className={cn(
                    "mb-3 text-lg font-medium leading-7 first-letter:capitalize",
                    faqState.selectedFilter === title
                      ? "text-accent-400"
                      : "text-primary-900",
                  )}
                >
                  {title}
                </h3>

                <ul
                  className={cn(
                    "space-y-2 leading-6",
                    faqState.selectedFilter === title
                      ? "text-gray-200"
                      : "text-gray-600",
                  )}
                >
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BrowseTopicsSection;
