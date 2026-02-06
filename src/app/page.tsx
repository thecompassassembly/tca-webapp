'use client'

import Image from 'next/image';
import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import { Users, Eye, Target } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <HeaderNav />
      <section>
        {/* Hero Section with Video Background and Fallback Slideshow */}
        <section className="relative w-full h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
          >
            <source src="/images/the-compass-video.mp4" type="video/mp4" />
          </video> */}
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
          </div>
        </section>

        {/* action links  */}
        <section className="w-full py-20 px-6 md:px-12" style={{ backgroundColor: "var(--color-background)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: "var(--color-primary)" }}>
                Quick Actions
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: "var(--color-foreground)" }}>
                Get Involved
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
                Explore our community and stay connected with The Compass Assembly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Featured Watch Live (image) */}
              <a href="/live" aria-label="Watch Live" className="group relative md:col-span-2 overflow-hidden rounded-2xl shadow-lg">
                <div className="relative w-full h-72 md:h-96">
                  <Image src="/images/6051031874487914137.jpg" alt="Watch Live" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                  <div className="absolute left-6 bottom-6 text-left text-white max-w-[60%]">
                    <h3 className="text-3xl md:text-4xl font-black leading-tight">Watch Live</h3>
                    <p className="mt-3 text-base md:text-lg opacity-80">Join our live services and events to worship with us online.</p>
                    <div className="mt-6">
                      <button className="inline-flex items-center gap-3 rounded-full px-5 py-3 bg-white text-[var(--color-primary)] font-bold shadow">Watch Now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4"><path d="M5 3v18l15-9-15-9z" fill="currentColor" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </a>

              {/* Give (image) */}
              {/* <a href="/give" className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative w-full h-72 md:h-96">
                  <Image src="/images/6051031874487914152.jpg" alt="Give" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-6 bottom-6 text-left text-white">
                    <h4 className="text-2xl font-bold">Give</h4>
                    <p className="mt-2 opacity-80">Support our mission and ministry.</p>
                  </div>
                </div>
              </a> */}

              {/* Sermons (image) */}
              <a href="/sermons" className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative w-full h-72 md:h-96">
                  <Image src="/images/6051031874487914224.jpg" alt="Sermons" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-6 bottom-6 text-left text-white">
                    <h4 className="text-2xl font-bold">Sermons</h4>
                    <p className="mt-2 opacity-80">Access our latest teachings and messages.</p>
                  </div>
                </div>
              </a>

              {/* Events (image) */}
              <a href="/events" className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative w-full h-72 md:h-96">
                  <Image src="/images/6051031874487914218.jpg" alt="Events" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-6 bottom-6 text-left text-white">
                    <h4 className="text-2xl font-bold">Events</h4>
                    <p className="mt-2 opacity-80">Stay updated on upcoming activities and gatherings.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Our Expressions Section */}
        <section className="w-full py-20 lg:px-0 px-6 md:px-12" style={{ backgroundColor: "var(--color-background)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: "var(--color-primary)" }}>
                Our Locations
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: "var(--color-foreground)" }}>
                Our Expressions
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-80">
                Join us at any of our three vibrant locations across the region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Rumumasi */}
              <div className="group relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <div className="relative w-full h-80 md:h-[500px]">
                  <Image
                    src="/images/6051031874487914150.jpg"
                    alt="Rumumasi Expression"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  {/* Text on image */}
                  <div className="absolute bottom-0 left-0 p-6 text-left">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
                      Rumumasi
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white/80">
                      Experience worship and community at our Rumumasi expression.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rumuosi */}
              <div className="group relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <div className="relative w-full h-80  md:h-[500px]">
                  <Image
                    src="/images/6051031874487914176.jpg"
                    alt="Rumuosi Expression"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  {/* Text on image */}
                  <div className="absolute bottom-0 left-0 p-6 text-left">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
                      Rumuosi
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white/80">
                      Connect and grow with us at our Rumuosi expression.
                    </p>
                  </div>
                </div>
              </div>

              {/* Oyigbo */}
              <div className="group relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <div className="relative w-full h-80  md:h-[500px]">
                  <Image
                    src="/images/6051031874487914220.jpg"
                    alt="Oyigbo Expression"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  {/* Text on image */}
                  <div className="absolute bottom-0 left-0 p-6 text-left">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
                      Oyigbo
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white/80">
                      Be part of our thriving Oyigbo expression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </section>
      <FooterNav />
    </main>
  );
}
