"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";

const MeetPastorSection = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-(--color-background) transition-colors duration-300 overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[25vw] font-black uppercase tracking-tighter text-(--color-foreground)">
          Leadership
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-[3rem] shadow-2xl group border border-white/5">
              <Image
                src="/images/6051031874487914203.jpg"
                alt="Pastor Wisdom Osiri"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--color-primary)/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Image Info Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-(--color-accent) font-bold mb-1">
                      Lead Pastor
                    </p>
                    <h4 className="text-xl font-bold text-white">
                      Wisdom Osiri
                    </h4>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-(--color-accent) flex items-center justify-center text-neutral-950">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.21, 0.45, 0.32, 0.9],
              delay: 0.2,
            }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-6 flex items-center gap-4">
                  <span className="h-px w-8 bg-(--color-accent)/50" />
                  Visionary Leadership
                </p>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-(--color-foreground) leading-[0.85] mb-8 transition-colors">
                  MEET OUR <br />
                  <span className="text-(--color-accent) opacity-30">
                    LEAD
                  </span>{" "}
                  PASTOR.
                </h2>
              </motion.div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed italic">
                  &ldquo;Leading our community in faith, hope, and love with a
                  heart for people and a passion for God&rsquo;s Word.&rdquo;
                </p>

                <div className="space-y-4 text-neutral-400 text-lg leading-relaxed max-w-2xl">
                  <p>
                    Pastor Wisdom Osiri is a visionary leader dedicated to
                    shepherding The Compass Assembly community. His ministry is
                    marked by a deep commitment to biblical truth and a
                    practical approach to spiritual growth.
                  </p>
                  <p>
                    Through dynamic teaching and intentional discipleship, he
                    inspires and equips believers to live out their God-given
                    purpose and make a lasting impact in their spheres of
                    influence.
                  </p>
                </div>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mt-6">
              <button className="px-10 py-5 bg-(--color-foreground) text-(--color-background) rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-2xl hover:bg-(--color-accent) hover:text-black">
                Learn More About Him
              </button>

              <div className="flex gap-6">
                {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-(--color-accent) hover:text-black hover:border-(--color-accent) transition-all duration-500 hover:-translate-y-2 shadow-xl"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetPastorSection;
