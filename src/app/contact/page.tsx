"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Star,
  ArrowRight,
} from "lucide-react";
import OurServicesSection from "@/components/OurServicesSection";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-(--color-background) transition-colors duration-300">
      <main>
        {/* Immersive Contact Header */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46172b3c-6c63-4bd0-97b0-09a0ca82b055_3840w.webp"
              alt="Contact Background"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--color-background)/80 to-(--color-background)" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-(--color-primary)/10 border border-(--color-primary)/20 text-(--color-primary) text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="w-4 h-4 fill-current text-(--color-accent)" />
                Get In Touch
              </div> */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-(--color-foreground)">
                CONNECT <br />
                <span className="text-(--color-accent)">WITH</span> US.
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-(--color-foreground)/60 max-w-2xl font-medium leading-relaxed">
                Whether you need prayer, have questions, or want to partner with
                us, we&apos;re here to walk with you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="py-24 md:py-10 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form
                  className="space-y-5 p-6 rounded-2xl"
                  style={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                        style={{
                          backgroundColor: "var(--color-background)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-foreground)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                        style={{
                          backgroundColor: "var(--color-background)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-foreground)",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                      style={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-foreground)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                      style={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-foreground)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Subject
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                      style={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-foreground)",
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 resize-none"
                      style={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-foreground)",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg font-bold uppercase tracking-wider transition-all hover:opacity-90"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Our Location
                    </h3>
                    <p className="opacity-75">
                      Market junction, Aba road port harcourt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Email Us
                    </h3>
                    <p className="opacity-75">info@thecompassassembly.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Call Us
                    </h3>
                    <p className="opacity-75">+234 800 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      Service Hours
                    </h3>
                    <p className="opacity-75">Sundays: 8:00 AM & 10:00 PM</p>
                    <p className="opacity-75">Thursdays: 6:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reusing existing Services Section for consistency */}
        <section className="bg-(--color-foreground)/2">
          <OurServicesSection />
        </section>

        {/* Global Location CTA */}
        <section className="py-24 px-6 border-t border-(--color-foreground)/5">
          <div className="container mx-auto max-w-7xl space-y-10 ">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-(--color-foreground)">
              FIND A LOCAL{" "}
              <span className="text-(--color-primary)">ASSEMBLY</span>.
            </h2>
            <p className="text-xl text-(--color-foreground)/60 font-medium max-w-2xl">
              We have several locations across the city. Discover the one
              closest to you and join our community this Sunday.
            </p>
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs transition-all hover:bg-(--color-accent) hover:text-black"
              >
                Our Global Locations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
