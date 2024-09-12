import React from "react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButton";
import { ArrowBack } from "@/app/assets/svg/ArrowBack";
import { ArrowForward } from "@/app/assets/svg/ArrowForward";
import { EmblaCarouselType } from "embla-carousel";

interface EmblaButtonsType {
  emblaApi: EmblaCarouselType | undefined;
  children?: React.ReactNode;
  classname?: string;
}

export default function EmblaButtons({
  emblaApi,
  children,
  classname = "flex",
}: EmblaButtonsType) {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={`embla__buttons ${classname}`}>
      <div className="flex justify-start">
        <button
          onClick={onPrevButtonClick}
          // disabled={prevBtnDisabled}
          className={`duration-150 ${prevBtnDisabled ? "text-gray-600" : "hover:scale-75 hover:bg-transparent hover:text-white/80"}`}
        >
          <ArrowBack />
        </button>
      </div>
      {children}
      <div className="flex justify-end">
        <button
          onClick={onNextButtonClick}
          // disabled={nextBtnDisabled}
          className={`duration-150 ${nextBtnDisabled ? "text-gray-600" : "hover:scale-75 hover:bg-transparent hover:text-white/80"}`}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
}
