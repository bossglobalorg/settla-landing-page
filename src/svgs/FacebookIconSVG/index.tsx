import { SvgProps } from "@/types/svgs";

const FacebookIconSVG: React.FC<SvgProps> = ({
  className,
  fillColor = "#00332C",
}) => {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Facebook" clipPath="url(#clip0_3022_9233)">
        <path
          id="Vector"
          d="M6.98987 2.91041H8.35715V0.487549C7.69515 0.415432 7.02999 0.379828 6.36442 0.380882C4.38624 0.380882 3.03351 1.64564 3.03351 3.96183V5.95803H0.800781V8.67038H3.03351V15.619H5.70987V8.67038H7.93533L8.26987 5.95803H5.70987V4.2285C5.70987 3.4285 5.91351 2.91041 6.98987 2.91041Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_3022_9233">
          <rect
            width="8"
            height="16"
            fill="white"
            transform="translate(0.800781)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIconSVG;
