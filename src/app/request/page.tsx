"use client";
import { useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
import ThankYouScreen from "./thankYou";

export default function PrayerRequest() {
    const [submitted, setSubmitted] = useState(false);

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
                {!submitted ? (
                    <>
                        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-bottom bg-no-repeat z-0"
                                style={{ backgroundImage: "url('/images/pray.jpg')" }}
                            />

                            
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

                            
                            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-3xl" />

                            
                            <div className="relative z-10 max-w-3xl text-center px-8 space-y-8">
                                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                                    You Are Not Alone
                                </h1>

                                <p className="text-lg md:text-xl text-white/80 leading-relaxed drop-shadow-md">
                                    Whatever weighs on your heart, God sees it.
                                    Share your prayer request and let us stand with you in faith.
                                </p>

                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("prayer-form")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="inline-flex items-center gap-3 px-14 py-5 rounded-full bg-white text-neutral-900 font-semibold text-lg hover:scale-105 transition shadow-lg"
                                >
                                    Get Started
                                </button>
                            </div>
                        </section>


                        {/* ==PRAYER FORM== */}
                        <section
                            id="prayer-form"
                            className="relative py-32 flex items-center justify-center px-8"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

                            <div className="relative z-10 max-w-2xl w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 space-y-8">
                                <h2 className="text-3xl font-serif font-bold text-white text-center">
                                    Share Your Prayer Request
                                </h2>

                                <p className="text-center text-white/60 text-sm">
                                    Your request will be handled with love, discretion, and faith.
                                </p>

                                
                                <div>
                                    <label className="block text-sm text-white/70 mb-2">
                                        Your Name (optional)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                             
                                <div>
                                    <label className="block text-sm text-white/70 mb-2">
                                        Email Address (optional)
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                         
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="anonymous"
                                        className="accent-indigo-600"
                                    />
                                    <label htmlFor="anonymous" className="text-sm text-white/70">
                                        Submit this prayer anonymously
                                    </label>
                                </div>

                           
                                <div>
                                    <label className="block text-sm text-white/70 mb-2">
                                        Your Prayer Request
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder="Write your prayer request here..."
                                        className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                    />
                                </div>

                               
                                <button
                                    onClick={() => setSubmitted(true)}
                                    className="w-full py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
                                >
                                    Submit Prayer Request
                                </button>
                            </div>
                        </section>
                    </>
                ) : (
                    <ThankYouScreen />
                )}
            </main>

            <FooterNav />
        </div>
    );
}

