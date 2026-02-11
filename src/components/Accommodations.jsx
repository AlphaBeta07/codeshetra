import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Home, Ban } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Accommodations = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(".accommodation-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "top 30%",
                scrub: 1
            },
            opacity: 0,
            scale: 0.9,
            y: 100
        });
    }, { scope: containerRef });

    return (
        <section id="accommodations" ref={containerRef} className="py-32">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="font-ancient text-5xl md:text-7xl text-white mb-6 tracking-wider">
                        SHELTER & SUSTENANCE
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto mb-6" />
                    <p className="font-cyber text-sm text-gray-500 tracking-[0.3em] uppercase">
                        Warrior Provisions
                    </p>
                </div>

                <div className="accommodation-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-2xl p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Home className="w-48 h-48 text-white" />
                    </div>

                    <div className="space-y-10 relative z-10">
                        <div className="flex gap-6 items-start">
                            <div className="w-2 h-full bg-gradient-to-b from-saffron to-transparent" />
                            <div>
                                <h3 className="font-ancient text-3xl text-saffron mb-4 tracking-wide">Lodging</h3>
                                <p className="font-tech text-gray-400 text-lg leading-relaxed">
                                    Resting quarters provided on a shared basis within the sacred grounds.
                                    Warriors are advised to bring personal bedding if desired.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-2 h-full bg-gradient-to-b from-red-500 to-transparent" />
                            <div>
                                <h3 className="font-ancient text-3xl text-red-500 mb-4 flex items-center gap-3 tracking-wide">
                                    <Ban className="w-8 h-8" /> PROHIBITED
                                </h3>
                                <p className="font-tech text-gray-400 text-lg leading-relaxed">
                                    Strict prohibition on intoxicating substances (Alcohol/Tobacco) inside the premises.
                                    Violation leads to immediate disqualification.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-saffron/30" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-saffron/30" />
                </div>
            </div>
        </section>
    );
};

export default Accommodations;
