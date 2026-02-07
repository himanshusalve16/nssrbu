import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-xl text-foreground tracking-tight">
              NSS Unit – Ramdeobaba University
            </h3>
            <p className="text-primary/70 mt-2 font-serif text-base italic">
              सेवा परमः धर्मः
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} NSS Unit, Ramdeobaba University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
