import { SVGProps } from "react";

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.403 3.903L2.99 5.318L6.171 8.5L2.99 11.682l1.414 1.414L9 8.5zM21 20v-2H3v2zm0-7v-2h-9v2zm0-7V4h-9v2z"
      />
    </svg>
  );
}
