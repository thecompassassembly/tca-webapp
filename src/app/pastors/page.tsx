"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Heart, ShieldCheck } from "lucide-react";

export default function Pastors() {
  return (
    <div className="min-h-screen bg-(--color-background) transition-colors duration-300">
      <main>
        {/* Cinematic Header Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46172b3c-6c63-4bd0-97b0-09a0ca82b055_3840w.webp"
              alt="Pastoral Leadership"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-(--color-background) via-(--color-background)/60 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-(--color-foreground)">
                THE <span className="text-(--color-accent)">SHEPHERDS</span>.
              </h1>
              <p className="text-xl md:text-2xl text-(--color-foreground)/60 max-w-2xl mx-auto font-medium">
                Meet the visionary leaders guided by faith and dedicated to
                giving lives direction at The Compass Assembly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pastor Wisdom Section - Magazine Layout */}
        <section className="py-24 md:py-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Image Frame */}
              <div className="lg:col-span-6 relative group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-4/5 rounded-4xl overflow-hidden ring-1 ring-(--color-foreground)/10 shadow-2xl"
                >
                  <Image
                    src="https://scontent.flos2-1.fna.fbcdn.net/v/t39.30808-6/634419796_898726779720991_8205720586915858697_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH8ERQMYWeYzWYUX9hBV-AmhdZ8AhOYZBGF1nwCE5hkEatkCdFicXF_KnMy9KsKM3NnqlSXR69aBRh23BkJg2Ur&_nc_ohc=vKQ99oEQ9Z0Q7kNvwEO0XQS&_nc_oc=Admk7dopZ2GEbdHuZ18WcICjLOI6yF_s04amhkRiuAPVmou8DRLRX1wk-kSEbqnPNck&_nc_zt=23&_nc_ht=scontent.flos2-1.fna&_nc_gid=7bDcPeC440XsCkYMPiNEZA&oh=00_AfsfcrlGIi_DJDX-TXtvWtC61knbo4ZQhvlpEVLn3uj_Ig&oe=69A14775"
                    alt="Pastor Wisdom Osiri"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Overlapping badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -left-8 md:-left-12 p-8 bg-(--color-accent) text-black rounded-3xl shadow-2xl flex flex-col gap-2"
                >
                  <span className="text-xs font-black uppercase tracking-widest opacity-60">
                    Founded
                  </span>
                  <span className="text-3xl font-black">2012</span>
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-6 space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-(--color-primary) font-black uppercase tracking-[0.5em] text-xs mb-6">
                    Lead Pastor
                  </p>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 text-(--color-foreground)">
                    WISDOM <br /> OSIRI.
                  </h2>
                  <div className="space-y-6 text-lg md:text-xl text-(--color-foreground)/70 leading-relaxed font-medium">
                    <p>
                      Pastor Wisdom Osiri leads The Compass Assembly with a
                      profound passion for God&apos;s Word and people. His
                      ministry inspires transformation, purpose, and a deeper
                      walk with Christ.
                    </p>
                    <p>
                      With years of experience in pastoral care and community
                      building, he guides our congregation through teachings
                      rooted in scripture, fostering an environment of love,
                      growth, and spiritual renewal.
                    </p>
                  </div>
                  <div className="pt-10 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="px-10 py-5 bg-(--color-primary) text-white rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-xl hover:bg-(--color-accent) hover:text-black flex items-center gap-2"
                    >
                      Connect with Wisdom
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pastor Favour Section - Swapped Magazine Layout */}
        <section className="py-24 md:py-32 px-6 bg-(--color-foreground)/5">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Text Content - Swapped Grid Position */}
              <div className="lg:col-span-6 space-y-10 lg:order-1 order-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-(--color-primary) font-black uppercase tracking-[0.5em] text-xs mb-6">
                    Co-Lead Pastor
                  </p>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 text-(--color-foreground)">
                    FAVOUR <br /> OSIRI.
                  </h2>
                  <div className="space-y-6 text-lg md:text-xl text-(--color-foreground)/70 leading-relaxed font-medium">
                    <p>
                      Pastor Favour Osiri serves with grace and leadership,
                      championing prayer, excellence, and community. She
                      empowers believers to live intentionally and victoriously,
                      drawing from her deep commitment to worship and
                      discipleship.
                    </p>
                    <p>
                      Her focus on family ministry and spiritual development
                      helps create a nurturing space where faith is
                      strengthened, relationships are built, and lives are
                      transformed through God&lsquo;s grace.
                    </p>
                  </div>
                  <div className="pt-10">
                    <Link
                      href="/contact"
                      className="px-10 py-5 border border-(--color-foreground)/10 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:bg-(--color-foreground) hover:text-(--color-background)"
                    >
                      Connect with Favour
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Image Frame - Swapped Grid Position */}
              <div className="lg:col-span-6 relative group lg:order-2 order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-4/5 rounded-4xl overflow-hidden ring-1 ring-(--color-foreground)/10 shadow-2xl"
                >
                  <Image
                    src="https://scontent.flos2-2.fna.fbcdn.net/v/t39.30808-6/622253138_10166689777420558_2032804675922933017_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHw4lHaxitz5_AzHoVgg5CzNPGIcd8Rccw08Yhx3xFxzDWVu8r83AeHnFOaY6aogU2AjIpV_ieL1T7gboSWsl1y&_nc_ohc=VGcsMvqnFQsQ7kNvwF9QHHH&_nc_oc=AdkePFv6j6VFMFVHWlYzhveCfgCFDk3LYPyb6igpfwbhT-a-ZiHf1oOhYHDWljZjYng&_nc_zt=23&_nc_ht=scontent.flos2-2.fna&_nc_gid=e1iDVpCwxrHUIdhvMk7z9g&oh=00_AfsUBAb8XGAqmK8dLIhCcaMZHH-AluWORlFb42j3nupuog&oe=69A15E3F"
                    alt="Pastor Favour Osiri"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Overlapping quotes badge */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-12 -right-8 md:-right-12 p-8 bg-(--color-primary) text-white rounded-3xl shadow-2xl max-w-64"
                >
                  <Heart className="w-8 h-8 mb-4 text-(--color-accent)" />
                  <p className="text-sm font-bold italic leading-relaxed">
                    &quot;Grace transforms everything it touches.&quot;
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
