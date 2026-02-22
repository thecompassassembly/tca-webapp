"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Calendar } from "lucide-react";

const actions = [
  {
    title: "Watch Live",
    description: "Join our global community in worship and word as it happens.",
    img: "/images/6051031874487914137.jpg",
    href: "/live",
    icon: <Play className="w-5 h-5" />,
    color: "bg-(--color-accent)",
    large: true,
  },
  {
    title: "Latest Sermons",
    description: "Revisit life-changing messages and teachings.",
    img: "/images/6051031874487914224.jpg",
    href: "/sermons",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-indigo-500",
    large: false,
  },
  {
    title: "Upcoming Events",
    description: "Stay connected through our community gatherings.",
    img: "/images/6051031874487914218.jpg",
    href: "/events",
    icon: <Calendar className="w-5 h-5" />,
    color: "bg-purple-500",
    large: false,
  },
];

const GetInvolvedSection = () => {
  return (
    <motion.section
      className="w-full py-20 px-6 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <p
            className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80"
            style={{ color: "var(--color-primary)" }}
          >
            Quick Actions
          </p>
          <h2
            className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest"
            style={{ color: "var(--color-foreground)" }}
          >
            Get Involved
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            Explore our community and stay connected with The Compass Assembly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Featured Watch Live (image) */}
          <a
            href="/live"
            aria-label="Watch Live"
            className="group relative md:col-span-2 overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/images/6051031874487914137.jpg"
                alt="Watch Live"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
              <div className="absolute left-6 bottom-6 text-left text-white max-w-[60%]">
                <h3 className="text-3xl md:text-4xl font-black leading-tight">
                  Watch Live
                </h3>
                <p className="mt-3 text-base md:text-lg opacity-80">
                  Join our live services and events to worship with us online.
                </p>
                <div className="mt-6">
                  <button className="inline-flex items-center gap-3 rounded-full px-5 py-3 bg-white text-[var(--color-primary)] font-bold shadow">
                    Watch Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M5 3v18l15-9-15-9z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* Give (image) */}
          {/* <a href="/give" className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative w-full h-72 md:h-96">
                  <Image src="/images/6051031874487914152.jpg" alt="Give" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-6 bottom-6 text-left text-white">
                    <h4 className="text-2xl font-bold">Give</h4>
                    <p className="mt-2 opacity-80">Support our mission and ministry.</p>
                  </div>
                </div>
              </a> */}

          {/* Sermons (image) */}
          <a
            href="/sermons"
            className="group relative overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/images/6051031874487914224.jpg"
                alt="Sermons"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 text-left text-white flex items-end justify-between">
                <div>
                  <h4 className="text-2xl font-bold">Sermons</h4>
                  <p className="mt-2 opacity-80">
                    Access our latest teachings and messages.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>

          {/* Events (image) */}
          <a
            href="/events"
            className="group relative overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/images/6051031874487914218.jpg"
                alt="Events"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 text-left text-white flex items-end justify-between">
                <div>
                  <h4 className="text-2xl font-bold">Events</h4>
                  <p className="mt-2 opacity-80">
                    Stay updated on upcoming activities and gatherings.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInvolvedSection;
