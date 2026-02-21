import { useState } from "react";
import { Image } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import MonumentBackground from "@/components/MonumentBackground";

const albums = [
  "All",
  "Independence Day",
  "Yoga Day",
  "Republic Day",
  "Happython",
  "Prayas",
  "Drishtikon",
  "PRERNA 16.0",
  "Health Checkup",
  "Junoon",
];

const galleryItems = [
  { id: 1, event: "Independence Day", alt: "Flag hoisting ceremony" },
  { id: 2, event: "Independence Day", alt: "Cultural performance" },
  { id: 3, event: "Yoga Day", alt: "Group yoga session", src: "/YOGA1.jpg" },
  { id: 4, event: "Yoga Day", alt: "Meditation session", src: "/YOGA2.jpg" },
  { id: 5, event: "Republic Day", alt: "Parade assembly", src: "/RepublicDay1.jpeg"},
  { id: 16, event: "Republic Day", alt: "Parade assembly 2", src: "/RepublicDay2.jpeg" },
  { id: 17, event: "Republic Day", alt: "Parade assembly 3", src: "/RepublicDay3.jpeg" },
  { id: 6, event: "Prayas", alt: "Community service activity", src: "/Prayas2.jpg" },
  { id: 7, event: "Prayas", alt: "Village visit", src: "/Prayas3.jpg" },
  { id: 8, event: "PRERNA 16.0", alt: "Camp activities",src:"/prerna.jpeg" },
  { id: 20, event: "PRERNA 16.0", alt: "Camp activities",src:"/prerna3.jpeg" },
  { id: 9, event: "PRERNA 16.0", alt: "Group discussion",src:"/prerna2.jpeg" },
  { id: 10, event: "Drishtikon", alt: "Workshop session",src:"/drishtikon.jpeg" },
  { id: 11, event: "Health Checkup", alt: "Health camp", src:"/healthcheckup.jpeg" },
  { id: 12, event: "Happython", alt: "Community engagement", src: "/Happython1.jpg" },
  { id: 14, event: "Junoon", alt: "Creative workshop",src:"junoon3.jpeg" },
  { id: 18, event: "Junoon", alt: "Creative workshop",src:"junoon2.jpeg" },
  { id: 19, event: "Junoon", alt: "Creative workshop",src:"junoon.jpeg" },
  { id: 15, event: "Independence Day", alt: "Speech event" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.event === filter);

  return (
    <Layout>
      <section className="relative">
        <MonumentBackground variant="gallery" />
        <div className="container relative py-20">
        <SectionHeading
          title="Gallery"
          subtitle="Visual records from NSS events and camps."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {albums.map((album) => (
            <button
              key={album}
              onClick={() => setFilter(album)}
              className={`relative px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                filter === album
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {album}
              {filter === album && (
                <motion.div
                  layoutId="galleryFilter"
                  className="absolute inset-0 bg-primary/5 border border-primary/20 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="group aspect-square rounded-xl border border-border/60 bg-muted/30 flex flex-col items-center justify-center gap-2 overflow-hidden cursor-pointer hover:border-primary/20 transition-colors"
              >
                {item.src ? (
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <Image className="h-7 w-7 text-muted-foreground/40 group-hover:text-primary/40 transition-colors" strokeWidth={1.5} />
                    <span className="text-xs text-muted-foreground text-center px-3">{item.alt}</span>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No public available for this event yet.
          </p>
        )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
