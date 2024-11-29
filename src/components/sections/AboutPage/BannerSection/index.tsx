import HighlightedText from "@/components/ui/HeaderCaption";
import assetLib from "@/lib/assets";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="content-grid relative flex min-h-dvh flex-col bg-[#FFF7EB] px-6 pt-[11.125rem] md:px-12 md:pt-24 lg:px-20">
      <div className="flex grow flex-col justify-between">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <Image
              src={assetLib.aboutUsIcon}
              alt="about us icon"
              width={"40"}
              height={40}
            />
            <HighlightedText text={"About Us"} variant={"primary"} />
          </div>
          <h1 className="mt-4 text-[2rem] font-[500] leading-tight text-[#003D29] md:text-[4rem] md:leading-snug">
            Global Payments. Built for <br /> Community. Designed for Growth
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#4D4D4D] md:text-lg">
            From the heart of the African Diaspora to the world stage, Settla
            strengthens <br /> communities by fueling financial growth and
            shared success.
          </p>
        </div>

        <div className="rounded-t-[32px] bg-white">
          <figure className="relative mt-auto aspect-[16/9] w-full overflow-hidden rounded-[32px]">
            <Image
              src={assetLib.aboutBannerImage}
              alt="Hero Image displaying Settla dashboard on a laptop screen"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
