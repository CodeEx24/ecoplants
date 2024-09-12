"use client";
import React from "react";

import { motion } from "framer-motion";
import { FADE_UP, FADE_UP_STAGGER } from "@/lib/motion/motion";
import { servicesData } from "@/constants/servicesData";
import Image from "next/image";

import StoryImage from "@/app/assets/section/OurStory.webp";

export default function OurStoryDetails() {
  return (
    <div className="grid grid-cols-1 px-4 lg:grid-cols-2 lg:px-0">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={StoryImage.src}
          className="h-full w-full rounded-lg object-cover"
          width={500}
          height={500}
          alt="Background"
        />
      </motion.div>
      <motion.div
        variants={FADE_UP_STAGGER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 space-y-4 md:p-12"
      >
        <motion.h2
          variants={FADE_UP}
          className="mt-4 text-2xl font-bold md:text-5xl"
        >
          Our Story
        </motion.h2>
        <motion.p variants={FADE_UP} className="lg:text-lg">
          At Ecoplants, our journey began with a vision to transform the way
          people connect with nature and to champion a more sustainable
          lifestyle.
          <br /> <br />
          We are passionate about offering a diverse range of plants that not
          only enhance your living space but also contribute positively to the
          environment. Our commitment to sustainability is at the heart of
          everything we do.
        </motion.p>
        <motion.div
          variants={FADE_UP_STAGGER}
          className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-1"
        >
          {servicesData.map((item, index) => {
            return (
              <motion.div
                variants={FADE_UP}
                key={`${index}${item.title}`}
                className="flex items-center justify-center space-x-4 rounded-lg border-2 p-4"
              >
                <div className="text-secondary-foreground">{item.src}</div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
