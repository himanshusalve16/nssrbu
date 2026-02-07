import { Link } from "react-router-dom";
import { CalendarDays, Tent, ArrowRight, Users, Award, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCard from "@/components/AnimatedCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { label: "Volunteers", value: 200, icon: Users, suffix: "+" },
  { label: "Events/Year", value: 30, icon: CalendarDays, suffix: "+" },
  { label: "Years Active", value: 15, icon: Award, suffix: "+" },
  { label: "Lives Impacted", value: 5000, icon: Heart, suffix: "+" },
];

const StatCard = ({ label, value, icon: Icon, suffix }: { label: string; value: number; icon: typeof Users; suffix: string }) => {
  const { value: count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center p-6">
      <Icon className="h-6 w-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
      <div className="text-3xl md:text-4xl font-bold text-foreground font-serif">
        {count}{suffix}
      </div>
      <p className="mt-1 text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.15 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-hero]");
    gsap.set(children, { opacity: 0, y: 30 });
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
        <div ref={heroRef} className="container relative py-24 md:py-40 text-center">
          <div data-hero className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 text-xs font-medium text-primary tracking-widest uppercase">
            National Service Scheme
          </div>
          <h1 data-hero className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground tracking-tight">
            NSS Unit
            <br />
            <span className="text-primary">Ramdeobaba University</span>
          </h1>
          <p data-hero className="mt-6 text-xl md:text-2xl font-serif text-primary/60 italic">
            सेवा परमः धर्मः
          </p>
          <p data-hero className="mt-8 max-w-xl mx-auto text-base text-muted-foreground leading-relaxed">
            The National Service Scheme unit at Ramdeobaba University engages students in community
            service, social awareness drives, and development activities throughout the academic year.
          </p>
          <motion.div data-hero whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/events"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              Register for Upcoming Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container py-24">
        <SectionHeading
          title="Explore Our Activities"
          subtitle="From regular events to intensive social outreach camps, discover the breadth of our community work."
        />
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <AnimatedCard className="rounded-xl border border-border/60 bg-card overflow-hidden">
            <Link to="/events" className="group block p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 mb-5">
                <CalendarDays className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-bold text-foreground text-xl group-hover:text-primary transition-colors">
                Regular Events
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Annual celebrations, drives, and awareness programs organized throughout the academic year.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                View events <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </AnimatedCard>

          <AnimatedCard className="rounded-xl border border-border/60 bg-card overflow-hidden">
            <Link to="/events" className="group block p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5 mb-5">
                <Tent className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-bold text-foreground text-xl group-hover:text-accent transition-colors">
                Special Camps
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Intensive camps focused on social impact, community immersion, and experiential learning.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                View camps <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-border/60">
        <div className="container py-24">
          <SectionHeading
            title="What We Do"
            subtitle="Our activities span across social service, health awareness, environmental sustainability, and skill development."
          />
          <WhatWeDoGrid />
        </div>
      </section>
    </Layout>
  );
};

const domains = [
  { icon: Heart, title: "Community Service", desc: "Village adoption, cleanliness drives, and outreach programs." },
  { icon: Target, title: "Awareness Campaigns", desc: "Health, legal rights, and environmental awareness initiatives." },
  { icon: Users, title: "Youth Development", desc: "Leadership training, workshops, and skill-building activities." },
  { icon: Award, title: "National Integration", desc: "Celebrations and programs promoting unity and civic duty." },
];

const WhatWeDoGrid = () => {
  const ref = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.12 });
  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {domains.map((d) => (
        <AnimatedCard key={d.title} className="rounded-xl border border-border/60 bg-card p-6 text-center">
          <d.icon className="h-7 w-7 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="font-serif font-bold text-foreground text-base">{d.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
        </AnimatedCard>
      ))}
    </div>
  );
};

export default Home;
