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
        gsap.to(svgs, { opacity: 1, duration: 2.2, stagger: 0.4, ease: "power2.out" });
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
      {/* Readability overlay — soft center mask so text remains crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/40 dark:from-background/30 dark:via-background/50 dark:to-background/30" />
    </div>
  );
};

export default MonumentBackground;

/* ═══════════════════════════════════════════════════════
   ORNAMENTAL SVG COMPONENTS — Rich, detailed, bold
   ═══════════════════════════════════════════════════════ */

/* ─── Intricate Jaali Lattice ─── */
const JaaliCorner = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} dark:brightness-150 dark:contrast-125`} viewBox="0 0 400 400" fill="none">
    <defs>
      <linearGradient id="jl1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 20%)" stopOpacity="0.75" />
        <stop offset="50%" stopColor="hsl(230 60% 35%)" stopOpacity="0.60" />
        <stop offset="100%" stopColor="hsl(230 60% 50%)" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="jl2" x1="400" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 18%)" stopOpacity="0.70" />
        <stop offset="100%" stopColor="hsl(230 60% 42%)" stopOpacity="0.50" />
      </linearGradient>
      <linearGradient id="jl3" x1="200" y1="0" x2="200" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 55% 28%)" stopOpacity="0.60" />
        <stop offset="100%" stopColor="hsl(230 55% 55%)" stopOpacity="0.40" />
      </linearGradient>
    </defs>
    {/* Outer diamond lattice — layered */}
    <path d="M200 10 L390 200 L200 390 L10 200Z" stroke="url(#jl1)" strokeWidth="2.5" fill="none" />
    <path d="M200 35 L365 200 L200 365 L35 200Z" stroke="url(#jl2)" strokeWidth="2" fill="none" />
    <path d="M200 60 L340 200 L200 340 L60 200Z" stroke="url(#jl1)" strokeWidth="1.8" fill="none" />
    <path d="M200 85 L315 200 L200 315 L85 200Z" stroke="url(#jl3)" strokeWidth="1.5" fill="none" />
    <path d="M200 110 L290 200 L200 290 L110 200Z" stroke="url(#jl2)" strokeWidth="1.5" fill="none" />
    <path d="M200 135 L265 200 L200 265 L135 200Z" stroke="url(#jl1)" strokeWidth="1.2" fill="none" />
    <path d="M200 160 L240 200 L200 240 L160 200Z" stroke="url(#jl3)" strokeWidth="1" fill="none" />
    {/* Cross axes */}
    <line x1="200" y1="10" x2="200" y2="390" stroke="url(#jl1)" strokeWidth="1.2" />
    <line x1="10" y1="200" x2="390" y2="200" stroke="url(#jl1)" strokeWidth="1.2" />
    {/* Diagonal axes */}
    <line x1="55" y1="55" x2="345" y2="345" stroke="url(#jl3)" strokeWidth="0.8" />
    <line x1="345" y1="55" x2="55" y2="345" stroke="url(#jl3)" strokeWidth="0.8" />
    {/* Corner arches — ornamental */}
    <path d="M80 10 Q140 70 200 10" stroke="url(#jl2)" strokeWidth="1.5" fill="none" />
    <path d="M200 10 Q260 70 320 10" stroke="url(#jl2)" strokeWidth="1.5" fill="none" />
    <path d="M80 390 Q140 330 200 390" stroke="url(#jl2)" strokeWidth="1.5" fill="none" />
    <path d="M200 390 Q260 330 320 390" stroke="url(#jl2)" strokeWidth="1.5" fill="none" />
    <path d="M10 80 Q70 140 10 200" stroke="url(#jl2)" strokeWidth="1.5" fill="none" />
    <path d="M390 80 Q330 140 390 200" stroke="url(#jl2)" strokeWidth="1.5" fill="none" />
    {/* Inner star micro-detail */}
    {[0, 45, 90, 135].map((a) => (
      <line key={a} x1="200" y1="180" x2="200" y2="220"
        stroke="url(#jl1)" strokeWidth="0.8"
        transform={`rotate(${a} 200 200)`} />
    ))}
    {/* Decorative dots at intersections */}
    {[
      [200, 10], [200, 390], [10, 200], [390, 200],
      [60, 60], [340, 60], [60, 340], [340, 340],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="url(#jl1)" />
    ))}
  </svg>
);

/* ─── Rich Floral Bloom ─── */
const FloralMotif = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} dark:brightness-150 dark:contrast-125`} viewBox="0 0 500 500" fill="none">
    <defs>
      <linearGradient id="fl1" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 18%)" stopOpacity="0.75" />
        <stop offset="40%" stopColor="hsl(230 60% 30%)" stopOpacity="0.65" />
        <stop offset="100%" stopColor="hsl(230 60% 48%)" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="fl2" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 15%)" stopOpacity="0.70" />
        <stop offset="100%" stopColor="hsl(230 60% 42%)" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="fl3" x1="0" y1="250" x2="500" y2="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 55% 22%)" stopOpacity="0.65" />
        <stop offset="100%" stopColor="hsl(230 55% 50%)" stopOpacity="0.40" />
      </linearGradient>
      <radialGradient id="fl4" cx="250" cy="250" r="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 25%)" stopOpacity="0.70" />
        <stop offset="60%" stopColor="hsl(230 60% 35%)" stopOpacity="0.50" />
        <stop offset="100%" stopColor="hsl(230 60% 50%)" stopOpacity="0.25" />
      </radialGradient>
    </defs>
    {/* Central bloom core */}
    <circle cx="250" cy="250" r="18" fill="url(#fl2)" />
    <circle cx="250" cy="250" r="30" stroke="url(#fl1)" strokeWidth="2" fill="none" />
    <circle cx="250" cy="250" r="42" stroke="url(#fl3)" strokeWidth="1.5" fill="none" />
    {/* 8 large petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 250 250)`}>
        <path d="M250 205 Q270 155 250 90 Q230 155 250 205Z" fill="url(#fl1)" />
        <path d="M250 200 Q262 160 250 110 Q238 160 250 200Z" stroke="url(#fl2)" strokeWidth="1" fill="none" />
        {/* Inner petal vein */}
        <line x1="250" y1="200" x2="250" y2="100" stroke="url(#fl3)" strokeWidth="0.6" />
      </g>
    ))}
    {/* 8 smaller inter-petals */}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
      <g key={`sp-${angle}`} transform={`rotate(${angle} 250 250)`}>
        <path d="M250 210 Q260 180 250 140 Q240 180 250 210Z" fill="url(#fl3)" />
      </g>
    ))}
    {/* Outer bud ring */}
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <g key={`bud-${angle}`} transform={`rotate(${angle} 250 250)`}>
        <ellipse cx="250" cy="55" rx="10" ry="22" fill="url(#fl2)" />
        <path d="M240 55 Q250 25 260 55" stroke="url(#fl1)" strokeWidth="0.8" fill="none" />
      </g>
    ))}
    {/* Concentric ornamental rings */}
    <circle cx="250" cy="250" r="75" stroke="url(#fl1)" strokeWidth="1.2" fill="none" />
    <circle cx="250" cy="250" r="100" stroke="url(#fl3)" strokeWidth="1" fill="none" strokeDasharray="8 4" />
    <circle cx="250" cy="250" r="130" stroke="url(#fl1)" strokeWidth="0.8" fill="none" strokeDasharray="4 6" />
    <circle cx="250" cy="250" r="165" stroke="url(#fl2)" strokeWidth="0.7" fill="none" strokeDasharray="3 8" />
    <circle cx="250" cy="250" r="200" stroke="url(#fl3)" strokeWidth="0.6" fill="none" strokeDasharray="2 10" />
    {/* Corner leaf accents */}
    {[
      "M50 50 Q100 20 80 80 Q20 100 50 50Z",
      "M450 50 Q400 20 420 80 Q480 100 450 50Z",
      "M50 450 Q100 480 80 420 Q20 400 50 450Z",
      "M450 450 Q400 480 420 420 Q480 400 450 450Z",
    ].map((d, i) => (
      <path key={`leaf-${i}`} d={d} fill="url(#fl4)" />
    ))}
  </svg>
);

