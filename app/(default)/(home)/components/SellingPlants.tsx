import Image from "next/image";
import React from "react";

import Rectangle1 from "@/app/assets/card/Rectangle1.webp";

import { Button } from "@/components/ui/button";
import { Shopping } from "@/app/assets/svg/Shopping";
import { PlantsDetailsType } from "@/interface/ISellingPlants";
import { FADE_UP } from "@/lib/motion/motion";

import { motion } from "framer-motion";

export default function SellingPlants({
  name,
  price,
  oldPrice,
  description,
  src,
}: PlantsDetailsType) {
  return (
    <motion.div
      variants={FADE_UP}
      className="flex h-full w-full items-center justify-center"
    >
      <div className="relative h-full w-full max-w-[330px] sm:max-w-full">
        <Image
          src={Rectangle1}
          className="absolute top-0 z-0 h-full w-full bg-contain bg-no-repeat object-fill pb-8 opacity-80"
          width={500}
          height={500}
          alt="Card"
        />
        <div className="relative z-10 w-full md:mt-8 lg:mt-4">
          <Image
            src={src}
            width={500}
            height={500}
            alt="Plant"
            className="relative top-[-5rem] h-[200px] w-full object-contain md:top-[-6rem] md:h-[300px] xl:h-[400px] xl:object-cover"
          />
          <div className="relative top-[-4rem] space-y-1 px-10 lg:top-[-5rem]">
            <p className="line-clamp-1 text-2xl font-bold lg:text-3xl">
              {name}
            </p>
            <div className="flex justify-between gap-4">
              <div className="flex items-end gap-4">
                <p className="text-2xl">${price.toLocaleString()}</p>
                <p className="text-1xl mb-0.5 text-gray-500 line-through">
                  ${oldPrice.toLocaleString()}
                </p>
              </div>

              <Button variant="outline">
                <Shopping />
              </Button>
            </div>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
