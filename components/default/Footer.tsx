import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import Ecoplants from "@/app/assets/logo/ecoplants.webp";

export default function Footer() {
  return (
    <footer className="base-padding flex flex-wrap items-center justify-center gap-6 bg-[#222C1D] py-20">
      <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Image
              src={Ecoplants.src}
              height={400}
              width={400}
              alt="EcoPlants"
              className="size-12"
            />
            <p className="text-2xl font-extrabold">Ecoplants</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-lg font-bold">Quick Link&apos;s</p>
          <p>Home</p>
          <p>Type’s Of plant’s</p>
          <p>Contact</p>
          <p>Privacy</p>
        </div>
        <div className="space-y-6">
          <p className="text-lg font-bold">For Every Update.</p>
          <Input placeholder="Enter email" />
          <Button variant="default">Subscribe</Button>
        </div>
      </div>
      <div className="mt-8 flex w-full justify-between">
        <div className="flex gap-8">
          <p className="text-lg font-bold">FB</p>
          <p className="text-lg font-bold">TW</p>
          <p className="text-lg font-bold">LI</p>
        </div>
        <Link
          href="https://jocarlbasco.vercel.app/"
          className="underline"
          target="_blank"
        >
          JBDevWorks
        </Link>
        <Link href="https://jocarlbasco.vercel.app/">
          All rights reserved Ecoplants ({new Date().getFullYear()})
        </Link>
      </div>
    </footer>
  );
}
