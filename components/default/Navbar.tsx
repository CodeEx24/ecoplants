"use client";
import Image from "next/image";
import React from "react";
import Ecoplants from "@/app/assets/logo/ecoplants.webp";
import { Shopping } from "@/app/assets/svg/Shopping";
import { SearchIc } from "@/app/assets/svg/SearchIc";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Menu } from "@/app/assets/svg/Menu";
import Sidebar from "../sidebar/Sidebar";

import { motion } from "framer-motion";
import { createFadeVariants } from "@/lib/motion/motion";

export default function Navbar() {
  return (
    <motion.nav
      variants={createFadeVariants({ delay: 1.1, direction: "down" })}
      initial="hidden"
      animate="show"
      className="base-padding absolute left-0 top-0 z-30 flex h-20 w-full items-center justify-between bg-transparent backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <Image
          src={Ecoplants}
          alt="Ecoplants"
          className="pb-2"
          width={40}
          height={40}
        />
        <h6 className="font-extrabold">Ecoplants</h6>
      </div>
      <div className="relative z-50 hidden sm:flex sm:gap-4 md:gap-8 lg:gap-12">
        <Link href="/">Home</Link>
        <Link href="/">Plant Types</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-4">
        <SearchIc className="size-5" />
        <Shopping className="size-5" />
        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="z-50 min-w-[300px] border-r-0 bg-background">
            <SheetHeader>
              <div className="flex items-center gap-2">
                <Image
                  src={Ecoplants}
                  alt="Ecoplants"
                  className="pb-2"
                  width={40}
                  height={40}
                />
                <h6 className="font-extrabold">Ecoplants</h6>
              </div>
              <hr className="border-white/30" />
              <Sidebar />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
