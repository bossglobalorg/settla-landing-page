import { cn } from "@/lib/utils";
import { ChildrenProp } from "@/types/children";
import { Navigation, Footer } from "./components";
import { CtaSection } from "@/components";

interface PageLayoutProps extends ChildrenProp {
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("", className)}>
      <Navigation />
      <main className="mt-[5.125rem] min-h-[calc(100dvh-4rem)]">
        {children}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};
export default PageLayout;
