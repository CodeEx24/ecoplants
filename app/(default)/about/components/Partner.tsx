import LogoCarousel from "@/components/embla/carousel/LogoCarousel";
import { partnerData } from "@/constants/partnerData";
import React from "react";

export default function Partner() {
  return (
    <section className="relative h-auto">
      <div className="absolute h-full w-full bg-background"></div>
      <div className="base-padding relative z-10 space-y-20 py-4 md:py-20">
        <div className="bg-background">
          <LogoCarousel
            partner={partnerData}
            options={{ align: "start", loop: true }}
          />
        </div>
      </div>
    </section>
  );
}
