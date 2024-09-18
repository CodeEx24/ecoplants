import Ecoplants from "@/app/assets/logo/ecoplants.webp";
import { Menu } from "@/app/assets/svg/Menu";
import Sidebar from "@/components/sidebar/Sidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";

export default function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Menu className="size-5 sm:size-6" />
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
  );
}
