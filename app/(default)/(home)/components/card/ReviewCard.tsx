import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image, { StaticImageData } from "next/image";
import React from "react";

import Rectangle1 from "@/app/assets/card/Rectangle1.webp";
import { StarFull } from "@/app/assets/svg/StarFull";
import { StarHalf } from "@/app/assets/svg/StarHalf";
import { StarEmpty } from "@/app/assets/svg/StarEmpty";

import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/motion/motion";

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
    <motion.div
      variants={FADE_UP}
      className="container relative mx-auto h-full w-full max-w-[350px] sm:max-w-full md:mt-4"
    >
      <Image
        src={Rectangle1}
        className="absolute top-0 z-0 h-full w-full bg-contain bg-no-repeat object-fill opacity-80"
        width={700}
        height={700}
        alt="Card"
      />
      <div className="relative z-10 flex h-full w-full flex-col justify-between space-y-8 p-8">
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
    </motion.div>
  );
}
