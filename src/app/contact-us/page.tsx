import { PageLayout } from "@/components";
import {
  ContactSection,
  LocationSection,
} from "@/components/sections/ContactPage";
import { CtaSection } from "@/components/sections/ContactPage";

const About = () => {
  return (
    <PageLayout>
      <ContactSection />
      <LocationSection />
      <CtaSection />
    </PageLayout>
  );
};
export default About;
