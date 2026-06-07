"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Slot-machine style year animation.
 * Scrolls through a sequence of years and lands on the target value.
 * Re-triggers every time the element scrolls into view, not just once.
 *
 * Usage:  <AnimatedYear year={2001} />
 */
export default function AnimatedYear({ year, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    margin: "0px 0px -20% 0px",
  });
  const [display, setDisplay] = useState(year);

  useEffect(() => {
    if (!inView) {
      // Reset to allow re-trigger
      return;
    }

    let timer;
    const totalSteps = 22;
    let step = 0;
    const startYear = year - 28;

    const tick = () => {
      step += 1;
      if (step >= totalSteps) {
        setDisplay(year);
        return;
      }
      const progress = step / totalSteps;
      // Cubic ease-out so the years slow down as they approach the target
      const eased = 1 - Math.pow(1 - progress, 3);
      const base = Math.floor(startYear + eased * (year - startYear));
      // Small jitter for the first 80% of the animation to feel like a slot machine
      const jitter = step < totalSteps - 4
        ? Math.floor(Math.random() * 6) - 3
        : 0;
      setDisplay(Math.max(1985, base + jitter));
      // Slow down as we approach
      const delay = 35 + step * 7;
      timer = setTimeout(tick, delay);
    };

    // Start from a low number then tick up
    setDisplay(startYear);
    timer = setTimeout(tick, 80);

    return () => clearTimeout(timer);
  }, [inView, year]);

  return (
    <span ref={ref} className={`tabular-nums inline-block ${className}`}>
      {display}
    </span>
  );
}
