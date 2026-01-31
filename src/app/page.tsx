'use client'

import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';

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
      <main>
        {/* Hero Section with Video Background and Fallback Slideshow */}
        <section className="relative w-full h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
          >
            <source src="/images/the-compass-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center max-w-3xl mx-auto w-full h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-6" style={{ color: "var(--color-secondary)" }}>
              Welcome to The Compass Assembly
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-foreground)" }}>
              A warm and exciting Christian community where everyone is valued and cherished. Join us as we grow together in faith, hope, and love.
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.location.href = '#about'}
                className="px-10 py-3 text-lg font-bold uppercase rounded-lg border-2 border-white bg-white text-black transition-all duration-300 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Learn More
              </button>
              <button
                onClick={() => window.location.href = '/live'}
                className="px-10 py-3 text-lg font-bold uppercase rounded-lg border-2 border-white text-white bg-transparent transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Watch Live
              </button>
            </div>
          </div>
        </section>
      </main>
      <FooterNav />
    </div>
  );
}
