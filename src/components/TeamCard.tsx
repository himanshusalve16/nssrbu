import { Instagram, Linkedin } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

interface TeamCardProps {
  name: string;
  role: string;
}

const TeamCard = ({ name, role }: TeamCardProps) => {
  return (
    <AnimatedCard className="rounded-xl border border-border/60 bg-card p-7 text-center">
      <div className="mx-auto h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center mb-5">
        <span className="font-serif font-bold text-2xl text-primary/60">
          {name.charAt(0)}
        </span>
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
