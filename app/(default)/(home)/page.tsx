import HeroBg from "@/app/assets/main/herobg.webp";

import Image from "next/image";
import HeroSection from "./components/section/HeroSection";
import TrendPlantsSection from "./components/section/TrendPlantsSection";
import TopSellingSection from "./components/section/TopSellingSection";
import CustomerReviewSection from "./components/section/CustomerReviewSection";
import BestSellerSection from "./components/section/BestSellerSection";

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
          <HeroSection />
          <TrendPlantsSection />
        </div>
      </div>
      <div className="base-padding">
        <TopSellingSection />
        <CustomerReviewSection />
        <BestSellerSection />
      </div>
    </div>
  );
}
