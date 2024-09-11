import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Shopping } from "@/app/assets/svg/Shopping";

import Rectangle4 from "@/app/assets/card/Rectangle4.webp";

interface BestPlantCardType {
  src: StaticImageData;
  title: string;
  description: string;
}

export default function BestPlantCard({
  src,
  title,
  description,
}: BestPlantCardType) {
  return (
    <div className="embla__slide w-full space-y-4">
      <div className="container relative mx-auto w-full max-w-[350px] md:max-w-full md:py-4">
        <Image
          src={Rectangle4}
          className="absolute top-0 z-0 h-full w-full rounded-2xl bg-contain bg-no-repeat object-cover opacity-80 md:object-fill"
          width={500}
          height={500}
          alt="Card"
        />
        <div
          className={`relative z-10 flex w-full flex-col items-center justify-center py-8 md:max-h-[400px] md:flex-row`}
        >
          <div className="w-full md:h-full md:w-1/2">
            <Image
              src={src}
              width={500}
              height={500}
              alt="Plant"
              className="static left-0 h-[280px] object-contain object-bottom px-4 md:bottom-8 md:top-[unset] md:h-auto md:max-h-[400px] md:object-contain md:px-0 lg:bottom-12"
            />
          </div>
          <div
            className={`relative w-full space-y-4 px-6 md:static md:w-1/2 md:pr-20`}
          >
            <h3 className="text-2xl font-semibold lg:text-3xl">{title}</h3>
            <p>{description}</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Button variant="outline">Explore</Button>
                <Button variant="outline">
                  <Shopping />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
