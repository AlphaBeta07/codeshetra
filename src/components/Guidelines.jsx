import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { AlertTriangle, CheckCircle, FileCode } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Guidelines = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(".guideline-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "top 30%",
                scrub: 1
            },
            opacity: 0,
            x: (i) => i % 2 === 0 ? -100 : 100,
            stagger: 0.3
        });

        gsap.from(".submission-item", {
            scrollTrigger: {
                trigger: ".submission-protocols",
                start: "top 80%",
                end: "top 40%",
                scrub: 1
            },
            opacity: 0,
            y: 50,
            stagger: 0.2
        });
    }, { scope: containerRef });

    return (
        <section id="guidelines" ref={containerRef} className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="font-ancient text-5xl md:text-7xl text-white mb-6 tracking-wider">
                        THE CODE OF DHARMA
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-neon-blue to-transparent mx-auto mb-6" />
                    <p className="font-cyber text-sm text-gray-500 tracking-[0.3em] uppercase">
                        Rules of Engagement
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="guideline-card">
                        <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-xl p-10 rounded-2xl h-full hover:border-red-500/60 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <AlertTriangle className="text-red-500 w-12 h-12" />
                                <h3 className="font-ancient text-3xl text-red-400">RESTRICTED</h3>
                            </div>
                            <ul className="space-y-5 font-tech text-gray-400 text-lg">
                                <li className="flex gap-3 items-start">
                                    <span className="text-red-500 text-xl">×</span>
                                    <span>No deception or plagiarism (immediate banishment).</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-red-500 text-xl">×</span>
                                    <span>Strictly no sharp implements.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-red-500 text-xl">×</span>
                                    <span>No fire-summoning devices (lighters/matches).</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="guideline-card">
                        <div className="bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/30 backdrop-blur-xl p-10 rounded-2xl h-full hover:border-green-500/60 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <CheckCircle className="text-green-500 w-12 h-12" />
                                <h3 className="font-ancient text-3xl text-green-400">PERMITTED</h3>
                            </div>
                            <ul className="space-y-5 font-tech text-gray-400 text-lg">
                                <li className="flex gap-3 items-start">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span>Use of divine tools (AI assistance) is encouraged.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span>Bring your own battle instruments (Laptops).</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span>Open source libraries and frameworks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="submission-protocols max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 backdrop-blur-2xl p-12 text-center rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '30px 30px' }} />

                        <h3 className="font-ancient text-gold text-3xl mb-12 relative z-10 tracking-wider">
                            SUBMISSION PROTOCOLS
                        </h3>
                        <div className="flex flex-wrap justify-center gap-12 relative z-10">
                            <div className="submission-item flex flex-col items-center gap-4 group">
                                <div className="p-6 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    <FileCode className="text-blue-400 w-12 h-12" />
                                </div>
                                <span className="font-tech text-base text-gray-300">Presentation Scroll<br />(PPT)</span>
                            </div>
                            <div className="submission-item flex flex-col items-center gap-4 group">
                                <div className="p-6 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    <FileCode className="text-purple-400 w-12 h-12" />
                                </div>
                                <span className="font-tech text-base text-gray-300">Chronicle<br />(GitHub)</span>
                            </div>
                            <div className="submission-item flex flex-col items-center gap-4 group">
                                <div className="p-6 bg-green-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    <FileCode className="text-green-400 w-12 h-12" />
                                </div>
                                <span className="font-tech text-base text-gray-300">Functional<br />Demo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guidelines;
