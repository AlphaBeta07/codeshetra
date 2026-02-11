import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Calendar, Clock, MapPin, Users, Trophy, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ── Mahabharata SVG illustrations (one per card) ── */

const ConchShellSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="100" rx="55" ry="70" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <ellipse cx="100" cy="100" rx="40" ry="52" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <ellipse cx="100" cy="100" rx="25" ry="34" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M100 30 C120 50, 130 80, 120 110 C110 140, 90 160, 100 170" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="none" />
        <path d="M100 30 C80 50, 70 80, 80 110 C90 140, 110 160, 100 170" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="none" />
        <circle cx="100" cy="40" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M60 85 Q80 75 100 85 Q120 95 140 85" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M65 105 Q80 95 100 105 Q120 115 135 105" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M70 125 Q85 115 100 125 Q115 135 130 125" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        {/* Sound waves emanating */}
        <path d="M155 80 Q170 90, 165 100 Q160 110, 155 120" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <path d="M165 75 Q185 90, 180 100 Q175 110, 165 125" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path d="M175 70 Q198 90, 195 100 Q190 110, 175 130" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    </svg>
);

const SudarshanChakraSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="2" opacity="0.6" fill="currentColor" fillOpacity="0.1" />
        {/* Spokes / blades of the chakra */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line key={angle} x1="100" y1="100"
                x2={100 + 70 * Math.cos((angle * Math.PI) / 180)}
                y2={100 + 70 * Math.sin((angle * Math.PI) / 180)}
                stroke="currentColor" strokeWidth="1" opacity="0.3" />
        ))}
        {/* Outer serrations / flames */}
        {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((angle) => (
            <line key={`s-${angle}`}
                x1={100 + 65 * Math.cos((angle * Math.PI) / 180)}
                y1={100 + 65 * Math.sin((angle * Math.PI) / 180)}
                x2={100 + 85 * Math.cos(((angle + 7.5) * Math.PI) / 180)}
                y2={100 + 85 * Math.sin(((angle + 7.5) * Math.PI) / 180)}
                stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        ))}
        {/* Inner decorative ring */}
        <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
    </svg>
);

const TempleGateSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Temple tower / shikhara */}
        <path d="M100 15 L120 50 L125 90 L130 170 L70 170 L75 90 L80 50 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.4" fill="currentColor" fillOpacity="0.05" />
        {/* Dome / kalash */}
        <circle cx="100" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="100" y1="10" x2="100" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        {/* Pillars */}
        <rect x="40" y="100" width="8" height="85" stroke="currentColor" strokeWidth="1.5" opacity="0.4" rx="2" fill="currentColor" fillOpacity="0.05" />
        <rect x="152" y="100" width="8" height="85" stroke="currentColor" strokeWidth="1.5" opacity="0.4" rx="2" fill="currentColor" fillOpacity="0.05" />
        {/* Pillar capitals */}
        <rect x="36" y="95" width="16" height="8" stroke="currentColor" strokeWidth="1" opacity="0.3" rx="2" />
        <rect x="148" y="95" width="16" height="8" stroke="currentColor" strokeWidth="1" opacity="0.3" rx="2" />
        {/* Arch / gateway */}
        <path d="M65 170 L65 95 Q100 60, 135 95 L135 170" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="currentColor" fillOpacity="0.05" />
        {/* Decorative tiers */}
        <path d="M80 55 Q100 40, 120 55" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M78 70 Q100 55, 122 70" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <path d="M76 85 Q100 70, 124 85" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        {/* Steps */}
        <line x1="55" y1="170" x2="145" y2="170" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="50" y1="178" x2="150" y2="178" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <line x1="45" y1="186" x2="155" y2="186" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
);

const WarriorShieldsSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central shield */}
        <path d="M100 30 L140 55 L145 110 Q130 155, 100 175 Q70 155, 55 110 L60 55 Z" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="currentColor" fillOpacity="0.05" />
        <path d="M100 45 L130 63 L133 105 Q122 140, 100 155 Q78 140, 67 105 L70 63 Z" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        {/* Shield emblem */}
        <circle cx="100" cy="95" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="100" cy="95" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="currentColor" fillOpacity="0.1" />
        {/* Crossed swords behind */}
        <line x1="30" y1="25" x2="170" y2="165" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
        <line x1="170" y1="25" x2="30" y2="165" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
        {/* Sword pommels */}
        <circle cx="30" cy="25" r="5" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <circle cx="170" cy="25" r="5" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        {/* Sword guards */}
        <line x1="50" y1="40" x2="42" y2="52" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <line x1="150" y1="40" x2="158" y2="52" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        {/* Decorative dots on shield */}
        <circle cx="100" cy="60" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="100" cy="130" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="80" cy="95" r="3" fill="currentColor" opacity="0.15" />
        <circle cx="120" cy="95" r="3" fill="currentColor" opacity="0.15" />
    </svg>
);

const CrownSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Crown body */}
        <path d="M45 130 L30 60 L65 90 L100 45 L135 90 L170 60 L155 130 Z" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="currentColor" fillOpacity="0.08" />
        {/* Crown base */}
        <rect x="45" y="130" width="110" height="18" stroke="currentColor" strokeWidth="2" opacity="0.5" rx="3" fill="currentColor" fillOpacity="0.05" />
        {/* Jewels */}
        <circle cx="100" cy="55" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" fill="currentColor" fillOpacity="0.15" />
        <circle cx="65" cy="85" r="5" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="currentColor" fillOpacity="0.1" />
        <circle cx="135" cy="85" r="5" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="currentColor" fillOpacity="0.1" />
        <circle cx="30" cy="65" r="4" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="currentColor" fillOpacity="0.1" />
        <circle cx="170" cy="65" r="4" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="currentColor" fillOpacity="0.1" />
        {/* Crown band decorations */}
        <circle cx="65" cy="139" r="4" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="currentColor" fillOpacity="0.1" />
        <circle cx="100" cy="139" r="4" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="currentColor" fillOpacity="0.1" />
        <circle cx="135" cy="139" r="4" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="currentColor" fillOpacity="0.1" />
        {/* Light rays from crown */}
        <line x1="100" y1="35" x2="100" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="90" y1="38" x2="82" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        <line x1="110" y1="38" x2="118" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        {/* Treasure below */}
        <ellipse cx="100" cy="170" rx="45" ry="12" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <ellipse cx="100" cy="165" rx="35" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.15" fill="currentColor" fillOpacity="0.05" />
    </svg>
);

const WarFlagSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flag pole */}
        <line x1="60" y1="20" x2="60" y2="185" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
        {/* Pole ornament */}
        <circle cx="60" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" fill="currentColor" fillOpacity="0.15" />
        <path d="M56 25 L60 20 L64 25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        {/* Flag - flowing / waving */}
        <path d="M60 30 Q100 20, 160 40 Q130 60, 155 80 Q100 65, 60 85 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.45" fill="currentColor" fillOpacity="0.08" />
        {/* Flag emblem - Om symbol simplified */}
        <circle cx="110" cy="55" r="12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M105 55 Q108 48, 115 50 Q118 52, 115 58 Q112 62, 105 60" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <circle cx="112" cy="46" r="2" fill="currentColor" opacity="0.2" />
        {/* Decorative ribbons */}
        <path d="M60 85 Q75 95, 65 110" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path d="M60 85 Q80 90, 75 108" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        {/* Scroll / proclamation at base */}
        <path d="M40 150 Q45 145, 90 145 Q95 145, 95 150 Q95 155, 90 158 Q45 158, 40 152 Z" stroke="currentColor" strokeWidth="1" opacity="0.25" fill="currentColor" fillOpacity="0.05" />
        <line x1="48" y1="150" x2="85" y2="150" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <line x1="50" y1="153" x2="82" y2="153" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        {/* Ground */}
        <path d="M30 185 Q100 175, 170 185" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </svg>
);

const marqueeItems = [
    'धर्म', 'ALGORITHMS', 'कुरुक्षेत्र', 'HACKATHON', 'चक्रव्यूह',
    'CYBERSECURITY', 'अस्त्र', 'AI/ML', 'युद्ध', 'INNOVATION',
];

const bgIllustrations = [ConchShellSVG, SudarshanChakraSVG, TempleGateSVG, WarriorShieldsSVG, CrownSVG, WarFlagSVG];

