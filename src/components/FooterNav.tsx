"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About TCA" },
  { href: "/pastors", label: "Pastors" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

const quicklinks = [
  { href: "/pastors", label: "Our Leadership" },
  { href: "/", label: "Missional Communities" },
  { href: "/", label: "Testimonies" },
  { href: "/", label: "Prayer Request" },
  { href: "/", label: "Join Workforce" },
  { href: "/", label: "First Timers" },
];

const FooterNav = () => {
  return (
    <footer className="w-full bg-neutral-950 pt-24 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Branding & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand Pillar */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                THE COMPASS <br />
                <span className="text-(--color-accent)">ASSEMBLY</span>.
              </h3>
              <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-md">
                A warm and exciting Christian community where everyone is
                valued. Join us as we grow together in faith, hope, and love.
              </p>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-(--color-accent) hover:text-black hover:border-(--color-accent) transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground font-black">
                Directory
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground font-black">
                Resources
              </h4>
              <ul className="space-y-4">
                {quicklinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground font-black">
                Reach Us
              </h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-foreground shrink-0" />
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    123 Celestial Avenue, <br />
                    Faith Heights, Port Harcourt.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-foreground shrink-0" />
                  <p className="text-sm text-neutral-400">+234 803 000 0000</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-foreground shrink-0" />
                  <p className="text-sm text-neutral-400">
                    hello@compassassembly.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Branded Banner */}
        <div className="relative group cursor-default">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center py-12"
          >
            <h2 className="text-[12vw] font-black uppercase tracking-tighter text-white leading-none opacity-5 transition-opacity duration-1000 group-hover:opacity-10 group-hover:text-(--color-accent) scale-y-110">
              THE COMPASS ASSEMBLY
            </h2>
          </motion.div>
        </div>

        {/* Bottom Bar: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-white/5">
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-600">
            <span>&copy; {new Date().getFullYear()} TCA</span>
            <a
              href="#"
              className="hover:text-(--color-accent) transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-(--color-accent) transition-colors"
            >
              Terms
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-(--color-accent) group"
          >
            Scroll to top
            <div className="w-8 h-8 rounded-full border border-(--color-accent)/20 flex items-center justify-center transition-all group-hover:bg-(--color-accent)/10 group-hover:border-(--color-accent)/50">
              <ArrowUpRight className="w-3.5 h-3.5 -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
