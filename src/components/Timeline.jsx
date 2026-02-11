import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const items = gsap.utils.toArray('.timeline-item');

        items.forEach((item, index) => {
            gsap.fromTo(item,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                    }
                }
            );
        });
    }, { scope: sectionRef });

    const schedule = [
        {
            time: "8:30 AM - 9:00 AM",
            title: "Registration & Check-in",
            sanskrit: "पंजीकरण",
            description: "Warriors arrive and receive their battle credentials",
            color: "from-blue-500 to-cyan-400"
        },
        {
            time: "9:00 AM - 9:30 AM",
            title: "Opening Ceremony",
            sanskrit: "उद्घाटन समारोह",
            description: "Welcome address and event inauguration by chief guests",
            color: "from-saffron to-gold"
        },
        {
            time: "9:30 AM - 10:00 AM",
            title: "Team Formation & Problem Statement Release",
            sanskrit: "दल निर्माण",
            description: "Teams finalize their formation and receive challenge statements",
            color: "from-purple-500 to-pink-400"
        },
        {
            time: "10:00 AM - 1:00 PM",
            title: "Coding Phase - Round 1",
            sanskrit: "प्रथम चरण",
            description: "Initial development phase - Build your foundation",
            color: "from-green-500 to-emerald-400"
        },
        {
            time: "1:00 PM - 2:00 PM",
            title: "Lunch Break",
            sanskrit: "भोजन विराम",
            description: "Refuel for the battles ahead",
            color: "from-amber-500 to-yellow-400"
        },
        {
            time: "2:00 PM - 4:30 PM",
            title: "Coding Phase - Round 2",
            sanskrit: "द्वितीय चरण",
            description: "Advanced development and feature implementation",
            color: "from-red-500 to-orange-400"
        },
        {
            time: "4:30 PM - 5:30 PM",
            title: "Project Presentations",
            sanskrit: "प्रस्तुतीकरण",
            description: "Teams showcase their innovations to the judges",
            color: "from-violet-500 to-purple-400"
        },
        {
            time: "5:30 PM - 6:00 PM",
            title: "Prize Distribution & Closing Ceremony",
            sanskrit: "पुरस्कार वितरण",
            description: "Honoring the victorious warriors",
            color: "from-gold to-saffron"
        }
    ];

    return (
        <section ref={sectionRef} id="timeline" className="relative py-32 px-4 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="font-sanskrit text-6xl md:text-7xl bg-gradient-to-r from-saffron via-gold to-saffron bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                            कार्यक्रम समय
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-ancient">
                        Event Schedule
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        The battle unfolds through the day. Each phase brings new challenges and opportunities
                        for glory. Plan your strategy wisely.
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-saffron" />
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-saffron" />
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-saffron via-gold to-saffron opacity-30 hidden md:block" />

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {schedule.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="group relative inline-block">
                                        {/* Gradient background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />

                                        <div className="relative border border-white/10 backdrop-blur-xl bg-black/40 rounded-xl p-6 group-hover:border-white/30 transition-all duration-500 hover:scale-105">
                                            {/* Time */}
                                            <div className={`font-cyber text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                                                {item.time}
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-ancient text-2xl text-white mb-2">
                                                {item.title}
                                            </h3>

                                            {/* Sanskrit */}
                                            <div className="font-sanskrit text-lg text-white/50 mb-3">
                                                {item.sanskrit}
                                            </div>

                                            {/* Description */}
                                            <p className="text-white/70 text-sm">
                                                {item.description}
                                            </p>

                                            {/* Decorative corner */}
                                            <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-12 h-12 border-t-2 ${index % 2 === 0 ? 'border-r-2 rounded-tr-xl' : 'border-l-2 rounded-tl-xl'} border-white/20`} />
                                        </div>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="relative flex-shrink-0 hidden md:block">
                                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} border-4 border-black shadow-lg`} />
                                    <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} opacity-50 blur-md animate-pulse`} />
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom decorative element */}
                <div className="mt-20 flex justify-center">
                    <div className="relative">
                        <div className="text-center text-white/40 text-sm tracking-[0.3em] uppercase">
                            कालो ऽस्मि लोकक्षयकृत्
                        </div>
                        <div className="text-center text-white/30 text-xs mt-2">
                            I am Time, the destroyer of worlds
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
