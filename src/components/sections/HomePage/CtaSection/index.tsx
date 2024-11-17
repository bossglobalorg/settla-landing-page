import ButtonLink from "@/components/ui/ButtonLink";

const CtaSection = () => {
  return (
    <section className="content-grid rounded-b-[0.9375rem] bg-primary-900 py-[3.75rem] text-white md:rounded-b-[2rem] md:py-24">
      <div className="mx-auto flex w-full max-w-80 flex-col items-center justify-center gap-6 text-center sm:max-w-3xl">
        <p className="text-base font-medium leading-5 text-accent-400 underline decoration-primary-400 decoration-2 underline-offset-4 md:mb-5 md:text-lg md:leading-7">
          Ready to get started?
        </p>

        <h2 className="md:text-h2 text-4xl font-semibold leading-[2.75rem] sm:mb-4 sm:text-5xl sm:leading-[3.5rem] md:font-medium md:leading-[4rem] md:tracking-[-0.125rem]">
          Send, Receive & Convert Funds with Ease for your business
        </h2>

        <ButtonLink link="/">Get Started now</ButtonLink>
      </div>
    </section>
  );
};
export default CtaSection;
