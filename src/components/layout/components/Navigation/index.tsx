"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SettlaLogoSVG, SettlaWordMarkSVG } from "@/components/svgs";
import { ButtonLink } from "@/components";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();
  const opaque = pathname === "/about";

  return (
    <header
      className={cn(
        "full-width content-grid fixed min-h-[5.125rem] w-full",
        opaque ? "bg-white" : "bg-primary-900",
      )}
    >
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 rounded">
          <SettlaLogoSVG fillColor={opaque ? "#004E43" : "white"} />
          <SettlaWordMarkSVG fillColor={opaque ? "#004E43" : "white"} />
        </div>

        <ul className="flex items-center justify-between gap-10">
          {navlinks.map(({ label, link }) => (
            <li
              key={label}
              className={cn(
                "text-[0.9375rem] capitalize",
                opaque ? "text-primary-900" : "text-white",
              )}
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="space-x-3">
          <ButtonLink
            variant={opaque ? "secondary-outline" : "primary-outline"}
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
