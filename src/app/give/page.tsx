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
    <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
      <span className="text-sm font-medium text-(--color-foreground)/50 uppercase tracking-wider">
        {label}
      </span>
      <span className="text-sm font-bold text-(--color-foreground) select-all">
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
      <section className="relative h-[55vh] md:h-[65vh] flex items-end overflow-hidden">
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

        <div className="container mx-auto px-6 md:px-12 relative z-10 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              YOUR&nbsp;
              <span className="text-(--color-accent)">SEED</span>
              <br />
              CHANGES LIVES.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-(--color-foreground)/60 max-w-2xl font-medium leading-relaxed">
              Every gift — no matter the size — fuels our mission to build
              communities, reach the lost, and advance the Kingdom. Thank you for
              your generosity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Giving methods ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-4 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-(--color-accent)/50" />
            Ways to Give
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* ── Card 1 · Bank Transfer ──────────────────────────── */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] border border-(--color-primary)/10 bg-white/[0.03] backdrop-blur-lg p-8 flex flex-col gap-6 hover:border-(--color-primary)/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-(--color-primary)/15 flex items-center justify-center">
                <Landmark className="w-7 h-7 text-(--color-primary)" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Bank Transfer
              </h3>
              <div className="flex-1">
                <DetailRow label="Account Name" value="The Compass Assembly" />
                <DetailRow label="Account Number" value="1234567890" />
                <DetailRow label="Bank" value="Example Bank" />
                <DetailRow label="Sort Code" value="00-00-00" />
                <DetailRow label="SWIFT / BIC" value="EXAMPBIC" />
              </div>
              {/* <p className="text-xs text-(--color-foreground)/40 leading-relaxed">
                Include your name &amp; &ldquo;Giving&rdquo; in the payment
                reference so we can allocate your gift.
              </p> */}
            </motion.div>

            {/* ── Card 2 · Mobile / Instant Transfer ──────────────── */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] border border-(--color-primary)/10 bg-white/[0.03] backdrop-blur-lg p-8 flex flex-col gap-6 hover:border-(--color-primary)/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-(--color-accent)/15 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-(--color-accent)" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Mobile Transfer
              </h3>
              <div className="flex-1">
                <DetailRow label="Provider" value="Example Mobile Money" />
                <DetailRow label="Number / ID" value="+123 456 7890" />
                <DetailRow label="Account Name" value="The Compass Assembly" />
              </div>
              <p className="text-xs text-(--color-foreground)/40 leading-relaxed">
                For mobile transfers, please include your name and a short
                reference.
              </p>
            </motion.div>

            {/* ── Card 3 · Online Giving ──────────────────────────── */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] border border-(--color-primary)/10 bg-white/[0.03] backdrop-blur-lg p-8 flex flex-col gap-6 hover:border-(--color-primary)/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-(--color-primary)/15 flex items-center justify-center">
                <Globe className="w-7 h-7 text-(--color-primary)" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Online Giving
              </h3>
              <p className="flex-1 text-sm text-(--color-foreground)/60 leading-relaxed">
                Give securely through our online portal. Fast, safe, and
                convenient — set up one-time or recurring donations in seconds.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 rounded-full bg-white text-neutral-950 font-black uppercase tracking-widest text-sm transition-all hover:scale-[1.03] active:scale-95 shadow-lg hover:bg-(--color-primary) hover:text-white"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </a>
            </motion.div>

            {/* ── Card 4 · Pinnacle Seed ──────────────────────────── */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] border border-(--color-accent)/20 bg-white/[0.03] backdrop-blur-lg p-8 flex flex-col col-span-2 gap-6 hover:border-(--color-accent)/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-(--color-accent)/15 flex items-center justify-center">
                <Zap className="w-7 h-7 text-(--color-accent)" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Pinnacle Seed
              </h3>
              <div className="flex-1">
                <DetailRow label="Account Name" value="TCA Pinnacle Seed" />
                <DetailRow label="Account Number" value="9876543210" />
                <DetailRow label="Bank" value="Example Bank" />
                <DetailRow label="Sort Code" value="00-00-00" />
              </div>
              {/* <p className="text-xs text-(--color-foreground)/40 leading-relaxed">
                A higher level of partnership — sow above and beyond.
                Use reference &ldquo;Pinnacle&rdquo; + your name.
              </p> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Scripture Banner ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <BookOpen className="w-10 h-10 mx-auto mb-6 text-(--color-accent)" />
          <blockquote className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            &ldquo;It is more blessed to give <br className="hidden md:block" />
            than to receive.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-bold text-(--color-accent) uppercase tracking-widest">
            — Acts 20 : 35
          </p>
        </motion.div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-(--color-primary)" />,
              title: "Secure & Transparent",
              desc: "Every gift is accounted for and used according to church policy and governance.",
            },
            {
              icon: <Heart className="w-8 h-8 text-(--color-accent)" />,
              title: "Kingdom Impact",
              desc: "Your generosity reaches lives across communities and beyond borders.",
            },
            {
              icon: <Copy className="w-8 h-8 text-(--color-primary)" />,
              title: "Keep Your Receipt",
              desc: "Retain your transaction reference for personal records and tax purposes.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-(--color-foreground)/50 max-w-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-3xl text-center rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-lg p-10 md:p-16"
        >
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
            Need Help With Giving?
          </h3>
          <p className="text-(--color-foreground)/50 mb-8 max-w-lg mx-auto leading-relaxed">
            For large gifts, recurring set-ups, or any questions about
            partnering with The Compass Assembly, reach out to us anytime.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-(--color-primary) text-white font-black uppercase tracking-widest text-sm transition-all hover:scale-[1.03] active:scale-95 shadow-xl"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}
