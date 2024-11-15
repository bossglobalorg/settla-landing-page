import { cn } from "@/lib/utils";
import { ChildrenProp } from "@/types/children";

interface ButtonLinkProps extends ChildrenProp {
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, className }) => {
  return <button className={cn("", className)}>{children}</button>;
};
export default ButtonLink;
