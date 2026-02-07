import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  children?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const { y = 40, x = 0, duration = 0.8, delay = 0, stagger = 0.1, children = false } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = children ? el.children : el;

    gsap.set(targets, { opacity: 0, y, x });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          stagger: children ? stagger : 0,
          ease: "power3.out",
        });
      },
    });

    return () => trigger.kill();
  }, [y, x, duration, delay, stagger, children]);

  return ref;
}
