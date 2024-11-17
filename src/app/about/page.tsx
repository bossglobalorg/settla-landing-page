import { PageLayout } from "@/components";
import {
  BannerSection,
  CommitmentSection,
  CtaSection,
  IndustriesSection,
  JourneysSection,
  WhySettlaSection,
} from "@/components/sections/AboutPage";

const About = () => {
  return (
    <PageLayout>
      <BannerSection />
      <WhySettlaSection />
      <CommitmentSection />
      <IndustriesSection />
      <JourneysSection />
      <CtaSection />
    </PageLayout>
  );
};
export default About;