/* ─── Ornate Paisley Vine ─── */
const PaisleyVine = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} dark:brightness-150 dark:contrast-125`} viewBox="0 0 200 700" fill="none">
    <defs>
      <linearGradient id="pv1" x1="0" y1="0" x2="0" y2="700" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 18%)" stopOpacity="0.75" />
        <stop offset="50%" stopColor="hsl(230 60% 32%)" stopOpacity="0.65" />
        <stop offset="100%" stopColor="hsl(230 60% 48%)" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="pv2" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 55% 16%)" stopOpacity="0.70" />
        <stop offset="100%" stopColor="hsl(230 55% 40%)" stopOpacity="0.50" />
      </linearGradient>
      <linearGradient id="pv3" x1="100" y1="0" x2="100" y2="700" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 25%)" stopOpacity="0.65" />
        <stop offset="100%" stopColor="hsl(230 60% 45%)" stopOpacity="0.40" />
      </linearGradient>
    </defs>
    {/* Main vine stem — thicker, bolder */}
    <path d="M100 0 Q150 100 70 200 Q10 300 130 400 Q190 480 80 580 Q30 640 100 700"
      stroke="url(#pv1)" strokeWidth="3" fill="none" />
    {/* Secondary parallel vine */}
    <path d="M110 0 Q155 90 80 190 Q25 285 140 385 Q195 465 90 570 Q45 630 110 700"
      stroke="url(#pv3)" strokeWidth="1.2" fill="none" />
    {/* Rich leaves */}
    <path d="M75 100 Q35 70 50 30 Q80 55 95 90 Q85 95 75 100Z" fill="url(#pv2)" />
    <path d="M130 170 Q170 140 165 95 Q140 125 125 155 Q128 163 130 170Z" fill="url(#pv1)" />
    <path d="M50 280 Q10 250 15 200 Q40 235 55 265 Q52 273 50 280Z" fill="url(#pv2)" />
    <path d="M145 360 Q180 330 178 280 Q155 315 140 345 Q143 353 145 360Z" fill="url(#pv1)" />
    <path d="M70 480 Q30 450 35 400 Q55 435 70 465 Q70 473 70 480Z" fill="url(#pv2)" />
    <path d="M100 580 Q65 555 68 510 Q85 540 100 565 Q100 573 100 580Z" fill="url(#pv3)" />
    {/* Paisley drops — ornate */}
    <path d="M90 140 Q115 115 105 85 Q80 105 90 140Z" fill="url(#pv1)" />
    <path d="M92 138 Q110 118 103 95" stroke="url(#pv3)" strokeWidth="0.7" fill="none" />
    <path d="M60 340 Q35 320 45 290 Q65 310 60 340Z" fill="url(#pv2)" />
    <path d="M62 338 Q42 322 48 298" stroke="url(#pv1)" strokeWidth="0.7" fill="none" />
    <path d="M125 450 Q150 430 145 400 Q120 420 125 450Z" fill="url(#pv1)" />
    <path d="M127 448 Q145 432 142 408" stroke="url(#pv3)" strokeWidth="0.7" fill="none" />
    {/* Tiny buds along vine */}
    {[60, 230, 320, 510, 620].map((y, i) => (
      <circle key={i} cx={i % 2 === 0 ? 85 : 115} cy={y} r="3.5" fill="url(#pv1)" />
    ))}
    {/* Leaf veins */}
    <line x1="60" y1="65" x2="78" y2="95" stroke="url(#pv3)" strokeWidth="0.5" />
    <line x1="155" y1="130" x2="132" y2="162" stroke="url(#pv3)" strokeWidth="0.5" />
    <line x1="25" y1="230" x2="52" y2="272" stroke="url(#pv3)" strokeWidth="0.5" />
  </svg>
);

/* ─── Mandala Border (horizontal) ─── */
const MandalaBorder = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} dark:brightness-150 dark:contrast-125`} viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
    <defs>
      <linearGradient id="mb1" x1="0" y1="50" x2="1000" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 22%)" stopOpacity="0" />
        <stop offset="15%" stopColor="hsl(230 60% 22%)" stopOpacity="0.65" />
        <stop offset="50%" stopColor="hsl(230 60% 38%)" stopOpacity="0.75" />
        <stop offset="85%" stopColor="hsl(230 60% 22%)" stopOpacity="0.65" />
        <stop offset="100%" stopColor="hsl(230 60% 22%)" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="mb2" x1="0" y1="50" x2="1000" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 55% 30%)" stopOpacity="0" />
        <stop offset="20%" stopColor="hsl(230 55% 30%)" stopOpacity="0.55" />
        <stop offset="50%" stopColor="hsl(230 55% 45%)" stopOpacity="0.65" />
        <stop offset="80%" stopColor="hsl(230 55% 30%)" stopOpacity="0.55" />
        <stop offset="100%" stopColor="hsl(230 55% 30%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Scallop arches */}
    {Array.from({ length: 20 }).map((_, i) => (
      <path key={i}
        d={`M${i * 50} 95 Q${i * 50 + 25} 15 ${(i + 1) * 50} 95`}
        stroke="url(#mb1)" strokeWidth="1.8" fill="none" />
    ))}
    {/* Inner smaller arches */}
    {Array.from({ length: 20 }).map((_, i) => (
      <path key={`inner-${i}`}
        d={`M${i * 50 + 10} 95 Q${i * 50 + 25} 40 ${i * 50 + 40} 95`}
        stroke="url(#mb2)" strokeWidth="1" fill="none" />
    ))}
    {/* Base lines */}
    <line x1="0" y1="96" x2="1000" y2="96" stroke="url(#mb1)" strokeWidth="1.5" />
    <line x1="0" y1="92" x2="1000" y2="92" stroke="url(#mb2)" strokeWidth="0.6" />
    {/* Apex dots */}
    {Array.from({ length: 20 }).map((_, i) => (
      <circle key={`dot-${i}`} cx={i * 50 + 25} cy="18" r="2.5" fill="url(#mb1)" />
    ))}
  </svg>
);

