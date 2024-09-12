import React, { Suspense, lazy } from "react";

import AboutBackground from "@/app/assets/main/About.webp";

const LandingPageDefault = lazy(
  () => import("@/components/default/LandingPageDefault"),
);
// Lazy load components
const Story = lazy(() => import("./components/Story"));
const Team = lazy(() => import("./components/Team"));
const Partner = lazy(() => import("./components/Partner"));

export default function AboutPage() {
  return (
    <div>
      <div className="relative">
        <LandingPageDefault title="About Us" image={AboutBackground} />
      </div>
      <Suspense fallback={<div>Loading Story...</div>}>
        <Story />
      </Suspense>
      <Suspense fallback={<div>Loading Team...</div>}>
        <Team />
      </Suspense>
      <Suspense fallback={<div>Loading Partner...</div>}>
        <Partner />
      </Suspense>

      <div className="absolute inset-0 h-full w-[100vw]"></div>
    </div>
  );
}
