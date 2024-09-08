import React from "react";

import SellingPlants from "../SellingPlants";
import { plantsData } from "@/constants/plant";
import SectionTitle from "@/components/default/SectionTitle";

export default function TopSellingSection() {
  return (
    <section className="space-y-40 mt-20 pb-20">
      <SectionTitle title="Our Top Selling Plants" />
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-center items-center"
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
      </div>
    </section>
  );
}
