"use client";
import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { useState } from 'react';
import Units from './units';

export default function JoinWorkForce() {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}>
            <HeaderNav />

                    <main className="overflow-hidden">
            {!clicked ? (
                <>

                        <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">

                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/workforce-hero.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-black/60" />


                            <div className="relative z-10 max-w-4xl px-6 md:px-0 space-y-6">
                                <h1 className="text-5xl md:text-6xl font-bold font-serif text-white leading-tight drop-shadow-lg">
                                    Join Our Dynamic Workforce
                                </h1>
                                <p className="text-lg md:text-2xl text-white/80 drop-shadow-md">
                                    Be part of a team that thrives on innovation, excellence, and impact. Your next career move starts here.
                                </p>

                                {/* <Link href="/UnitS"> */}
                                <button
                                    onClick={() => setClicked(true)}
                                    className="mt-6 inline-flex items-center gap-3 px-12 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition shadow-lg">
                                        Explore Opportunities <ArrowRight />
                                    </button>
                                {/* </Link> */}
                            </div>


                            <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
                            <div className="absolute bottom-20 left-1/4 w-[32rem] h-[32rem] bg-purple-700/20 rounded-full blur-3xl animate-pulse-slow-reverse"></div>
                        </section>


                        <section className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-3 gap-12 text-center">
                            {[
                                { title: "Innovation", text: "We cultivate creativity and forward-thinking in every role.", icon: "💡" },
                                { title: "Growth", text: "Opportunities for personal and professional development.", icon: "📈" },
                                { title: "Impact", text: "Make meaningful contributions to society and industry.", icon: "🌍" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:scale-105 transition-transform duration-500">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/70">{item.text}</p>
                                </div>
                            ))}
                        </section>
                    </>
                    ) : (
                    <Units />
                )}
                </main>

            <FooterNav />
        </div>
    );
}
