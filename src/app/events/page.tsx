"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock, Star } from "lucide-react";
import DirectionUi from "@/components/About/DirectionUi";

const recentEvents = [
  {
    title: "Youth Conference",
    category: "Youth",
    image: "/images/6051031874487914218.jpg",
    blurb: "Highlights and moments from our latest youth gathering.",
    date: "Feb 10, 2026",
  },
  {
    title: "Community Outreach",
    category: "Outreach",
    image: "/images/6051031874487914224.jpg",
    blurb: "Serving our neighborhoods with love and purpose together.",
    date: "Feb 5, 2026",
  },
  {
    title: "Worship Night",
    category: "Worship",
    image: "/images/6051031874487914151.jpg",
    blurb: "An evening of praise, prayer, and powerful testimonies.",
    date: "Jan 28, 2026",
  },
  {
    title: "Leadership Summit",
    category: "Leadership",
    image: "/images/6051031874487914223.jpg",
    blurb: "Equipping our leaders with vision and spiritual clarity.",
    date: "Jan 18, 2026",
  },
];

const upcomingEvents = [
  {
    title: "Prayer Rally",
    date: "Sun, Feb 22",
    time: "9:00 AM",
    location: "Rumumasi",
    image: "/images/6051031874487914218.jpg",
    blurb: "Join us for a powerful time of prayer and worship.",
    color: "from-(--color-primary)/80",
  },
  {
    title: "Youth Hangout",
    date: "Sat, Mar 1",
    time: "3:00 PM",
    location: "Rumuosi",
    image: "/images/6051031874487914224.jpg",
    blurb: "Fun, fellowship, and intentional growth for our youths.",
    color: "from-(--color-accent)/80",
  },
  {
    title: "Community Outreach",
    date: "Sat, Mar 8",
    time: "8:00 AM",
    location: "Oyigbo",
    image: "/images/6051031874487914151.jpg",
    blurb: "Serving our neighborhoods with love and purpose.",
    color: "from-(--color-primary)/80",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-(--color-background) transition-colors duration-300">
      <main>
        {/* Cinematic Hero */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46172b3c-6c63-4bd0-97b0-09a0ca82b055_3840w.webp"
              alt="Events at TCA"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--color-background)/60 to-(--color-background)" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-6"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-(--color-foreground)">
                EVENTS &amp; <br />
                <span className="text-(--color-accent)"> GATHERINGS</span>.
              </h1>
              <p className="text-xl md:text-2xl text-(--color-foreground)/60 max-w-2xl font-medium leading-relaxed">
                Stay updated on gatherings, outreaches, and special moments at
                The Compass Assembly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events — Feature Section */}
        <section className="py-24 md:py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-(--color-primary) font-black uppercase tracking-[0.5em] text-xs mb-4">
                  Calendar
                </p>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-(--color-foreground)">
                  UPCOMING.
                </h2>
              </div>
              <p className="hidden md:block text-(--color-foreground)/40 font-medium text-sm max-w-xs text-right">
                Don&apos;t miss out on our upcoming gatherings and outreaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((evt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-4xl bg-(--color-foreground)/5 border border-(--color-foreground)/10 hover:border-(--color-primary)/30 transition-all duration-500 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div
                      className={`absolute inset-0 bg-linear-to-t ${evt.color} to-transparent opacity-80`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                        Upcoming
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-5">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-(--color-foreground)">
                      {evt.title}
                    </h3>
                    <p className="text-(--color-foreground)/60 font-medium text-sm leading-relaxed">
                      {evt.blurb}
                    </p>
                    <div className="space-y-3 pt-2 border-t border-(--color-foreground)/10">
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-(--color-foreground)/50">
                        <Calendar className="w-4 h-4 text-(--color-accent)" />
                        {evt.date}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-(--color-foreground)/50">
                        <Clock className="w-4 h-4 text-(--color-accent)" />
                        {evt.time}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-(--color-foreground)/50">
                        <MapPin className="w-4 h-4 text-(--color-accent)" />
                        {evt.location}
                      </div>
                    </div>
                    <button className="w-full py-4 bg-(--color-primary) text-white rounded-full font-black uppercase tracking-widest text-xs transition-all hover:bg-(--color-accent) hover:text-black flex items-center justify-center gap-2 group/btn">
                      Register Now
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Events — Archive Section */}
        <section className="py-24 md:py-32 px-6 bg-(--color-foreground)/[0.02] border-t border-(--color-foreground)/5">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-(--color-primary) font-black uppercase tracking-[0.5em] text-xs mb-4">
                  Archive
                </p>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-(--color-foreground)">
                  RECENT.
                </h2>
              </div>
            </div>

            {/* Large Feature Card (first event) + smaller grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Hero card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 group relative h-[500px] overflow-hidden rounded-4xl cursor-pointer"
              >
                <Image
                  src={recentEvents[0].image}
                  alt={recentEvents[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 space-y-4">
                  <span className="inline-flex px-3 py-1 rounded-full bg-(--color-accent)/20 border border-(--color-accent)/30 text-(--color-accent) text-xs font-black uppercase tracking-widest">
                    {recentEvents[0].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                    {recentEvents[0].title}
                  </h3>
                  <p className="text-white/70 font-medium">
                    {recentEvents[0].blurb}
                  </p>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                    {recentEvents[0].date}
                  </p>
                </div>
              </motion.div>

              {/* Side cards */}
              <div className="lg:col-span-5 grid grid-rows-3 gap-8">
                {recentEvents.slice(1).map((evt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl cursor-pointer flex"
                  >
                    <div className="relative w-32 shrink-0 overflow-hidden">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex-1 p-6 bg-(--color-foreground)/5 border border-(--color-foreground)/10 group-hover:border-(--color-primary)/30 transition-colors flex flex-col justify-center space-y-2">
                      <span className="text-(--color-accent) text-xs font-black uppercase tracking-widest">
                        {evt.category}
                      </span>
                      <h3 className="text-lg font-black uppercase tracking-tight text-(--color-foreground) leading-tight">
                        {evt.title}
                      </h3>
                      <p className="text-(--color-foreground)/40 text-xs font-bold uppercase tracking-widest">
                        {evt.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Stay Connected CTA */}

        <DirectionUi />
      </main>
    </div>
  );
}
