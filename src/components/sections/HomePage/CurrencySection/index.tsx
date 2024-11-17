import Image from "next/image";
import assetLib from "@/lib/assets";
import { ChevronDownSVG } from "@/components/svgs";
import { ButtonLink } from "@/components";
interface CurrencyCardProps {
  flag: string;
  symbol: string;
  currency: string;
  exchangeRate: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  flag,
  symbol,
  currency,
  exchangeRate,
}) => {
  return (
    <div
      key={symbol}
      className="flex w-full max-w-[32rem] items-center justify-start gap-5 rounded-2xl bg-white px-4 py-5 text-gray-600 sm:px-6 sm:py-7"
    >
      <figure className="relative size-8 overflow-hidden rounded-full bg-gray-50 sm:size-14">
        <Image src={flag} alt={currency} fill />
      </figure>

      <div>
        <p className="text-base font-medium leading-8 text-primary-900 sm:text-xl md:text-2xl">
          {symbol}
        </p>
        <p className="max-md:text-sm">{currency}</p>
      </div>

      <p className="ml-auto max-sm:text-sm">
        {exchangeRate} {symbol}
      </p>
    </div>
  );
};

const CurrencySection = () => {
  const list = [
    "One account, multiple currencies",
    "Regulated & secure",
    "1 business day for bank withdrawals",
  ];

  return (
    <section className="content-grid py-[3.75rem] md:py-32">
      <div className="flex items-center justify-between gap-20 max-lg:flex-col">
        <div className="w-full max-w-[30rem]">
          <div className="mb-6 flex items-center justify-start gap-4 md:mb-10">
            <p className="text-sm leading-7 text-gray-600 md:text-lg">
              Base currency:
            </p>

            <div className="flex items-center justify-start gap-2.5 rounded-[3rem] bg-gray-100 p-1.5">
              <figure className="relative size-6 rounded-full bg-gray-50 sm:size-7">
                <Image src={assetLib.usFlagIcon} alt="US flag Icon" fill />
              </figure>
              <p className="mr-2.5 font-semibold leading-6 text-primary-900 max-sm:text-sm">
                USD
              </p>
              <ChevronDownSVG />
            </div>
          </div>

          <h2 className="mb-6 text-2xl font-semibold leading-8 text-primary-900 max-sm:max-w-[18rem] sm:text-4xl md:text-[3.625rem] md:font-medium md:leading-[4rem]">
            Settle suppliers in any currency
          </h2>

          <div className="mb-6 space-y-6 leading-7 text-gray-600 sm:mb-10 sm:text-lg">
            <p>
              Hold over 35 currencies and exchange to the currency you need,
              when you need it.
            </p>

            <p>
              Expand to new markets with ease. No more barriers to paying
              partners, vendors, or suppliers around the globe.
            </p>

            <ul className="space-y-5">
              {list.map((item) => (
                <li key={item} className="flex items-start justify-start gap-3">
                  <figure className="relative size-7 rounded-full bg-accent-400">
                    <Image src={assetLib.checkIcon} alt="check icon" fill />
                  </figure>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <ButtonLink link="/">Learn more</ButtonLink>
        </div>

        <div className="flex w-full max-w-[40rem] flex-col items-center justify-center gap-4 rounded-2xl bg-gray-50 p-4 sm:p-6 md:gap-6 md:p-10 lg:rounded-[4rem] lg:p-16">
          {currencies.map((currency) => (
            <CurrencyCard key={currency.symbol} {...currency} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CurrencySection;

const currencies = [
  {
    flag: assetLib.canadaFlagIcon,
    symbol: "CAD",
    currency: "Canadian Dollar",
    exchangeRate: 1.5,
  },
  {
    flag: assetLib.europeFlagIcon,
    symbol: "EUR",
    currency: "Euro",
    exchangeRate: 1.2,
  },
  {
    flag: assetLib.ukFlagIcon,
    symbol: "GBP",
    currency: "Great Britain Pound",
    exchangeRate: 0.9,
  },
  {
    flag: assetLib.nigeriaFlagIcon,
    symbol: "NGN",
    currency: "Nigerian Naira",
    exchangeRate: 1675,
  },
  {
    flag: assetLib.saFlagIcon,
    symbol: "ZAR",
    currency: "South African Rand",
    exchangeRate: 320,
  },
];
