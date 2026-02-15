"use client";
import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import Units from './units';
import SubHero from '@/components/SubHero';

export default function JoinWorkForce() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}>
            <HeaderNav />

            <main className="overflow-hidden">
                {/* HERO SECTION */}
                <SubHero
                    imageSrc="/images/imgg.jpg"
                    title="Join Our Dynamic Workforce"
                    pillText="WORKFORCE"
                    subtitle="Be part of a team that thrives on innovation, excellence, and impact. Your next career move starts here.!!"
                    heightClass="h-[600px]"
                    imagePosition="object-center"
                />

                {/* UNITS SECTION */}
                <Units />

                <section className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-3 gap-12 text-center">
                    {[
                        {
                            title: "Innovation",
                            text: "We cultivate creativity and forward-thinking in every role.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-16 h-16 mx-auto text-gradient animate-bounce-slow"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.728l1.414 1.414M17.95 17.95l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z" />
                                </svg>
                            ),
                        },
                        {
                            title: "Growth",
                            text: "Opportunities for personal and professional development.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-16 h-16 mx-auto text-gradient animate-bounce-slow delay-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                                </svg>
                            ),
                        },
                        {
                            title: "Impact",
                            text: "Make meaningful contributions to society and industry.",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-16 h-16 mx-auto text-gradient animate-bounce-slow delay-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 4v16" />
                                </svg>
                            ),
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-500 group overflow-hidden"
                        >

                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow group-hover:scale-110" />
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow group-hover:scale-110 delay-100" />

                            {/* SVG Icon */}
                            {item.icon}

                            {/* Title */}
                            <h3 className="mt-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className=" text-lg leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </section>

               
            </main>

            <FooterNav />
        </div>
    );
}
