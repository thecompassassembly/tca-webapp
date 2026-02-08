'use client'

import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import SubHero from '@/components/SubHero';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pastors() {
    return (
        <div className="min-h-screen "
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}>
            <HeaderNav />
            <main className="py-0">
                <SubHero
                    imageSrc="/images/6051031874487914225.jpg"
                    title="Our Pastors"
                    pillText="Pastors"
                    subtitle="Meet the shepherds leading The Compass Assembly."
                />
                <section className="px-6 md:px-8 py-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-left my-20"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">Meet Our Pastors</h1>
                            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl">
                                Discover the visionary leaders guiding The Compass Assembly. Their passion for God's Word and unwavering commitment to community inspire us all to live with purpose and faith.
                            </p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            <motion.div
                                className="relative w-full aspect-[4/3] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-md)]"
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Image src="/images/6051031874487914223.jpg" alt="Portrait of Pastor Wisdom Osiri" fill className="object-cover" />
                            </motion.div>
                            {/* Pastor Wisdom Osiri */}
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Pastor Wisdom Osiri</h2>
                                <p className="mt-2 text-sm md:text-base text-foreground/70">Lead Pastor</p>
                                <p className="mt-6 text-base md:text-lg text-foreground/85">
                                    Pastor Wisdom Osiri leads The Compass Assembly with a profound passion for God’s Word and people. His ministry inspires transformation, purpose, and a deeper walk with Christ. With years of experience in pastoral care and community building, he guides our congregation through teachings rooted in scripture, fostering an environment of love, growth, and spiritual renewal.
                                </p>
                                <p className="mt-4 text-base md:text-lg text-foreground/85">
                                    Beyond preaching, Pastor Wisdom is committed to mentorship and outreach, ensuring every member feels valued and empowered to live out their faith in everyday life.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>Get in touch</Link>
                                </div>
                            </motion.div>


                            {/* Divider */}
                            <div className="md:col-span-2 h-px bg-[var(--color-border)] my-6 md:my-8" />

                            {/* Pastor Favour Osiri */}
                            <motion.div
                                className="relative w-full aspect-[4/3] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-md)]"
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Image src="/images/6051031874487914223.jpg" alt="Portrait of Pastor Favour Osiri" fill className="object-cover" />
                            </motion.div>
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Pastor Favour Osiri</h2>
                                <p className="mt-2 text-sm md:text-base text-foreground/70">Co-Lead Pastor</p>
                                <p className="mt-6 text-base md:text-lg text-foreground/85">
                                    Pastor Favour Osiri serves alongside with grace and leadership, championing prayer, excellence, and community. She empowers believers to live intentionally and victoriously, drawing from her deep commitment to worship and discipleship.
                                </p>
                                <p className="mt-4 text-base md:text-lg text-foreground/85">
                                    Her focus on family ministry and spiritual development helps create a nurturing space where faith is strengthened, relationships are built, and lives are transformed through God's grace.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>Get in touch</Link>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </main>
            <FooterNav />
        </div>
    );
}
