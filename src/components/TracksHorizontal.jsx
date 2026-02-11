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
        desc: "Revolutionizing agriculture with autonomous systems and sustainable tech. Build solutions that feed the future.",
        color: "from-green-600 to-green-400",
        accentColor: "text-green-400",
        borderColor: "border-green-400/30"
    },
    {
        title: "HealthTech",
        sanskrit: "Arogya Vidya",
        icon: <HeartPulse className="w-12 h-12" />,
        desc: "Next-gen healthcare solutions, diagnostics, and patient care systems. Save lives through innovation.",
        color: "from-red-600 to-red-400",
        accentColor: "text-red-400",
        borderColor: "border-red-400/30"
    },
    {
        title: "EduTech",
        sanskrit: "Shiksha Tantra",
        icon: <GraduationCap className="w-12 h-12" />,
        desc: "Empowering warriors with knowledge through immersive learning platforms. Transform education forever.",
        color: "from-yellow-600 to-yellow-400",
        accentColor: "text-yellow-400",
        borderColor: "border-yellow-400/30"
    },
    {
        title: "FinTech",
        sanskrit: "Artha Shastra",
        icon: <Wallet className="w-12 h-12" />,
        desc: "Secure, decentralized, and efficient financial warfare systems. Redefine the economy of tomorrow.",
        color: "from-blue-600 to-blue-400",
        accentColor: "text-blue-400",
        borderColor: "border-blue-400/30"
    },
    {
        title: "AI Social Impact",
        sanskrit: "Samaj Kalyan",
        icon: <BrainCircuit className="w-12 h-12" />,
        desc: "AI-driven impact for societal betterment and structural efficiency. Create change that matters.",
        color: "from-purple-600 to-purple-400",
        accentColor: "text-purple-400",
        borderColor: "border-purple-400/30"
    }
];

const TracksHorizontal = () => {
    const containerRef = useRef();

    useGSAP(() => {
        const cards = gsap.utils.toArray('.track-card');

        cards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section id="tracks" ref={containerRef} className="relative py-32 px-4 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="font-sanskrit text-6xl md:text-7xl bg-gradient-to-r from-saffron via-gold to-saffron bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                            युद्धक्षेत्र
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-ancient">
                        Battle Arenas
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Choose your battlefield. Five domains of innovation await the brave warriors
                        who dare to reshape the future through code and creativity.
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-saffron" />
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-saffron" />
                    </div>
                </div>

                {/* Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            className="track-card relative group"
                        >
                            <div className={`h-full bg-gradient-to-br ${track.color} opacity-5 absolute inset-0 rounded-xl`} />
                            <div className={`h-full min-h-[400px] border ${track.borderColor} backdrop-blur-xl bg-black/40 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-opacity-100 transition-all duration-500 hover:scale-105`}>

                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute inset-0 bg-cyber-grid" style={{ backgroundSize: '30px 30px' }} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`${track.accentColor} mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                                        {track.icon}
                                    </div>

                                    <div>
                                        <h3 className="font-ancient text-2xl md:text-3xl text-white mb-2 tracking-wider">
                                            {track.title}
                                        </h3>
                                        <h4 className={`font-ancient text-sm ${track.accentColor} mb-4 tracking-[0.3em] uppercase opacity-80`}>
                                            {track.sanskrit}
                                        </h4>
                                        <p className="font-tech text-gray-300 text-sm leading-relaxed">
                                            {track.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Card number */}
                                <div className="relative z-10 flex justify-between items-end mt-6">
                                    <div className={`font-cyber text-5xl ${track.accentColor} opacity-10 font-bold`}>
                                        0{index + 1}
                                    </div>
                                    <div className="font-cyber text-xs text-gray-500 tracking-widest">
                                        BATTLEGROUND_{index + 1}
                                    </div>
                                </div>

                                {/* Decorative corners */}
                                <div className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 ${track.borderColor} opacity-50`} />
                                <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 ${track.borderColor} opacity-50`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div className="mt-20 flex justify-center">
                    <div className="relative">
                        <div className="text-center text-white/40 text-sm tracking-[0.3em] uppercase">
                            युद्धाय कृतनिश्चयः
                        </div>
                        <div className="text-center text-white/30 text-xs mt-2">
                            Determined for Battle
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TracksHorizontal;
