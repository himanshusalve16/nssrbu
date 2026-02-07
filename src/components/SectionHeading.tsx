import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <div ref={ref} className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-5 mx-auto w-16 h-0.5 bg-primary/30 rounded-full" />
    </div>
  );
};

export default SectionHeading;
