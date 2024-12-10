import Image from "next/image";
import assetLib from "@/lib/assets";

const IndustriesSection = () => {
  const industries = [
    { name: "Accountancy", image: assetLib.accountancyImage },
    { name: "Auto Dealerships", image: assetLib.autoImage },
    { name: "E-Commerce", image: assetLib.ecommerceImage },
    { name: "Education", image: assetLib.educationImage },
    { name: "Finance", image: assetLib.financeImage },
    { name: "Healthcare", image: assetLib.healthCareImage },
    { name: "Manufacturing", image: assetLib.manufacturingImage },
    { name: "Real Estate", image: assetLib.realEstateImage },
    { name: "Travel", image: assetLib.travelImage },
  ];

  return (
    <section className="content-grid space-y-6 bg-white py-[3.75rem] md:space-y-16 lg:py-32">
      {/* Heading */}
      <div className="space-y-4 md:text-center lg:space-y-6">
        <p className="text-lg font-medium leading-7 text-primary-900 underline decoration-accent-400 decoration-2 underline-offset-4 md:text-lg md:leading-7">
          Industry we've served
        </p>

        <h2 className="text-2xl font-semibold leading-8 text-primary-900 md:text-[3.625rem] lg:font-medium lg:leading-[4rem]">
          As your business grows, so does <br /> our global payment solutions.
        </h2>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <div key={index} className="space-y-4">
            <figure className="relative aspect-square overflow-hidden rounded-2xl md:aspect-[96/65]">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover"
              />
            </figure>

            <h3 className="text-lg font-medium text-gray-800">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
