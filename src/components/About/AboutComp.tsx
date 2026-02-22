"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  Heart,
  ArrowRight,
  ShieldCheck,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";

const AboutComp = () => {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      {/* Hero Section - Magazine Style */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side: Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6"
              >
                <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://i.pinimg.com/736x/77/24/18/7724180734893b30657c802345a2eff1.jpg"
                    alt="Worship at TCA"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://i.pinimg.com/1200x/cf/ef/c4/cfefc480892063515fe4619d715199bc.jpg"
                    alt="Community at TCA"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 md:space-y-6 pt-12"
              >
                <div className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://i.pinimg.com/736x/3a/f3/f1/3af3f1f25daed93f6d1edb94fdb0dfb2.jpg"
                    alt="Prayer at TCA"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://i.pinimg.com/736x/8f/d7/2d/8fd72de53783d4ee860def6dbb2e16a1.jpg"
                    alt="Teaching at TCA"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 rounded-full bg-(--color-primary)/5 blur-3xl" />
              <div className="absolute -z-10 -top-12 -left-12 w-64 h-64 rounded-full bg-(--color-accent)/5 blur-3xl" />
            </div>

            {/* Right side: Content */}
            <div className="lg:col-span-6 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-6 flex items-center gap-4">
                  <span className="h-px w-8 bg-(--color-accent)/30" />
                  Our Story
                </p>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  WHERE LIFE FINDS <br />
                  <span className="text-(--color-foreground)/10">
                    DIRECTION &
                  </span>{" "}
                  <br />
                  PURPOSE.
                </h2>
              </motion.div>

              <motion.div
                className="space-y-6 text-lg md:text-xl text-(--color-foreground)/70 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p>
                  The Compass Assembly is a warm and exciting Christian
                  community where everyone is valued and cherished. It&apos;s a
                  place to connect, grow, and serve.
                </p>
                <p>
                  At TCA, we are dedicated to giving lives direction. We strive
                  to create an environment where you can connect with God and
                  like-minded believers, grow in faith through sound biblical
                  teaching, and serve your community using your God-given
                  talents.
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-(--color-primary) text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-xl hover:bg-(--color-accent) hover:text-black flex items-center gap-2"
                  >
                    Join Our Family
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#vision"
                    className="px-8 py-4 border border-(--color-foreground)/10 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-(--color-foreground)/5"
                  >
                    Our Vision
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section
        id="vision"
        className="py-24 md:py-32 relative bg-(--color-background) transition-colors duration-300 overflow-hidden"
      >
        {/* Immersive background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-(--color-primary)/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-(--color-accent)/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-(--color-foreground)">
              THE <span className="text-(--color-accent)">FOUNDATION</span>.
            </h2>
            <p className="text-xl text-(--color-foreground)/60 font-medium max-w-2xl mx-auto">
              Our vision and values are the compass that guides everything we do
              at The Compass Assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[3rem] bg-(--color-foreground)/5 border border-(--color-foreground)/10 backdrop-blur-xl transition-all duration-500 hover:bg-(--color-foreground)/10 hover:border-(--color-primary)/50 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-(--color-primary)/20 flex items-center justify-center text-(--color-accent) mb-8 group-hover:scale-110 transition-transform">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-(--color-foreground)">
                Our Vision
              </h3>
              <p className="text-lg text-(--color-foreground)/60 leading-relaxed mb-8 grow">
                To see lives transformed and empowered by the gospel, leading to
                a world where every person finds their path and purpose in
                Christ.
              </p>
              <div className="pt-6 border-t border-(--color-foreground)/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-(--color-accent) animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-bold text-(--color-foreground)/40">
                  The Future We See
                </span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-10 rounded-[3rem] bg-(--color-primary)/5 border border-(--color-primary)/20 backdrop-blur-xl transition-all duration-500 hover:bg-(--color-primary)/10 hover:border-(--color-accent)/50 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-(--color-accent)/20 flex items-center justify-center text-(--color-accent) mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-(--color-accent)">
                Our Mission
              </h3>
              <p className="text-lg text-(--color-foreground)/90 leading-relaxed mb-8 grow">
                Giving lives direction through passionate worship, sound
                biblical teaching, and intentional community service.
              </p>
              <div className="pt-6 border-t border-(--color-foreground)/10 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-(--color-accent)" />
                <span className="text-xs uppercase tracking-widest font-bold text-(--color-foreground)/70">
                  Transformation in Action
                </span>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-10 rounded-[3rem] bg-(--color-foreground)/5 border border-(--color-foreground)/10 backdrop-blur-xl transition-all duration-500 hover:bg-(--color-foreground)/10 hover:border-(--color-accent)/50 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-(--color-foreground)/10 flex items-center justify-center text-(--color-foreground) mb-8 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-(--color-foreground)">
                Core Values
              </h3>
              <p className="text-lg text-(--color-foreground)/60 leading-relaxed mb-8 grow">
                Love, Truth, and Purpose. These pillars guide everything we do
                as a family of believers, ensuring we remain centered on Christ.
              </p>
              <div className="pt-6 border-t border-(--color-foreground)/10 flex items-center gap-3">
                <Users className="w-4 h-4 text-(--color-foreground)/40" />
                <span className="text-xs uppercase tracking-widest font-bold text-(--color-foreground)/40">
                  United in Faith
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Connect Section */}
      <section className="py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 bottom-0 left-0 gap-x-8 gap-y-8">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46172b3c-6c63-4bd0-97b0-09a0ca82b055_3840w.webp"
            alt="Abstract textured portrait behind patterned glass"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="relative rounded-[4rem] bg-(--color-primary)/5 border border-(--color-foreground)/5 p-12 md:p-24 overflow-hidden text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
              <div className="grid grid-cols-12 h-full w-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-(--color-foreground)/10 aspect-square"
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-(--color-accent)/10 border border-(--color-accent)/20 text-(--color-accent) text-xs font-bold uppercase tracking-widest">
                <Star className="w-4 h-4 fill-current" />
                Next Level Living
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight text-white">
                READY TO FIND <br /> YOUR{" "}
                <span className="text-(--color-primary)">DIRECTION</span>?
              </h2>
              <p className="text-xl text-white/70 font-medium">
                Whether you are seeking spiritual guidance, a sense of
                belonging, or a place to make a difference, The Compass Assembly
                is here to walk alongside you.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="px-12 py-5 bg-(--color-foreground) text-(--color-background) rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-2xl hover:bg-(--color-accent) hover:text-black"
                >
                  Visit A Location
                </Link>
                <Link
                  href="/sermons"
                  className="px-12 py-5 bg-(--color-background) border border-(--color-foreground)/10 text-(--color-foreground) rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2 hover:bg-(--color-primary) hover:text-white"
                >
                  Watch Sermons
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutComp;
