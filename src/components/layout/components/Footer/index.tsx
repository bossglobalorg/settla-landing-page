import Link from "next/link";
import {
  FacebookIconSVG,
  InstagramIconSVG,
  SettlaLogoSVG,
  SettlaWordMarkSVG,
  XIconSVG,
  YoutubeIconSVG,
} from "@/components/svgs";

const Footer = () => {
  return (
    <footer className="content-grid bg-gray-50 py-[3.75rem] md:pb-16 md:pt-32">
      <div>
        <div className="flex items-start justify-between gap-[3.75rem] max-md:flex-col md:gap-16">
          <div className="flex items-center justify-start gap-4 rounded">
            <SettlaLogoSVG className="max-sm:w-[18px]" fillColor={"#004E43"} />
            <SettlaWordMarkSVG
              className="max-sm:w-[68px]"
              fillColor={"#004E43"}
            />
          </div>

          <nav className="flex w-full max-w-xl items-start justify-between gap-8 md:justify-start">
            {footerNav.map((category, index) => (
              <div key={index} className="md:min-w-64">
                <h3 className="mb-6 font-semibold leading-6 text-primary-900">
                  {category.title}
                </h3>
                <ul className="space-y-4 leading-6 text-gray-600 max-md:text-sm">
                  {category.links.map(({ title, link }, index) => (
                    <li key={index}>
                      <Link href={link}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className="my-[3.75rem] stroke-gray-200 md:mb-10 md:mt-24" />

        <div className="flex items-center justify-between gap-[3.75rem] max-lg:flex-col-reverse">
          <p className="text-sm leading-5 text-gray-600">
            Copyright © Settla 2024. Powered by BOSS Global
          </p>

          <div className="flex items-center justify-between gap-6">
            {socials.map(({ title, Icon }) => (
              <figure
                key={title}
                className="relative flex size-12 items-center justify-center rounded-full border border-primary-900 p-4"
              >
                <Icon />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const footerNav = [
  {
    title: "Company",
    links: [
      { title: "About us", link: "/about" },
      { title: "Blog", link: "/" },
      { title: "Contact Us", link: "/contact-us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Help centre and FAQs", link: "/faq" },
      { title: "Terms and privacy", link: "/" },
    ],
  },
];

const socials = [
  {
    title: "facebook",
    Icon: FacebookIconSVG,
  },
  {
    title: "x",
    Icon: XIconSVG,
  },
  {
    title: "instagram",
    Icon: InstagramIconSVG,
  },
  {
    title: "youtube",
    Icon: YoutubeIconSVG,
  },
];
