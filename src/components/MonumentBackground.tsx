const MonumentBackground = ({ className = "", variant = "hero" }: { className?: string; variant?: "hero" | "domains" }) => {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* India Gate - left side */}
        <svg className="absolute -left-8 bottom-0 h-[70%] w-auto opacity-[0.03] text-primary" viewBox="0 0 200 400" fill="currentColor">
          <rect x="20" y="100" width="20" height="300" />
          <rect x="160" y="100" width="20" height="300" />
          <rect x="10" y="80" width="40" height="20" rx="2" />
          <rect x="150" y="80" width="40" height="20" rx="2" />
          <path d="M10 80 Q100 -20 190 80" fill="currentColor" />
          <rect x="0" y="70" width="200" height="12" rx="2" />
          <rect x="60" y="100" width="80" height="8" />
          <rect x="80" y="108" width="40" height="60" rx="20" />
          <rect x="85" y="40" width="30" height="30" rx="15" />
        </svg>
        {/* Qutub Minar - right side */}
        <svg className="absolute -right-4 bottom-0 h-[60%] w-auto opacity-[0.025] text-primary" viewBox="0 0 120 500" fill="currentColor">
          <path d="M35 500 L25 100 Q60 0 95 100 L85 500Z" />
          <rect x="20" y="120" width="80" height="6" rx="1" />
          <rect x="22" y="200" width="76" height="6" rx="1" />
          <rect x="25" y="280" width="70" height="6" rx="1" />
          <rect x="28" y="360" width="64" height="6" rx="1" />
          <circle cx="60" cy="60" r="12" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Lotus Temple - center subtle */}
      <svg className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[40%] w-auto opacity-[0.02] text-primary" viewBox="0 0 300 200" fill="currentColor">
        <ellipse cx="150" cy="200" rx="120" ry="20" />
        <path d="M150 20 Q130 80 100 160 Q150 130 150 130 Q150 130 200 160 Q170 80 150 20Z" />
        <path d="M100 60 Q80 120 60 170 Q100 140 110 140 Q120 140 140 160 Q120 100 100 60Z" />
        <path d="M200 60 Q220 120 240 170 Q200 140 190 140 Q180 140 160 160 Q180 100 200 60Z" />
      </svg>
    </div>
  );
};

export default MonumentBackground;
