"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { GiftIcon, ShoppingBag, X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pastors", label: "Pastors" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className="w-full flex h-20 items-center px-4 md:px-6 lg:px-12 sticky top-0 z-50 backdrop-blur-xl border-b border-(--color-foreground)/5 transition-all duration-300"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-background) 85%, transparent)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0 mr-8 lg:mr-12 flex items-center">
          <Image
            src="/image.png"
            height={50}
            width={50}
            alt="The Compass Assembly Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-(--color-primary)"
                    : "text-(--color-foreground)/50 hover:text-(--color-foreground)"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-(--color-primary) rounded-full" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <a
            href="https://paystack.shop/tcahq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-(--color-foreground)/60 hover:text-(--color-foreground) transition-colors uppercase tracking-widest rounded-full hover:bg-(--color-foreground)/5"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop
          </a>
          <div className="w-px h-5 bg-(--color-foreground)/10" />
          <Link
            href="/give"
            style={{ backgroundColor: "var(--color-primary)" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-black text-white uppercase tracking-widest shadow-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95"
          >
            <GiftIcon className="h-4 w-4" />
            Give
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Right Controls */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="p-2 rounded-full text-(--color-foreground)/70 hover:text-(--color-foreground) hover:bg-(--color-foreground)/10 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "var(--color-background)",
        }}
      >
        <nav className="flex flex-col h-full px-6 pt-8 pb-12 space-y-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-4 rounded-2xl text-xl font-black uppercase tracking-widest transition-colors ${
                  isActive
                    ? "bg-(--color-primary)/10 text-(--color-primary)"
                    : "text-(--color-foreground)/60 hover:text-(--color-foreground) hover:bg-(--color-foreground)/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-(--color-primary)" />
                )}
              </Link>
            );
          })}

          <div className="pt-8 mt-auto space-y-3">
            <a
              href="https://paystack.shop/tcahq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-4 rounded-2xl text-sm font-black text-(--color-foreground)/60 border border-(--color-foreground)/10 uppercase tracking-widest hover:bg-(--color-foreground)/5 transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop
            </a>
            <Link
              href="/give"
              onClick={() => setMobileMenuOpen(false)}
              style={{ backgroundColor: "var(--color-primary)" }}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-4 rounded-2xl text-sm font-black text-white uppercase tracking-widest shadow-lg transition-all hover:opacity-90"
            >
              <GiftIcon className="h-4 w-4" />
              Give
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderNav;
