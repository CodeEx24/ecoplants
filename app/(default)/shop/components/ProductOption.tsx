import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function ProductOption() {
  return (
    <div className="flex flex-col justify-center gap-2 sm:flex-row">
      <Button>12 Product Found of 50</Button>
      {/* <Button>
      <Grid2 />
    </Button>
    <Button>
      <Grid3 />
    </Button> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="">
            Sort By: Default
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Name (A to Z)</DropdownMenuItem>
          <DropdownMenuItem>Name (Z to A)</DropdownMenuItem>
          <DropdownMenuItem>Price (Low to High)</DropdownMenuItem>
          <DropdownMenuItem>Price (High to Low)</DropdownMenuItem>
          <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
          <DropdownMenuItem>Customer Rating</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
