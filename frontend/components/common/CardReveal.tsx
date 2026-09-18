"use client";

import React, { CSSProperties } from "react";

export interface CardRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number | string; // in ms (e.g. 120) or string (e.g. '0.12s')
  duration?: number | string; // in s (e.g. 0.8)
  className?: string;
  as?: "div" | "article" | "li" | "span";
}

/**
 * Reusable CardReveal wrapper for any custom card
 * Automatically integrates with the global IntersectionObserver Card Reveal Engine
 */
export function CardReveal({
  children,
  delay,
  duration,
  className = "",
  as: Component = "div",
  style = {},
  ...props
}: CardRevealProps) {
  const formattedDelay =
    typeof delay === "number" ? `${delay}ms` : delay;
  const formattedDuration =
    typeof duration === "number" ? `${duration}s` : duration;

  const combinedStyle: CSSProperties = {
    ...style,
    ...(formattedDelay ? { ["--card-reveal-delay" as any]: formattedDelay } : {}),
    ...(formattedDuration ? { ["--card-reveal-duration" as any]: formattedDuration } : {}),
  };

  return (
    <Component
      className={`reveal-card ${className}`.trim()}
      data-reveal-card="true"
      style={combinedStyle}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}

export interface CardRevealGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerMs?: number;
  className?: string;
}

/**
 * Group container that enables automatic staggered card entrance for all children
 */
export function CardRevealGroup({
  children,
  staggerMs = 120,
  className = "",
  style = {},
  ...props
}: CardRevealGroupProps) {
  return (
    <div
      className={`reveal-card-group ${className}`.trim()}
      data-card-grid="true"
      style={{
        ...style,
        ["--stagger-step" as any]: `${staggerMs}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default CardReveal;
