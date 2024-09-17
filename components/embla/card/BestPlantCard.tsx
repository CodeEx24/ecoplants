import { Button } from "@/components/ui/button";
import React from "react";
import { Shopping } from "@/app/assets/svg/Shopping";

import { Browse } from "@/app/assets/svg/Browse";

interface BestPlantCardType {
  title: string;
  description: string;
}

export default function BestPlantCard({
  title,
  description,
}: BestPlantCardType) {
  return (
    <div className="embla__slide static w-full space-y-4">
      <div
        className={`static flex w-full flex-col justify-center space-y-4 px-6 py-4 md:h-full md:pr-20`}
      >
        <h3 className="text-2xl font-semibold lg:text-3xl">{title}</h3>
        <p className={"line-clamp-6 md:line-clamp-[8] lg:line-clamp-none"}>
          {description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button variant="default" className="flex items-center gap-2">
              <Shopping /> <p>Buy Now</p>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Browse /> <p>Explore</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
