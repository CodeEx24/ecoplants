import AnimatedCounter from "@/components/default/others/AnimatedCounter";
import { counterData } from "@/constants/counterData";
import { servicesData } from "@/constants/servicesData";
import Image from "next/image";
import React from "react";

import StoryImage from "@/app/assets/section/OurStory.webp";

export default function Story() {
  return (
    <section className="base-padding my-20 space-y-20">
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Image
              src={StoryImage.src}
              className="h-full w-full rounded-lg object-cover"
              width={500}
              height={500}
              alt="Background"
            />
          </div>
          <div className="relative z-10 space-y-4 md:p-12">
            <h2 className="mt-4 text-2xl font-bold md:text-5xl">Our Story</h2>
            <p className="md:text-md text-sm lg:text-lg">
              At Ecoplants, our journey began with a vision to transform the way
              people connect with nature and to champion a more sustainable
              lifestyle.
              <br /> <br />
              We are passionate about offering a diverse range of plants that
              not only enhance your living space but also contribute positively
              to the environment. Our commitment to sustainability is at the
              heart of everything we do.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-1">
              {servicesData.map((item, index) => {
                return (
                  <div
                    key={`${index}${item.title}`}
                    className="flex items-center justify-center space-x-4 rounded-lg border-2 p-4"
                  >
                    <div className="text-secondary-foreground">{item.src}</div>
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-12 pt-10">
        <video
          src="https://videos.pexels.com/video-files/3974908/3974908-hd_1920_1080_25fps.mp4"
          controls
          autoPlay
          className="w-full rounded-md bg-white/90 p-2 shadow-lg md:w-4/6"
        />

        <div className="space-y-10">
          <h2 className="PX-0 text-center text-2xl italic md:px-16 md:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
            <span className="text-secondary-foreground">eiusmod tempor</span>{" "}
            incididunt.
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x-2">
            {counterData.map((item, index) => {
              return (
                <div
                  className="space-y-4md:space-y-1 flex flex-col items-center"
                  key={`${index}${item.name}`}
                >
                  <div className="flex">
                    <AnimatedCounter
                      from={0}
                      to={item.value}
                      className="text-4xl font-bold text-secondary-foreground md:text-5xl"
                      duration={item.duration}
                    />
                    <p className="text-4xl font-bold text-secondary-foreground md:text-5xl">
                      +
                    </p>
                  </div>

                  <p className="text-2xl">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
