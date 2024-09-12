import { Facebook } from "@/app/assets/svg/socials/Facebook";
import { Pinterest } from "@/app/assets/svg/socials/Pinterest";
import { Twitter } from "@/app/assets/svg/socials/Twitter";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface TeamDetailsType {
  image: StaticImageData;
  name: string;
  position: string;
  isEnd?: boolean;
}

export default function TeamDetails({
  image,
  name,
  position,
  isEnd = false,
}: TeamDetailsType) {
  return (
    <div className={`relative flex justify-center ${isEnd && "md:items-end"}`}>
      <div
        className={`group relative h-[250px] w-[250px] rounded-full md:h-full md:w-full lg:h-60 lg:w-60 ${isEnd ? "bottom-0" : "top-0"}`}
      >
        <Image
          src={image.src}
          width={300}
          height={300}
          alt="E"
          className="h-full w-full lg:h-full lg:w-full"
        />
        <p className="absolute bottom-[-2.5rem] w-full text-center text-xl font-bold group-hover:opacity-0 lg:hidden">
          {name}
        </p>
        <div className="border-1 absolute top-[50%] h-1/2 w-full rounded-bl-full rounded-br-full border-secondary bg-white opacity-0 transition duration-300 ease-out group-hover:opacity-100 lg:h-[120px] lg:w-[240px]">
          <div className="relative h-full pt-2 text-black">
            <p className="text-center text-xl font-bold md:text-base lg:text-lg">
              {name}
            </p>
            <p className="text-center text-black/80 md:text-base lg:text-lg">
              {position}
            </p>
            <div className="absolute bottom-[-20px] flex w-full justify-center gap-2">
              <div className="border-1 absolute bottom-5 left-8 mb-2 flex size-10 items-center justify-center rounded-full border-secondary bg-secondary-background md:size-6 lg:bottom-4 lg:size-10">
                <Facebook />
              </div>
              <div className="border-1 absolute bottom-1 flex size-10 items-center justify-center rounded-full border-secondary bg-secondary-background md:bottom-2 md:size-6 lg:bottom-0 lg:size-10">
                <Twitter />
              </div>
              <div className="border-1 absolute bottom-5 right-8 mb-2 flex size-10 items-center justify-center rounded-full border-secondary bg-secondary-background md:size-6 lg:bottom-4 lg:size-10">
                <Pinterest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
