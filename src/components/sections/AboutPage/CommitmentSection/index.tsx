import { features } from "@/constants/features";
import { FeatureType } from "@/types/features";

const FeatureCard: React.FC<FeatureType> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start font-inter">
      <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-teal-100">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-primary-900 lg:text-2xl lg:leading-8">
        {title}
      </h3>
      <p className="mt-3 text-pretty text-gray-600">{description}</p>
    </div>
  );
};

const CommitmentSection = () => {
  return (
    <section className="full-width content-grid bg-gray-50 py-[3.75rem] lg:space-y-24 lg:py-32">
      <header className="space-y-4 lg:space-y-6">
        <h2 className="text-3xl font-medium text-primary-900 md:text-4xl lg:text-[3.625rem]">
          Our Commitment to You
        </h2>
        <p className="text-xl text-gray-600">
          Fast, flexible and secure international money transfers across the
          world.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default CommitmentSection;
