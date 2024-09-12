import { SVGProps } from "react";

export function DotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 9.125a1.625 1.625 0 1 0 0-3.25a1.625 1.625 0 0 0 0 3.25m0 1a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25"
        clipRule="evenodd"
      />
    </svg>
  );
}
