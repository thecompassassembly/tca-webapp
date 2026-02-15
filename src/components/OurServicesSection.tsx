import React from 'react';

const OurServicesSection = () => {
    return (
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
                                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>First Cruise</span>
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
                                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>Second Cruise</span>
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
                                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>Midweek Cruise</span>
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
    );
};

export default OurServicesSection;