import assetLib from "@/lib/assets";
import { ButtonLink } from "@/components";
import Image from "next/image";

const WhyChooseSection = () => {
  return (
    <section className="content-grid bg-gray-50 py-[3.75rem] md:py-32">
      <div className="space-y-20 md:space-y-24">
        <header>
          <p className="text-sm font-medium leading-5 text-primary-900 underline decoration-accent-400 decoration-2 underline-offset-4 md:text-lg md:leading-7">
            Why Choose Settla?
          </p>

          <h2 className="mb-4 mt-[1.2rem] text-2xl font-semibold leading-8 text-primary-900 max-md:max-w-[13.6875rem] md:mb-[1.5rem] md:text-[3.625rem] md:font-medium md:leading-[4rem] md:tracking-[-0.125rem]">
            Quick, Reliable, and Secure.
          </h2>

          <p className="mb-4 text-xl leading-7 tracking-[-0.03125rem] text-gray-600 max-lg:max-w-[16.6875rem] md:mb-10">
            Fast, flexible and secure international money transfers across the
            world.
          </p>

          <ButtonLink
            link="/"
            className="max-md:px-4 max-md:py-2.5 max-md:text-sm"
          >
            Create account
          </ButtonLink>
        </header>

        <div className="flex w-full flex-wrap items-start justify-between gap-8">
          {features.map(({ icon, title, text }, index) => (
            <article key={index} className="w-full md:max-w-[17.125rem]">
              <figure className="relative size-[3.75rem] rounded-full bg-primary-400 md:size-20">
                <Image src={icon} alt={`feature ${index + 1}`} fill />
              </figure>

              <h4 className="mb-3 mt-6 text-base font-semibold leading-6 text-primary-900 max-md:max-w-[13.5625rem] md:text-2xl md:font-medium md:leading-8 md:tracking-[-0.0625rem]">
                {title}
              </h4>

              <p className="text-sm leading-5 text-gray-600 md:text-lg md:leading-7">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseSection;

const features = [
  {
    icon: assetLib.featureSvg1,
    title: "Focused on Your Growth, Not Just Transactions",
    text: "You're not just moving money; you're building connections and a lasting legacy. Whether you're just starting or scaling up, Settla is here to make sure your payments grow as seamlessly as your ambitions.",
  },
  {
    icon: assetLib.featureSvg2,
    title: "Transparent, Competitive Pricing",
    text: "Trust is earned by what's visible, not buried in fine print. With Settla, there are no hidden fees—just straightforward, competitive pricing on every transaction.",
  },
  {
    icon: assetLib.featureSvg3,
    title: "Built for Security and Compliance",
    text: "In payments, peace of mind is everything. Settla's robust security, from encryption to fraud protection, keeps your transactions secure at all times. And with automated verification, your business stays compliant with every transaction.",
  },
  {
    icon: assetLib.featureSvg4,
    title: "Empathy for Entrepreneurs and Legacy Builders",
    text: "We understand what's at stake for you. Settla was designed with a deep respect for the resilience of minority-owned businesses, standing by you as more than a platform—we're a partner for your growth and success.",
  },
];
