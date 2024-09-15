import React, { Suspense, lazy } from "react";
import Image from "next/image";
import HeroBg from "@/app/assets/main/herobg.webp";

// Lazy load components
const HeroSection = lazy(() => import("./components/section/HeroSection"));
const TrendPlantsSection = lazy(
  () => import("./components/section/TrendPlantsSection"),
);
const TopSellingSection = lazy(
  () => import("./components/section/TopSellingSection"),
);
const CustomerReviewSection = lazy(
  () => import("./components/section/CustomerReviewSection"),
);
const BestSellerSection = lazy(
  () => import("./components/section/BestSellerSection"),
);

// Fallback component for loading state
const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <p>Loading...</p>
  </div>
);

export default function Home() {
  return (
    <div className="">
      <div className="relative min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0 h-full w-[100vw]">
          <Image
            src={HeroBg}
            className="h-full w-[100vw] object-cover opacity-80"
            width={1000}
            height={1000}
            alt="Background"
          />
        </div>

        {/* Content */}
        <div className="base-padding relative z-10">
          <Suspense fallback={<LoadingFallback />}>
            <HeroSection />
            <TrendPlantsSection />
          </Suspense>
        </div>
      </div>
      <div className="base-padding">
        <Suspense fallback={<LoadingFallback />}>
          <TopSellingSection />
          <CustomerReviewSection />
          <BestSellerSection />
        </Suspense>
      </div>
    </div>
  );
}
