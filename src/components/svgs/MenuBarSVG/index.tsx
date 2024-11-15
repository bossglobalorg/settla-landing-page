import { SvgProps } from "@/types/svgs";

const MenuBarSVG: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="menu-bar-01">
        <path
          id="Icon"
          d="M2.66797 4.66699H13.3346M2.66797 11.3337H13.3346M2.66797 8.00033H13.3346"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export default MenuBarSVG;
