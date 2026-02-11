import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Sprout, HeartPulse, GraduationCap, Wallet, BrainCircuit } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tracks = [
    {
        title: "AgriTech",
        sanskrit: "Krishi Yantra",
        icon: <Sprout className="w-12 h-12" />,
        desc: "Revolutionizing agriculture with autonomous systems and sustainable tech.",
        color: "text-green-400",
        border: "border-green-400/30"
    },
    {
        title: "HealthTech",
        sanskrit: "Arogya Vidya",
        icon: <HeartPulse className="w-12 h-12" />,
        desc: "Next-gen healthcare solutions, diagnostics, and patient care systems.",
        color: "text-red-400",
        border: "border-red-400/30"
    },
    {
        title: "EduTech",
        sanskrit: "Shiksha Tantra",
        icon: <GraduationCap className="w-12 h-12" />,
        desc: "Empowering warriors with knowledge through immersive learning platforms.",
        color: "text-yellow-400",
        border: "border-yellow-400/30"
    },
    {
        title: "FinTech",
        sanskrit: "Artha Shastra",
        icon: <Wallet className="w-12 h-12" />,
        desc: "Secure, decentralized, and efficient financial warfare systems.",
        color: "text-blue-400",
        border: "border-blue-400/30"
    },
    {
        title: "Social Innovation",
        sanskrit: "Samaj Kalyan",
        icon: <BrainCircuit className="w-12 h-12" />,
        desc: "AI-driven impact for societal betterment and structural efficiency.",
        color: "text-purple-400",
        border: "border-purple-400/30"
    }
];

const Tracks = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".track-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <section id="tracks" ref={container} className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-ancient text-4xl md:text-5xl text-gold mb-4 uppercase tracking-widest">THE BATTLEGROUNDS</h2>
                    <div className="h-1 w-24 bg-saffron mx-auto mb-4" />
                    <p className="font-tech text-gray-400 max-w-2xl mx-auto italic">
                        Choose your arena. Where will you deploy your arsenal?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            className={`track-card bg-deep-void p-8 border ${track.border} relative overflow-hidden group hover:bg-white/5 transition-all duration-300`}
                        >
                            <div className={`mb-6 ${track.color} group-hover:scale-110 transition-transform duration-300`}>
                                {track.icon}
                            </div>
                            <h3 className="font-ancient text-2xl text-white mb-2">{track.title}</h3>
                            <h4 className="font-ancient text-sm text-saffron mb-4 tracking-widest opacity-80 uppercase">{track.sanskrit}</h4>
                            <p className="font-tech text-gray-400 text-sm leading-relaxed">
                                {track.desc}
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tracks;
