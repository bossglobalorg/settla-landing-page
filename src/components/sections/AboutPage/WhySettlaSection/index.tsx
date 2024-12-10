import assetLib from "@/lib/assets";
import Image from "next/image";

const WhySettlaSection = () => {
  return (
    <section className="content-grid py-[3.75rem] lg:py-32">
      <div className="flex flex-col gap-10 md:flex-row lg:gap-24">
        {/* Left - Image */}
        <div className="relative w-full">
          <Image
            src={assetLib.whySettlaImages} // Ensure this resolves correctly
            alt="Images displaying Settla locations"
            className="rounded-lg object-cover"
            layout="responsive"
            width={800} // Adjust based on your image size
            height={600} // Maintain aspect ratio
            priority // Ensures this loads quickly
          />
        </div>

        {/* Right - Content */}
        <div className="flex w-full max-w-[30rem] flex-col justify-center gap-6">
          <h2 className="text-3xl font-medium text-primary-900 md:text-4xl lg:text-[3.625rem] lg:leading-[4rem]">
            Why Settla?
          </h2>
          <p className="font-inter text-lg text-[#4D4D4D]">
            Settla&apos;s story began with a simple but powerful question: How
            can we make financial systems work for everyone, especially those
            too often left out? We recognize the unique financial barriers
            African and Asian immigrant-owned businesses face, and we set out to
            build a platform that provides fair, easy, and secure access to
            global payments. Our mission is to give every business, no matter
            where it starts, the tools to move forward confidently.
          </p>
          <p className="text-lg text-[#4D4D4D]">
            This is Settla&apos;s story—a commitment to growth, opportunity, and
            connection that we share with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySettlaSection;
