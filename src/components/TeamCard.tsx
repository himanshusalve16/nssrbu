import { Instagram, Linkedin, User } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
  return (
    <AnimatedCard className="rounded-xl border border-border/60 bg-card p-7 text-center group">
      <div className="mx-auto h-24 w-24 rounded-full bg-primary/5 flex items-center justify-center mb-5 overflow-hidden border-2 border-primary/10 transition-shadow group-hover:shadow-lg group-hover:shadow-primary/5">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <User className="h-8 w-8 text-primary/40" strokeWidth={1.5} />
        )}
      </div>
      <h3 className="font-serif font-bold text-foreground text-base">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{role}</p>
      <div className="flex justify-center gap-2 mt-5">
        <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" aria-label="Instagram">
          <Instagram className="h-4 w-4" />
        </a>
        <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </AnimatedCard>
  );
};

export default TeamCard;
