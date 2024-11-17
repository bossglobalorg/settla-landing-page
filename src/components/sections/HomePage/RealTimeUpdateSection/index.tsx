import Image from "next/image";
import assetLib from "@/lib/assets";

const RealTimeUpdateSection = () => {
  const list = [
    "Check via payment dashboard.",
    "SMS updates.",
    "Email notifications.",
  ];

  return (
    <section className="content-grid bg-primary-900 py-[3.75rem] text-white max-lg:pb-28">
      <div className="flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-6">
        <figure className="relative min-h-[30rem] w-full max-w-[40rem] px-6 max-lg:ml-20 max-md:ml-10 sm:min-h-[40rem] md:min-h-[46.625rem]">
          <Image
            src={assetLib.realTimeUpdatesImage}
            alt="notifciation images"
            className="max-lg:-rotate-[10deg]"
            fill
          />
        </figure>

        <div className="w-full max-w-[30rem]">
          <h2 className="md:text-h2 text-2xl font-semibold leading-8 max-md:max-w-96 md:font-medium md:leading-[4rem] md:tracking-[-0.125rem]">
            Get <span className="text-accent-400">real-time updates</span> on
            any transfer you send
          </h2>

          <p className="py-6 leading-7 text-gray-50 md:my-8 md:text-lg">
            Track the status of your online transfers in real-time, via website
            or directly in the dashboard, so you'll always know where your money
            is.
          </p>

          <ul className="space-y-5">
            {list.map((item) => (
              <li
                key={item}
                className="flex items-start justify-start gap-5 md:text-lg"
              >
                <figure className="relative size-7 rounded-full bg-accent-400">
                  <Image src={assetLib.checkIcon} alt="check icon" fill />
                </figure>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default RealTimeUpdateSection;
