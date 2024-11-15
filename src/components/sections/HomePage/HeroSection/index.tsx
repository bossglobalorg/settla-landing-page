import { ButtonLink } from "@/components";
import assetLib from "@/lib/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="content-grid bg-primary-900 -mt-[5.125rem] min-h-dvh overflow-hidden pt-[11.125rem] text-white">
      <div className="flex size-full flex-col items-center gap-10 text-center">
        <h1 className="max-w-[62rem] text-7xl font-semibold leading-[5rem]">
          Cross-Border Payments Built for African Diaspora and Minority-Owned
          Businesses.
        </h1>

        <p className="-mt-4 max-w-[35rem] text-xl leading-[1.75rem] text-gray-400">
          Connect to Global Opportunities. Send, Convert, and Grow with Secure,
          Fast, and Transparent Payments.
        </p>

        <ButtonLink link="/" className="w-fit">
          Get Started with Your First Zero-Fee Transfer.
        </ButtonLink>

        <figure className="relative mb-0 mt-auto min-h-[36.27313rem] w-full">
          <Image
            src={assetLib.homePageHeroImage}
            className="size-full object-cover object-center"
            alt="Hero Image displaying Settla dashboard on a laptop screen"
            fill
          />
        </figure>
      </div>
    </section>
  );
};
export default HeroSection;
