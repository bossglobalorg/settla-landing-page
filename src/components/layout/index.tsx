import { cn } from "@/lib/utils";
import { ChildrenProp } from "@/types/children";
import { Navigation, Footer } from "./components";

interface PageLayoutProps extends ChildrenProp {
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn("content-grid min-h-dvh place-content-start", className)}
    >
      <Navigation />
      <main className="min-h-[calc(100dvh-4rem)] mt-[5.125rem]">{children}</main>
      <Footer />
    </div>
  );
};
export default PageLayout;
