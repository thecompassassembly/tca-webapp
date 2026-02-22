"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiftIcon, Heart, ShieldCheck, Zap } from "lucide-react";

const GiveSection = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-(--color-background) transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-(--color-primary)/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-6 flex items-center gap-4">
                <span className="h-px w-8 bg-(--color-accent)/50" />
                Kingdom Impact
              </p>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-(--color-foreground) leading-[0.85] mb-8">
                GENEROSITY <br />
                <span className="text-(--color-foreground)/10 text-7xl md:text-9xl transition-colors">
                  FUELS
                </span>{" "}
                MISSION.
              </h2>
              <p className="text-xl text-neutral-400 font-medium leading-relaxed max-w-xl">
                Your seeds of faith empower us to reach lives, build
                communities, and spread the Gospel across the globe. Together,
                we make an eternal difference.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10 group">
                <div className="w-10 h-10 rounded-2xl bg-(--color-primary)/10 flex items-center justify-center text-(--color-accent) group-hover:bg-(--color-primary) group-hover:text-white transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-neutral-300">
                  Secure Giving
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10 group">
                <div className="w-10 h-10 rounded-2xl bg-(--color-primary)/10 flex items-center justify-center text-(--color-accent) group-hover:bg-(--color-primary) group-hover:text-white transition-all">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-neutral-300">
                  Kingdom Impact
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <a
                href="/give"
                className="w-full sm:w-auto px-10 py-5 bg-white text-neutral-950 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-3 hover:bg-(--color-primary) hover:text-white"
              >
                <GiftIcon className="w-5 h-5" />
                Give Seeds
              </a>
              <a
                href="/give?p=pinnacle"
                className="w-full sm:w-auto px-10 py-5 bg-neutral-900 text-white rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 border border-white/10 hover:border-(--color-accent)/50 flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5 text-(--color-accent)" />
                Pinnacle Seed
              </a>
            </div>
          </motion.div>

          {/* Graphic Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.21, 0.45, 0.32, 0.9],
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-4/5 overflow-hidden rounded-[4rem] group shadow-2xl">
              <Image
                src="https://i.pinimg.com/736x/a8/c6/d6/a8c6d68283173700c80254d1e16018ab.jpg"
                alt="Give to TCA"
                fill
                className="object-contain p-12 rounded-2xl transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Optional: Add a more photographic background if gif is too simple */}
              <div className="absolute inset-0 bg-linear-to-t from-(--color-primary)/10 to-transparent pointer-events-none" />
            </div>

            {/* Info Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-12 p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl max-w-xs"
            >
              <h4 className="text-lg font-black text-(--color-foreground) mb-2 uppercase tracking-tight leading-tight transition-colors">
                &ldquo;It is more blessed <br /> to give than <br /> to
                receive.&rdquo;
              </h4>
              <p className="text-xs font-bold text-(--color-accent) uppercase tracking-widest">
                Acts 20:35
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiveSection;
