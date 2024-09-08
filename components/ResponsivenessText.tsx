import React from "react";

export default function ResponsivenessText() {
  return (
    <div className="absolute">
      <p className="sm:hidden">MINI</p> {/* 640px - 767px */}
      <p className="hidden sm:block md:hidden">Small</p> {/* 768px - 1023px */}
      <p className="hidden md:block lg:hidden">Medium</p>{" "}
      {/* 1024px - 1279px */}
      <p className="hidden lg:block xl:hidden">Large</p> {/* 1280px - 1535px */}
      <p className="hidden xl:block 2xl:hidden">XX-Large</p>{" "}
      {/* 1536px and up */}
    </div>
  );
}
