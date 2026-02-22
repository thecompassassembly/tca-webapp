"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  label: string;
  day: string;
  time: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  bg: string;
}

const ServiceCard = ({
  label,
  day,
  time,
  description,
  icon,
  index,
  bg,
}: ServiceCardProps) => {
  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 transition-all duration-700 hover:border-emerald-500/30 shadow-2xl"
    >
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt={label}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>

      {/* Decorative Index Number */}
      <div className="absolute -right-4 -top-8 z-10 select-none opacity-5 transition-opacity duration-500 group-hover:opacity-10">
        <span className="text-[12rem] font-black italic tracking-tighter text-white">
          {displayIndex}
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col justify-between p-8 md:p-10">
        {/* Top Section: Icon & Header */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-(--color-primary)/10 group-hover:ring-(--color-primary)/30">
              <div className="text-(--color-accent)">{icon}</div>
            </div>

            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
                {displayIndex} / 03
              </span>
              <motion.div
                whileHover={{ rotate: 15 }}
                className="mt-2 text-neutral-400 group-hover:text-(--color-accent) transition-colors duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              {label}
            </h3>
            <div className="h-1 w-12 rounded-full bg-purple-500/50" />
          </div>
        </div>

        {/* Bottom Section: Details & Description */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
              <Calendar className="w-3.5 h-3.5 text-(--color-accent)" />
              <span className="text-xs font-medium text-neutral-200">
                {day}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
              <Clock className="w-3.5 h-3.5 text-(--color-accent)" />
              <span className="text-xs font-medium text-neutral-200">
                {time}
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden pt-2">
            <p className="text-sm leading-relaxed text-neutral-400 transition-all duration-500 group-hover:text-neutral-200 line-clamp-2 group-hover:line-clamp-none">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-radial-gradient from-(--color-primary)/5 to-transparent" />
    </motion.div>
  );
};

const services = [
  {
    label: "First Cruise",
    day: "Sunday",
    time: "8:00 AM",
    description:
      "Start your Sunday with worship and the Word. An intimate gathering designed to anchor your soul and set a powerful tone for your week ahead.",
    bg: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/459579f4-e2d0-4218-a12d-f974a4b89651_800w.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    label: "Second Cruise",
    day: "Sunday",
    time: "10:00 AM",
    description:
      "Join our main Sunday gathering—a vibrant celebration of community and faith. Experience life-changing inspiration through dynamic worship.",
    bg: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/459579f4-e2d0-4218-a12d-f974a4b89651_800w.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    label: "Midweek Cruise",
    day: "Thursday",
    time: "6:00 PM",
    description:
      "The ultimate midweek recharge. Come cruise with us for deep worship, powerful communal prayer, and in-depth biblical teaching.",
    bg: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/459579f4-e2d0-4218-a12d-f974a4b89651_800w.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

const OurServicesSection = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-(--color-background) transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 md:mb-28"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex-1">
              <p className="text-(--color-primary) font-black uppercase tracking-[0.5em] text-xs mb-6 flex items-center gap-4">
                <span className="h-px w-8 bg-(--color-primary)/50" />
                Join Our Assembly
              </p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-(--color-foreground) leading-[0.85] transition-colors">
                Our <br className="hidden md:block" />
                <span className="text-(--color-foreground)/10">
                  Weekly
                </span>{" "}
                Services
              </h2>
            </div>

            <div className="flex-1 max-w-xl">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-400 font-medium">
                Experience powerful worship and life-changing messages at any of
                our weekly services. A warm and exciting Christian community
                where everyone is valued.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.label}
              label={service.label}
              day={service.day}
              time={service.time}
              description={service.description}
              icon={service.icon}
              bg={service.bg}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
