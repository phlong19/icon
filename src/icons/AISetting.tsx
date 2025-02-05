import { IconProps } from "../model.ts";

export default function AISetting({
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
      <path
        d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
      <path
        d="M6.29554 2.32852C6.80999 0.557161 9.19001 0.557161 9.70446 2.32852C9.97829 3.27138 10.8976 3.83057 11.8095 3.609C13.5227 3.19275 14.7127 5.36442 13.5139 6.71951C12.8758 7.44081 12.8758 8.55919 13.5139 9.28049C14.7127 10.6356 13.5227 12.8073 11.8095 12.391C10.8976 12.1694 9.97829 12.7286 9.70446 13.6715C9.19001 15.4428 6.80999 15.4428 6.29554 13.6715C6.02171 12.7286 5.10245 12.1694 4.19054 12.391C2.47735 12.8073 1.28734 10.6356 2.48608 9.28049C3.12415 8.55919 3.12415 7.44081 2.48608 6.71951C1.28734 5.36442 2.47735 3.19275 4.19054 3.609C5.10245 3.83057 6.02171 3.27138 6.29554 2.32852Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
