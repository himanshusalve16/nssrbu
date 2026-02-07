import { Link } from "react-router-dom";
import { Image } from "lucide-react";

interface EventCardProps {
  name: string;
  description: string;
  galleryLink?: string;
}

const EventCard = ({ name, description, galleryLink = "/gallery" }: EventCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-video bg-muted flex items-center justify-center">
        <Image className="h-10 w-10 text-muted-foreground" />
      </div>
      <div className="p-5">
        <h3 className="font-serif font-bold text-foreground text-lg">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <Link
          to={galleryLink}
          className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
        >
          View Gallery →
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
