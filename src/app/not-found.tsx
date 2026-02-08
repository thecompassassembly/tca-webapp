'use client'

import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
            }}>
            <HeaderNav />
            <main className="flex items-center justify-center min-h-[80vh] px-6 md:px-8">
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* 404 Number */}
                    <motion.div
                        className="text-8xl md:text-9xl font-black mb-8"
                        style={{ color: 'var(--color-primary)' }}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        404
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-6" style={{ color: 'var(--color-foreground)' }}>
                        Page Not Found
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl mb-8 opacity-80 leading-relaxed">
                        Oops! The page you're looking for seems to have wandered off. Don't worry, let's get you back on track.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </motion.a>
                        <motion.button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </motion.button>
                    </div>

                    {/* Additional Help */}
                    <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                        <p className="text-sm opacity-60 mb-4">
                            If you believe this is an error, please contact us.
                        </p>
                        <Link href="/contact" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </main>
            <FooterNav />
        </div>
    );
}
