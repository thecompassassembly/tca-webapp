import { motion } from "framer-motion";
import { ArrowRight, Link, Star } from "lucide-react";
import React from "react";

const DirectionUi = () => {
  return (
    <div>
      {" "}
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
                Next Level Living
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight text-white">
                DIRECTION IS <br /> BETTER THAN{" "}
                <span className="text-(--color-accent)">SPEED</span>?
              </h2>
              <p className="text-xl text-white/70 font-medium">
                Need guidance, a sense of belonging, or a place to make a
                difference, The Compass Assembly is here to walk alongside you.
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
                  Visit A Location
                  <ArrowRight className="w-4 h-4" />
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
                  Watch Sermons
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DirectionUi;
