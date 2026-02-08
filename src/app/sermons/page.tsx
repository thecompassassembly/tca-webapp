'use client'

import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import SubHero from '@/components/SubHero';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlayIcon, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Sermons() {
    const featuredSermons = [
        {
            id: 1,
            title: "Walking in Faith: Trusting God's Plan",
            date: "Sunday, February 8, 2026",
            description: "In this powerful message, Pastor Wisdom Osiri explores the importance of faith in uncertain times, drawing from biblical examples to encourage us to trust in God's perfect plan.",
            image: "/images/logo-compass.jpg",
            speaker: "Pastor Wisdom Osiri"
        },
        {
            id: 2,
            title: "The Power of Prayer",
            date: "Sunday, February 1, 2026",
            description: "Discover how prayer transforms lives and strengthens our relationship with God through this inspiring sermon.",
            image: "/images/logo-compass.jpg",
            speaker: "Pastor Favour Osiri"
        },
        {
            id: 3,
            title: "Living with Purpose",
            date: "Sunday, January 25, 2026",
            description: "Explore God's calling on your life and how to walk in your divine purpose every day.",
            image: "/images/logo-compass.jpg",
            speaker: "Pastor Wisdom Osiri"
        }
    ];

    return (
        <div className="min-h-screen "
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}>
            <HeaderNav />
            <main className="py-0">
                <SubHero
                    imageSrc="/images/6051031874487914267.jpg"
                    title="Sermons"
                    pillText="Sermons"
                    subtitle="Dive into inspiring messages from our pastors and guest speakers."
                />
                <section className="px-6 md:px-8 py-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Featured Sermon Slider */}
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-left mb-12">
                                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: 'var(--color-primary)' }}>
                                    Featured
                                </p>
                                <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: 'var(--color-foreground)' }}>
                                    Featured Sermons
                                </h2>
                                <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
                                    Discover our most inspiring and impactful messages.
                                </p>
                            </div>
                            <div className="relative">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: '.featured-next',
                                        prevEl: '.featured-prev',
                                    }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="featured-swiper"
                                >
                                    {featuredSermons.map((sermon) => (
                                        <SwiperSlide key={sermon.id}>
                                            <div className="relative bg-[var(--color-surface)] overflow-hidden">
                                                <div className="md:flex">
                                                    <div className="md:w-1/2 relative aspect-video md:aspect-square">
                                                        <Image src={sermon.image} alt={sermon.title} fill className="object-cover" />
                                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                            <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                                                <PlayIcon className="w-8 h-8 text-white ml-1" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                                                        <p className="text-sm text-foreground/70 mb-2">{sermon.date}</p>
                                                        <h3 className="text-xl md:text-2xl font-bold mb-4">{sermon.title}</h3>
                                                        <p className="text-base text-foreground/85 mb-6">{sermon.description}</p>
                                                        <div className="flex flex-wrap gap-3">
                                                            <Link href="#" className="px-4 py-2 rounded-lg text-sm font-semibold flex items-center" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>Listen Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                {/* Custom Navigation */}
                                <button className="featured-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button className="featured-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                        {/* General Sermons */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-left mb-12">
                                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: 'var(--color-primary)' }}>
                                    Recent
                                </p>
                                <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: 'var(--color-foreground)' }}>
                                    Recent Sermons
                                </h2>
                                <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
                                    Catch up on our latest teachings and messages.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Sermon Card 1 */}
                                {[1, 2, 3, 4, 5, 6].map((index) =>
                                    <div key={index} className="bg-[var(--color-surface)] overflow-hidden transition-shadow">
                                        <div className="relative aspect-video">
                                            <Image src="/images/logo-compass.jpg" alt="Sermon Title" fill className="object-cover" />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <PlayIcon className="w-6 h-6 text-white ml-0.5" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-xs text-foreground/70 mb-1">Feb 1, 2026</p>
                                            <h4 className="text-lg font-semibold mb-2">The Power of Prayer</h4>
                                            <p className="text-sm text-foreground/80 mb-3">Discover how prayer transforms lives and strengthens our relationship with God.</p>
                                            <Link href="#" className="text-sm font-medium text-[var(--color-primary)] hover:underline flex items-center">Listen Now <ArrowRight className="w-3 h-3 ml-1" /></Link>
                                        </div>
                                    </div>)}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <FooterNav />
        </div>
    );
}
