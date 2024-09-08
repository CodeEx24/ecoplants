import SectionTitle from "@/components/default/SectionTitle";
import React from "react";

import ReviewCard from "../card/ReviewCard";
import { reviewData } from "@/constants/review";

export default function CustomerReviewSection() {
  return (
    <section className="space-y-40 mt-20 pb-20">
      <SectionTitle title="Customer Review" />
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8  justify-center items-center"
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
      </div>
    </section>
  );
}
