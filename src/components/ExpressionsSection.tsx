"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, ArrowRight, Play } from "lucide-react";

const expressions = [
  {
    id: 1,
    name: "TCA Headquarters",
    role: "Mother Expression & Administrative Hub",
    description:
      "The heartbeat of our global mission, shepherding the vision under Pastor Wisdom and Victory Osiri.",
    img: "https://i.pinimg.com/736x/3f/ab/4e/3fab4eb0e12c798627b1323700a21490.jpg",
    location: "Port Harcourt",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "TCA South Expression",
    role: "Community Growth & Local Outreach",
    description:
      "Bringing the light of the Gospel to the southern region through community-focused ministry.",
    img: "https://i.pinimg.com/1200x/ac/79/a5/ac79a54150918817143465bc37fe0118.jpg",
    location: "South PH",
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "TCA Global Online",
    role: "Digital Ministry & Virtual Fellowship",
    description:
      "Connecting believers worldwide through high-impact digital experiences and online communities.",
    img: "https://i.pinimg.com/1200x/78/21/b0/7821b00b4ccb0f7285b803bb3c258f0d.jpg",
    location: "Digital World",
    icon: <Play className="w-5 h-5" />,
  },
  {
    id: 4,
    name: "TCA Next Gen",
    role: "Generation Z & Millennial Hub",
    description:
      "Empowering the next generation to lead with faith, creativity, and purpose.",
    img: "https://i.pinimg.com/736x/36/f3/9a/36f39ab7ae499c12114a579d5f0679cc.jpg",
    location: "DynamicPH",
    icon: <Users className="w-5 h-5" />,
  },
];

const ExpressionsSection = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
          <div className="lg:col-span-5">
            <p className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-(--color-accent)/50" />
              Our Expressions
            </p>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
              ONE CHURCH <br />
              <span className="text-neutral-800">MANY</span> HOMES.
            </h2>
            <p className="text-xl text-neutral-400 font-medium leading-relaxed max-w-xl mb-12">
              We are a multi-expression community, united under one vision but
              thriving in various locations to bring the Gospel closer to you.
            </p>

            <div className="space-y-8">
              {expressions.slice(0, 3).map((exp, idx) => (
                <div key={exp.id} className="relative group cursor-default">
                  <div className="flex gap-6 items-start">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 group-hover:bg-(--color-primary) group-hover:text-white group-hover:border-(--color-primary) transition-all duration-500`}
                    >
                      {exp.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-(--color-accent) transition-colors">
                        {exp.name}
                      </h4>
                      <p className="text-sm text-neutral-500 font-medium uppercase tracking-widest">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  {idx < 2 && (
                    <div className="absolute left-6 top-16 bottom-[-32px] w-px bg-white/5" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a
                href="/locations"
                className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-(--color-accent) group"
              >
                View All Locations
                <div className="w-10 h-10 rounded-full border border-(--color-accent)/20 flex items-center justify-center transition-all group-hover:bg-(--color-accent) group-hover:text-black">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expressions.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`group relative overflow-hidden rounded-[2.5rem] shadow-2xl ${idx % 2 !== 0 ? "md:translate-y-12" : ""}`}
                >
                  <div className="aspect-4/5 relative">
                    <Image
                      src={exp.img}
                      alt={exp.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl">
                        {exp.location}
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 space-y-3">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                        {exp.name}
                      </h3>
                      <p className="text-sm text-neutral-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpressionsSection;