const EventDetails = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const cards = gsap.utils.toArray('.event-detail-card');

        cards.forEach((card) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95
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
    }, { scope: sectionRef });

    const details = [
        {
            icon: <Calendar className="w-8 h-8" />,
            label: "Schedule",
            value: "Mar 6-7, 2026",
            sanskrit: "तिथि",
            color: "from-saffron to-gold",
            illustrationColor: "text-saffron"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            label: "Duration",
            value: "24 Hours",
            sanskrit: "समय",
            color: "from-blue-500 to-cyan-400",
            illustrationColor: "text-cyan-400"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            label: "Location",
            value: "CSE Department",
            sanskrit: "स्थान",
            color: "from-purple-500 to-pink-400",
            illustrationColor: "text-purple-400"
        },
        {
            icon: <Users className="w-8 h-8" />,
            label: "Team Size",
            value: "3 Members",
            sanskrit: "दल",
            color: "from-green-500 to-emerald-400",
            illustrationColor: "text-emerald-400"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            label: "Prize Pool",
            value: "Cash Prizes + Certificates",
            sanskrit: "पुरस्कार",
            color: "from-amber-500 to-yellow-400",
            illustrationColor: "text-amber-400"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            label: "Entry Fee",
            value: "₹500 per team",
            sanskrit: "शुल्क",
            color: "from-red-500 to-orange-400",
            illustrationColor: "text-orange-400"
        }
    ];

    return (
        <section ref={sectionRef} id="event-details" className="relative pb-32 pt-12 px-4 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />

            {/* Royal Marquee - Moved outside container for full width and top spacing */}
            <div className="royal-marquee-wrapper mb-16 relative z-10 w-full overflow-hidden">
                <div className="royal-marquee">
                    <span>
                        ⚔ &nbsp; कुरुक्षेत्र &nbsp; ⚔ &nbsp;
                        AIML &nbsp; ⚔ &nbsp;
                        चक्रव्यूह &nbsp; ⚔ &nbsp;
                        AI/DS &nbsp; ⚔ &nbsp;
                        अस्त्र &nbsp; ⚔ &nbsp;
                        CSE &nbsp; ⚔ &nbsp;
                        रणभूमि &nbsp; ⚔ &nbsp;
                        HACKATHON &nbsp;
                    </span>

                    <span>
                        ⚔ &nbsp; कुरुक्षेत्र &nbsp; ⚔ &nbsp;
                        AIML &nbsp; ⚔ &nbsp;
                        चक्रव्यूह &nbsp; ⚔ &nbsp;
                        AI/DS &nbsp; ⚔ &nbsp;
                        अस्त्र &nbsp; ⚔ &nbsp;
                        CSE &nbsp; ⚔ &nbsp;
                        रणभूमि &nbsp; ⚔ &nbsp;
                        HACKATHON &nbsp;
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="font-sanskrit text-6xl md:text-7xl bg-gradient-to-r from-saffron via-gold to-saffron bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                            कार्यक्रम विवरण
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-ancient">
                        Event Details
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Join the ultimate coding marathon! Teams of 3 will compete in a 24-hour hackathon to build
                        innovative software projects. AI tools are permitted. Includes accommodation, dinner on 6th March,
                        and lunch on 7th March. Only software projects allowed and must be built during the hackathon.
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-saffron" />
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-saffron" />
                    </div>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {details.map((detail, index) => {
                        const IllustrationSVG = bgIllustrations[index];
                        return (
                            <div
                                key={index}
                                className="event-detail-card group relative"
                            >
                                {/* Gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${detail.color} opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-500`} />

                                <div className="relative h-full min-h-[220px] border border-white/10 backdrop-blur-xl bg-black/40 rounded-xl p-6 flex flex-col items-center justify-center text-center group-hover:border-white/30 transition-all duration-500 hover:scale-105 overflow-hidden">

                                    {/* Mahabharata SVG illustration background */}
                                    <div className={`absolute inset-0 flex items-center justify-center ${detail.illustrationColor} opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none`}>
                                        <div className="w-[85%] h-[85%]">
                                            <IllustrationSVG />
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className={`relative z-10 mb-4 bg-gradient-to-br ${detail.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                                        {detail.icon}
                                    </div>

                                    {/* Sanskrit Label */}
                                    <div className="relative z-10 font-sanskrit text-xl text-white/50 mb-2">
                                        {detail.sanskrit}
                                    </div>

                                    {/* English Label */}
                                    <h3 className="relative z-10 font-tech text-sm text-white/60 uppercase tracking-wider mb-3">
                                        {detail.label}
                                    </h3>

                                    {/* Value */}
                                    <p className={`relative z-10 font-ancient text-2xl font-bold bg-gradient-to-r ${detail.color} bg-clip-text text-transparent`}>
                                        {detail.value}
                                    </p>

                                    {/* Decorative corner */}
                                    <div className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-xl`} />
                                    <div className={`absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-xl`} />
                                </div>
                            </div>
                        );
                    })}
                </div>



                {/* Bottom decorative element */}
                <div className="mt-20 flex justify-center">
                    <div className="relative">
                        <div className="text-center text-white/40 text-sm tracking-[0.3em] uppercase">
                            सत्यमेव जयते
                        </div>
                        <div className="text-center text-white/30 text-xs mt-2">
                            Truth Alone Triumphs
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
