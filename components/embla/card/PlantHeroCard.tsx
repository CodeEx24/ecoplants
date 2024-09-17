import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface PlantHeroCardType {
  src: StaticImageData;
  name: string;
  subname: string;
}

export default function PlantHeroCard({
  src,
  name,
  subname,
}: PlantHeroCardType) {
  return (
    <div className="embla__slide space-y-4">
      <div className="max-h-64 w-full">
        <Image
          src={src}
          width={300}
          height={300}
          alt="Plant"
          className="relative top-0 mx-auto h-64 w-64 object-cover object-center"
        />
      </div>

      <div className="relative space-y-4 px-6">
        <p>{subname}</p>
        <p className="text-2xl font-bold sm:text-4xl md:text-3xl">{name}</p>
        <Button variant="outline">Buy Now</Button>
      </div>
    </div>
  );
}