/* ─── Small Rosette (used as scatter accent) ─── */
const Rosette = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} dark:brightness-150 dark:contrast-125`} viewBox="0 0 120 120" fill="none">
    <defs>
      <radialGradient id="rs1" cx="60" cy="60" r="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(230 60% 20%)" stopOpacity="0.70" />
        <stop offset="70%" stopColor="hsl(230 60% 35%)" stopOpacity="0.50" />
        <stop offset="100%" stopColor="hsl(230 60% 50%)" stopOpacity="0.25" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="8" fill="url(#rs1)" />
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <g key={a} transform={`rotate(${a} 60 60)`}>
        <path d="M60 48 Q66 32 60 18 Q54 32 60 48Z" fill="url(#rs1)" />
      </g>
    ))}
    <circle cx="60" cy="60" r="22" stroke="url(#rs1)" strokeWidth="0.8" fill="none" />
    <circle cx="60" cy="60" r="50" stroke="url(#rs1)" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
  </svg>
);

/* ═══════════════════════════════════════════════════════
   SECTION COMPOSITIONS
   ═══════════════════════════════════════════════════════ */

const HeroMotifs = () => (
  <>
    {/* Floral — always visible including mobile */}
    <FloralMotif className="absolute -left-28 -top-28 h-[400px] w-[400px] md:h-[600px] md:w-[600px] opacity-0" />
    {/* Everything else hidden on mobile to avoid clutter */}
    <JaaliCorner className="absolute -right-20 -top-20 h-[450px] w-[450px] opacity-0 hidden md:block" />
    <PaisleyVine className="absolute -right-8 top-[45%] h-[500px] w-auto opacity-0 hidden md:block" />
    <MandalaBorder className="absolute bottom-0 left-0 w-full h-20 opacity-0 hidden md:block" />
    <Rosette className="absolute left-[15%] bottom-[20%] h-[100px] w-[100px] opacity-0 hidden lg:block" />
    <Rosette className="absolute right-[25%] top-[15%] h-[80px] w-[80px] opacity-0 hidden lg:block" />
  </>
);

const DomainsMotifs = () => (
  <>
    <FloralMotif className="absolute -right-32 -bottom-32 h-[350px] w-[350px] md:h-[550px] md:w-[550px] opacity-0" />
    {/* Vine moved down to avoid jaali overlap */}
    <PaisleyVine className="absolute -left-10 top-[40%] h-[60%] w-auto opacity-0 hidden md:block" />
    <MandalaBorder className="absolute top-0 left-0 w-full h-16 opacity-0 rotate-180 hidden md:block" />
    <JaaliCorner className="absolute left-[10%] -bottom-16 h-[280px] w-[280px] opacity-0 hidden lg:block" />
    <Rosette className="absolute right-[10%] top-[20%] h-[90px] w-[90px] opacity-0 hidden lg:block" />
  </>
);

const EventsMotifs = () => (
  <>
    <JaaliCorner className="absolute -left-24 -top-24 h-[400px] w-[400px] opacity-0 hidden md:block" />
    <FloralMotif className="absolute -right-36 bottom-0 h-[350px] w-[350px] md:h-[500px] md:w-[500px] opacity-0" />
    {/* Vine on right moved down */}
    <PaisleyVine className="absolute right-[5%] top-[35%] h-[500px] w-auto opacity-0 hidden lg:block" />
    <Rosette className="absolute left-[20%] bottom-[10%] h-[70px] w-[70px] opacity-0 hidden lg:block" />
  </>
);

const TeamMotifs = () => (
  <>
    {/* Right vine moved down */}
    <PaisleyVine className="absolute -right-6 top-[30%] h-[600px] w-auto opacity-0 hidden md:block" />
    <JaaliCorner className="absolute -left-20 bottom-0 h-[380px] w-[380px] opacity-0 hidden md:block" />
    <FloralMotif className="absolute left-[5%] -top-20 h-[300px] w-[300px] md:h-[400px] md:w-[400px] opacity-0" />
    <Rosette className="absolute right-[15%] bottom-[15%] h-[80px] w-[80px] opacity-0 hidden lg:block" />
  </>
);

const GalleryMotifs = () => (
  <>
    <FloralMotif className="absolute -left-28 top-0 h-[300px] w-[300px] md:h-[450px] md:w-[450px] opacity-0" />
    <PaisleyVine className="absolute -right-8 bottom-0 h-[500px] w-auto opacity-0 scale-x-[-1] hidden md:block" />
    <JaaliCorner className="absolute right-[5%] -top-16 h-[320px] w-[320px] opacity-0 hidden md:block" />
    <Rosette className="absolute left-[30%] bottom-[5%] h-[90px] w-[90px] opacity-0 hidden lg:block" />
  </>
);
