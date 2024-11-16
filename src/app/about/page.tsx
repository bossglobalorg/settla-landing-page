import { PageLayout } from "@/components";
import {
  BannerSection,
  CommitmentSection,
  IndustriesSection,
  WhySettlaSection,
} from "@/components/sections/AboutPage";

const About = () => {
  return (
    <PageLayout>
      <BannerSection />
      <WhySettlaSection />
      <CommitmentSection />
      <IndustriesSection />
    </PageLayout>
  );
};
export default About;
