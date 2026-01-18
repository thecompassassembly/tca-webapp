import React from 'react';

const FooterNav = () => {
    return (
        <footer className="bg-black text-white py-8 px-8 border-t-8 border-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-black uppercase mb-4 transform -skew-x-3">Compass Assembly</h3>
                        <p className="text-sm leading-relaxed">
                            Finding direction in faith through community, worship, and service.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase mb-4 border-b-4 border-white pb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-gray-300 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
                            <li><a href="#services" className="hover:text-gray-300 transition-colors">Services</a></li>
                            <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase mb-4 border-b-4 border-white pb-2">Services</h4>
                        <ul className="space-y-2">
                            <li>Sunday Worship</li>
                            <li>Wednesday Prayer</li>
                            <li>Bible Study</li>
                            <li>Community Events</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase mb-4 border-b-4 border-white pb-2">Contact</h4>
                        <p className="text-sm mb-2">123 Faith Street<br />City, State 12345</p>
                        <p className="text-sm mb-2">(555) 123-4567</p>
                        <p className="text-sm">info@compassassembly.org</p>
                    </div>
                </div>
                <div className="text-center border-t-4 border-white pt-4">
                    <p className="text-sm font-bold">&copy; 2024 Compass Assembly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNav;