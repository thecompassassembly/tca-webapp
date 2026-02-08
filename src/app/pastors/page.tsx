'use client'

import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import SubHero from '@/components/SubHero';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pastors() {
    return (
        <div className="min-h-screen "
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}>
            <HeaderNav />
            <main className="py-16 px-8">

            </main>
            <FooterNav />
        </div>
    );
}
