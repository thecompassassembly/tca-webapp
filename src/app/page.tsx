'use client'

import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <div className="min-h-screen font-mono"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <HeaderNav />
      <main className="">

        
        {/* Marquee Section */}
        <div className="mb-16 border-y-8" style={{ borderColor: "var(--color-secondary)" }}>
          <Marquee speed={50} gradient={false} className="py-4">
            <div className="flex gap-12 text-4xl md:text-5xl font-black uppercase tracking-widest cursor-pointer" style={{ color: "var(--color-secondary)" }}>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">Word</span>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">•</span>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">Worship</span>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">•</span>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">Prayer</span>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">•</span>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">Discipleship</span>
              <span className="transition-colors duration-300 hover:text-[var(--color-primary)]">•</span>
            </div>
          </Marquee>
        </div>

      </main>
      <FooterNav />
    </div>
  );
}
