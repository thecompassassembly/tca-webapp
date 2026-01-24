"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/watch", label: "Watch" },
  { href: "/give", label: "Give" },
  { href: "/locations", label: "Locations" },
  { href: "/content", label: "Content" },
];

const dropdownLinks = [
  {
    label: "Connect",
    items: [
      { href: "/connect/small-groups", label: "Small Groups" },
      { href: "/connect/volunteer", label: "Volunteer" },
      { href: "/connect/contact", label: "Contact" },
    ],
  },
  {
    label: "Ministries",
    items: [
      { href: "/ministries/youth", label: "Youth" },
      { href: "/ministries/children", label: "Children" },
      { href: "/ministries/women", label: "Women" },
      { href: "/ministries/men", label: "Men" },
    ],
  },
];

const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/image.png"
                alt="The Compass Assembly"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
            </Link>

            {/* Right Section */}
            <div className="flex flex-col items-end gap-3">
              {/* Top Row: Theme Toggle */}
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>

              {/* Bottom Row: Navigation Links */}
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{
                      color: "var(--color-foreground)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-foreground)";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Connect Dropdown */}
                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{
                      color: "var(--color-foreground)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-foreground)";
                    }}
                  >
                    Connect
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderColor: "var(--color-secondary)",
                    }}
                  >
                    <div className="py-2">
                      {dropdownLinks[0].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm transition-colors"
                          style={{
                            color: "var(--color-foreground)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-secondary)";
                            e.currentTarget.style.color = "#000000";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color =
                              "var(--color-foreground)";
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ministries Dropdown */}
                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{
                      color: "var(--color-foreground)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-foreground)";
                    }}
                  >
                    Ministries
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderColor: "var(--color-secondary)",
                    }}
                  >
                    <div className="py-2">
                      {dropdownLinks[1].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm transition-colors"
                          style={{
                            color: "var(--color-foreground)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-secondary)";
                            e.currentTarget.style.color = "#000000";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color =
                              "var(--color-foreground)";
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/events"
                  className="text-sm transition-colors"
                  style={{
                    color: "var(--color-foreground)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-foreground)";
                  }}
                >
                  Events
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/image.png"
                alt="The Compass Assembly"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
            </Link>

            {/* Theme Toggle and Hamburger Menu Button */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 transition-colors"
                style={{
                  color: "var(--color-foreground)",
                }}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {mobileMenuOpen ? (
                    <path d="M18 6 6 18M6 6l12 12" />
                  ) : (
                    <>
                      <line x1={4} x2={20} y1={6} y2={6} />
                      <line x1={4} x2={20} y1={12} y2={12} />
                      <line x1={4} x2={20} y1={18} y2={18} />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="border-t"
            style={{
              backgroundColor: "var(--color-background)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <div className="px-4 py-4 space-y-4">
              {/* Navigation Links */}
              <nav
                className="space-y-0 border-t pt-4"
                style={{ borderColor: "var(--color-secondary)" }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 text-lg font-bold border-b"
                    style={{ borderColor: "var(--color-secondary)" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Connect Expandable */}
                <div>
                  <button
                    onClick={() => toggleDropdown("Connect")}
                    className="flex items-center justify-between w-full py-3 text-lg font-bold border-b"
                    style={{ borderColor: "var(--color-secondary)" }}
                  >
                    <span>Connect</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${
                        expandedDropdown === "Connect" ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {expandedDropdown === "Connect" && (
                    <div className="pl-4 py-2 space-y-2">
                      {dropdownLinks[0].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-base transition-colors"
                          style={{
                            color: "var(--color-foreground)",
                          }}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setExpandedDropdown(null);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Ministries Expandable */}
                <div>
                  <button
                    onClick={() => toggleDropdown("Ministries")}
                    className="flex items-center justify-between w-full py-3 text-lg font-bold border-b"
                    style={{ borderColor: "var(--color-secondary)" }}
                  >
                    <span>Ministries</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${
                        expandedDropdown === "Ministries" ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {expandedDropdown === "Ministries" && (
                    <div className="pl-4 py-2 space-y-2">
                      {dropdownLinks[1].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-base transition-colors"
                          style={{
                            color: "var(--color-foreground)",
                          }}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setExpandedDropdown(null);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/events"
                  className="block py-3 text-lg font-bold border-b"
                  style={{ borderColor: "var(--color-secondary)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Events
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderNav;
