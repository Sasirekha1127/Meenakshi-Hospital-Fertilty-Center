"use client";

import React, { useEffect, useRef, useState, CSSProperties } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-in";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  stagger?: boolean;
  duration?: number; // in seconds, default 0.75
  distance?: number | string; // default 24px
  delay?: number; // in seconds, default 0
  threshold?: number; // default 0.1
  rootMargin?: string; // default "0px 0px -30px 0px"
  once?: boolean; // default true
  as?: "div" | "section" | "article" | "aside" | "main";
  style?: CSSProperties;
}

/**
 * Hook to apply native IntersectionObserver scroll-reveal to any ref
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px 0px -30px 0px",
  once = true,
  duration = 0.75,
  delay = 0,
}: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  duration?: number;
  delay?: number;
} = {}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const animTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Accessibility: Check for prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsRevealed(true);
      return;
    }

    // 2. Fallback if IntersectionObserver is unavailable
    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          setIsAnimating(true);

          const totalAnimTime = (duration + delay) * 1000 + 250;
          animTimerRef.current = setTimeout(() => {
            setIsAnimating(false);
          }, totalAnimTime);

          if (once) {
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (animTimerRef.current) {
        clearTimeout(animTimerRef.current);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, duration, delay]);

  return { ref, isRevealed, isAnimating };
}

/**
 * Reusable ScrollReveal Component
 * Wraps any section or element with a smooth, native scroll-reveal animation
 */
export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  stagger = false,
  duration = 0.75,
  distance = 24,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -30px 0px",
  once = true,
  as: Component = "div",
  style = {},
}: ScrollRevealProps) {
  const { ref, isRevealed, isAnimating } = useScrollReveal({
    threshold,
    rootMargin,
    once,
    duration,
    delay,
  });

  const formattedDistance =
    typeof distance === "number" ? `${distance}px` : distance;

  const combinedStyle: CSSProperties = {
    ...style,
    // Pass CSS variables for dynamic control without inline animation hacks
    ["--reveal-duration" as string]: `${duration}s`,
    ["--reveal-distance" as string]: formattedDistance,
    ...(delay > 0 ? { transitionDelay: `${delay}s` } : {}),
  };

  const classNames = [
    "scroll-reveal",
    variant ? `scroll-reveal--${variant}` : "",
    stagger ? "scroll-reveal-stagger" : "",
    isRevealed ? "is-revealed" : "",
    isAnimating ? "is-animating" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={ref as any}
      className={classNames}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
}
