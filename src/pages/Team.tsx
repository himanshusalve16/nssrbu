import Layout from "@/components/Layout";
import TeamCard from "@/components/TeamCard";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileDown } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

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

interface TeamSectionProps {
  title: string;
  members: { name: string; role: string }[];
  maxCols?: string;
}

const TeamSection = ({ title, members, maxCols = "max-w-4xl" }: TeamSectionProps) => {
  const ref = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1 });
  return (
    <div className="mt-16">
      <h2 className="text-lg font-bold text-primary mb-8 text-center tracking-wide uppercase text-sm">{title}</h2>
      <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-${members.length > 2 ? (members.length > 3 ? "4" : "3") : "2"} gap-6 ${maxCols} mx-auto`}>
        {members.map((m) => (
          <TeamCard key={m.name} name={m.name} role={m.role} />
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const volRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08 });

  return (
    <Layout>
      <section className="container py-20">
        <SectionHeading
          title="Our Team"
          subtitle="The dedicated individuals who lead and organize NSS activities at Ramdeobaba University."
        />

        {/* Program Incharge */}
        <div className="mt-10">
          <h2 className="text-sm font-bold text-primary mb-8 text-center tracking-widest uppercase">Program Incharge</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <TeamCard name={programIncharge[0].name} role={programIncharge[0].role} />
            </div>
          </div>
        </div>

        <TeamSection title="Secretaries" members={secretaries} maxCols="max-w-2xl" />
        <TeamSection title="Joint Secretaries" members={jointSecretaries} maxCols="max-w-4xl" />
        <TeamSection title="Other Position Holders" members={otherPositions} />

        {/* Volunteer Lists */}
        <div className="mt-24 pt-12 border-t border-border/40">
          <h2 className="text-sm font-bold text-primary mb-8 text-center tracking-widest uppercase">Volunteer Lists</h2>
          <div ref={volRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {volunteerYears.map((year) => (
              <AnimatedCard key={year} className="rounded-xl border border-border/60 bg-card">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2.5 px-4 py-4 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <FileDown className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  {year} Volunteers
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
