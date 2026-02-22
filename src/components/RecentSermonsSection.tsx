"use client";

import React from "react";
import { motion } from "framer-motion";
import SermonCard from "./SermonCard";

const recentSermons = [
  {
    id: 4,
    title: "The Power of Prayer",
    date: "Feb 1, 2026",
    description:
      "Discover how prayer transforms lives and strengthens our relationship with God.",
    image:
      "https://i.pinimg.com/1200x/8c/89/34/8c89340468513d6209a80b0c282999b4.jpg",
    speaker: "Pastor Favour Osiri",
  },
  {
    id: 5,
    title: "Grace Abounding",
    date: "Jan 25, 2026",
    description: "Understanding the depth of God's grace in our daily lives.",
    image:
      "https://i.pinimg.com/736x/99/79/fb/9979fb21e6d163da4a121dcd5f8bc3ff.jpg",
    speaker: "Pastor Wisdom Osiri",
  },
  {
    id: 6,
    title: "Community and Fellowship",
    date: "Jan 18, 2026",
    description: "The importance of building strong relationships in faith.",
    image:
      "https://i.pinimg.com/1200x/52/d6/2a/52d62a69475deae8837581bb7c506c94.jpg",
    speaker: "Pastor Favour Osiri",
  },
  {
    id: 7,
    title: "Hope in Trials",
    date: "Jan 11, 2026",
    description: "Finding strength and hope during challenging times.",
    image:
      "https://i.pinimg.com/736x/1f/28/41/1f284110c3700982b38584831615b477.jpg",
    speaker: "Pastor Wisdom Osiri",
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
    speaker: "Pastor Wisdom Osiri",
  },
];

const RecentSermonsSection = () => {
  // Triple the list to ensure a seamless loop
  const tripledSermons = [...recentSermons, ...recentSermons, ...recentSermons];

  return (
    <section className="w-full py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center lg:text-left">
        <p className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-6 flex items-center justify-center lg:justify-start gap-4">
          <span className="h-px w-8 bg-(--color-accent)/50" />
          Spiritual Nourishment
        </p>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
          RECENT <br />
          <span className="text-neutral-800">SERMONS</span>.
        </h2>
        <p className="text-xl text-neutral-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Stay inspired with life-changing teachings from our lead shepherds.
          Watch and share to spread the eternal truth.
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 px-3"
        >
          {tripledSermons.map((sermon, index) => (
            <div
              key={`${sermon.id}-${index}`}
              className="w-[300px] md:w-[400px] shrink-0"
            >
              <SermonCard sermon={sermon} isActive={true} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentSermonsSection;
