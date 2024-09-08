import Image from "next/image";
import React from "react";

import Rectangle3 from "@/app/assets/card/Rectangle3.webp";

import { Button } from "@/components/ui/button";
import { Shopping } from "@/app/assets/svg/Shopping";
import { PlantsDetailsType } from "@/interface/ISellingPlants";

export default function TrendPlants({
  isReverse = true,
  name,
  price,
  oldPrice,
  description,
  src,
}: PlantsDetailsType) {
  return (
    <div className="container relative mx-auto mb-10 h-full w-full max-w-[350px] md:max-w-full">
      <Image
        src={Rectangle3}
        className="absolute top-0 z-0 h-full w-full rounded-2xl bg-contain bg-no-repeat object-cover opacity-80 md:object-fill"
        width={1000}
        height={1000}
        alt="Card"
      />
      <div
        className={`relative z-10 mt-8 flex w-full flex-col items-center justify-center md:h-[350px] md:flex-row ${isReverse && "md:flex-row-reverse"}`}
      >
        <div className="w-full md:h-full md:w-1/2">
          <Image
            src={src}
            width={1000}
            height={1000}
            alt="Plant"
            className="relative top-[-2rem] w-full object-cover object-bottom px-4 md:top-[-8rem] md:h-[500px] md:max-h-[500px] md:object-contain md:px-0"
          />
        </div>
        <div
          className={`relative top-[-2rem] w-full space-y-2 px-6 md:static md:w-1/2 ${isReverse ? "md:pl-20" : "md:pr-20"}`}
        >
          <h3 className="text-2xl font-semibold lg:text-4xl">{name}</h3>
          <p className="">{description}</p>
          <div className="flex items-end gap-4">
            <p className="text-3xl">${price}</p>
            <p className="text-1xl mb-0.5 text-gray-500 line-through">
              ${oldPrice}
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="outline">Explore</Button>
            <Button variant="outline">
              <Shopping />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
