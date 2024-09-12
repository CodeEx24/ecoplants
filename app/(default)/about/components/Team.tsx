"use client";

import React from "react";
import TeamDetails from "./TeamDetails";
import { teamDetailsData } from "@/constants/teamDetails";

import { motion } from "framer-motion";
import { FADE_UP, FADE_UP_STAGGER } from "@/lib/motion/motion";

export default function Team() {
  return (
    <section className="relative h-full">
      <div className="absolute h-full w-full bg-primary-background"></div>
      <div className="base-padding space-y-10 py-20 md:space-y-20">
        <motion.div
          variants={FADE_UP_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 space-y-8"
        >
          <motion.div
            variants={FADE_UP}
            className="flex items-center justify-center gap-4"
          >
            <hr className="w-12 rounded-sm border-2 border-secondary" />
            <h3 className="font-semibold italic">Our Team</h3>
            <hr className="w-12 rounded-sm border-2 border-secondary" />
          </motion.div>
          <motion.p variants={FADE_UP} className="text-center text-lg lg:px-60">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </motion.p>
        </motion.div>
        <motion.div
          variants={FADE_UP_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 grid h-full grid-cols-1 gap-16 md:grid-cols-4 md:gap-4 lg:h-72"
        >
          {teamDetailsData.map((person, index) => (
            <TeamDetails
              key={`${index}${person.name}`}
              image={person.image}
              name={person.name}
              position={person.position}
              isEnd={person.isEnd}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
