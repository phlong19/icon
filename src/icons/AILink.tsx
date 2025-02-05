import { IconProps } from "../model.ts";

export default function AILink({
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
      <g clipPath="url(#clip0_2326_67865)">
        <path
          d="M10.0001 4.66699H12.0001C12.4378 4.66699 12.8713 4.75321 13.2757 4.92073C13.6801 5.08824 14.0476 5.33377 14.3571 5.6433C14.6666 5.95283 14.9122 6.3203 15.0797 6.72471C15.2472 7.12913 15.3334 7.56259 15.3334 8.00033C15.3334 8.43806 15.2472 8.87152 15.0797 9.27594C14.9122 9.68036 14.6666 10.0478 14.3571 10.3573C14.0476 10.6669 13.6801 10.9124 13.2757 11.0799C12.8713 11.2474 12.4378 11.3337 12.0001 11.3337H10.0001M6.00008 11.3337H4.00008C3.56234 11.3337 3.12889 11.2474 2.72447 11.0799C2.32005 10.9124 1.95259 10.6669 1.64306 10.3573C1.01794 9.73223 0.666748 8.88438 0.666748 8.00033C0.666748 7.11627 1.01794 6.26842 1.64306 5.6433C2.26818 5.01818 3.11603 4.66699 4.00008 4.66699H6.00008"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33325 8H10.6666"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2326_67865">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
