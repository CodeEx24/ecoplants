import { Shopping } from "@/app/assets/svg/Shopping";
import SectionTitle from "@/components/default/SectionTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import Rectangle4 from "@/app/assets/card/Rectangle4.webp";
import Plant1 from "@/app/assets/plants/Plant1.webp";

export default function BestSellerSection() {
  return (
    <section className="mt-20 space-y-20 pb-20">
      <SectionTitle title="Our Best o2" />
      <div className="container relative mx-auto h-full w-full max-w-[350px] md:max-w-full md:py-4">
        <Image
          src={Rectangle4}
          className="absolute top-0 z-0 h-full w-full rounded-2xl bg-contain bg-no-repeat object-cover opacity-80 md:object-fill"
          width={1000}
          height={1000}
          alt="Card"
        />
        <div
          className={`relative z-10 flex w-full flex-col items-center justify-center md:max-h-[400px] md:flex-row`}
        >
          <div className="w-full md:h-full md:w-1/2">
            <Image
              src={Plant1}
              width={1000}
              height={1000}
              alt="Plant"
              className="relative top-[-2rem] w-full object-cover object-bottom px-4 md:bottom-8 md:top-[unset] md:max-h-[500px] md:object-contain md:px-0 lg:bottom-12"
            />
          </div>
          <div
            className={`relative top-[-2rem] w-full space-y-2 px-6 md:static md:w-1/2 md:pr-20`}
          >
            <h3 className="text-2xl font-semibold lg:text-3xl">
              We Have Small And Best O2 Plants Collection’s
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <div className="space-x-4">
              <Button variant="outline">Explore</Button>
              <Button variant="outline">
                <Shopping />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative mx-auto mb-10 hidden h-full w-full max-w-[350px] md:max-w-full">
        <Image
          src={Rectangle4}
          className="absolute top-0 z-0 h-full w-full rounded-2xl bg-no-repeat object-cover opacity-80 md:object-fill"
          width={1000}
          height={1000}
          alt="Card"
        />

        <div
          className={`z-10 mt-8 flex w-full flex-col items-center py-8 md:flex-row`}
        >
          <div className="relative w-full md:static md:top-0 md:w-1/2">
            <Image
              src={Plant1}
              width={1000}
              height={1000}
              alt="Plant"
              className="top-0 object-contain md:relative md:max-h-[400px]"
            />
          </div>
          <div className={`w-full space-y-4 px-8 md:w-1/2`}>
            <h3 className="text-2xl font-semibold">
              We Have Small And Best O2 Plants Collection’s
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-end gap-4">
              <p className="text-3xl">$599.00</p>
              <p className="text-1xl mb-0.5 text-gray-500 line-through">
                $79.00
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="outline">Explore</Button>
              <Button variant="outline">
                <Shopping />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
