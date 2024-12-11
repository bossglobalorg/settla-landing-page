import { ButtonLink } from "@/components";
import { HelpCircleIconSVG } from "@/svgs";
import { FaqAccordion } from "./components";

const FaqSection = () => {
  return (
    <section className="content-grid py-[3.75rem] lg:py-32">
      <div className="flex items-start justify-between gap-10 max-lg:flex-col">
        <header className="w-full max-w-[26rem]">
          <h2 className="mb-6 text-2xl font-semibold leading-8 text-primary-900 sm:text-4xl md:text-h2 md:font-medium md:leading-[4rem]">
            Got Questions? <br /> We've Got Answers
          </h2>

          <p className="text-gray-600 max-md:max-w-80 md:text-lg md:leading-7">
            Find the answers to frequently asked questions here.
          </p>

          <div className="my-6 flex items-center justify-start gap-2 text-base leading-6 text-primary-900 md:mt-12">
            <HelpCircleIconSVG />
            <p>Need further support?</p>
          </div>

          <ButtonLink link="/contact-us">Contact us</ButtonLink>
        </header>

        <FaqAccordion className="w-full max-w-3xl" />
      </div>
    </section>
  );
};
export default FaqSection;
