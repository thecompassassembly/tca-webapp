import React from "react";

const FooterNav = () => {
    return (
        <footer
            className="mt-16 border-t-8 px-6 py-8 text-sm md:px-10 md:py-10"
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}
        >
            <div className="mx-auto max-w-7xl">
                {/* Top grid */}
                <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand / mission */}
                    <div>
                        <h3 className="mb-3 text-2xl font-black uppercase tracking-widest">
                            Compass Assembly
                        </h3>
                        <p className="max-w-xs leading-relaxed">
                            The Compass Assembly, is a warm and exciting Christian community, where everyone is valued and cherished.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4
                            className="mb-3 inline-block border-b-4 pb-2 text-sm font-bold uppercase tracking-wide"
                            style={{ borderColor: "var(--color-secondary)" }}
                        >
                            Navigate
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pastors"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Pastors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/sermons"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Sermons
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/give"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Give
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Ministries / services */}
                    <div>
                        <h4
                            className="mb-3 inline-block border-b-4 pb-2 text-sm font-bold uppercase tracking-wide"
                            style={{ borderColor: "var(--color-secondary)" }}
                        >
                            Ministries
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/services"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Sunday Worship
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Wednesday Prayer
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/events"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="transition-colors hover:text-[var(--color-secondary)]"
                                >
                                    Get Involved
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="mb-3 inline-block border-b-4 pb-2 text-sm font-bold uppercase tracking-wide"
                            style={{ borderColor: "var(--color-secondary)" }}
                        >
                            Contact
                        </h4>
                        <div className="space-y-2">
                            <p>
                                Market Junction, Port Harcourt Aba Express Way
                            </p>
                            <p>(555) 123-4567</p>
                            <p>info@compassassembly.org</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-3 border-t-4 pt-4 text-[0.75rem] uppercase tracking-wide md:flex-row"
                    style={{ borderColor: "var(--color-secondary)" }}>
                    <p className="font-bold">
                        &copy; {new Date().getFullYear()} Compass Assembly. All rights
                        reserved.
                    </p>
                    <p className="opacity-80">
                        Sunday Service • 8:00AM & 10:00 AM &nbsp;|&nbsp; Thursday Service • 6:00 PM
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNav;