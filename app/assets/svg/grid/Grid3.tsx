import { SVGProps } from "react";

export function Grid3(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="5" cy="19" r="2.5" fill="currentColor" />
      <circle cx="5" cy="12" r="2.5" fill="currentColor" />
      <circle cx="5" cy="5" r="2.5" fill="currentColor" />
      <circle cx="12" cy="19" r="2.5" fill="currentColor" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <circle cx="12" cy="5" r="2.5" fill="currentColor" />
      <circle cx="19" cy="19" r="2.5" fill="currentColor" />
      <circle cx="19" cy="12" r="2.5" fill="currentColor" />
      <circle cx="19" cy="5" r="2.5" fill="currentColor" />
    </svg>
  );
}
