"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import SubHero from "@/components/SubHero";

export default function Events() {
  return (
    <div
      className="min-h-screen "
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <main className="py-6 px-6 md:px-12">
        <SubHero
          imageSrc="/images/6051031874487914218.jpg"
          title="Events"
          pillText="Happenings"
          subtitle="Stay updated on gatherings, outreaches, and special moments at The Compass Assembly."
        />

        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <p
              className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80"
              style={{ color: "var(--color-primary)" }}
            >
              Happenings
            </p>
            <h1
              className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest"
              style={{ color: "var(--color-foreground)" }}
            >
              Recent Events
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
              Catch up on what’s been happening across The Compass Assembly.
            </p>
          </div>

          {/* Events showcase (static 3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Youth Conference",
                image: "/images/6051031874487914218.jpg",
                blurb:
                  "Highlights and moments from our latest youth gathering.",
              },
              {
                title: "Community Outreach",
                image: "/images/6051031874487914224.jpg",
                blurb: "Serving our neighborhoods together.",
              },
              {
                title: "Worship Night",
                image: "/images/6051031874487914151.jpg",
                blurb: "An evening of praise, prayer, and testimonies.",
              },
            ].map((evt, i) => (
              <a
                key={i}
                href="/events"
                className="group relative block w-full h-64 md:h-80 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute left-4 bottom-4 text-left text-white max-w-[80%]">
                  <h3 className="text-lg md:text-xl font-bold leading-tight">
                    {evt.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm opacity-80">
                    {evt.blurb}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Upcoming events grid */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-left mb-8">
              <p
                className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80"
                style={{ color: "var(--color-primary)" }}
              >
                Calendar
              </p>
              <h2
                className="mt-3 text-2xl md:text-4xl font-black uppercase tracking-widest"
                style={{ color: "var(--color-foreground)" }}
              >
                Upcoming Events
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Prayer Rally",
                  date: "Sun, Feb 22",
                  location: "Rumumasi",
                  image: "/images/6051031874487914218.jpg",
                  blurb: "Join us for a powerful time of prayer and worship.",
                },
                {
                  title: "Youth Hangout",
                  date: "Sat, Mar 1",
                  location: "Rumuosi",
                  image: "/images/6051031874487914224.jpg",
                  blurb: "Fun, fellowship, and growth for our youths.",
                },
                {
                  title: "Community Outreach",
                  date: "Sat, Mar 8",
                  location: "Oyigbo",
                  image: "/images/6051031874487914151.jpg",
                  blurb: "Serving our neighborhoods together.",
                },
              ].map((evt, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative block w-full h-64 md:h-80 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                >
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute left-4 bottom-4 right-4 text-left text-white">
                    <p className="text-xs md:text-sm opacity-80">
                      {evt.date} • {evt.location}
                    </p>
                    <h3 className="mt-1 text-lg md:text-xl font-bold leading-tight">
                      {evt.title}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm opacity-80">
                      {evt.blurb}
                    </p>
                    <div className="mt-4">
                      <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-(--color-primary) font-bold shadow">
                        Learn More
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
