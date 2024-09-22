"use client";
import { StarEmpty } from "@/app/assets/svg/StarEmpty";
import { StarFull } from "@/app/assets/svg/StarFull";
import { StarHalf } from "@/app/assets/svg/StarHalf";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { productsData } from "@/constants/productsData";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {productsData.map((product, index) => (
        <Card
          key={`${index}${product.name}`}
          className="w-full overflow-hidden border-[#3D4F33] bg-[#2C3A24] text-[#E8F3E0]"
        >
          <CardContent className="p-0">
            <div className="relative aspect-square bg-white">
              <Image
                src={product.image.src}
                alt={product.name}
                width={200}
                height={200}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="bg-[#D0E7C6] p-4">
              <h3 className="text-lg font-semibold text-[#3D4F33]">
                {product.name}
              </h3>
              <div className="mt-1 flex items-center text-[#3D4F33]">
                {[1, 2, 3, 4, 5].map((star) => {
                  if (star <= product.stars) {
                    // Full star
                    return (
                      <StarFull
                        key={`star${star}`}
                        className="h-4 w-4 text-yellow-400"
                      />
                    );
                  } else if (star === Math.ceil(product.stars)) {
                    // Half star
                    return (
                      <StarHalf
                        key={`star${star}`}
                        className="h-4 w-4 text-yellow-400"
                      />
                    );
                  } else {
                    // Empty star
                    return (
                      <StarEmpty
                        key={`star${index}`}
                        className="h-4 w-4 text-gray-400"
                      />
                    );
                  }
                })}
              </div>
              <p className="mt-2 line-clamp-2 min-h-[2.8em] text-sm text-[#3D4F33]">
                {product.description}
              </p>

              <p className="mt-2 text-lg font-bold text-[#3D4F33] text-secondary">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 bg-[#A0C896] p-4">
            <Button
              aria-label="Add to cart"
              variant="secondary"
              className="w-full"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <div className="flex w-full justify-between">
              <div className="flex w-full gap-2">
                <Button
                  size="icon"
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={
                    favorites.includes(product.id)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                  className="w-1/2 border-[2px]"
                >
                  <Heart
                    className={
                      favorites.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : ""
                    }
                  />
                </Button>
                <Button
                  size="icon"
                  aria-label="Quick view"
                  className="w-1/2 border-[2px]"
                >
                  <Eye />
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
