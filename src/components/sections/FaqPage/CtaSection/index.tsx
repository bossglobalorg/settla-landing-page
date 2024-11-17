import ButtonLink from "@/components/ui/ButtonLink";

const CtaSection = () => {
  return (
    <section className="content-grid md:pb-32">
      <div className="max-md:full-width mx-auto flex w-full max-w-[63rem] items-center justify-between gap-6 rounded-2xl bg-primary-900 p-12 text-white max-md:flex-col max-md:rounded-t-none">
        <div className="space-y-3 max-md:max-w-80 max-md:text-center">
          <h2 className="text-4xl font-semibold leading-[2.75rem] md:font-medium">
            Can't find your answer?
          </h2>
          <p className="text-pretty text-lg text-gray-50">
            Our customer support team is here to help.
          </p>
        </div>

        <ButtonLink link="/contact-us">Contact us</ButtonLink>
      </div>
    </section>
  );
};
export default CtaSection;
