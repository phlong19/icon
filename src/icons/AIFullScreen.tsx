import { IconProps } from "../model.ts";

export default function AIFullScreen({
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
      <g clipPath="url(#clip0_457_10227)">
        <path
          d="M15 6L15 1M15 1L10 1M15 1L10 6M1 10L0.999999 15M0.999999 15L6 15M0.999999 15L6 10M6 1L1 0.999999M1 0.999999L1 6M1 0.999999L6 6M10 15L15 15M15 15L15 10M15 15L10 10"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10227">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
