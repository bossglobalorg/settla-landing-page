"use client";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { ChildrenProp } from "@/types/children";
import { ArrowRightSVG } from "@/components/svgs";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends ChildrenProp {
  link?: string;
  className?: string;
  variant?: "primary" | "primary-outline" | "secondary" | "secondary-outline";
  onClick?: () => void;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center py-4 px-8 active:scale-[0.99] whitespace-nowrap rounded-full text-sm  font-semibold leading-5 ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:text-lg sm:leading-[1.75rem] ",
  {
    variants: {
      variant: {
        primary: "bg-accent-400 text-primary-900 hover:bg-accent-400/90",
        "primary-outline":
          "bg-transparent border border-accent-400 text-accent-400 hover:bg-accent-400/5 hover:text-accent-400",
        secondary: "bg-primary-900 text-accent-400 hover:bg-primary-900/90",
        "secondary-outline":
          "bg-transparent border border-primary-900 text-primary-900 hover:bg-primary-900/5 hover:text-primary-900",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const ButtonLink: React.FC<ButtonLinkProps> = ({
  link,
  children,
  className,
  variant,
  onClick,
}) => {
  if (link) {
    return (
      <Link
        href={link}
        className={cn(buttonVariants({ variant, className }), "gap-2.5")}
      >
        {children} <ArrowRightSVG />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant, className }))}
    >
      {children}
    </button>
  );
};
export default ButtonLink;
