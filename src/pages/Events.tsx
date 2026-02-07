import { useState } from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";

const regularEvents = [
  { name: "Independence Day", description: "Commemorating India's independence with flag hoisting ceremonies and patriotic programs." },
  { name: "Yoga Day", description: "Promoting physical and mental well-being through organized yoga sessions on campus." },
  { name: "Republic Day", description: "Celebrating the adoption of the Constitution with cultural programs and awareness activities." },
  { name: "Aarambh Foundation Week", description: "Foundational week marking the beginning of NSS activities for the academic session." },
  { name: "Happython", description: "A drive focused on spreading happiness through community engagement and social initiatives." },
  { name: "National Youth Day", description: "Honoring the birth anniversary of Swami Vivekananda with youth-centric programs." },
  { name: "Cleanliness Drive", description: "Organized campus and community cleaning initiatives promoting Swachh Bharat values." },
  { name: "National Foundation Day", description: "Marking the foundation of NSS with reflections on service and community development." },
];

const specialCamps = [
  { name: "Prayas", description: "An intensive social outreach camp focusing on rural development and community service." },
  { name: "House of Laws", description: "Awareness camp on legal rights, civic duties, and constitutional literacy." },
  { name: "Drishtikon", description: "A perspective-building camp centered on social issues and critical thinking." },
  { name: "Health Checkup", description: "Organizing free health checkup camps for underserved communities." },
  { name: "Junoon", description: "A passion-driven camp combining creative expression with social awareness." },
  { name: "PRERNA 16.0", description: "Flagship annual camp focused on holistic development and community immersion." },
];

const Events = () => {
  const [tab, setTab] = useState<"regular" | "camps">("regular");

  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-3xl font-bold text-center text-foreground">Events & Camps</h1>
        <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
          A comprehensive record of all activities conducted by the NSS Unit.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-10 gap-2">
          <button
            onClick={() => setTab("regular")}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
              tab === "regular"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Regular Events
          </button>
          <button
            onClick={() => setTab("camps")}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
              tab === "camps"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Special Camps
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(tab === "regular" ? regularEvents : specialCamps).map((event) => (
            <EventCard key={event.name} name={event.name} description={event.description} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
