import { useState } from "react";
import { Image } from "lucide-react";
import Layout from "@/components/Layout";

const albums = [
  "All",
  "Independence Day",
  "Yoga Day",
  "Republic Day",
  "Aarambh Foundation Week",
  "Happython",
  "Prayas",
  "Drishtikon",
  "PRERNA 16.0",
  "Health Checkup",
  "Junoon",
];

// Placeholder gallery items
const galleryItems = [
  { id: 1, event: "Independence Day", alt: "Flag hoisting ceremony" },
  { id: 2, event: "Independence Day", alt: "Cultural performance" },
  { id: 3, event: "Yoga Day", alt: "Group yoga session" },
  { id: 4, event: "Yoga Day", alt: "Meditation session" },
  { id: 5, event: "Republic Day", alt: "Parade assembly" },
  { id: 6, event: "Prayas", alt: "Community service activity" },
  { id: 7, event: "Prayas", alt: "Village visit" },
  { id: 8, event: "PRERNA 16.0", alt: "Camp activities" },
  { id: 9, event: "PRERNA 16.0", alt: "Group discussion" },
  { id: 10, event: "Drishtikon", alt: "Workshop session" },
  { id: 11, event: "Health Checkup", alt: "Health camp" },
  { id: 12, event: "Happython", alt: "Community engagement" },
  { id: 13, event: "Aarambh Foundation Week", alt: "Opening ceremony" },
  { id: 14, event: "Junoon", alt: "Creative workshop" },
  { id: 15, event: "Independence Day", alt: "Speech event" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.event === filter);

  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-3xl font-bold text-center text-foreground">Gallery</h1>
        <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
          Visual records from NSS events and camps.
        </p>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {albums.map((album) => (
            <button
              key={album}
              onClick={() => setFilter(album)}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-colors ${
                filter === album
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {album}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-lg border border-border bg-muted flex flex-col items-center justify-center gap-2 overflow-hidden"
            >
              <Image className="h-8 w-8 text-muted-foreground" />
              <span className="text-xs text-muted-foreground text-center px-2">{item.alt}</span>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No images available for this event yet.
          </p>
        )}
      </section>
    </Layout>
  );
};

export default Gallery;
