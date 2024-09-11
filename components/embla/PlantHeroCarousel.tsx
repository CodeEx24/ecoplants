"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./EmblaCarouselDotButton";
import PlantHeroCard from "./card/PlantHeroCard";
import { StaticImageData } from "next/image";
import EmblaButtons from "./EmblaButtons";
import EmblaDots from "./EmblaDots";

type HeroPlantType = {
  name: string;
  subname: string;
  src: StaticImageData;
};

type PropType = {
  plants: HeroPlantType[];
  options?: EmblaOptionsType;
};

const PlantHeroCarousel: React.FC<PropType> = (props) => {
  const { plants, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const plantsData = plants.map((_, index) => index);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {plants.map((item, index) => (
            <PlantHeroCard
              key={`${index}${item.name}`}
              src={item.src}
              name={item.name}
              subname={item.subname}
            />
          ))}
        </div>
        <div className="absolute top-[30%] w-full">
          <EmblaButtons
            emblaApi={emblaApi}
            classname="flex justify-between px-2"
          />
        </div>
      </div>

      <div className="embla__controls container mx-auto mt-2 flex h-12 w-full items-center justify-center">
        <EmblaDots
          key="heroPlants"
          data={plantsData}
          selectedIndex={selectedIndex}
          onDotButtonClick={onDotButtonClick}
        />
      </div>
    </section>
  );
};

export default PlantHeroCarousel;
