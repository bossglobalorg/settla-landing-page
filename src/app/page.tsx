import { PageLayout } from "@/components";
import {
  CtaSection,
  CurrencySection,
  FaqSection,
  FeaturedSection,
  GetStartedSection,
  HeroSection,
  RealTimeUpdateSection,
  RegisterNowSection,
  TestimonialSection,
  WhyChooseSection,
} from "@/components/sections/HomePage";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturedSection />
      <WhyChooseSection />
      <CurrencySection />
      <TestimonialSection />
      <GetStartedSection />
      <RegisterNowSection />
      <FaqSection />
      <RealTimeUpdateSection />
      <CtaSection />
    </PageLayout>
  );
}
