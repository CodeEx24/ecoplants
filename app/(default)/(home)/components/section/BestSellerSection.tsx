"use client";
import SectionTitle from "@/components/default/SectionTitle";
import React from "react";

import BestPlantCarousel from "@/components/embla/BestPlantCarousel";
import { bestPlantsData } from "@/constants/bestPlant";

import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/motion/motion";

export default function BestSellerSection() {
  return (
    <section className="mt-20 space-y-20 pb-20">
      <SectionTitle title="Our Best o2" />
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container relative mx-auto w-full max-w-[350px] md:max-w-full md:py-4"
      >
        <BestPlantCarousel plants={bestPlantsData} />
      </motion.div>
    </section>
  );
}
