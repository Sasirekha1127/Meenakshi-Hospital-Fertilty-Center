"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal Card Selector
 * Matches all product, service, feature, testimonial, and informational cards
 * across the entire Meenakshi Hospital website.
 */
export const CARD_SELECTOR = [
  ".reveal-card",
  "[data-reveal-card]",
  ".reveal-card-group > *",
  "[data-card-grid] > *",
  ".spec-carousel-wrap",
  ".ut-card",
  ".emergency-card",
  ".assist-tile",
  ".hospital-card-wrapper",
  ".opd-float-card",
  ".pillar-row",
  ".dir-row",
  ".faq-support-card",
  ".pt-card",
  ".room-card",
  ".mv-card",
  ".stat-item",
  ".video-tile",
  ".wc-row",
  ".wc-badge",
  ".msb-start-card",
  ".msb-doc-row",
  ".msb-stat-item",
  ".msb-relation",
  ".msb-pt-card",
  ".msb-entry-card",
  ".msb-spec-card",
  ".msb-doc-card",
  ".feature-item",
  ".service-block .inner-box",
  ".service-block-one .inner-box",
  ".service-block-two .inner-box",
  ".doctor-block .inner-box",
  ".doctor-block-one .inner-box",
  ".team-block .inner-box",
  ".team-block-one .inner-box",
  ".news-block .inner-box",
  ".news-block-one .inner-box",
  ".testimonial-block .inner-box",
  ".testimonial-block-one .inner-box",
  ".pricing-block .inner-box",
  ".pricing-block-one .inner-box",
  ".feature-block .inner-box",
  ".feature-block-one .inner-box",
  ".process-block .inner-box",
  ".process-block-one .inner-box",
  ".info-block-one .inner-box",
  ".info-block-two .inner-box",
].join(", ");

/**
 * CardRevealObserver Component
 * -------------------------------------------------------------
 * High-performance, zero-external-library scroll reveal engine.
 * Powered purely by native browser IntersectionObserver + CSS transitions.
 * 
 * Features:
 * - Triggers when ~18% (15%-20%) of card enters viewport
 * - Initial: opacity: 0, translateY(40px) scale(0.97)
 * - Revealed: opacity: 1, translateY(0) scale(1)
 * - 0.8s elegant ease-out cubic-bezier(0.16, 1, 0.3, 1)
 * - Re-triggerable: when cards exit viewport and re-enter, animation plays again
 * - Dynamic 120ms stagger between sibling cards
 * - Auto-detects route changes and dynamic DOM mutations
 * - Respects prefers-reduced-motion for full accessibility
 */
export default function CardRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Accessibility: if user prefers reduced motion, reveal everything immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.querySelectorAll(CARD_SELECTOR).forEach((card) => {
        card.classList.add("is-card-revealed");
      });
      return;
    }

    // 2. Guard against environments without IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(CARD_SELECTOR).forEach((card) => {
        card.classList.add("is-card-revealed");
      });
      return;
    }

    // 3. Set up IntersectionObserver with ~18% threshold (within 15%-20% requirement)
    const observedElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // Apply dynamic stagger delay (max 4 per row: 0ms, 120ms, 240ms, 360ms)
            const parent = target.parentElement;
            if (parent && !target.style.getPropertyValue("--card-stagger-delay")) {
              const siblings = Array.from(parent.children).filter((el) =>
                el.matches(CARD_SELECTOR) || el.querySelector(CARD_SELECTOR)
              );
              const index = siblings.indexOf(target);
              if (index >= 0) {
                target.style.setProperty("--card-stagger-delay", `${(index % 4) * 120}ms`);
              }
            }

            target.classList.add("is-card-revealed");
          } else {
            // Only un-reveal if element is actually outside viewport (prevents jitter / bounce)
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.bottom < -40 || rect.top > windowHeight + 40) {
              target.classList.remove("is-card-revealed");
            }
          }
        });
      },
      {
        threshold: 0.18, // 18% visibility trigger
        rootMargin: "0px 0px -40px 0px", // Trigger slightly inside the viewport
      }
    );

    // 4. Function to scan and register all cards
    const registerCards = () => {
      const cards = document.querySelectorAll(CARD_SELECTOR);
      cards.forEach((card) => {
        if (!observedElements.has(card)) {
          observedElements.add(card);
          observer.observe(card);
        }
      });
    };

    // Initial registration
    registerCards();

    // Small delayed re-scan for hydrated / dynamic items
    const timer = setTimeout(registerCards, 150);

    // 5. MutationObserver to automatically handle dynamically mounted cards (tabs, carousels, etc.)
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldRegister = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldRegister = true;
          break;
        }
      }
      if (shouldRegister) {
        registerCards();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      mutationObserver.disconnect();
      observedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
