import Image from "next/image";
import assetLib from "@/lib/assets";

const testimonials = [
  {
    from: "CEO, Hamdee Autos",
    author: "Yinka Ayobamiji",
    src: assetLib.testimonialImage1,
    credit:
      " has been a revelation for us. We move between $50,000 and $100,000 every month, and Settla's service is not only fast but remarkably dependable. They handle our cross-border payments with ease, Settla feels like a true partner who values our growth as much as we do",
  },
  {
    from: "Founder, Glofex",
    author: "Kunle Adeyanju",
    src: assetLib.testimonialImage2,
    credit:
      " has transformed our cross-border transactions. With monthly volumes of over $200,000, we've seen exceptional efficiency and cost savings. Their settlement times and customer support are unmatched, always exceeding our expectations.",
  },
  {
    from: "CEO, Fountain Havens",
    author: "Olasijibomi Ojuola",
    src: assetLib.testimonialImage3,
    credit:
      "Other platforms we've used in the past have not performed as well as Settla has for us. Managing over half a million dollars in transactions with them, we've appreciated the reliable service and timely settlements, which have streamlined our financial operations and allowed us to focus on growth.",
  },
];

interface TestimonialCardProps {
  from: string;
  author: string;
  src: string;
  credit: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  from,
  author,
  src,
  credit,
}) => {
  return (
    <article className="row-span-3 grid size-full max-h-[54rem] max-w-96 grid-rows-subgrid gap-6 overflow-hidden rounded-3xl bg-white text-lg leading-7 text-primary-900 sm:leading-8 md:gap-8 md:text-2xl md:tracking-[-0.0625rem]">
      <figure className="relative h-80 bg-primary-400">
        <Image src={src} alt={`${from} image`} fill />
      </figure>

      <p className="px-4 md:px-10">
        “
        {author !== "Olasijibomi Ojuola" && (
          <span className="font-semibold">Settla</span>
        )}
        {credit}”
      </p>

      <div className="px-4 pb-6 md:px-10 md:pb-10">
        <p className="text-lg font-semibold sm:text-2xl sm:leading-8">
          {author}
        </p>
        <p className="text-sm font-normal leading-6 sm:text-xl">{from}</p>
      </div>
    </article>
  );
};

const TestimonialSection = () => {
  return (
    <section className="content-grid bg-gray-50 py-[3.75rem] md:py-32">
      <div className="space-y-10 lg:space-y-16">
        <header>
          <p className="mb-4 text-sm font-medium leading-5 text-primary-900 underline decoration-accent-400 decoration-2 underline-offset-4 md:mb-6 md:text-lg md:leading-7">
            Customer stories
          </p>

          <h2 className="max-w-2xl text-2xl font-semibold leading-8 text-primary-900 max-lg:max-w-[32rem] max-sm:max-w-[20rem] sm:text-4xl md:text-[3.625rem] md:font-medium md:leading-[4rem]">
            Trusted by Businesses Across the Globe
          </h2>
        </header>

        <div className="sm:grid-cols-auto-fit-24 grid grid-rows-[auto_auto_auto] place-items-center gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.from} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
