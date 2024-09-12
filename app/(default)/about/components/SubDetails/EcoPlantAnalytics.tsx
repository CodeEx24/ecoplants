"use client";
import AnimatedCounter from "@/components/default/others/AnimatedCounter";
import { counterData } from "@/constants/counterData";
import { FADE_UP, FADE_UP_STAGGER } from "@/lib/motion/motion";
import React from "react";

import { motion } from "framer-motion";

export default function EcoPlantAnalytics() {
  return (
    <div className="relative z-10 flex flex-col items-center space-y-12 pt-10">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex w-full justify-center"
      >
        <video
          src="https://videos.pexels.com/video-files/3974908/3974908-hd_1920_1080_25fps.mp4"
          controls
          autoPlay
          className="w-full rounded-md bg-white/90 p-2 shadow-lg md:w-4/6"
        />
      </motion.div>

      <div className="space-y-10">
        <motion.h2
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="PX-0 text-center text-2xl italic md:px-16 md:text-4xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
          <span className="text-secondary-foreground">eiusmod tempor</span>{" "}
          incididunt.
        </motion.h2>

        <motion.div
          variants={FADE_UP_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x-2"
        >
          {counterData.map((item, index) => {
            return (
              <motion.div
                variants={FADE_UP}
                className="space-y-4md:space-y-1 flex flex-col items-center"
                key={`${index}${item.name}`}
              >
                <div className="flex">
                  <AnimatedCounter
                    from={0}
                    to={item.value}
                    className="text-4xl font-bold text-secondary-foreground md:text-5xl"
                    duration={item.duration}
                  />
                  <p className="text-4xl font-bold text-secondary-foreground md:text-5xl">
                    +
                  </p>
                </div>

                <p className="text-2xl">{item.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
