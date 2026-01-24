"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { GiftIcon } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  return (
    <header
      className="mx-auto flex h-20 items-center p-2 md:px-4 lg:px-8 py-8 sticky top-0 z-50 backdrop-blur-md border-b border-[var(--color-border)] transition-colors duration-300"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-background) 80%, transparent)",
        color: "var(--color-foreground)",
      }}
    >
      <Link
        className="focus-visible:ring-ring hover:text-accent-foreground inline-flex h-9 items-center justify-center rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 w-auto lg:mr-10"
        href="/"
      >
        <div className="relative flex w-full items-center justify-center rounded-md bg-black text-sm text-white antialiased lg:ml-10">
          
          <div className="relative z-0 text-sm text-emerald-500">
            <Image src="/image.png" height={50} width={50} alt="Logo" className="h-4 md:h-6 lg:h-8 w-auto" />
         
          </div>
        </div>
      </Link>

      <nav className="mr-4 hidden lg:flex  items-center space-x-6 text-sm font-medium ">

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-foreground/80 text-foreground/60 hidden space-x-1 transition-colors sm:flex"
          >
            {link.label}
          </Link>
        ))}
       
 
      </nav>

      <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
        
        {/* <button className="relative flex w-fit items-center justify-start rounded-xl bg-white px-2 py-2 text-sm text-muted-foreground hover:shadow-input dark:bg-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4 text-neutral-500"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button> */}

            <div className="flex lg:hidden">

        <ThemeToggle />
        </div>

        {/* <span className="mx-3 flex lg:hidden text-nuetral-200 dark:text-neutral-700">|</span> */}
        
        <div className="hover:shadow-input relative hidden lg:flex cursor-pointer items-center justify-center rounded-xl p-2 space-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4 text-neutral-500 dark:text-neutral-500"
          >
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17h-11v-14h-2"></path>
            <path d="M6 5l14 1l-1 7h-13"></path>
          </svg>
          <a
          className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors"
          href="/login"
        >
          Shop
        </a>    
        </div>
        <span className="mx-3 hidden lg:flex text-nuetral-200 dark:text-neutral-700">|</span>
        <a
          className="hover:text-foreground/80 text-foreground/60 mr-3 text-sm font-medium transition-colors hidden lg:flex "
          href="/login"
        >
          Contact
        </a>

          
        <a
        style={{
        backgroundColor: "var(--color-primary)",
        // color: "var(--color-accent)",
      }}
          className="no-underline flex space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 relative z-20 dark:text-white text-white h-10 items-center justify-center rounded-lg text-center text-sm w-fit flex-row items-center"
          href="/pricing"
        >
          <GiftIcon className="h-4 w-4" />
          <span>Give</span>
        </a>
        <div className="hidden lg:flex ">

        <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
