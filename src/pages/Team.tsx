import Layout from "@/components/Layout";
import TeamCard from "@/components/TeamCard";
import { FileDown } from "lucide-react";

const programIncharge = [{ name: "Dr. A. B. Sharma", role: "Program Incharge" }];

const secretaries = [
  { name: "Rahul Deshmukh", role: "Secretary" },
  { name: "Priya Wankhede", role: "Secretary" },
];

const jointSecretaries = [
  { name: "Amit Patil", role: "Joint Secretary" },
  { name: "Sneha Kulkarni", role: "Joint Secretary" },
  { name: "Rohan Thakur", role: "Joint Secretary" },
];

const otherPositions = [
  { name: "Aditi Joshi", role: "Event Coordinator" },
  { name: "Vikram Rathi", role: "Media Head" },
  { name: "Neha Gupta", role: "Documentation Head" },
  { name: "Saurabh More", role: "Logistics Head" },
];

const volunteerYears = ["2024–25", "2023–24", "2022–23", "2021–22"];

const Team = () => {
  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-3xl font-bold text-center text-foreground">Our Team</h1>
        <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
          The dedicated individuals who lead and organize NSS activities at Ramdeobaba University.
        </p>

        {/* Program Incharge */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Program Incharge</h2>
          <div className="flex justify-center">
            {programIncharge.map((m) => (
              <div key={m.name} className="w-full max-w-xs">
                <TeamCard name={m.name} role={m.role} />
              </div>
            ))}
          </div>
        </div>

        {/* Secretaries */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Secretaries</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {secretaries.map((m) => (
              <TeamCard key={m.name} name={m.name} role={m.role} />
            ))}
          </div>
        </div>

        {/* Joint Secretaries */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Joint Secretaries</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {jointSecretaries.map((m) => (
              <TeamCard key={m.name} name={m.name} role={m.role} />
            ))}
          </div>
        </div>

        {/* Other Positions */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Other Position Holders</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherPositions.map((m) => (
              <TeamCard key={m.name} name={m.name} role={m.role} />
            ))}
          </div>
        </div>

        {/* Volunteer Lists */}
        <div className="mt-20">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Volunteer Lists</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {volunteerYears.map((year) => (
              <a
                key={year}
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <FileDown className="h-4 w-4 text-primary" />
                {year} Volunteers
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
