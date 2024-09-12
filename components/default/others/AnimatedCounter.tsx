"use client";
import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Define the props type
interface AnimatedCounterProps {
  from: number;
  to: number;
  className?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  className,
  duration = 2,
}) => {
  // Specify the type for the ref
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Intersection Observer callback
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setInView(true);
      }
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        type: "tween",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(1);
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return <p className={className} ref={ref} />;
};

export default AnimatedCounter;
