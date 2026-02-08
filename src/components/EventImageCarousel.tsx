import { useState } from "react";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventImageCarouselProps {
  images?: string[];
  alt?: string;
}

const EventImageCarousel = ({ images, alt = "Event" }: EventImageCarouselProps) => {
  const [current, setCurrent] = useState(0);

  // Placeholder state when no real images
  const hasImages = images && images.length > 0;
  const total = hasImages ? images.length : 3;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative aspect-[16/10] bg-muted/30 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {hasImages ? (
            <img src={images[current]} alt={`${alt} ${current + 1}`} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-1.5">
              <Image className="h-8 w-8 text-muted-foreground/30" strokeWidth={1.5} />
              <span className="text-[10px] text-muted-foreground/40">{current + 1} / {total}</span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {total > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-background/80 border border-border/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-background/80 border border-border/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-primary" : "w-1.5 bg-foreground/20"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventImageCarousel;
