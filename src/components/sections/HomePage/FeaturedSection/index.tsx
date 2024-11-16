import Image from "next/image";
import assetLib from "@/lib/assets";

const FeaturedSection = () => {
  return (
    <section className="relative z-20 bg-primary-900">
      <div className="flex justify-between gap-8 rounded-tr-[2rem] bg-white px-10 pb-8 pt-14 max-lg:flex-col lg:items-center lg:rounded-t-[2rem]">
        <p className="whitespace-nowrap leading-6 text-gray-600">
          As featured on:
        </p>

        <div className="flex w-full flex-wrap items-center gap-8 lg:justify-between">
          <figure className="relative h-[1.625rem] w-[7.5rem] md:h-[1.75rem] md:w-[7.85rem]">
            <Image src={assetLib.techcabalLogo} alt="techcabal logo" fill />
          </figure>

          <figure className="relative h-[1.25rem] w-[6.25rem] md:h-[1.5rem] md:w-[7.105rem]">
            <Image src={assetLib.techpointLogo} alt="Techpoint logo" fill />
          </figure>

          <figure className="relative h-[1.25rem] w-[6.25rem] md:h-[1.5rem] md:w-[8.75rem]">
            <Image src={assetLib.techcrunchLogo} alt="TechCrunch logo" fill />
          </figure>

          <figure className="relative h-[1.25rem] w-[6.25rem] md:h-[1.25rem] md:w-[4.875rem]">
            <Image src={assetLib.forbesLogo} alt="Forbes logo" fill />
          </figure>

          <figure className="relative h-[1.25rem] w-[6.25rem] md:h-[1.25rem] md:w-[7.25rem]">
            <Image src={assetLib.techradarLogo} alt="techradar logo" fill />
          </figure>
        </div>
      </div>
    </section>
  );
};
export default FeaturedSection;
