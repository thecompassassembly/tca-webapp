"use client";
import { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
// import ThankYouScreen from "./thankYou";
import SubHero from "@/components/SubHero";
import Button from "@/components/Button";
import { AnimatePresence, motion } from "framer-motion";
import NotificationBadge from "@/components/NotificationBadge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PrayerRequest() {
    const [submitted, setSubmitted] = useState(false);
    const [visitPlanned, setVisitPlanned] = useState(false);
    const router = useRouter();
    const [prayerSubmitted, setPrayerSubmitted] = useState(false);


    const pathname = usePathname();


    const searchParams = useSearchParams();

    useEffect(() => {

        if (window.location.hash === "#prayer-form") {
            const el = document.getElementById("prayer-form");
            el?.scrollIntoView({ behavior: "smooth" });
        }
    }, []);


    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
            }}
        >
            <HeaderNav />

            <main>

                <>

                    <SubHero
                        imageSrc="/images/id3.jpg"
                        title="  You Are Not Alone"
                        pillText="TCA"
                        subtitle="Whatever weighs on your heart, God sees it.
                                    Share your prayer request and let us stand with you in faith.!"
                        heightClass="h-[600px]"
                        imagePosition="object-center"
                    >
                        <button
                            onClick={() =>
                                document
                                    .getElementById("prayer-form")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="mt-6 inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black  font-semibold text-lg hover:scale-105 transition shadow-lg"
                        >
                            Get Started
                        </button>
                    </SubHero>
                    <section
                        id="prayer-form"
                        className="relative py-32 flex items-center justify-center px-8"
                    >
                        <div className="absolute inset-0" />

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative z-10 max-w-2xl w-full rounded-3xl backdrop-blur-xl border border-white/10 p-10 space-y-8"
                        >
                            <AnimatePresence>
                                {prayerSubmitted && (
                                    <div className="mb-6">
                                        <NotificationBadge
                                            text="Prayer Received 🙏🏽✨"
                                            type="success"
                                        />
                                    </div>
                                )}
                            </AnimatePresence>

                            <h2 className="text-3xl font-serif font-bold text-center">
                                Share Your Prayer Request
                            </h2>

                            <p className="text-center text-white/60 text-sm">
                                Your request will be handled with love, discretion, and faith.
                            </p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setPrayerSubmitted(true);

                                    setTimeout(() => {
                                        // router.push("/thankYou");
                                        router.replace("/thankYou#prayer-form");
                                    }, 500);
                                }}
                                className="space-y-6 shadow-lg p-10 rounded"
                            >
                                <div>
                                    <label className="block text-sm mb-2">
                                        Your Name (optional)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full rounded-xl px-4 py-3 outline-none border"
                                        style={{
                                            backgroundColor: "var(--color-background)",
                                            color: "var(--color-foreground)",
                                            borderColor: "var(--color-border)",
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm mb-2">
                                        Email Address (optional)
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl px-4 py-3 outline-none border"
                                        style={{
                                            backgroundColor: "var(--color-background)",
                                            color: "var(--color-foreground)",
                                            borderColor: "var(--color-border)",
                                        }}
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="anonymous"
                                        className="accent-indigo-600"
                                    />
                                    <label htmlFor="anonymous" className="text-sm">
                                        Submit this prayer anonymously
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-sm mb-2">
                                        Your Prayer Request
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder="Write your prayer request here..."
                                        className="w-full rounded-xl px-4 py-3 outline-none border resize-none"
                                        style={{
                                            backgroundColor: "var(--color-background)",
                                            color: "var(--color-foreground)",
                                            borderColor: "var(--color-border)",
                                        }}
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        type="submit"
                                        variant="purple"
                                        className="w-full py-4 rounded-full"
                                    >
                                        Submit Prayer Request
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </section>

                </>

            </main>

            <FooterNav />
        </div>
    );
}

