import { Instagram, Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
}

const TeamCard = ({ name, role }: TeamCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-center">
      <div className="mx-auto h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-4">
        <span className="font-serif font-bold text-2xl text-muted-foreground">
          {name.charAt(0)}
        </span>
      </div>
      <h3 className="font-serif font-bold text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{role}</p>
      <div className="flex justify-center gap-3 mt-4">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
          <Instagram className="h-4 w-4" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
