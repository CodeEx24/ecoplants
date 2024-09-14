import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FADE_UP } from "@/lib/motion/motion";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import SubscribeBackground from "@/app/assets/main/SubscribeBackground.webp";

export default function Subscription() {
  return (
    <motion.section
      variants={FADE_UP}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="base-padding my-20 space-y-20"
    >
      <div className="relative z-10 flex w-full flex-col justify-center space-y-8">
        <Image
          src={SubscribeBackground}
          className="absolute top-0 z-0 h-full w-full rounded-lg bg-no-repeat object-cover"
          width={700}
          height={700}
          alt="Card"
        />
        <div className="absolute top-[-2rem] z-0 h-full w-full rounded-lg bg-black opacity-60" />
        <div className="relative flex w-full flex-col items-center justify-center p-4 py-4 md:py-20">
          <div className="space-y-4 md:space-y-8">
            <h4 className="text-center text-2xl font-bold md:p-0 md:text-4xl">
              Get Latest Updates and Deals
            </h4>
            <div className="flex flex-col gap-4 md:flex-row md:bg-white">
              <Input
                className="h-9 w-full rounded-none bg-white text-sm text-black placeholder-white md:h-12 md:text-base"
                placeholder="Enter Your Email"
              />
              <Button
                className="h-9 rounded-none border-[1px] border-white md:h-12"
                variant="secondary"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </motion.section>
  );
}
