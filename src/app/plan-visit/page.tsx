"use client";

import { AnimatePresence, motion } from "framer-motion";
import SubHero from "@/components/SubHero";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
import { useState } from "react";
import NotificationBadge from "@/components/NotificationBadge";
import Button from "@/components/Button";

export default function PlanVisitPage() {
    const [visitPlanned, setVisitPlanned] = useState(false);
    return (
        <div className="min-h-screen bg-neutral-950 text-white" style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}>
            <HeaderNav />

            <SubHero
                imageSrc="/images/6051031874487914267.jpg"
                title="Plan Your Visit"
                subtitle="We Can’t Wait to Welcome You"
                pillText="First Time?"
                heightClass="h-[500px] md:h-[600px]"
                imagePosition="object-center"
            />

            <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    You Belong Here
                </motion.h2>

                <p className=" max-w-2xl mx-auto text-lg">
                    Whether you're new to faith or looking for a church family,
                    The Compass Assembly is a place of clarity, purpose, and growth.
                    Let us prepare to welcome you personally.
                </p>
            </section>

            {/* Visit Form */}
            <section className="max-w-4xl mx-auto px-6 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
                >

                    <AnimatePresence>
                        {visitPlanned && (
                            <div className="mb-10">
                                <NotificationBadge
                                    text="Visit Scheduled 🎉!"
                                    type="success"
                                />
                            </div>
                        )}
                    </AnimatePresence>

                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Schedule Your Visit
                    </h3>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setVisitPlanned(true);
                            setTimeout(() => {
                                setVisitPlanned(false);
                            }, 4000);
                        }}
                        className="grid md:grid-cols-2 gap-6 " >
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border rounded-xl px-4 py-3 outline-none"
                            style={{
                                backgroundColor: "var(--color-background)",
                                color: "var(--color-foreground)",
                                borderColor: "var(--color-border)", 
                            }}
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border rounded-xl px-4 py-3 outline-none"
                            style={{
                                backgroundColor: "var(--color-background)",
                                color: "var(--color-foreground)",
                                borderColor: "var(--color-border)",
                            }}
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="border rounded-xl px-4 py-3 outline-none"
                            style={{
                                backgroundColor: "var(--color-background)",
                                color: "var(--color-foreground)",
                                borderColor: "var(--color-border)",
                            }}
                        />

                        <select
                            className="border rounded-xl px-4 py-3 outline-none"
                            style={{
                                backgroundColor: "var(--color-background)",
                                color: "var(--color-foreground)",
                                borderColor: "var(--color-border)",
                            }}
                        >
                            <option>Select Service</option>
                            <option>Sunday First Service (8AM)</option>
                            <option>Sunday Second Service (10AM)</option>
                            <option>Midweek Service (Wednesday 6PM)</option>
                        </select>

                        <textarea
                            placeholder="How can we prepare for your visit?"
                            rows={4}
                            className="md:col-span-2 border rounded-xl px-4 py-3 outline-none"
                            style={{
                                backgroundColor: "var(--color-background)",
                                color: "var(--color-foreground)",
                                borderColor: "var(--color-border)",
                            }}
                        />


                        
                        <div className="md:col-span-2 relative flex justify-center ">
                            <Button
                                type="submit"
                                variant="purple"
                                className="px-10 py-4"
                            >
                                Confirm My Visit
                            </Button>

                            {/* 
                            <AnimatePresence>
                                {visitPlanned && (
                                    <NotificationBadge
                                        text="Visit Scheduled 🎉!"
                                        type="success"
                                    />
                                )}
                            </AnimatePresence> */}
                        </div>
                    </form>
                </motion.div>
            </section>

            <FooterNav />
        </div>
    );
}
