"use client";
import React from "react";

import SellingPlants from "../SellingPlants";
import { plantsData } from "@/constants/plant";
import SectionTitle from "@/components/default/SectionTitle";

import { motion } from "framer-motion";
import { FADE_UP_STAGGER } from "@/lib/motion/motion";

export default function TopSellingSection() {
  return (
    <section className="space-y-40 py-20">
      <SectionTitle title="Our Top Selling Plants" />
      <motion.div
        variants={FADE_UP_STAGGER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 items-center justify-center gap-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
        style={{ marginTop: 80 }}
      >
        {plantsData.map((plant, index) => {
          return (
            <SellingPlants
              key={index}
              src={plant.src}
              name={plant.name}
              description={plant.description}
              price={plant.price}
              oldPrice={plant.oldPrice}
            />
          );
        })}
      </motion.div>
    </section>
  );
}
