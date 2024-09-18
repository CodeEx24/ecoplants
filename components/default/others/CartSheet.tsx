import { Button } from "@/components/ui/button";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Shopping } from "@/app/assets/svg/Shopping";
import { cartData } from "@/constants/cartData";
import Image from "next/image";
import { XIcon } from "@/app/assets/svg/XIcon";

export default function CartSheet() {
  const subtotal = cartData.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger className="relative z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Shopping className="size-5 sm:size-6" />
              </div>
            </TooltipTrigger>

            <TooltipContent>
              <p className="text-sm">Cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent className="z-50 w-full border-r-0 bg-background md:min-w-[450px] md:px-16 md:py-12">
        <div className="px-2">
          <h4 className="mt-4 text-2xl font-semibold">Shopping Cart</h4>
          <div className="mt-4 space-y-6 divide-y-[1px] divide-gray-400/60">
            {cartData.map((plant, index) => (
              <div
                key={`${index}${plant.name}`}
                className="flex justify-between gap-6 pt-3"
              >
                <div className="flex items-center justify-between gap-6">
                  <Image
                    src={plant.image.src}
                    width={100}
                    height={100}
                    alt={plant.name}
                    className="size-20"
                  />
                  <div className="space-y-2">
                    <p className="line-clamp-1">{plant.name}</p>
                    <p className="text-sm">
                      {plant.quantity} x <span>${plant.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <XIcon className="mt-4 size-4" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between px-2">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="mt-4 space-y-3">
            <Button variant="default" className="w-full">
              Check Out
            </Button>
            <Button variant="outline" className="w-full">
              View Cart
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
