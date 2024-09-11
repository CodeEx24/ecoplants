"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./EmblaCarouselDotButton";
import Image, { StaticImageData } from "next/image";
import EmblaButtons from "./EmblaButtons";
import EmblaDots from "./EmblaDots";
import BestPlantCard from "./card/BestPlantCard";
import { Button } from "../ui/button";
import { Shopping } from "@/app/assets/svg/Shopping";
import Rectangle4 from "@/app/assets/card/Rectangle4.webp";
import { Browse } from "@/app/assets/svg/Browse";

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

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const indexes = plants.map((_, index) => index);
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
              <div className="embla__slide static w-full space-y-4">
                <div
                  className={`static flex w-full flex-col justify-center space-y-4 px-6 py-4 md:h-full md:pr-20`}
                >
                  <h3 className="text-2xl font-semibold lg:text-3xl">
                    {item.title}
                  </h3>
                  <p
                    className={
                      "line-clamp-6 md:line-clamp-[8] lg:line-clamp-none"
                    }
                  >
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="secondary"
                        className="flex items-center gap-2"
                      >
                        <Shopping /> <p>Buy Now</p>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Browse /> <p>Explore</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4 md:absolute md:bottom-4 md:right-4 md:flex md:items-end">
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
