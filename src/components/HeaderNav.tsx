'use client'

import React, { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pastors", label: "Pastors" },
    { href: "/sermons", label: "Sermons" },
    { href: "/events", label: "Events" },
    { href: "/give", label: "Give" },
    { href: "/contact", label: "Contact" },
];

const HeaderNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-40 border-b-8 px-6 py-3 md:px-10 md:py-4"
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo + Title */}
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden border-4 bg-white md:h-12 md:w-12"
                    >
                        <Image
                            src="/images/logo-compass.jpg"
                            alt="Compass Assembly Logo"
                            fill
                            sizes="60px"
                            className="object-contain"
                        />
                    </div>

                </div>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="border-b-4 border-transparent pb-1 text-sm font-bold uppercase tracking-wide transition-colors hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Theme toggle + Mobile menu button */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex items-center gap-2 rounded-none border-4 px-3 py-2 text-xs font-black uppercase tracking-widest md:hidden"
                        style={{
                            backgroundColor: "var(--color-secondary)",
                            borderColor: "var(--color-secondary)",
                            color: "#000000",
                        }}
                    >
                        <span>Menu</span>
                        <span className="flex h-4 w-4 flex-col justify-between">
                            <span className="block h-[2px] w-full bg-black" />
                            <span className="block h-[2px] w-full bg-black" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile nav dropdown */}
            {open && (
                <nav className="mt-3 border-t-4 pt-3 md:hidden"
                    style={{ borderColor: "var(--color-secondary)" }}>
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block w-full border-4 px-3 py-2 text-xs font-bold uppercase tracking-wide"
                                    style={{
                                        borderColor: "var(--color-secondary)",
                                        backgroundColor: "var(--color-background)",
                                    }}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default HeaderNav;