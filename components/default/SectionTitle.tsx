"use client";
import Image from "next/image";
import React from "react";

import Vector1 from "@/app/assets/card/Vector1.webp";
import Vector2 from "@/app/assets/card/Vector2.webp";

import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/motion/motion";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      viewport={{ once: true, amount: 0 }}
      initial="hidden"
      whileInView="show"
      variants={FADE_UP}
      className="relative flex w-full justify-center"
    >
      <Image
        src={Vector2.src}
        alt="Vector1"
        height={100}
        width={100}
        className="left-8 mt-4 hidden size-16 md:relative md:flex"
      />
      <h3 className="mt-4 text-center text-3xl font-semibold md:text-4xl">
        {title}
      </h3>
      <Image
        src={Vector1.src}
        alt="Vector1"
        height={100}
        width={100}
        className="right-8 mb-4 hidden size-16 md:relative md:flex"
      />
    </motion.div>
  );
}
