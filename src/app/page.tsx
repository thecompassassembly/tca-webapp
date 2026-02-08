'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import { Users, Eye, Target, GiftIcon } from 'lucide-react';

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="relative z-20 flex flex-col items-center justify-center max-w-3xl w-full h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-6" style={{ color: "var(--color-secondary)" }}>
              Welcome to The Compass Assembly
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-foreground)" }}>
              A warm and exciting Christian community where everyone is valued and cherished. Join us as we grow together in faith, hope, and love.
            </p>
            <motion.div className='flex justify-center w-full flex-col md:flex-row gap-4' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <motion.a href="/live" aria-label="Watch Live" className="inline-flex w-full md:w-auto md:flex-1 md:max-w-[240px] justify-center items-center gap-3 rounded-full px-6 py-3 bg-white text-[var(--color-primary)] font-bold shadow-md transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                Watch Live
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
                  <path d="M5 3v18l15-9-15-9z" fill="currentColor" />
                </svg>
              </motion.a>

              <motion.a href="/give" aria-label="Give to The Compass Assembly" className="inline-flex w-full md:w-auto md:flex-1 md:max-w-[240px] justify-center items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-accent)] text-black font-bold shadow-md transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}>
                Give for Pinnacle
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* action links  */}
        <motion.section className="w-full py-20 px-6 md:px-12" style={{ backgroundColor: "var(--color-background)" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
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
              <a href="/live" aria-label="Watch Live" className="group relative md:col-span-2 overflow-hidden shadow-lg">
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
              <a href="/sermons" className="group relative overflow-hidden shadow-lg">
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
              <a href="/events" className="group relative overflow-hidden shadow-lg">
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
        </motion.section>

        {/* Our Expressions Section */}
        <motion.section className="w-full py-20 lg:px-0 px-6 md:px-12" style={{ backgroundColor: "var(--color-background)" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: "var(--color-primary)" }}>
                Our Locations
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: "var(--color-foreground)" }}>
                Our Expressions
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
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
        </motion.section>

        {/* Sermons Section */}
        <motion.section className="w-full py-20 px-6 md:px-12" style={{ backgroundColor: 'var(--color-background)' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: 'var(--color-primary)' }}>
                Messages
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: 'var(--color-foreground)' }}>
                Latest Sermons
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
                Stay inspired with recent teachings. Watch and share to spread the Word.
              </p>
            </div>

            <div className="relative sermons-swiper">
              {/* Custom arrows at bottom-left */}
              <div className="absolute right-6 bottom-6 z-20 flex items-center gap-3">
                <button aria-label="Previous" className="sermons-prev flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/25 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button aria-label="Next" className="sermons-next flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/25 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ prevEl: '.sermons-prev', nextEl: '.sermons-next' }}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full"
              >
                <SwiperSlide>
                  <a href="/sermons" className="group relative block w-full h-80 md:h-[480px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <Image src="/images/6051031874487914224.jpg" alt="Sermon 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute left-6 bottom-6 text-left text-white max-w-[70%]">
                      <h3 className="text-2xl md:text-3xl font-black leading-tight">Steadfast in Faith</h3>
                      <p className="mt-2 text-sm md:text-base opacity-80">A timely word to strengthen your walk with God.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="/sermons" className="group relative block w-full h-80 md:h-[480px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <Image src="/images/6051031874487914151.jpg" alt="Sermon 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute left-6 bottom-6 text-left text-white max-w-[70%]">
                      <h3 className="text-2xl md:text-3xl font-black leading-tight">Hope That Endures</h3>
                      <p className="mt-2 text-sm md:text-base opacity-80">Be encouraged by the unwavering promises of God.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="/sermons" className="group relative block w-full h-80 md:h-[480px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <Image src="/images/6051031874487914218.jpg" alt="Sermon 3" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute left-6 bottom-6 text-left text-white max-w-[70%]">
                      <h3 className="text-2xl md:text-3xl font-black leading-tight">Living in Grace</h3>
                      <p className="mt-2 text-sm md:text-base opacity-80">Discover the freedom found in God’s grace.</p>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </motion.section>

        {/* Give - full screen hero (static background + illustration) */}
        <motion.section
          className="relative w-full min-h-screen flex items-center"
          aria-label="Give to The Compass Assembly"
          style={{ backgroundColor: 'var(--color-primary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.12)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:px-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80 text-white/90">
                  Support
                </p>

                <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-white">
                  Give to The Compass Assembly
                </h2>

                <p className="mt-6 text-lg md:text-xl opacity-90 text-white/90">
                  Your generosity helps us run community programs, support families in need, and spread hope across the region. Choose a way to give and join us in making a lasting impact.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a href="/give" className="inline-flex w-full sm:w-auto sm:flex-1 justify-center items-center gap-3 rounded-full px-6 py-3 bg-white text-[var(--color-primary)] font-bold shadow-md">
                    <GiftIcon className="h-4 w-4" />
                    Give Now
                  </a>

                  <a href="/give?p=pinnacle" className="inline-flex w-full sm:w-auto sm:flex-1 justify-center items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-accent)] text-black font-bold shadow-md">
                    Give for Pinnacle
                  </a>

                </div>
              </div>

              {/* Illustration: hand dropping a coin */}
              <div className="flex items-center justify-center">
                <svg className="w-48 h-48 md:w-64 md:h-64" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ffd54d" />
                      <stop offset="100%" stopColor="#ffb300" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.25" />
                    </filter>
                  </defs>

                  {/* coin */}
                  <g filter="url(#shadow)">
                    <circle className="animate-bounce" cx="84" cy="18" r="12" fill="url(#goldGrad)" stroke="#c78f00" strokeWidth="2" />
                    <text x="84" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a5a00">₦</text>
                  </g>

                  {/* simple stylized hand */}
                  <g transform="translate(6,34)">
                    <path d="M12 38c8-2 18-6 30-12 6-3 16-2 22 3 5 5 4 14-4 20-8 6-24 8-38 6-8-1-12-6-12-17z" fill="#fff" opacity="0.95" />
                    <path d="M22 36c6-3 14-6 22-9" stroke="#e6e6e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="8" y="6" width="16" height="8" rx="4" fill="#fff" opacity="0.95" transform="rotate(-12 16 10)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Meet Our Lead Pastor (side-by-side) */}
        <motion.section className="w-full py-20 px-6 md:px-12" style={{ backgroundColor: 'var(--color-background)' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image column */}
              <div className="order-2 md:order-1 group relative w-full h-[420px] md:h-[560px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                <Image src="/images/6051031874487914203.jpg" alt="Pastor Wisdom Osiri" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
              </div>

              {/* Text column */}
              <div className="order-1 md:order-2">
                <div className="text-left mb-8">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: 'var(--color-primary)' }}>
                    Leadership
                  </p>
                  <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: 'var(--color-foreground)' }}>
                    Meet Our Lead Pastor
                  </h2>
                </div>

                <h3 className="text-3xl md:text-4xl font-black" style={{ color: 'var(--color-foreground)' }}>
                  Pastor Wisdom Osiri
                </h3>
                <p className="mt-4 text-base md:text-lg opacity-80">
                  Lead Pastor of The Compass Assembly — shepherding our community in faith, hope, and love. With a heart for people and a passion for God’s Word, Pastor Wisdom inspires and equips believers to live out their calling.
                </p>
                <p className="mt-4 text-base md:text-lg opacity-80">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius reprehenderit excepturi itaque vitae libero eaque, molestiae asperiores sint placeat! A corrupti voluptates modi eum laudantium iste recusandae tempore obcaecati odit.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/pastors" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-[var(--color-primary)] font-bold shadow-md">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* our services / cruise */}
        <section className="w-full py-20 px-6 md:px-12" style={{ backgroundColor: "var(--color-background)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: "var(--color-primary)" }}>
                Join Us
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: "var(--color-foreground)" }}>
                Our Services
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
                Experience powerful worship and life-changing messages at any of our weekly services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sunday First Service */}
              <div className="group relative overflow-hidden">
                <div className="relative h-full min-h-[260px] p-8 bg-[var(--color-surface)] border border-[var(--color-border)]/40 shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
                  {/* left accent bar */}
                  <span className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: 'var(--color-primary)' }} />

                  {/* label */}
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded" style={{ backgroundColor: 'var(--color-primary)', color: '#000' }}>First Cruise</span>
                    <span className="text-xs opacity-70">Sunday</span>
                  </div>

                  {/* time */}
                  <p className="mt-4 text-4xl md:text-5xl font-black" style={{ color: 'var(--color-foreground)' }}>8:00 AM</p>
                  <p className="mt-2 text-sm md:text-base opacity-80">Start your Sunday with worship and the Word.</p>

                  {/* subtle background pattern */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 2px, transparent 2px)' }} />
                </div>
              </div>

              {/* Sunday Second Service */}
              <div className="group relative overflow-hidden">
                <div className="relative h-full min-h-[260px] p-8 bg-[var(--color-surface)] border border-[var(--color-border)]/40 shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
                  <span className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: 'var(--color-primary)' }} />

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded" style={{ backgroundColor: 'var(--color-primary)', color: '#000' }}>Second Cruise</span>
                    <span className="text-xs opacity-70">Sunday</span>
                  </div>

                  <p className="mt-4 text-4xl md:text-5xl font-black" style={{ color: 'var(--color-foreground)' }}>10:00 AM</p>
                  <p className="mt-2 text-sm md:text-base opacity-80">Join our main Sunday gathering—celebration, community, and inspiration.</p>

                  <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 2px, transparent 2px)' }} />
                </div>
              </div>

              {/* Thursday Cruise */}
              <div className="group relative overflow-hidden">
                <div className="relative h-full min-h-[260px] p-8 bg-[var(--color-surface)] border border-[var(--color-border)]/40 shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
                  <span className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: 'var(--color-primary)' }} />

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded" style={{ backgroundColor: 'var(--color-primary)', color: '#000' }}>Midweek Cruise</span>
                    <span className="text-xs opacity-70">Thursday</span>
                  </div>

                  <p className="mt-4 text-4xl md:text-5xl font-black" style={{ color: 'var(--color-foreground)' }}>6:00 PM</p>
                  <p className="mt-2 text-sm md:text-base opacity-80">Midweek recharge—come cruise with us for worship, prayer, and teaching.</p>

                  <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 2px, transparent 2px)' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Events Section */}
        <section className="w-full py-20 px-6 md:px-12" style={{ backgroundColor: 'var(--color-background)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: 'var(--color-primary)' }}>
                Happenings
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: 'var(--color-foreground)' }}>
                Recent Events
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
                Catch up on what’s been happening across The Compass Assembly.
              </p>
            </div>

            {/* Custom arrows for events slider */}
            <div className="relative">
              <div className="absolute right-0 -bottom-14 z-10 flex items-center gap-3">
                <button aria-label="Previous" className="events-prev flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:brightness-110 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button aria-label="Next" className="events-next flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:brightness-110 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ prevEl: '.events-prev', nextEl: '.events-next' }}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={16}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
                className="w-full"
              >
                <SwiperSlide>
                  <a href="/events" className="group relative block w-full h-64 md:h-80 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                    <Image src="/images/6051031874487914218.jpg" alt="Event 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute left-4 bottom-4 text-left text-white max-w-[80%]">
                      <h3 className="text-lg md:text-xl font-bold leading-tight">Youth Conference</h3>
                      <p className="mt-1 text-xs md:text-sm opacity-80">Highlights and moments from our latest youth gathering.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="/events" className="group relative block w-full h-64 md:h-80 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                    <Image src="/images/6051031874487914224.jpg" alt="Event 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute left-4 bottom-4 text-left text-white max-w-[80%]">
                      <h3 className="text-lg md:text-xl font-bold leading-tight">Community Outreach</h3>
                      <p className="mt-1 text-xs md:text-sm opacity-80">Serving our neighborhoods together.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="/events" className="group relative block w-full h-64 md:h-80 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                    <Image src="/images/6051031874487914151.jpg" alt="Event 3" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute left-4 bottom-4 text-left text-white max-w-[80%]">
                      <h3 className="text-lg md:text-xl font-bold leading-tight">Worship Night</h3>
                      <p className="mt-1 text-xs md:text-sm opacity-80">An evening of praise, prayer, and testimonies.</p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="/events" className="group relative block w-full h-64 md:h-80 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                    <Image src="/images/6051031874487914203.jpg" alt="Event 4" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute left-4 bottom-4 text-left text-white max-w-[80%]">
                      <h3 className="text-lg md:text-xl font-bold leading-tight">Leadership Seminar</h3>
                      <p className="mt-1 text-xs md:text-sm opacity-80">Equipping leaders for impact.</p>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

      </section>
      <FooterNav />
    </main>
  );
}
