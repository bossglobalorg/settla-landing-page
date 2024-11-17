"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components";
import {
  MenuBarSVG,
  SettlaLogoSVG,
  SettlaWordMarkSVG,
} from "@/components/svgs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const opaque = ["/about", "/faq"].includes(pathname);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={cn(
        "full-width content-grid fixed top-0 z-50 min-h-[5.125rem] w-full",
        opaque
          ? "bg-gray-25 border-b border-gray-200 md:bg-white"
          : "bg-primary-900",
      )}
    >
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 rounded">
          <SettlaLogoSVG
            className="max-lg:w-[18px]"
            fillColor={opaque ? "#004E43" : "white"}
          />
          <SettlaWordMarkSVG
            className="max-lg:w-[68px]"
            fillColor={opaque ? "#004E43" : "white"}
          />
        </div>

        <ul className="flex items-center justify-between gap-10 max-lg:hidden">
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

        <div className="space-x-3 max-lg:hidden">
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

        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="rounded-lg border border-[#A8D246] p-2 shadow-sm lg:hidden"
        >
          <MenuBarSVG strokeColor={opaque ? "#00332C" : "white"} />
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {openMenu && (
        <nav className="full-width absolute top-full z-20 min-h-[calc(100dch-5.125rem)] w-full space-y-10 rounded-bl-3xl bg-primary-900/70 pb-20 pt-10 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col items-center justify-between gap-8">
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

          <div className="mx-auto w-fit space-x-3">
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
      )}
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
