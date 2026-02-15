'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    label: string;
    day: string;
    time: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const ServiceCard = ({ label, day, time, description, icon, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative overflow-hidden rounded-2xl"
        >
            <div className="relative h-full min-h-[320px] p-8 bg-[var(--color-nutral-nighty)] border border-[var(--color-border)]/40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl">
                {/* Gradient accent bar */}
                <span className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary)]/60" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--color-primary)/10' }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                        {icon}
                    </div>
                </div>

                {/* Label & Day */}
                <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                        {label}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium opacity-70">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {day}
                    </span>
                </div>

                {/* Time */}
                <div className="mt-5">
                    <p className="text-4xl md:text-5xl font-black tracking-tight transition-colors duration-300" style={{ color: 'var(--color-foreground)' }}>
                        {time}
                    </p>
                    <div className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-transparent opacity-60" />
                </div>

                {/* Description */}
                <p className="mt-4 text-sm md:text-base leading-relaxed opacity-75 group-hover:opacity-90 transition-opacity duration-300">
                    {description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)/15' }}>
                        <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                {/* Background pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.03] rounded-2xl" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, var(--color-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </div>
        </motion.div>
    );
};

const services = [
    {
        label: 'First Cruise',
        day: 'Sunday',
        time: '8:00 AM',
        description: 'Start your Sunday with worship and the Word. An intimate gathering to set the tone for your week.',
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        label: 'Second Cruise',
        day: 'Sunday',
        time: '10:00 AM',
        description: 'Join our main Sunday gathering—celebration, community, and life-changing inspiration.',
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        label: 'Midweek Cruise',
        day: 'Thursday',
        time: '6:00 PM',
        description: 'Midweek recharge—come cruise with us for worship, prayer, and in-depth teaching.',
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
];

const OurServicesSection = () => {
    return (
        <section className="w-full py-24 px-6 md:px-12" style={{ backgroundColor: "var(--color-background)" }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-left mb-16"
                >
                    <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: "var(--color-primary)" }}>
                        Join Us
                    </p>
                    <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-widest" style={{ color: "var(--color-foreground)" }}>
                        Our Services
                    </h2>
                    <div className="mt-3 h-1.5 w-24 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                    <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
                        Experience powerful worship and life-changing messages at any of our weekly services. Everyone is welcome.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.label}
                            label={service.label}
                            day={service.day}
                            time={service.time}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurServicesSection;