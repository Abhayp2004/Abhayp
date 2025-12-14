"use client";

import { useEffect } from "react";
import { useLenis } from "./LenisProvider";

export default function GsapProvider() {
  const { lenis } = useLenis();

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    (async () => {
      try {
        const gsapModule = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const gsap = (gsapModule as any).gsap || gsapModule.default || gsapModule;

        if (!gsap || !ScrollTrigger) {
          console.warn("GSAP or ScrollTrigger not available");
          return;
        }

        gsap.registerPlugin(ScrollTrigger);

        if (!lenis) return;

        // Sync ScrollTrigger with Lenis
        lenis.on("scroll", () => ScrollTrigger.update());

        ScrollTrigger.scrollerProxy(document.documentElement, {
          scrollTop(value?: number) {
            if (typeof value === "number") {
              lenis.scrollTo(value, { immediate: true });
            }
            return window.scrollY || window.pageYOffset;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          pinType: document.documentElement.style.transform ? "transform" : "fixed",
        });

        // Refresh on resize/content changes
        ScrollTrigger.addEventListener("refresh", () => lenis.resize());
        ScrollTrigger.refresh();

        // Global reveal defaults (optional baseline)
        ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
            const fromY = el.dataset.reveal === "up" ? 40 : -40;
            gsap.from(el, {
              opacity: 0,
              y: fromY,
              duration: 0.8,
              ease: "power3.out",
              delay: i * 0.05,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            });
          });
        });
      } catch (error) {
        console.warn("Failed to initialize GSAP:", error);
      }
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [lenis]);

  return null;
}


