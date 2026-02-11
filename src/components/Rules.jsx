import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Users, Shield, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Rules = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(".rule-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "top 30%",
                scrub: 1
            },
            opacity: 0,
            y: 100,
            stagger: 0.2
        });

        gsap.from(".mission-box", {
            scrollTrigger: {
                trigger: ".mission-box",
                start: "top 80%",
                end: "top 40%",
                scrub: 1
            },
            opacity: 0,
            scale: 0.8,
            rotateX: 45
        });
    }, { scope: containerRef });

    return (
        <section id="rules" ref={containerRef} className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="font-ancient text-5xl md:text-7xl text-gold mb-6 tracking-wider">
                        FORMATION OF WARRIORS
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto mb-6" />
                    <p className="font-cyber text-sm text-gray-500 tracking-[0.3em] uppercase">
                        Assemble Your Battalion
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="rule-item group">
                        <div className="bg-gradient-to-br from-saffron/10 to-transparent border border-saffron/30 backdrop-blur-xl p-8 rounded-2xl h-full hover:border-saffron/60 transition-all duration-500">
                            <div className="p-4 bg-saffron/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Users className="text-saffron w-10 h-10" />
                            </div>
                            <h3 className="font-ancient text-2xl text-white mb-3">Battalion Size</h3>
                            <p className="font-tech text-gray-400 leading-relaxed">
                                Exactly 3 warriors per team. No more, no less. Unity is strength.
                            </p>
                        </div>
                    </div>

                    <div className="rule-item group">
                        <div className="bg-gradient-to-br from-neon-blue/10 to-transparent border border-neon-blue/30 backdrop-blur-xl p-8 rounded-2xl h-full hover:border-neon-blue/60 transition-all duration-500">
                            <div className="p-4 bg-neon-blue/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Shield className="text-neon-blue w-10 h-10" />
                            </div>
                            <h3 className="font-ancient text-2xl text-white mb-3">Eligibility</h3>
                            <p className="font-tech text-gray-400 leading-relaxed">
                                Open to all disciples from recognized institutions across Bharatvarsh.
                            </p>
                        </div>
                    </div>

                    <div className="rule-item group">
                        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 backdrop-blur-xl p-8 rounded-2xl h-full hover:border-gold/60 transition-all duration-500">
                            <div className="p-4 bg-gold/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Award className="text-gold w-10 h-10" />
                            </div>
                            <h3 className="font-ancient text-2xl text-white mb-3">Identification</h3>
                            <p className="font-tech text-gray-400 leading-relaxed">
                                Must bear institution seal (College ID) and royal identification (Aadhar Card).
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mission-box max-w-4xl mx-auto">
                    <div className="relative p-12 border border-white/10 bg-black/40 backdrop-blur-2xl rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '30px 30px' }} />

                        <h3 className="font-cyber text-saffron mb-8 text-xl tracking-[0.2em] uppercase relative z-10">
                            :: MISSION DIRECTIVE ::
                        </h3>
                        <ul className="space-y-6 font-tech text-gray-300 text-lg relative z-10">
                            <li className="flex items-start gap-4">
                                <span className="text-neon-blue text-2xl">{">>"}</span>
                                <span>Project Type: Software-based arsenals only.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-neon-blue text-2xl">{">>"}</span>
                                <span>Platform: Web, Mobile, or Desktop applications.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-neon-blue text-2xl">{">>"}</span>
                                <span>Deadline: 24 Hours of continuous coding.</span>
                            </li>
                        </ul>

                        <div className="absolute -bottom-2 -right-2 w-24 h-24 border-b-2 border-r-2 border-saffron/50" />
                        <div className="absolute -top-2 -left-2 w-24 h-24 border-t-2 border-l-2 border-saffron/50" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rules;
