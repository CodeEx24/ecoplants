import React from "react";
import { PartnerType } from "../carousel/LogoCarousel";
import Image from "next/image";

export default function Logo({ name, logo }: PartnerType) {
  return (
    <div className="embla__slide_logo">
      <div className="max-h-64 w-full">
        <Image
          src={logo.src}
          width={500}
          height={500}
          alt={name}
          className="relative top-0 mx-auto size-32 object-contain object-center opacity-100 hover:opacity-60"
        />
      </div>
    </div>
  );
}
