import assetLib from "@/lib/assets";
import Image from "next/image";

const WhySettlaSection = () => {
  return (
    <section className="flex flex-col gap-[96px] px-6 py-16 md:flex-row lg:px-20">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
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
      <div className="flex flex-col justify-center md:w-1/2">
        <h2 className="text-3xl font-bold text-[#003D29] md:text-4xl">
          Why Settla?
        </h2>
        <p className="mt-6 text-lg text-[#4D4D4D]">
          Settla’s story began with a simple but powerful question: How can we
          make financial systems work for everyone, especially those too often
          left out? We recognize the unique financial barriers African and Asian
          immigrant-owned businesses face, and we set out to build a platform
          that provides fair, easy, and secure access to global payments.
        </p>
        <p className="mt-4 text-lg text-[#4D4D4D]">
          Our mission is to give every business, no matter where it starts, the
          tools to move forward confidently. This is Settla’s story—a commitment
          to growth, opportunity, and connection that we share with you.
        </p>
      </div>
    </section>
  );
};

export default WhySettlaSection;
