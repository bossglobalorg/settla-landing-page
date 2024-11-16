import { SvgProps } from "@/types/svgs";

const ChevronDownSVG: React.FC<SvgProps> = ({
  className,
  strokeColor = "#00332C",
}) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-down">
        <path
          id="Icon"
          d="M4.5 7.25L9 11.75L13.5 7.25"
          stroke={strokeColor}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export default ChevronDownSVG;
