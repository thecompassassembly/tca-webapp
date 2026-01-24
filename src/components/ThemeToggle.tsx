"use client";

import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState, startTransition } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.remove("light");
    } else {
      html.classList.add("light");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDarkMode = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    startTransition(() => {
      setIsDark(isDarkMode);
      setMounted(true);
    });

    applyTheme(isDarkMode);
  }, []);

  const toggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
  };

  if (!mounted) return null;

  return (
 <button
  onClick={toggle}
  type="button"
  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
  className="flex items-center justify-center transition-all"
>
  <span className="flex items-center justify-center p-1 rounded-full border border-gray-200 dark:border-neutral-800">
    {isDark ? (
      <Sun className="size-4 text-black dark:text-white" />
    ) : (
      <Moon className="size-4 text-black dark:text-black" />
    )}
  </span>
</button>
  );
};

export default ThemeToggle;
