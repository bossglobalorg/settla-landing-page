import Image from "next/image";
import { topics } from "./constants";

const BrowseTopicsSection = () => {
  return (
    <section className="content-grid overflow-hidden">
      <div className="mx-auto w-full max-w-[63rem] space-y-8">
        <h2 className="text-2xl font-medium leading-8 text-primary-900">
          Browse topics
        </h2>

        <div className="flex grid-cols-1 place-items-center gap-8 overflow-auto max-md:mb-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon, title, items }, index) => (
            <article
              key={`topic ${index + 1}`}
              className="size-full min-w-80 max-w-80 rounded-2xl bg-gray-50 px-6 py-8"
            >
              <figure className="relative mb-6 size-12 rounded-full bg-accent-400">
                <Image src={icon} alt={`topic ${index + 1} icon`} fill />
              </figure>

              <h3 className="mb-3 text-lg font-medium leading-7 text-primary-900">
                {title}
              </h3>

              <ul className="space-y-2 leading-6 text-gray-600">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BrowseTopicsSection;
