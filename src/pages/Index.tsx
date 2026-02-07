import { Link } from "react-router-dom";
import { CalendarDays, Tent } from "lucide-react";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            NSS UNIT – RAMDEOBABA UNIVERSITY
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-serif opacity-90">
            सेवा परमः धर्मः
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg opacity-80 leading-relaxed">
            The National Service Scheme unit at Ramdeobaba University engages students in community
            service, social awareness drives, and development activities throughout the academic year.
          </p>
          <Link
            to="/events"
            className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Register for Upcoming Events
          </Link>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-center text-foreground mb-10">Explore Our Activities</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link
            to="/events"
            className="group flex items-center gap-5 rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <CalendarDays className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                Regular Events
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Annual celebrations, drives, and awareness programs.
              </p>
            </div>
          </Link>

          <Link
            to="/events"
            className="group flex items-center gap-5 rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Tent className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground text-lg group-hover:text-accent transition-colors">
                Special Camps
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Intensive camps focused on social impact and learning.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
