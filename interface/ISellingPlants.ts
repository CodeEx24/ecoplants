import { StaticImageData } from "next/image";

export interface PlantsDetailsType {
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  src: StaticImageData; // Update this type if needed
  isReverse?: boolean;
}
