import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Variant = "hero" | "domains" | "events" | "team" | "gallery";

const MonumentBackground = ({ className = "", variant = "hero" }: { className?: string; variant?: Variant }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const svgs = el.querySelectorAll("svg");
    gsap.set(svgs, { opacity: 0 });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 95%",
      once: true,
      onEnter: () => {
        gsap.to(svgs, { opacity: 1, duration: 1.8, stagger: 0.3, ease: "power2.out" });
      },
    });
    return () => trigger.kill();
  }, []);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === "hero" && <HeroMotifs />}
      {variant === "domains" && <DomainsMotifs />}
      {variant === "events" && <EventsMotifs />}
      {variant === "team" && <TeamMotifs />}
      {variant === "gallery" && <GalleryMotifs />}
    </div>
  );
};

/* ─── Jaali / Lattice pattern (top-right corner) ─── */
const JaaliCorner = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 300" fill="none">
    <defs>
      <linearGradient id="jaali1" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 28%)" stopOpacity="0.12" />
        <stop offset="50%" stopColor="hsl(230 60% 45%)" stopOpacity="0.08" />
        <stop offset="100%" stopColor="hsl(230 60% 60%)" stopOpacity="0.04" />
      </linearGradient>
      <linearGradient id="jaali2" x1="300" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 22%)" stopOpacity="0.10" />
        <stop offset="100%" stopColor="hsl(230 60% 50%)" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    {/* Outer diamond lattice */}
    <path d="M150 10 L290 150 L150 290 L10 150Z" stroke="url(#jaali1)" strokeWidth="2" fill="none" />
    <path d="M150 40 L260 150 L150 260 L40 150Z" stroke="url(#jaali1)" strokeWidth="1.5" fill="none" />
    <path d="M150 70 L230 150 L150 230 L70 150Z" stroke="url(#jaali2)" strokeWidth="1.5" fill="none" />
    <path d="M150 100 L200 150 L150 200 L100 150Z" stroke="url(#jaali2)" strokeWidth="1" fill="none" />
    {/* Cross lines */}
    <line x1="150" y1="10" x2="150" y2="290" stroke="url(#jaali1)" strokeWidth="0.8" />
    <line x1="10" y1="150" x2="290" y2="150" stroke="url(#jaali1)" strokeWidth="0.8" />
    {/* Corner arcs */}
    <path d="M80 10 Q150 80 220 10" stroke="url(#jaali2)" strokeWidth="1" fill="none" />
    <path d="M80 290 Q150 220 220 290" stroke="url(#jaali2)" strokeWidth="1" fill="none" />
  </svg>
);

