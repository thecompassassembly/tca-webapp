'use client';

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check localStorage or system preference
        const saved = localStorage.getItem('theme');
        const isDarkMode = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(isDarkMode);
        applyTheme(isDarkMode);
    }, []);

    const applyTheme = (dark: boolean) => {
        const html = document.documentElement;
        if (dark) {
            html.classList.remove('light');
        } else {
            html.classList.add('light');
        }
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    };

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
            className="flex items-center justify-center border-4 p-2 transition-all"
            style={{
                backgroundColor: isDark ? 'var(--color-secondary)' : 'var(--color-primary)',
                color: isDark ? '#000000' : '#ffffff',
                borderColor: isDark ? 'var(--color-secondary)' : 'var(--color-primary)',
            }}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <span className="text-lg">{isDark ? '☀️' : '🌙'}</span>
        </button>
    );
};

export default ThemeToggle;
