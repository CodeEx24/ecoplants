"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { StaticImageData } from "next/image";
import Logo from "../card/Logo";
import Autoplay from "embla-carousel-autoplay";

export type PartnerType = {
  name: string;
  logo: StaticImageData;
};

type PropType = {
  partner: PartnerType[];
  options?: EmblaOptionsType;
};

const LogoCarousel: React.FC<PropType> = (props) => {
  const { partner, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {partner.map((item, index) => (
            <Logo
              key={`${index}${item.name}`}
              logo={item.logo}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
