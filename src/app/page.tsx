'use client'

import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <div className="min-h-screen"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <HeaderNav />
      <main className="">

        
        <div className="my-80"></div>

      </main>
      <FooterNav />
    </div>
  );
}
