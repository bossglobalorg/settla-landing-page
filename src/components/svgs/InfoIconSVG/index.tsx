import { SvgProps } from "@/types/svgs";

const InfoIconSVG: React.FC<SvgProps> = ({
  className,
  strokeColor = "#50B8AA",
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="info" clipPath="url(#clip0_841_10869)">
        <path
          id="Icon"
          d="M6.9974 9.33268V6.99935M6.9974 4.66602H7.00323M12.8307 6.99935C12.8307 10.221 10.2191 12.8327 6.9974 12.8327C3.77573 12.8327 1.16406 10.221 1.16406 6.99935C1.16406 3.77769 3.77573 1.16602 6.9974 1.16602C10.2191 1.16602 12.8307 3.77769 12.8307 6.99935Z"
          stroke={strokeColor}
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_841_10869">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default InfoIconSVG;
