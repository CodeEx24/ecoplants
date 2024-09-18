import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight } from "lucide-react";
import { categories, colors, popularTags } from "@/constants/filters/filters";
import { Badge } from "@/components/ui/badge";

export default function Sidebar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "0", max: "100" });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      setSelectedCategories(
        selectedCategories.length === categories.length - 1
          ? []
          : categories.map((c) => c.id),
      );
    } else {
      setSelectedCategories((prev) =>
        prev.includes(categoryId)
          ? prev.filter((id) => id !== categoryId)
          : [...prev, categoryId],
      );
    }
  };

  const handleColorChange = (color: string) => {
    if (color === "all") {
      setSelectedColors(
        selectedColors.length === colors.length - 1 ? [] : colors,
      );
    } else {
      setSelectedColors((prev) =>
        prev.includes(color)
          ? prev.filter((c) => c !== color)
          : [...prev, color],
      );
    }
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const handlePriceChange = (type: "min" | "max", value: string) => {
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="flex h-auto flex-col bg-[#2C3A24] text-[#E8F3E0] md:w-64">
      <div className="border-b border-[#4A6741] p-2">
        <h2 className="text-xl font-semibold">Plant Filters</h2>
      </div>

      <ScrollArea className="flex-1 px-2">
        <nav className="space-y-1 py-4">
          {[
            { name: "Categories", key: "categories", content: categories },
            { name: "Colors", key: "colors", content: colors },
          ].map((section) => (
            <div key={section.key}>
              <button
                onClick={() => toggleSection(section.key)}
                className="flex w-full items-center justify-between py-2 text-left text-[#B8E0A2] transition-colors hover:text-[#E8F3E0]"
              >
                <span>{section.name}</span>
                {openSections.includes(section.key) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {openSections.includes(section.key) && (
                <div className="space-y-2 pb-4 pl-2 pt-1">
                  {section.key === "categories" &&
                    categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() =>
                            handleCategoryChange(category.id)
                          }
                        />
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  {section.key === "colors" &&
                    colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox
                          id={color}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={() => handleColorChange(color)}
                        />
                        <label
                          htmlFor={color}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {color === "all"
                            ? "All Colors"
                            : color.charAt(0).toUpperCase() + color.slice(1)}
                        </label>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="py-4">
          <h3 className="mb-2 text-lg font-semibold text-[#B8E0A2]">
            Price Range
          </h3>
          <div className="flex space-x-2">
            <Input
              type="number"
              value={priceRange.min}
              onChange={(e) => handlePriceChange("min", e.target.value)}
              className="h-9 w-1/2 border-[#4A6741] bg-[#3D4F33] text-base text-[#E8F3E0]"
              placeholder="Min"
            />
            <Input
              type="number"
              value={priceRange.max}
              onChange={(e) => handlePriceChange("max", e.target.value)}
              className="h-9 w-1/2 border-[#4A6741] bg-[#3D4F33] text-base text-[#E8F3E0]"
              placeholder="Max"
            />
          </div>
        </div>

        <div className="py-4">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "secondary" : "outline"}
                className={`cursor-pointer ${
                  selectedTags.includes(tag)
                    ? "bg-white text-black hover:bg-white hover:text-black hover:opacity-90"
                    : "bg-[#3D4F33] text-white"
                }`}
                onClick={() => handleTagChange(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
