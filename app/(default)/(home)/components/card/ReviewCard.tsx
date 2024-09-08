import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image, { StaticImageData } from "next/image";
import React from "react";

import Rectangle1 from "@/app/assets/card/Rectangle1.webp";
import { StarFull } from "@/app/assets/svg/StarFull";
import { StarHalf } from "@/app/assets/svg/StarHalf";
import { StarEmpty } from "@/app/assets/svg/StarEmpty";

interface ReviewCardType {
  src: StaticImageData; // Update this type if needed
  name: string;
  starCount: number;
  description: string; // Update this type if needed
}

export default function ReviewCard({
  src,
  name,
  starCount,
  description,
}: ReviewCardType) {
  return (
    <div className="container mx-auto md:mt-4 relative w-full h-auto max-w-[350px]">
      <Image
        src={Rectangle1}
        className="top-0 absolute bg-no-repeat bg-contain z-0 object-fill opacity-80 w-full h-full "
        width={700}
        height={700}
        alt="Card"
      />
      <div className="relative z-10 w-full p-8 space-y-8">
        <div className="flex gap-4 pt-8">
          <Avatar className="size-12 shadow-lg">
            <AvatarImage src={src.src} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-3xl font-bold">{name}</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => {
                if (star <= Math.floor(starCount)) {
                  // Full star
                  return <StarFull className="text-yellow-400" key={star} />;
                } else if (
                  star === Math.floor(starCount) + 1 &&
                  starCount % 1 !== 0
                ) {
                  // Half star
                  return <StarHalf className="text-yellow-400" key={star} />;
                } else {
                  // Empty star
                  return <StarEmpty key={star} className="text-gray-400" />;
                }
              })}
            </div>
          </div>
        </div>
        <p className="pb-8">{description}</p>
      </div>
    </div>
  );
}
