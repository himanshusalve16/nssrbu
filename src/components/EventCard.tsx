import { Link } from "react-router-dom";
import { Image, ArrowRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

interface EventCardProps {
  name: string;
  description: string;
  galleryLink?: string;
}

const EventCard = ({ name, description, galleryLink = "/gallery" }: EventCardProps) => {
  return (
    <AnimatedCard className="rounded-xl border border-border/60 bg-card overflow-hidden">
      <div className="aspect-[16/10] bg-muted/50 flex items-center justify-center">
        <Image className="h-8 w-8 text-muted-foreground/40" strokeWidth={1.5} />
      </div>
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
