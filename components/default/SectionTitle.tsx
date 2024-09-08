import Image from "next/image";
import React from "react";

import Vector1 from "@/app/assets/card/Vector1.webp";
import Vector2 from "@/app/assets/card/Vector2.webp";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative flex w-full justify-center">
      <Image
        src={Vector2.src}
        alt="Vector1"
        height={100}
        width={100}
        className="hidden md:flex md:relative left-8 size-16 mt-4"
      />
      <h3 className="text-3xl md:text-4xl font-semibold text-center mt-4">
        {title}
      </h3>
      <Image
        src={Vector1.src}
        alt="Vector1"
        height={100}
        width={100}
        className="hidden md:flex md:relative  right-8 size-16  mb-4"
      />
    </div>
  );
}
