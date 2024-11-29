import { ButtonLink } from "@/components";
import assetLib from "@/lib/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="content-grid -mt-[5.125rem] min-h-dvh gap-y-12 overflow-hidden bg-primary-900 pt-[11.125rem] text-white md:gap-y-16">
      <div className="flex size-full flex-col items-center gap-10 text-center">
        <h1 className="max-w-[20.5rem] text-[2rem] font-semibold leading-[2.4rem] sm:max-w-[40rem] sm:text-5xl sm:leading-[3.5rem] lg:max-w-[62rem] lg:text-7xl lg:leading-[5rem]">
          Cross-Border Payments Built for African Diaspora and Minority-Owned
          Businesses.
        </h1>

        <p className="-mt-4 max-w-[35rem] text-base leading-[1.75rem] text-gray-400 lg:text-xl">
          Connect to Global Opportunities. Send, Convert, and Grow with Secure,
          Fast, and Transparent Payments.
        </p>

        <ButtonLink link="/" className="w-fit max-md:px-4 max-md:py-2">
          Get Started{" "}
          <span className="max-md:hidden">
            {" "}
            with Your First Zero-Fee Transfer.
          </span>
        </ButtonLink>
      </div>

      <figure className="max-lg:full-width relative -mb-10 mt-auto min-h-[13.1875rem] w-full sm:-mb-8 md:min-h-[22rem] lg:min-h-[28rem] xl:min-h-[32rem]">
        <Image
          src={assetLib.homePageHeroImage}
          className="size-full bg-top object-cover object-top max-lg:-ml-8"
          alt="Hero Image displaying Settla dashboard on a laptop screen and mobile"
          fill
        />
      </figure>
    </section>
  );
};
export default HeroSection;