/* ─── Floral / Botanical motif (large, organic) ─── */
const FloralMotif = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none">
    <defs>
      <linearGradient id="floral1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 25%)" stopOpacity="0.10" />
        <stop offset="40%" stopColor="hsl(230 60% 38%)" stopOpacity="0.07" />
        <stop offset="100%" stopColor="hsl(230 60% 55%)" stopOpacity="0.04" />
      </linearGradient>
      <linearGradient id="floral2" x1="200" y1="0" x2="200" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 20%)" stopOpacity="0.09" />
        <stop offset="100%" stopColor="hsl(230 60% 50%)" stopOpacity="0.03" />
      </linearGradient>
      <linearGradient id="floral3" x1="0" y1="200" x2="400" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 55% 30%)" stopOpacity="0.08" />
        <stop offset="100%" stopColor="hsl(230 55% 55%)" stopOpacity="0.03" />
      </linearGradient>
    </defs>
    {/* Central bloom */}
    <circle cx="200" cy="200" r="20" fill="url(#floral2)" />
    <circle cx="200" cy="200" r="35" stroke="url(#floral1)" strokeWidth="1.5" fill="none" />
    {/* Petals - 8 directions */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 200 200)`}>
        <path d="M200 165 Q215 130 200 90 Q185 130 200 165Z" fill="url(#floral1)" />
        <path d="M200 160 Q210 135 200 105 Q190 135 200 160Z" stroke="url(#floral2)" strokeWidth="0.7" fill="none" />
      </g>
    ))}
    {/* Outer ring of smaller buds */}
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <g key={`bud-${angle}`} transform={`rotate(${angle} 200 200)`}>
        <ellipse cx="200" cy="55" rx="8" ry="18" fill="url(#floral3)" />
        <path d="M192 55 Q200 30 208 55" stroke="url(#floral1)" strokeWidth="0.6" fill="none" />
      </g>
    ))}
    {/* Decorative ring */}
    <circle cx="200" cy="200" r="80" stroke="url(#floral1)" strokeWidth="0.8" fill="none" strokeDasharray="6 4" />
    <circle cx="200" cy="200" r="140" stroke="url(#floral3)" strokeWidth="0.6" fill="none" strokeDasharray="3 6" />
  </svg>
);

/* ─── Paisley / block-print vine ─── */
const PaisleyVine = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 600" fill="none">
    <defs>
      <linearGradient id="vine1" x1="0" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 25%)" stopOpacity="0.10" />
        <stop offset="50%" stopColor="hsl(230 60% 40%)" stopOpacity="0.07" />
        <stop offset="100%" stopColor="hsl(230 60% 55%)" stopOpacity="0.03" />
      </linearGradient>
      <linearGradient id="vine2" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 55% 22%)" stopOpacity="0.08" />
        <stop offset="100%" stopColor="hsl(230 55% 48%)" stopOpacity="0.04" />
      </linearGradient>
    </defs>
    {/* Curving vine stem */}
    <path d="M100 0 Q140 100 80 200 Q20 300 120 400 Q180 480 100 600" stroke="url(#vine1)" strokeWidth="2" fill="none" />
    {/* Leaves along the vine */}
    <path d="M80 100 Q50 80 60 50 Q90 70 80 100Z" fill="url(#vine2)" />
    <path d="M120 180 Q150 160 155 125 Q125 145 120 180Z" fill="url(#vine1)" />
    <path d="M60 280 Q25 260 20 220 Q55 245 60 280Z" fill="url(#vine2)" />
    <path d="M130 370 Q165 350 170 310 Q135 335 130 370Z" fill="url(#vine1)" />
    <path d="M90 480 Q55 460 50 420 Q85 445 90 480Z" fill="url(#vine2)" />
    {/* Small paisley drops */}
    <path d="M95 140 Q110 120 100 100 Q85 115 95 140Z" fill="url(#vine1)" />
    <path d="M75 340 Q55 325 65 305 Q80 320 75 340Z" fill="url(#vine2)" />
    <path d="M120 440 Q140 425 135 405 Q115 420 120 440Z" fill="url(#vine1)" />
  </svg>
);

/* ─── Mandala border (horizontal) ─── */
const MandalaBorder = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 800 80" fill="none" preserveAspectRatio="none">
    <defs>
      <linearGradient id="mandala1" x1="0" y1="40" x2="800" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 28%)" stopOpacity="0" />
        <stop offset="20%" stopColor="hsl(230 60% 28%)" stopOpacity="0.08" />
        <stop offset="50%" stopColor="hsl(230 60% 45%)" stopOpacity="0.10" />
        <stop offset="80%" stopColor="hsl(230 60% 28%)" stopOpacity="0.08" />
        <stop offset="100%" stopColor="hsl(230 60% 28%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Repeating scallop/arch pattern */}
    {Array.from({ length: 16 }).map((_, i) => (
      <path
        key={i}
        d={`M${i * 50} 80 Q${i * 50 + 25} 20 ${(i + 1) * 50} 80`}
        stroke="url(#mandala1)"
        strokeWidth="1.2"
        fill="none"
      />
    ))}
    <line x1="0" y1="78" x2="800" y2="78" stroke="url(#mandala1)" strokeWidth="0.8" />
  </svg>
);

/* ─── Section-specific compositions ─── */
const HeroMotifs = () => (
  <>
    <FloralMotif className="absolute -left-20 -top-20 h-[500px] w-[500px] opacity-0" />
    <JaaliCorner className="absolute -right-16 -top-16 h-[350px] w-[350px] opacity-0" />
    <PaisleyVine className="absolute -right-6 top-1/4 h-[500px] w-auto opacity-0" />
    <MandalaBorder className="absolute bottom-0 left-0 w-full h-16 opacity-0" />
  </>
);

const DomainsMotifs = () => (
  <>
    <FloralMotif className="absolute -right-24 -bottom-24 h-[400px] w-[400px] opacity-0" />
    <PaisleyVine className="absolute -left-8 top-0 h-full w-auto opacity-0" />
    <MandalaBorder className="absolute top-0 left-0 w-full h-12 opacity-0 rotate-180" />
  </>
);

const EventsMotifs = () => (
  <>
    <JaaliCorner className="absolute -left-20 -top-20 h-[300px] w-[300px] opacity-0" />
    <FloralMotif className="absolute -right-28 bottom-10 h-[350px] w-[350px] opacity-0" />
  </>
);

const TeamMotifs = () => (
  <>
    <PaisleyVine className="absolute -right-4 top-0 h-[600px] w-auto opacity-0" />
    <JaaliCorner className="absolute -left-16 bottom-0 h-[280px] w-[280px] opacity-0" />
  </>
);

const GalleryMotifs = () => (
  <>
    <FloralMotif className="absolute -left-24 top-10 h-[320px] w-[320px] opacity-0" />
    <PaisleyVine className="absolute -right-6 bottom-0 h-[400px] w-auto opacity-0 scale-x-[-1]" />
  </>
);

export default MonumentBackground;
