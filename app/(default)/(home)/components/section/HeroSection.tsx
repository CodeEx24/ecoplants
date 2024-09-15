"use client";
import { PhPlayCircleThin } from "@/app/assets/svg/Play";
import { Star } from "@/app/assets/svg/Star";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Rectangle1 from "@/app/assets/card/Rectangle1.webp";
import Rectangle2 from "@/app/assets/card/Rectangle2.webp";

import PlantHeroCarousel from "@/components/embla/carousel/PlantHeroCarousel";
import { heroPlantsData } from "@/constants/heroPlant";
import { EmblaOptionsType } from "embla-carousel";
import { Browse } from "@/app/assets/svg/Browse";

import Profile1 from "@/app/assets/userProfile/profile1.webp";

import { motion } from "framer-motion";
import { createFadeVariants, FADE_UP } from "@/lib/motion/motion";

const OPTIONS: EmblaOptionsType = {};

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col justify-between gap-4 pt-20 md:flex-row md:items-center lg:h-[100vh]">
      <div className="w-full md:w-1/2 lg:w-4/6">
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="w-full space-y-4 pt-24 md:pb-[5rem]"
        >
          <h1 className="w-full font-sans font-semibold">Breath Natural</h1>
          <p className="w-full md:pl-1 lg:pr-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 md:pl-1">
            <Button variant="default" className="flex items-center gap-2">
              <Browse />
              <p> Explore</p>
            </Button>
            <Link href="/" className="flex items-center gap-1 text-sm">
              <PhPlayCircleThin className="size-10" />
              Live Demo
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={createFadeVariants({ delay: 0.8 })}
          initial="hidden"
          animate="show"
          className="relative hidden h-auto w-full max-w-[350px] md:mt-4 lg:flex"
        >
          <Image
            src={Rectangle2}
            className="absolute top-0 z-0 h-full w-full bg-contain bg-no-repeat object-fill opacity-80"
            width={700}
            height={700}
            alt="Card"
          />
          <div className="relative z-10 w-full p-8">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={Profile1.src} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <p>Jane Smith</p>
                <div className="flex text-yellow-400">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={createFadeVariants({ delay: 0.4 })}
        initial="hidden"
        animate="show"
        className="container relative mx-auto mt-20 flex w-full flex-col items-center justify-center md:w-1/2 lg:w-2/6"
      >
        <div className="relative h-auto w-full max-w-[350px] md:mt-4 md:flex">
          <Image
            src={Rectangle1}
            className="absolute top-0 z-0 h-full w-full bg-contain bg-no-repeat object-fill pb-8 opacity-80"
            width={300}
            height={300}
            alt="Card"
            priority
          />
          <div className="relative z-10 w-full">
            <PlantHeroCarousel plants={heroPlantsData} options={OPTIONS} />
          </div>
        </div>
      </motion.div>

      {/* <div className="w-2/6"></div> */}
    </div>
  );
}
