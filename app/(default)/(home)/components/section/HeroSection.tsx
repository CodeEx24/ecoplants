import { PhPlayCircleThin } from "@/app/assets/svg/Play";
import { Star } from "@/app/assets/svg/Star";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Rectangle1 from "@/app/assets/card/Rectangle1.webp";
import Rectangle2 from "@/app/assets/card/Rectangle2.webp";

import Plant1 from "@/app/assets/plants/Plant1.webp";

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 lg:h-[100vh] pt-20">
      <div className="w-full md:w-1/2 lg:w-4/6">
        <div className="w-full space-y-4 md:pb-[5rem]  pt-24">
          <h1 className="w-full font-sans  font-semibold ">Breath Natureal</h1>
          <p className="w-full md:pl-1 lg:pr-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 md:pl-1">
            <Button variant="outline">Explore</Button>
            <Link href="/" className="flex items-center gap-1 text-sm">
              <PhPlayCircleThin className="size-10" />
              Live Demo
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex md:mt-4 relative w-full h-auto max-w-[350px]">
          <Image
            src={Rectangle2}
            className="top-0 absolute bg-no-repeat bg-contain z-0 object-fill opacity-80 w-full h-full "
            width={700}
            height={700}
            alt="Card"
          />
          <div className="relative z-10 w-full p-8">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <p>Jane Smith</p>
                <div className="flex text-yellow-400">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...
            </p>
          </div>
        </div>
      </div>

      <div className="container relative mx-auto mt-20 flex w-full md:w-1/2 lg:w-2/6 flex-col items-center justify-center">
        <div className="md:flex md:mt-4 relative w-full h-auto max-w-[350px]">
          <Image
            src={Rectangle1}
            className="top-0 absolute bg-no-repeat bg-contain z-0 object-fill opacity-80 w-full h-full pb-8"
            width={1000}
            height={1000}
            alt="Card"
          />
          <div className="relative z-10 w-full">
            <Image
              src={Plant1}
              width={1000}
              height={1000}
              alt="Plant"
              className="relative w-full top-[-5rem] md:top-[-5rem]"
            />
            <div className="relative top-[-4rem]  lg:top-[-4rem] space-y-2 px-6">
              <p>Trendy House Plant</p>
              <p className="text-2xl sm:text-4xl md:text-3xl font-bold">
                Calathea plant
              </p>
              <Button variant="outline">Buy Now</Button>
              <p className="">ASD</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-2/6"></div> */}
    </div>
  );
}
