import ButtonLink from "@/components/ui/ButtonLink";
import HighlightedText from "@/components/ui/HeaderCaption";

const CtaSection = () => {
  return (
    <section className="rounded-b-3xl bg-primary-900 px-6 py-20 text-white lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <HighlightedText text={"Ready to get started?"} variant={"secondary"} />
        <h1 className="mb-8 mt-6 text-4xl font-semibold md:text-6xl">
          Join Settla today and let's grow your business without limits.
        </h1>
        <ButtonLink link="/">Get Started now</ButtonLink>
      </div>
    </section>
  );
};

export default CtaSection;
