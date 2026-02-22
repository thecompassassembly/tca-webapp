"use client";

import { motion } from "framer-motion";
import OurServicesSection from "@/components/OurServicesSection";
import RecentEventsSection from "@/components/RecentEventsSection";
import MeetPastorSection from "@/components/MeetPastorSection";
import GiveSection from "@/components/GiveSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import RecentSermonsSection from "@/components/RecentSermonsSection";
import ExpressionsSection from "@/components/ExpressionsSection";
import DirectionUi from "@/components/About/DirectionUi";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <section>
        {/* Hero Section with Video Background and Fallback Slideshow */}
        <section className="relative w-full h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
          >
            <source src="/images/the-compass-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 flex flex-col items-center justify-center max-w-3xl w-full h-full text-center px-4"
          >
            <h1
              className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Welcome to The Compass Assembly
            </h1>
            <p
              className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
              style={{ color: "var(--color-foreground)" }}
            >
              A warm and exciting Christian community where everyone is valued
              and cherished. Join us as we grow together in faith, hope, and
              love.
            </p>
            <motion.div
              className="flex justify-center w-full flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="/live"
                aria-label="Watch Live"
                className="inline-flex w-full md:w-auto md:flex-1 md:max-w-[240px] justify-center items-center gap-3 rounded-full px-6 py-3 bg-white text-(--color-primary) font-bold shadow-md transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Watch Live
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  aria-hidden
                >
                  <path d="M5 3v18l15-9-15-9z" fill="currentColor" />
                </svg>
              </motion.a>

              <motion.a
                href="/give"
                aria-label="Give to The Compass Assembly"
                className="inline-flex w-full md:w-auto md:flex-1 md:max-w-[240px] justify-center items-center gap-3 rounded-full px-6 py-3 bg-(--color-accent) text-black font-bold shadow-md transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                Give for Pinnacle
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Get Involved Section */}
        <GetInvolvedSection />

        {/* Recent Sermons Section */}
        <RecentSermonsSection />

        {/* Expressions Section */}
        <ExpressionsSection />

        {/* Give Section */}
        <GiveSection />

        {/* Meet Our Lead Pastor */}
        <MeetPastorSection />

        {/* our services / cruise */}
        <OurServicesSection />

        {/* Recent Events Section */}
        <RecentEventsSection />

        <DirectionUi />
      </section>
    </main>
  );
}
