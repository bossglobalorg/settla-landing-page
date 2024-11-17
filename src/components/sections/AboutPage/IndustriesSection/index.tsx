import assetLib from "@/lib/assets";
import Image from "next/image";

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
    <section className="bg-white px-6 py-16 lg:px-20">
      {/* Heading */}
      <div className="text-center">
        <p className="text-lg text-primary-900">Industry we’ve served.</p>
        <h2 className="mt-2 font-bold text-[3xl] text-primary-900 md:text-[58px]">
          As your business grows, so does <br /> our global payment solutions.
        </h2>
      </div>

      {/* Industries Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <div key={index} className="overflow-hidden">
            <Image
              src={industry.image}
              alt={industry.name}
              width={384}
              height={260}
              className="rounded-lg object-contain"
            />
            <div className="py-4">
              <h3 className="text-lg font-medium text-gray-800">
                {industry.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
