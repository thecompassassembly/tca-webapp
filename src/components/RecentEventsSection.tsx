"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    id: 1,
    title: "Youth Conference",
    date: "March 15, 2026",
    location: "Main Sanctuary",
    description:
      "Empowering the next generation to lead with faith and purpose.",
    image: "/images/6051031874487914218.jpg",
    category: "Youth Ministry",
  },
  {
    id: 2,
    title: "Community Outreach",
    date: "April 02, 2026",
    location: "City Square",
    description:
      "Taking the love of Christ beyond our walls to serve our neighbors.",
    image: "/images/6051031874487914224.jpg",
    category: "Outreach",
  },
  {
    id: 3,
    title: "Worship Night",
    date: "April 18, 2026",
    location: "Grand Hall",
    description:
      "An evening dedicated to profound praise and spiritual renewal.",
    image: "/images/6051031874487914151.jpg",
    category: "Worship",
  },
  {
    id: 4,
    title: "Leadership Seminar",
    date: "May 10, 2026",
    location: "Conference Center",
    description:
      "Developing excellence in ministry leadership and administration.",
    image: "/images/6051031874487914203.jpg",
    category: "Leadership",
  },
];

const RecentEventsSection = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-(--color-background) transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--color-primary)/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <p className="text-gold-500 font-black uppercase tracking-[0.5em] text-xs mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-gold-500/50" />
              Happening Now
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-(--color-foreground) leading-[0.85] transition-colors">
              Recent <br />
              <span className="text-(--color-foreground)/10">Moments.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed mb-8">
              Stay connected with our community through our latest events,
              conferences, and outreach programs. Every moment is a chance to
              grow together.
            </p>
            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-4 pb-4">
              <button className="events-prev w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button className="events-next w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
              prevEl: ".events-prev",
              nextEl: ".events-next",
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-visible!"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-[2.5rem] bg-neutral-900"
                >
                  {/* Image Background */}
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                    <div className="absolute top-8 left-8">
                      <div className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                        {event.category}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-[0.9]">
                        {event.title}
                      </h3>

                      <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 text-neutral-300">
                          <Calendar className="w-4 h-4 text-(--color-accent)" />
                          <span className="text-xs font-semibold">
                            {event.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <MapPin className="w-4 h-4 text-(--color-accent)" />
                          <span className="text-xs font-semibold">
                            {event.location}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover link indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 z-30">
                    <div className="w-20 h-20 rounded-full bg-(--color-primary) flex items-center justify-center text-white shadow-2xl">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentEventsSection;
