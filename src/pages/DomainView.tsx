import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { domains } from "@/data/domains";

const DomainView = () => {
  const { id } = useParams<{ id: string }>();
  const domain = domains.find((d) => d.id === id);

  if (!domain) {
    return (
      <Layout>
        <section className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Domain not found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
        </section>
      </Layout>
    );
  }

  const Icon = domain.icon;
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1 });

  return (
    <Layout>
      <section className="container py-20">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5">
            <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{domain.title}</h1>
            <p className="text-muted-foreground mt-1">{domain.desc}</p>
          </div>
        </div>

        <div className="mt-5 w-16 h-0.5 bg-primary/30 rounded-full" />

        <div className="mt-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-8">Related Events</h2>
          <div ref={gridRef} className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            {domain.events.map((event) => (
              <EventCard key={event.name} name={event.name} description={event.description} />
            ))}
          </div>
        </div>

        <motion.div className="mt-12" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            View All Events <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default DomainView;
