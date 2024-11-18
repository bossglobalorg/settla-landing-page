import { PageLayout } from "@/components";
import {
  BrowseTopicsSection,
  CtaSection,
  FaqSection,
  SearchSection,
} from "@/components/sections/FaqPage";

const FaqPage = () => {
  return (
    <PageLayout>
      <SearchSection />
      <BrowseTopicsSection />
      <FaqSection />
      <CtaSection />
    </PageLayout>
  );
};
export default FaqPage;
