"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Star } from "lucide-react";
import { useState } from "react";
import SermonCard from "@/components/SermonCard";

export default function Sermons() {
  const [searchTerm, setSearchTerm] = useState("");

  const generalSermons = [
    {
      id: 4,
      title: "The Power of Prayer",
      date: "Feb 1, 2026",
      description:
        "Discover how prayer transforms lives and strengthens our relationship with God.",
      image:
        "https://i.pinimg.com/1200x/8c/89/34/8c89340468513d6209a80b0c282999b4.jpg",
      speaker: "Favour Osiri",
    },
    {
      id: 5,
      title: "Grace Abounding",
      date: "Jan 25, 2026",
      description: "Understanding the depth of God's grace in our daily lives.",
      image:
        "https://i.pinimg.com/736x/99/79/fb/9979fb21e6d163da4a121dcd5f8bc3ff.jpg",
      speaker: "Wisdom Osiri",
    },
    {
      id: 6,
      title: "Community and Fellowship",
      date: "Jan 18, 2026",
      description: "The importance of building strong relationships in faith.",
      image:
        "https://i.pinimg.com/1200x/52/d6/2a/52d62a69475deae8837581bb7c506c94.jpg",
      speaker: "Favour Osiri",
    },
    {
      id: 7,
      title: "Hope in Trials",
      date: "Jan 11, 2026",
      description: "Finding strength and hope during challenging times.",
      image:
        "https://i.pinimg.com/736x/1f/28/41/1f284110c3700982b38584831615b477.jpg",
      speaker: "Wisdom Osiri",
    },
    {
      id: 8,
      title: "Worship and Praise",
      date: "Jan 4, 2026",
      description: "The power of worship in connecting with God.",
      image:
        "https://i.pinimg.com/736x/b5/a9/43/b5a9430392294777a51f458e988ec839.jpg",
      speaker: "Guest Speaker",
    },
    {
      id: 9,
      title: "Servant Leadership",
      date: "Dec 28, 2025",
      description: "Lessons on leadership from the life of Jesus.",
      image:
        "https://i.pinimg.com/736x/fc/53/b4/fc53b412fc0b4848432aa78d589c3db3.jpg",
      speaker: "Wisdom Osiri",
    },
  ];

  const marqueeImages = [
    "https://i.pinimg.com/736x/fc/53/b4/fc53b412fc0b4848432aa78d589c3db3.jpg",
    "https://i.pinimg.com/736x/99/79/fb/9979fb21e6d163da4a121dcd5f8bc3ff.jpg",
    "https://i.pinimg.com/1200x/52/d6/2a/52d62a69475deae8837581bb7c506c94.jpg",
    "https://i.pinimg.com/736x/1f/28/41/1f284110c3700982b38584831615b477.jpg",
    "https://i.pinimg.com/736x/b5/a9/43/b5a9430392294777a51f458e988ec839.jpg",
    "https://i.pinimg.com/736x/fc/53/b4/fc53b412fc0b4848432aa78d589c3db3.jpg",
  ];

  return (
    <div className="min-h-screen bg-(--color-background) transition-colors duration-300">
      <main>
        {/* Cinematic Hero Section */}
        <section className="relative h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46172b3c-6c63-4bd0-97b0-09a0ca82b055_3840w.webp"
              alt="Church Interior"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--color-background)/80 to-(--color-background)" />
          </div>

          <div className="container px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-8 text-start"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-(--color-foreground)">
                AUDIO <br />
                <span className="text-(--color-accent)">STREAMING</span>.
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-(--color-foreground)/60 max-w-2xl font-medium leading-relaxed">
                Dive into 50+ life-transforming messages from our pastors and
                visionary leaders.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
                {/* <Link
                  href="https://open.spotify.com"
                  target="_blank"
                  className="px-10 py-5 bg-(--color-primary) text-white rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-2xl hover:bg-(--color-accent) hover:text-black flex items-center justify-center gap-2"
                >
                  Join Us on Spotify
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#library"
                  className="px-10 py-5 bg-white border border-(--color-foreground)/10 text-neutral-900 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2 hover:bg-(--color-foreground) hover:text-(--color-background)"
                >
                  Explore Library
                </Link> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Exhibition Marquee Highlight */}
        <section className="pb-12 border-y border-(--color-foreground)/5 overflow-hidden">
          <div className="flex w-max whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 px-4"
            >
              {[...marqueeImages, ...marqueeImages, ...marqueeImages].map(
                (src, index) => (
                  <div
                    key={index}
                    className="relative h-[250px] aspect-4/3 rounded-4xl overflow-hidden ring-1 ring-(--color-primary)/20 grayscale hover:grayscale-0 transition-all duration-700"
                  >
                    <Image
                      src={src}
                      alt={`Sermon Visual ${index}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Visual Archive
                    </div>
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </section>

        {/* Sermon Library Grid */}
        <section id="library" className="py-24 md:py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
              <div className="space-y-6">
                <p className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs flex items-center gap-4">
                  <span className="h-px w-8 bg-(--color-accent)/50" />
                  Visual Archive
                </p>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-(--color-foreground)">
                  PAST MESSAGES.
                </h2>
              </div>

              {/* Search Bar with Glassmorphism */}
              <div className="relative w-full lg:max-w-md group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-(--color-foreground)/40 group-focus-within:text-(--color-primary) transition-colors" />
                <input
                  type="text"
                  placeholder="SEARCH THE ARCHIVE..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-8 py-5 rounded-full border border-(--color-foreground)/10 bg-(--color-foreground)/5 backdrop-blur-xl text-(--color-foreground) font-black uppercase tracking-widest text-xs placeholder-(--color-foreground)/30 focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
                />
              </div>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            >
              {generalSermons
                .filter(
                  (sermon) =>
                    sermon.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    sermon.speaker
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()),
                )
                .map((sermon) => (
                  <motion.div
                    key={sermon.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <SermonCard sermon={sermon} />
                  </motion.div>
                ))}
            </motion.div>

            {/* Empty State */}
            {generalSermons.filter((s) =>
              s.title.toLowerCase().includes(searchTerm.toLowerCase()),
            ).length === 0 && (
              <div className="py-32 text-center">
                <h3 className="text-2xl font-black opacity-30 uppercase tracking-widest text-(--color-foreground)">
                  No messages found matching your search.
                </h3>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
