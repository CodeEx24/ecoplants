import { Variants } from "framer-motion";

interface FadeVariantConfig {
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  direction?: "left" | "right" | "up" | "down";
}

export const createFadeVariants = ({
  duration = 1,
  direction = "up",
  delay,
}: FadeVariantConfig): Variants => {
  let movement = { x: 0, y: 0 };

  switch (direction) {
    case "up":
      movement.y = 50; // Move up from 50 pixels below
      break;
    case "down":
      movement.y = -50; // Move down from 50 pixels above
      break;
    case "left":
      movement.x = 50; // Move left from 50 pixels right
      break;
    case "right":
      movement.x = -50; // Move right from 50 pixels left
      break;
  }

  const transition = {
    ease: [0.645, 0.045, 0.355, 1], // Cubic bezier curve values
    duration,
    ...(delay !== undefined && { delay }), // Conditionally include delay if it's defined
  };

  return {
    hidden: {
      opacity: 0,
      ...movement,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition,
    },
  };
};

export const createFadeUpStaggerVariants = ({
  duration = 1,
  staggerDelay = 0.2,
}: FadeVariantConfig): Variants => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: staggerDelay,
      duration,
    },
  },
});

export const FADE_UP = createFadeVariants({});
export const FADE_UP_STAGGER = createFadeUpStaggerVariants({});
