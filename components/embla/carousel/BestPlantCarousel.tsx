"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "../EmblaCarouselDotButton";
import Image, { StaticImageData } from "next/image";
import EmblaButtons from "../EmblaButtons";
import BestPlantCard from "../card/BestPlantCard";
import Rectangle4 from "@/app/assets/card/Rectangle4.webp";

export type BestPlantType = {
  title: string;
  description: string;
  src: StaticImageData;
};

type PropType = {
  plants: BestPlantType[];
  options?: EmblaOptionsType;
};

const BestPlantCarousel: React.FC<PropType> = (props) => {
  const { plants, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex } = useDotButton(emblaApi);

  // const indexes = plants.map((_, index) => index);
  //   const plantsLength = plants.length;

  return (
    <section className="embla md static h-auto" style={{ maxWidth: "unset" }}>
      <Image
        src={Rectangle4}
        className="absolute top-0 z-0 h-full w-full rounded-2xl bg-contain bg-no-repeat object-cover opacity-80 md:object-fill"
        width={500}
        height={500}
        alt="Card"
      />
      <div className="grid h-auto grid-cols-1 md:h-full md:grid-cols-2">
        <div className="relative" ref={emblaRef}>
          <div className="w-full md:h-full">
            <Image
              src={plants[selectedIndex].src}
              width={500}
              height={500}
              alt="Plant"
              className="relative left-0 top-[-1rem] h-[280px] scale-125 object-contain object-bottom px-4 md:absolute md:top-[-3rem] md:h-full md:object-contain md:px-0"
            />
          </div>
        </div>
        <div className="embla__viewport mt-4 w-full" ref={emblaRef}>
          <div className="embla__container static">
            {plants.map((item, index) => (
              <BestPlantCard
                key={`${index}${item.title}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="relative z-10 px-4 pb-4 md:absolute md:bottom-4 md:right-4 md:flex md:items-end">
            <EmblaButtons emblaApi={emblaApi}>
              <p className="text-lg">
                {String(selectedIndex + 1).padStart(2, "0")}/
                <span className="text-sm">
                  {String(plants.length).padStart(2, "0")}
                </span>
              </p>
            </EmblaButtons>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPlantCarousel;
