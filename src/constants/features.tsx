import assetLib from "@/lib/assets";
import { FeatureType } from "@/types/features";

export const features: FeatureType[] = [
  {
    title: "Equity & Inclusion",
    description:
      "We’re for communities that have been historically underserved in the financial space, creating opportunities that reflect our commitment to inclusion.",
    icon: assetLib.commitment1Icon,
  },
  {
    title: "Clarity & Trust",
    description:
      "Clear pricing, transparent policies, and no hidden fees. Every transaction is rooted in honesty and fairness.",
    icon: assetLib.commitment2Icon,
  },
  {
    title: "Reliability & Innovation",
    description:
      "Our technology evolves to keep your payments safe, simple, and fast, wherever you are in the world.",
    icon: assetLib.commitment3Icon,
  },
];
