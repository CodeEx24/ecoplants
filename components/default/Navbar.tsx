"use client";
import Image from "next/image";
import React from "react";
import Ecoplants from "@/app/assets/logo/ecoplants.webp";
import { SearchIc } from "@/app/assets/svg/SearchIc";
import Link from "next/link";

import { motion } from "framer-motion";
import { createFadeVariants } from "@/lib/motion/motion";
import { usePathname } from "next/navigation";
import CartSheet from "./others/CartSheet";
import MenuSheet from "./others/MenuSheet";
import { navBarLinks } from "@/constants/navBarLink";

export default function Navbar() {
  const pathname = usePathname();
  console.log("PATHNAME: ", pathname);

  return (
    <motion.nav
      variants={createFadeVariants({ delay: 1.1, direction: "down" })}
      initial="hidden"
      animate="show"
      className="base-padding absolute left-0 top-0 z-30 flex h-20 w-full items-center justify-between bg-transparent backdrop-blur-md"
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={Ecoplants}
          alt="Ecoplants"
          className="pb-2"
          width={40}
          height={40}
        />
        <h6 className="font-extrabold">Ecoplants</h6>
      </Link>
      <div className="relative z-50 hidden sm:flex sm:gap-4 md:gap-8 lg:gap-12">
        {navBarLinks.map((link, index) => (
          <Link
            key={`${index}${link.text}`}
            href={link.href}
            className={`font-semibold transition hover:text-secondary-foreground hover:opacity-90 ${pathname === link.href && "text-secondary-foreground"}`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex gap-3 sm:gap-4">
        <SearchIc className="size-5 sm:size-6" />
        <CartSheet />
        <MenuSheet />
      </div>
    </motion.nav>
  );
}
