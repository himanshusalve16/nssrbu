import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import EventImageCarousel from "@/components/EventImageCarousel";

interface EventCardProps {
  name: string;
  description: string;
  galleryLink?: string;
  images?: string[];
  showCarousel?: boolean;
}

const EventCard = ({ name, description, galleryLink = "/gallery", images, showCarousel = false }: EventCardProps) => {
  return (
    <AnimatedCard className="rounded-xl border border-border/60 bg-card overflow-hidden">
      {showCarousel ? (
        <EventImageCarousel images={images} alt={name} />
      ) : (
        <div className="aspect-[16/10] bg-muted/30 flex items-center justify-center">
          <svg className="h-8 w-8 text-muted-foreground/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif font-bold text-foreground text-lg">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <Link
          to={galleryLink}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View Gallery <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </AnimatedCard>
  );
};

export default EventCard;
