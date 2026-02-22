'use client'
import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import SubHero from '@/components/SubHero';
import { motion } from 'framer-motion';
import OurServicesSection from '@/components/OurServicesSection';

export default function Contact() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
            <HeaderNav />
            <main className="py-0">
                <SubHero
                    imageSrc="/images/6051031874487914218.jpg"
                    title="Contact"
                    pillText="Contact"
                    subtitle="We'd love to hear from you—reach out for prayers, support, or inquiries."
                />

                {/* Contact content */}
                <section className="px-6 md:px-12 py-16">
                    <div className="max-w-7xl mx-auto">
                        {/* Intro */}
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <div className="text-left mb-8">
                                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80" style={{ color: 'var(--color-primary)' }}>Get In Touch</p>
                                <h2 className="mt-3 text-2xl md:text-4xl font-black uppercase tracking-widest" style={{ color: 'var(--color-foreground)' }}>Reach Out to The Compass Assembly</h2>
                                <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed opacity-85">Whether you need prayer, have questions, or want to partner with us, we&apos;re here for you.</p>
                            </div>
                        </motion.div>

                        {/* Contact grid: info + form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <form className="space-y-5 p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>First Name</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                                                style={{
                                                    backgroundColor: 'var(--color-background)',
                                                    border: '1px solid var(--color-border)',
                                                    color: 'var(--color-foreground)',
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                                                style={{
                                                    backgroundColor: 'var(--color-background)',
                                                    border: '1px solid var(--color-border)',
                                                    color: 'var(--color-foreground)',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                                            style={{
                                                backgroundColor: 'var(--color-background)',
                                                border: '1px solid var(--color-border)',
                                                color: 'var(--color-foreground)',
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+234 800 000 0000"
                                            className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                                            style={{
                                                backgroundColor: 'var(--color-background)',
                                                border: '1px solid var(--color-border)',
                                                color: 'var(--color-foreground)',
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>Subject</label>
                                        <select
                                            className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                                            style={{
                                                backgroundColor: 'var(--color-background)',
                                                border: '1px solid var(--color-border)',
                                                color: 'var(--color-foreground)',
                                            }}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="prayer">Prayer Request</option>
                                            <option value="inquiry">General Inquiry</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="volunteer">Volunteer</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Write your message here..."
                                            className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 resize-none"
                                            style={{
                                                backgroundColor: 'var(--color-background)',
                                                border: '1px solid var(--color-border)',
                                                color: 'var(--color-foreground)',
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 px-6 rounded-lg font-bold uppercase tracking-wider transition-all hover:opacity-90"
                                        style={{
                                            backgroundColor: 'var(--color-primary)',
                                            color: 'white',
                                        }}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="space-y-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg" style={{ color: 'var(--color-foreground)' }}>Our Location</h3>
                                        <p className="opacity-75">Market junction, Aba road port harcourt</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg" style={{ color: 'var(--color-foreground)' }}>Email Us</h3>
                                        <p className="opacity-75">info@thecompassassembly.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg" style={{ color: 'var(--color-foreground)' }}>Call Us</h3>
                                        <p className="opacity-75">+234 800 000 0000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg" style={{ color: 'var(--color-foreground)' }}>Service Hours</h3>
                                        <p className="opacity-75">Sundays: 8:00 AM & 10:00 PM</p>
                                        <p className="opacity-75">Thursdays: 6:00 PM - 8:00 PM</p>
                                    </div>
                                </div>
                            </motion.div>


                        </div>

                    </div>
                </section>

                <OurServicesSection />
            </main>
            <FooterNav />
        </div>
    );
}
