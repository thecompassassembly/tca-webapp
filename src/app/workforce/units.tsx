"use client";

import { ArrowRight } from "lucide-react";
import { churchUnits } from "@/models/churchUnitsModel";
import { useState } from "react";
import JoinUnitModal from "@/components/JoinUnitModal";

export default function Units() {
    const [selectedUnit, setSelectedUnit] = useState<any>(null); 

    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
            <main className="max-w-7xl mx-auto px-8 py-16">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-center text-white mb-12">
                    Church Workforce Units
                </h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {churchUnits.map((unit: any, i: number) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500"
                        >
                            {unit.image && (
                                <img
                                    src={unit.image}
                                    alt={unit.name}
                                    className={`w-full h-56 object-cover ${unit.imageClass ?? "object-center"}`}
                                    style={{
                                        objectPosition: unit.imagePosition ?? "center",
                                    }}
                                />
                            )}

                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-white">{unit.name}</h3>
                                <p className="text-white/70">{unit.description}</p>

                                <button
                                    onClick={() => setSelectedUnit(unit)} 
                                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition"
                                >
                                    Join <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/*  Modal */}
            {selectedUnit && (
                <JoinUnitModal
                    unitName={selectedUnit.name} 
                    onClose={() => setSelectedUnit(null)}
                />
            )}
        </div>
    );
}
