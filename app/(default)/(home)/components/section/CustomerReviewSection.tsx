"use client";
import SectionTitle from "@/components/default/SectionTitle";
import React from "react";

import ReviewCard from "../card/ReviewCard";
import { reviewData } from "@/constants/review";

import { motion } from "framer-motion";
import { FADE_UP_STAGGER } from "@/lib/motion/motion";

export default function CustomerReviewSection() {
  return (
    <section className="mt-6 space-y-40 pb-20 md:mt-20">
      <SectionTitle title="Customer Review" />
      <motion.div
        variants={FADE_UP_STAGGER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 items-center justify-center gap-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
        style={{ marginTop: 80 }}
      >
        {reviewData.map((review, index) => {
          return (
            <ReviewCard
              key={`${index}ImageReview`}
              name={review.name}
              src={review.src}
              starCount={review.starCount}
              description={review.description}
            />
          );
        })}
      </motion.div>
    </section>
  );
}
