"use client";
import React from "react";

import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/motion/motion";
import Image, { StaticImageData } from "next/image";
import BackgroundImage from "@/app/assets/main/Background.webp";

interface LandingPageType {
  title: string;
  image?: StaticImageData;
}

export default function LandingPageDefault({
  title,
  image = BackgroundImage,
}: LandingPageType) {
  return (
    <>
      <div className="relative h-[50vh] w-[100vw]">
        <Image
          src={image.src}
          className="h-full w-[100vw] object-cover"
          width={500}
          height={500}
          alt="Background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 h-full bg-black opacity-60"></div>
      </div>
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        animate="show"
        className="absolute top-0 z-10 flex h-[55vh] w-[100vw] items-center justify-center"
      >
        <h3 className="z-20 font-bold">{title}</h3>
      </motion.div>
    </>
  );
}
