
"use client";
import { useState, useEffect } from "react";
import { PrayerModel, prayers } from "@/models/prayerModel";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";


export default function ThankYouScreen() {
    const [selectedPrayer, setSelectedPrayer] = useState<PrayerModel>(prayers[0]);
    
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * prayers.length);
        setSelectedPrayer(prayers[randomIndex]);
    }, []);
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-950 via-neutral-900 to-black text-white px-6 md:px-8">
            <main className="w-full max-w-3xl flex flex-col justify-center items-center space-y-10 py-12 md:py-2">
                <h1 className="text-5xl md:text-6xl font-bold font-seriftext-center">
                    Thank You!
                </h1>

                <p className="text-lg md:text-xl text-white/80 text-center leading-relaxed">
                    Your prayer request has been received. We stand with you in faith.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col items-center space-y-4"
                >

                    <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 space-y-6 flex flex-col items-center">
                        <p className="text-white/90 italic text-lg md:text-xl text-center">
                            {selectedPrayer.prayer}
                        </p>
                        <p className="text-white/60 font-medium text-center">
                            <span className="font-bold">{selectedPrayer.scripture.reference}</span> – {selectedPrayer.scripture.text}
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-4 mt-6">

                    <button
                        onClick={() => router.push("/request")}
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-neutral-900 font-semibold hover:scale-105 transition"
                    >
                        Return to  Request
                    </button>

     
                    <button
                        onClick={() => router.push("/")}
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-neutral-900 font-semibold hover:scale-105 transition"
                    >
                        Go to Home Page
                    </button>
                </div>

            </main>
        </div>
    );
}
