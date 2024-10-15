import { IconProps } from "../model.ts";

export default function AIUpload({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 2,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 16 16",
}: IconProps) {
  return (
    <svg
      className={className}
      style={{ ...style, height: size, width: size }}
      aria-label={ariaLabel}
      fill={fill}
      fillOpacity={fillOpacity}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      <g clipPath="url(#clip0_457_10223)">
        <path
          d="M1 12V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V12M8 11V1M8 1L4 4M8 1L12 4"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10223">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
