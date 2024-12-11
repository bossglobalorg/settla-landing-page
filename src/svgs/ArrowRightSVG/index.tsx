import { SvgProps } from "@/types/svgs";

const ArrowRightSVG: React.FC<SvgProps> = ({ strokeColor = "#00332C" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-right">
        <path
          id="Icon"
          d="M4.58203 10.9999H17.4154M17.4154 10.9999L10.9987 4.58325M17.4154 10.9999L10.9987 17.4166"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export default ArrowRightSVG;
