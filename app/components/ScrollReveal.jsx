"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — tiny client component for scroll-triggered animations.
 *
 * Pattern:
 *  1. Adds `.js-reveal` to <html> so CSS hides .reveal elements (see globals.css).
 *  2. IntersectionObserver adds `.visible` when each element enters the viewport.
 *  3. Elements already on screen get `.visible` on the very first tick.
 *
 * All section components remain Server Components — this is the only
 * "use client" file needed for reveal animations.
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Signal to CSS that JS is active — enables the hidden initial state
    document.documentElement.classList.add("js-reveal");

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once visible, stop watching it
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Renders nothing — pure side-effect component
  return null;
}
