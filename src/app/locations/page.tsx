"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, Play, MapPin, ArrowUpRight, PlayCircle } from "lucide-react";

const expressions = [
    {
        id: 1,
        name: "TCA Headquarters",
        role: "Mother Expression",
        description:
            "The heartbeat of our global mission, shepherding the vision under Pastor Wisdom and Favour Osiri.",
        img: "https://i.pinimg.com/736x/3f/ab/4e/3fab4eb0e12c798627b1323700a21490.jpg",
        location: "Port Harcourt",
        address: "Port Harcourt, Rivers State, Nigeria",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5850505050505!2d7.009!3d4.795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10643d12345678!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1234567890",
        icon: Users,
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: 2,
        name: "TCA Rumuosi Expression",
        role: "Community Growth & Local Outreach",
        description:
            "Bringing the light of the Gospel to the southern region through community-focused ministry.",
        img: "https://i.pinimg.com/1200x/ac/79/a5/ac79a54150918817143465bc37fe0118.jpg",
        location: "South PH (Rumuosi)",
        address: "Rumuosi, Port Harcourt, Rivers State, Nigeria",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123!2d6.95!3d4.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10643d98765432!2sRumuosi%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1234567890",
        icon: Target,
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        id: 3,
        name: "TCA Oyigbo Expression",
        role: "Generation Z & Millennial Hub",
        description:
            "Empowering the next generation to lead with faith, creativity, and purpose.",
        img: "https://i.pinimg.com/736x/36/f3/9a/36f39ab7ae499c12114a579d5f0679cc.jpg",
        location: "DynamicPH (Oyigbo)",
        address: "Oyigbo, Rivers State, Nigeria",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.456!2d7.15!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10643d54321098!2sOyigbo%20Rivers%20State!5e0!3m2!1sen!2sng!4v1234567890",
        icon: Users,
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        id: 4,
        name: "TCA Global Online",
        role: "Digital Ministry & Virtual Fellowship",
        description:
            "Connecting believers worldwide through high-impact digital experiences and online communities.",
        img: "https://i.pinimg.com/1200x/78/21/b0/7821b00b4ccb0f7285b803bb3c258f0d.jpg",
        location: "Digital World",
        address: "Available 24/7 Online",
        embedUrl: null,
        icon: Play,
        color: "from-green-500/20 to-emerald-500/20",
    },

];

const Locations = () => {
    return (
        <main className="w-full" style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}>
            {/* Hero Section */}
            <section className="w-full py-24 px-6 md:px-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <p className="text-(--color-accent) font-black uppercase tracking-[0.5em] text-xs mb-6">
                        Find Us
                    </p>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
                        Our Expressions
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                        Connect with us at any of our locations across the globe. Whether you're in the heart of Port Harcourt, connecting digitally, or anywhere in between, we're here for you.
                    </p>
                </motion.div>
            </section>

            {/* Expressions Grid */}
            <section className="w-full py-24 px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {expressions.map((expression, index) => {
                            const IconComponent = expression.icon;
                            return (
                                <motion.div
                                    key={expression.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-sm shadow-2xl">
                                        {/* Image Section */}
                                        <div className="relative h-80 overflow-hidden">
                                            <Image
                                                src={expression.img}
                                                alt={expression.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${expression.color}`} />

                                            {/* Icon Badge */}
                                            <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white/80">
                                                <IconComponent className="w-7 h-7" />
                                            </div>

                                            {/* Location Tag */}
                                            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                                                <MapPin className="w-4 h-4 text-(--color-accent)" />
                                                <span className="text-sm font-semibold">{expression.location}</span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8 space-y-6">
                                            <div>
                                                <p className="text-(--color-accent) text-xs font-black uppercase tracking-[0.3em] mb-2">
                                                    {expression.role}
                                                </p>
                                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                                                    {expression.name}
                                                </h3>
                                                <p className="text-neutral-400 text-lg leading-relaxed">
                                                    {expression.description}
                                                </p>
                                            </div>

                                            <div className="pt-6 border-t border-white/5">
                                                <p className="text-sm font-bold text-neutral-600 mb-1">Address</p>
                                                <p className="text-neutral-500 font-medium">{expression.address}</p>
                                            </div>
                                        </div>

                                        {/* Map Section */}
                                        {expression.embedUrl && (
                                            <div className="relative h-96 border-t border-white/5">
                                                <iframe
                                                    src={expression.embedUrl}
                                                    width="100%"
                                                    height="100%"
                                                    style={{ border: 0 }}
                                                    // allowFullScreen=""
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    className="absolute inset-0"
                                                ></iframe>
                                            </div>
                                        )}

                                        {/* Digital Expression Message */}
                                        {!expression.embedUrl && (
                                            <div className="relative border-t border-white/5">
                                                <div className="h-64 flex items-center justify-center text-center px-8">
                                                    <div>
                                                        <motion.div
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                        >
                                                            <PlayCircle className="w-12 h-12 mx-auto mb-4" />
                                                        </motion.div>
                                                        <p className="text-lg font-semibold mb-2">Stream Online 24/7</p>
                                                        <p className="text-neutral-400 text-sm">Join our digital community anytime from anywhere in the world.</p>
                                                    </div>
                                                </div>
                                                <div className="px-8 py-6 border-t border-white/5">
                                                    <motion.a
                                                        href="/live"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="w-full px-6 py-3 bg-(--color-accent) text-black font-bold rounded-full uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 group/btn"
                                                    >
                                                        Watch Live
                                                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                    </motion.a>
                                                </div>
                                            </div>
                                        )}

                                        {/* Action Button */}
                                        {expression.embedUrl && (
                                            <div className="px-8 py-6 border-t border-white/5">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-full px-6 py-3 bg-(--color-accent) text-black font-bold rounded-full uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 group/btn"
                                                >
                                                    Get Directions
                                                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                </motion.button>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="w-full py-24 px-6 md:px-12 bg-white/2 border-y border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-xl text-neutral-400 mb-12">
                        Get in touch with us for more information about our expressions or specific needs.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-(--color-foreground) text-(--color-background) rounded-full font-black uppercase tracking-widest text-sm transition-all hover:bg-(--color-accent)"
                    >
                        Contact Us
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </section>
        </main>
    );
};

export default Locations;