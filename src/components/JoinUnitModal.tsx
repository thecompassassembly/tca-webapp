"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Props = {
    unitName: string;
    onClose: () => void;
};

export default function JoinUnitModal({ unitName, onClose }: Props) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

     
        setTimeout(() => {
            setLoading(false);
            alert(`Application sent for ${unitName}`);
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
   
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                // onClick={onClose}
            ></div>

            <div className="relative z-10 w-full max-w-lg bg-white/70 rounded-2xl shadow-2xl p-6 text-black animate-fadeIn">
        
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-red-400 transition"
                >
                    <X size={24} />
                </button>

                
                <h2 className="text-2xl font-bold mb-2 text-center">
                    Join {unitName}
                </h2>
                <p className="text-sm text-black/70 mb-6 text-center">
                    Fill the form below to become part of this unit.
                </p>

               
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        required
                        placeholder="Full Name"
                        className="w-full rounded-lg px-4 py-3 text-black focus:outline-none border"
                    />
                    <input
                        required
                        placeholder="Email Address"
                        type="email"
                        className="w-full rounded-lg px-4 py-3 text-black focus:outline-none border"
                    />
                    <input
                        placeholder="Phone Number"
                        className="w-full rounded-lg px-4 py-3 text-black focus:outline-none border"
                    />

                    
                    <input type="hidden" value={unitName} />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </div>
        </div>
    );
}


