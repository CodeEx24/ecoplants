"use client";

import React, { lazy, Suspense, useCallback } from "react";
import ShopBackground from "@/app/assets/main/ShopBackground.webp";

// Lazy load components
const LandingPageDefault = lazy(
  () => import("@/components/default/LandingPageDefault"),
);
const FilterSheet = lazy(
  () => import("@/components/default/others/FilterSheet"),
);
const PlantFilterSidebar = lazy(
  () => import("@/components/default/others/PlantFilter"),
);
const ProductGrid = lazy(() => import("./components/ProductGrid"));
const ProductOption = lazy(() => import("./components/ProductOption"));
const ProductGridNavigation = lazy(
  () => import("@/components/default/others/ProductGridNavigation"),
);

const LoadingFallback = () => (
  <div>Loading...</div> // Customize this fallback UI as needed
);

export default function AboutPage() {
  const onPageChange = useCallback((page: number) => {
    if (page < 1) {
      console.error("Invalid page number:", page);
      return;
    }
  }, []);

  return (
    <div>
      <div className="relative">
        <Suspense fallback={<LoadingFallback />}>
          <LandingPageDefault title="Shop" image={ShopBackground} />
        </Suspense>
      </div>
      <section className="base-padding my-20 space-y-20">
        <div className="relative z-10 flex flex-col space-y-8 sm:space-y-0 md:flex-row">
          <div className="hidden max-w-[220px] rounded-lg border-[#3D4F33] bg-[#2C3A24] p-4 lg:flex">
            <Suspense fallback={<LoadingFallback />}>
              <PlantFilterSidebar />
            </Suspense>
          </div>
          <div className="w-full space-y-2 rounded-lg border-[#3D4F33] bg-[#2C3A24] px-4 py-4 md:ml-2 md:flex md:flex-col">
            <Suspense fallback={<LoadingFallback />}>
              <FilterSheet />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ProductOption />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ProductGrid />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ProductGridNavigation
                currentPage={1}
                totalPages={3}
                onPageChange={onPageChange}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <div className="absolute inset-0 h-full w-[100vw]"></div>
    </div>
  );
}
