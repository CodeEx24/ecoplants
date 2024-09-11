import React from "react";
import TrendPlants from "../TrendPlants";
import SectionTitle from "@/components/default/SectionTitle";
import { topSellingPlants } from "@/constants/topPlants";

export default function TrendPlantsSection() {
  return (
    <section className="mt-28 space-y-4 pb-20 md:space-y-40">
      <SectionTitle title="Our Trendy Plants" />

      {topSellingPlants.map((plant, index) => {
        return (
          <TrendPlants
            key={`${index}${plant.name}`}
            name={plant.name}
            price={plant.price}
            oldPrice={plant.oldPrice}
            description={plant.description}
            src={plant.src}
            isReverse={plant.isReverse}
          />
        );
      })}
    </section>
  );
}
