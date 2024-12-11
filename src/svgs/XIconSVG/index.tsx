import { SvgProps } from "@/types/svgs";

const XIconSVG: React.FC<SvgProps> = ({ className, fillColor = "#00332C" }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="X" clipPath="url(#clip0_3022_9237)">
        <g id="Group">
          <path
            id="Vector"
            d="M13.061 1.5H15.2664L10.4484 7.00667L16.1164 14.5H11.6784L8.20238 9.95533L4.22504 14.5H2.01838L7.17171 8.61L1.73438 1.5H6.28504L9.42704 5.654L13.061 1.5ZM12.287 13.18H13.509L5.62104 2.75067H4.30971L12.287 13.18Z"
            fill={fillColor}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3022_9237">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.898438)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default XIconSVG;
