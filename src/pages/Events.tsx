import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import MonumentBackground from "@/components/MonumentBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RegularEvent = {
  name: string;
  description: string;
  images?: string[];
};

const regularEvents: RegularEvent[] = [
  { name: "Independence Day", description: "Commemorating India's independence with flag hoisting ceremonies and patriotic programs.", images: ["/RepublicDay1.jpeg"] },
  { name: "Yoga Day", description: "Promoting physical and mental well-being through organized yoga sessions on campus.", images: ["/YOGA1.jpg", "/YOGA2.jpg"] },
  { name: "Republic Day", description: "Celebrating the adoption of the Constitution with cultural programs and awareness activities.", images: ["/RepublicDay1.jpeg", "/RepublicDay2.jpeg", "/RepublicDay3.jpeg"] },
  { name: "Happython", description: "A drive focused on spreading happiness through community engagement and social initiatives.", images: ["/Happython1.jpg"] },
  { name: "National Youth Day", description: "Honoring the birth anniversary of Swami Vivekananda with youth-centric programs.", images: ["/nationalyouthday.jpeg", "/nationalyouthday2.jpeg"] },
  { name: "Cleanliness Drive", description: "Organized campus and community cleaning initiatives promoting Swachh Bharat values.", images: ["/cleanliness.jpeg", "/cleanliness2.jpeg"] },
  { name: "National Foundation Day", description: "Marking the foundation of NSS with reflections on service and community development.", images: ["/nationalfoundationday.jpeg"] },
  { name: "Drishtikon", description: "A creative perspective through the lens, showcasing the talent of our volunteers.", images: ["/drishtikon.jpeg"] },
];

const specialCamps = [
  { name: "Health Checkup", description: "Organizing free health checkup camps for underserved communities.", images: ["/healthcheckup.jpeg"] },
  { name: "Junoon", description: "A passion-driven camp combining creative expression with social awareness.", images: ["/junoon3.jpeg","/junoon.jpeg", "/junoon2.jpeg"] },
  { name: "PRERNA 16.0", description: "Flagship annual camp focused on holistic development and community immersion.", images: ["/Prayas2.jpg", "/Prayas3.jpg"] },
  { name: "Blood Donation", description: "Organizing blood donation drives to support local hospitals.", images: ["/blooddonation.jpeg"] },
];

const Events = () => {
  const [tab, setTab] = useState<"regular" | "camps">("regular");
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08 });

  const items = tab === "regular" ? regularEvents : specialCamps;

  return (
    <Layout>
      <section className="relative">
        <MonumentBackground variant="events" />
        <div className="container relative py-20">
          <SectionHeading
            title="Events & Camps"
            subtitle="A comprehensive record of all activities conducted by the NSS Unit."
          />

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {(["regular", "camps"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${tab === t
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t === "regular" ? "Regular Events" : "Special Camps"}
                {tab === t && (
                  <motion.div
                    layoutId="eventTab"
                    className="absolute inset-0 bg-primary/5 border border-primary/20 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((event) => (
                  <EventCard
                    key={event.name}
                    name={event.name}
                    description={event.description}
                    images={event.images}
                    showCarousel={event.images && event.images.length > 0}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
