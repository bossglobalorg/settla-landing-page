import Image from "next/image";
import assetLib from "@/lib/assets";

const testimonials = [
  {
    from: "Hamdee Autos",
    src: assetLib.testimonialImage1,
    credit:
      "accelerates international vehicle imports using Settla, reducing transaction times...",
  },
  {
    from: "Glofex",
    src: assetLib.testimonialImage2,
    credit:
      "we optimize our freight forwarding services with Settla, saving 40% on currency conversion fees.",
  },
  {
    from: "Ojuola",
    src: assetLib.testimonialImage3,
    credit:
      "uses Settla to manage international payments, ensuring smooth financial transactions...",
  },
];

interface TestimonialCardProps {
  from: string;
  src: string;
  credit: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  from,
  src,
  credit,
}) => {
  return (
    <article className="w-full max-w-96 overflow-hidden rounded-3xl bg-white">
      <figure className="relative h-80 bg-primary-400">
        <Image src={src} alt={`${from} image`} fill />
      </figure>

      <div className="px-4 py-6 text-lg leading-8 text-primary-900 md:px-10 md:pb-10 md:pt-8 md:text-2xl md:tracking-[-0.0625rem]">
        <p>
          “{from === "Glofex" && "At "}
          <span className="font-semibold">{from}</span> {credit}”
        </p>
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

        <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-between">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.from} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
