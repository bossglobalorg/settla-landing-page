import Link from "next/link";
import { ButtonLink } from "@/components";
import { SettlaLogoSVG, SettlaWordMarkSVG } from "@/components/svgs";

const Navigation = () => {
  return (
    <header className="full-width content-grid fixed min-h-[5.125rem] w-full bg-white/30 backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 rounded">
          <SettlaLogoSVG />
          <SettlaWordMarkSVG />
        </div>

        <ul className="flex items-center justify-between gap-10">
          {navlinks.map(({ label, link }) => (
            <li key={label} className="text-[0.9375rem] capitalize text-white">
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="space-x-3">
          <ButtonLink
            variant="primary-outline"
            className="px-5 py-2.5 text-[0.9375rem]"
          >
            Log in
          </ButtonLink>
          <ButtonLink className="px-5 py-2.5 text-[0.9375rem]">
            Get Started
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;

const navlinks = [
  {
    label: "case studies",
    link: "",
  },
  {
    label: "about us",
    link: "",
  },
  {
    label: "help center",
    link: "",
  },
  {
    label: "contact us",
    link: "",
  },
];
