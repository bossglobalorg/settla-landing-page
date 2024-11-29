import Image from "next/image";
import { ButtonLink } from "@/components";
import { InfoIconSVG } from "@/components/svgs";
import assetLib from "@/lib/assets";

const RegisterNowSection = () => {
  return (
    <section className="content-grid pb-[3.75rem] lg:pb-32">
      <div className="flex items-center justify-between overflow-hidden rounded-[1.125rem] bg-primary-900 py-4 px-5 text-white max-lg:flex-col sm:p-8 md:rounded-[2rem] md:px-16 md:py-12 lg:gap-8">
        <div className="max-w-[33rem]">
          <h2 className="mb-4 text-[2.75rem] font-semibold leading-[3.125rem] md:text-h2 md:font-medium md:leading-[4rem] md:tracking-[-0.125rem]">
            Get <span className="text-accent-400">zero-fee</span>{" "}
            <br className="md:hidden" /> on your first{" "}
            <br className="md:hidden" />
            transfer
          </h2>

          <p className="text-lg font-normal leading-7 text-gray-50">
            We recognize growth, and we reward it. As your transactions scale,
            we offer discount to help you keep more of what you earn as you
            expand
          </p>

          <div className="my-6 flex items-center justify-start gap-2 text-xs leading-[1.125rem] text-primary-400 md:my-10">
            <InfoIconSVG />
            <p>See Terms for Details.</p>
          </div>

          <ButtonLink link="/">Register Now</ButtonLink>
        </div>

        <figure className="relative min-h-96 w-full max-md:-mr-28 md:min-h-[30rem] md:max-w-[33rem]">
          <Image
            src={assetLib.registerNowImage}
            alt="0%"
            fill
            className="bg-bottom object-cover max-md:-scale-x-100 md:mt-4"
          />
        </figure>
      </div>
    </section>
  );
};
export default RegisterNowSection;
