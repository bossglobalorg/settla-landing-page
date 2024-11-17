import { FaqAccordion } from "./components";

const FaqSection = () => {
  return (
    <section className="content-grid">
      <div className="mx-auto w-full max-w-[63rem] space-y-8 py-14">
        <h2 className="text-2xl font-medium text-primary-900">
          Frequently asked questions
        </h2>

        <FaqAccordion />
      </div>
    </section>
  );
};
export default FaqSection;
