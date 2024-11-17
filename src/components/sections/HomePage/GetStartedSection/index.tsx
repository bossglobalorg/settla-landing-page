import Image from "next/image";
import assetLib from "@/lib/assets";
import { ButtonLink } from "@/components";
import { GetStartedAccordion } from "./components";

const GetStartedSection = () => {
  return (
    <section className="content-grid py-[3.75rem] lg:py-32">
      <div className="flex items-center justify-between gap-10 max-lg:flex-col-reverse md:gap-8">
        <figure className="relative min-h-[25.8125rem] w-full max-w-80 rounded-[1.25rem] bg-gray-100 sm:h-[46.25rem] sm:max-w-[40rem] sm:rounded-[2rem]">
          <Image
            src={assetLib.getStartedImage}
            alt="Showing Different currencies"
            className="hidden sm:block"
            fill
          />

          <Image
            src={assetLib.getStartedImageMobile}
            alt="Showing Sign Up Page for Settla account"
            className="sm:hidden"
            fill
          />
        </figure>

        <div className="w-full max-w-[30rem]">
          <header>
            <p className="mb-4 text-sm font-medium leading-5 text-primary-900 underline decoration-accent-400 decoration-2 underline-offset-4 md:mb-5 md:text-lg md:leading-7">
              How to get started
            </p>

            <h2 className="max-w-2xl text-2xl font-semibold leading-8 text-primary-900 max-lg:max-w-[32rem] max-sm:max-w-[20rem] sm:text-4xl md:text-[3.625rem] md:font-medium md:leading-[4rem]">
              It's simple to start using Settla
            </h2>
          </header>

          <GetStartedAccordion className="mb-6 mt-6 md:mb-10" />

          <ButtonLink link="/">Get Started now</ButtonLink>
        </div>
      </div>
    </section>
  );
};
export default GetStartedSection;
