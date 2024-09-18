import { Button } from "@/components/ui/button";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PlantFilterSidebar from "./PlantFilter";

export default function FilterSheet() {
  return (
    <Sheet>
      <SheetTrigger className="relative z-50" asChild>
        <Button className="w-full md:hidden">Filter</Button>
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="z-50 h-[85vh] w-full overflow-y-scroll border-r-0 border-[#3D4F33] bg-[#2C3A24] md:min-w-[450px] md:px-16 md:py-12"
      >
        <PlantFilterSidebar />
      </SheetContent>
    </Sheet>
  );
}
