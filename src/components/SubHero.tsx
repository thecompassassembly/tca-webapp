"use client";

import Image from "next/image";
import React from "react";

type SubHeroProps = {
    imageSrc: string;
    title: string;
    subtitle?: string;
    pillText?: string;
    className?: string;
};

export default function SubHero({ imageSrc, title, subtitle, pillText, className }: SubHeroProps) {
    return (
        <section
            className={
                [
                    "relative w-full h-[420px] md:h-[620px] overflow-hidden",
                    className ?? "",
                ].join(" ")
            }
            style={{ backgroundColor: "var(--color-background)" }}
        >
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-end">
                <div className="pb-8 md:pb-10">
                    {pillText && (
                        <span
                            className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.35em] px-3 py-1 rounded-full"
                            style={{ backgroundColor: "var(--color-primary)", color: "#000" }}
                        >
                            {pillText}
                        </span>
                    )}

                    <h1
                        className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest"
                        style={{ color: "#fff" }}
                    >
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="mt-3 text-base md:text-lg text-white/85 max-w-2xl">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
