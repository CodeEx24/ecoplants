import React from "react";
import { DotButton } from "./EmblaCarouselDotButton";

interface EmblaDotsProps {
  key: string;
  data: number[];
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
}

const EmblaDots: React.FC<EmblaDotsProps> = ({
  data,
  key,
  selectedIndex,
  onDotButtonClick,
}) => {
  console.log("DATA: ", data);
  return (
    <div className="embla__dots">
      {data &&
        data.map((_, index: number) => (
          <DotButton
            key={`${key}${index}`}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot${index === selectedIndex ? "embla__dot--selected" : ""}`}
          >
            {index === selectedIndex ? (
              <div className="h-2 w-6 rounded-full bg-white"></div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-white"></div>
            )}
          </DotButton>
        ))}
    </div>
  );
};

export default EmblaDots;
