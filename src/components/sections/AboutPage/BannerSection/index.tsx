import PageLayout from "@/components/layout";
import assetLib from "@/lib/assets";
import Image from "next/image";

const BannerSection = () => {
  return (
    // <PageLayout>
      <section className="content-grid -mt-[5.125rem] min-h-dvh gap-y-12 overflow-hidden bg-[#FFF7EB] px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#FFD66B]">
            About us
          </span>
          <h1 className="mt-4 text-[2rem] font-[500] leading-tight text-[#003D29] md:text-[4rem] md:leading-snug">
            Global Payments. Built for Community. Designed for Growth
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#4D4D4D] md:text-lg">
            From the heart of the African Diaspora to the world stage, Settla
            strengthens communities by fueling financial growth and shared
            success.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-lg md:h-[600px]">
          <Image
            src={assetLib.aboutBannerImage} // Ensure this resolves correctly
            width={1200}
            height={600}
            // className="size-full bg-top object-cover object-top"
            alt="Hero Image displaying Settla dashboard on a laptop screen"
            // fill
          />
        </div>
      </section>
    // </PageLayout>
  );
};

export default BannerSection;
