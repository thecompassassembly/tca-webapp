"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Landmark,
  Smartphone,
  Globe,
  Copy,
  Heart,
  ShieldCheck,
  BookOpen,
  Zap,
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number],
    },
  }),
};

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-white/10 dark:border-white/10 last:border-0 gap-0.5">
      <span className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-white/50 uppercase tracking-wider">
        {label}
      </span>
      <span className="text-sm font-bold text-neutral-900 dark:text-white select-all font-mono">
        {value}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Give() {
  return (
    <div className="min-h-screen bg-(--color-background) text-(--color-foreground) transition-colors duration-300">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] md:h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/736x/a8/c6/d6/a8c6d68283173700c80254d1e16018ab.jpg"
            alt="Give Hero"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--color-background)/70 to-(--color-background)" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pb-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              YOUR&nbsp;
              <span className="text-(--color-accent)">GENEROSITY</span>
              <br />
              BUILDS THE KINGDOM.
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-(--color-foreground)/60 max-w-2xl font-medium leading-relaxed">
              Every gift fuels our mission to build communities, reach the lost, and advance God's Kingdom. Your partnership matters. Thank you for sowing into eternity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Giving methods ───────────────────────────────────────── */}
      <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-12 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-(--color-accent)/50" />
            Multiple Ways to Give
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ── Card 1 · Bank Transfer ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="group relative h-[480px] overflow-hidden rounded-[2.5rem] bg-white/[0.03] dark:bg-neutral-900 border border-black/5 dark:border-white/5 transition-all duration-700 hover:border-(--color-primary)/30 shadow-lg"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent dark:from-neutral-950 dark:via-neutral-950/40" />
              </div>
              <div className="absolute -right-4 -top-8 z-10 select-none opacity-[0.03] dark:opacity-5 transition-opacity duration-500 group-hover:opacity-10 text-[10rem] font-black italic tracking-tighter text-black dark:text-white">
                01
              </div>
              <div className="relative z-20 flex h-full flex-col justify-between p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-(--color-primary)/10 group-hover:ring-(--color-primary)/30">
                      <Landmark className="w-6 h-6 text-(--color-accent)" />
                    </div>
                    <motion.div whileHover={{ rotate: 15 }} className="text-neutral-400 group-hover:text-(--color-accent) transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white">Bank Transfer</h3>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5">
                    <DetailRow label="Account Number" value="1234567890" />
                    <DetailRow label="Bank" value="Example Bank" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Details
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* ── Card 2 · Mobile Transfer ────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="group relative h-[480px] overflow-hidden rounded-[2.5rem] bg-white/[0.03] dark:bg-neutral-900 border border-black/5 dark:border-white/5 transition-all duration-700 hover:border-(--color-accent)/30 shadow-lg"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent dark:from-neutral-950 dark:via-neutral-950/40" />
              </div>
              <div className="absolute -right-4 -top-8 z-10 select-none opacity-[0.03] dark:opacity-5 transition-opacity duration-500 group-hover:opacity-10 text-[10rem] font-black italic tracking-tighter text-black dark:text-white">
                02
              </div>
              <div className="relative z-20 flex h-full flex-col justify-between p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-(--color-accent)/10 group-hover:ring-(--color-accent)/30">
                      <Smartphone className="w-6 h-6 text-(--color-accent)" />
                    </div>
                    <motion.div whileHover={{ rotate: 15 }} className="text-neutral-400 group-hover:text-(--color-accent) transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white">Mobile Transfer</h3>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5">
                    <DetailRow label="Mobile ID" value="+123 456 7890" />
                    <DetailRow label="Provider" value="Mobile Money" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 text-center">Reference your name for tracking</p>
                </div>
              </div>
            </motion.div>

            {/* ── Card 3 · Online Giving ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="group relative h-[480px] overflow-hidden rounded-[2.5rem] bg-white/[0.03] dark:bg-neutral-900 border border-black/5 dark:border-white/5 transition-all duration-700 hover:border-(--color-primary)/30 shadow-lg"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent dark:from-neutral-950 dark:via-neutral-950/40" />
              </div>
              <div className="absolute -right-4 -top-8 z-10 select-none opacity-[0.03] dark:opacity-5 transition-opacity duration-500 group-hover:opacity-10 text-[10rem] font-black italic tracking-tighter text-black dark:text-white">
                03
              </div>
              <div className="relative z-20 flex h-full flex-col justify-between p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-(--color-primary)/10 group-hover:ring-(--color-primary)/30">
                      <Globe className="w-6 h-6 text-(--color-accent)" />
                    </div>
                    <motion.div whileHover={{ rotate: 15 }} className="text-neutral-400 group-hover:text-(--color-accent) transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white">Online Giving</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-neutral-500 dark:text-white/60 leading-relaxed italic">Fast, secure platform for one-time or recurring donations.</p>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-(--color-primary) text-white font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-(--color-primary)/20"
                  >
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* ── Card 4 · Pinnacle Seed ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="group relative h-[300px] md:h-[240px] col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden rounded-[2.5rem] bg-white/[0.03] dark:bg-neutral-900 border border-black/5 dark:border-white/5 transition-all duration-700 hover:border-(--color-accent)/30 shadow-lg"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-(--color-accent)/5 dark:from-neutral-950 dark:via-neutral-950/80" />
              </div>
              <div className="absolute -right-4 -top-8 z-10 select-none opacity-[0.03] dark:opacity-5 transition-opacity duration-500 group-hover:opacity-10 text-[12rem] font-black italic tracking-tighter text-black dark:text-white">
                04
              </div>
              <div className="relative z-20 flex h-full flex-col md:flex-row md:items-center justify-between p-8 md:p-12 gap-8">
                <div className="flex items-center gap-6">
                  <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10">
                    <Zap className="w-8 h-8 text-(--color-accent)" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Pinnacle Seed</h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-(--color-accent) font-bold">Visionary Partnership</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 text-right">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40">Account Name</p>
                    <p className="text-sm font-bold font-mono text-neutral-900 dark:text-white">TCA Pinnacle Seed</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40">Account Number</p>
                    <p className="text-sm font-bold font-mono text-neutral-900 dark:text-white">9876543210</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Scripture Banner ─────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <div className="mb-12 opacity-40 dark:opacity-60">
            <BookOpen className="w-12 h-12 mx-auto text-(--color-accent)" />
          </div>
          <blockquote className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            &ldquo;It is more blessed to give <br className="hidden md:block" />
            than to receive.&rdquo;
          </blockquote>
          <p className="mt-8 text-xs font-black text-(--color-accent) uppercase tracking-[0.4em]">
            — Acts 20 : 35 —
          </p>
        </motion.div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <section className="pb-32 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-3xl text-center text-white p-12 rounded-[2rem] bg-neutral-900 border border-white/5"
        >
          <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
            Questions About Giving?
          </h3>
          <p className="text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
            For large gifts, recurring set-ups, or questions about partnering with The Compass Assembly, we're here to help.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs transition-all hover:bg-(--color-accent)"
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
