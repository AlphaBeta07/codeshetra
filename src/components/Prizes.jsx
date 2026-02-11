import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Prizes = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const cards = gsap.utils.toArray('.prize-card');

        cards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    delay: index * 0.1,
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

    const prizes = [
        {
            position: "1st Place",
            title: "Champions of Kurukshetra",
            sanskrit: "विजेता",
            amount: "₹25,000",
            icon: <Crown className="w-16 h-16" />,
            color: "from-yellow-400 via-gold to-amber-500",
            bgGlow: "bg-gold/20",
            perks: ["Winner Trophy", "Certificates", "Internship Opportunities", "Goodies"]
        },
        {
            position: "2nd Place",
            title: "Warriors of Honor",
            sanskrit: "उपविजेता",
            amount: "₹15,000",
            icon: <Trophy className="w-14 h-14" />,
            color: "from-slate-300 via-gray-200 to-slate-400",
            bgGlow: "bg-slate-300/20",
            perks: ["Runner-up Trophy", "Certificates", "Swag Kit", "Goodies"]
        },
        {
            position: "3rd Place",
            title: "Brave Challengers",
            sanskrit: "तृतीय स्थान",
            amount: "₹10,000",
            icon: <Medal className="w-12 h-12" />,
            color: "from-amber-600 via-orange-500 to-amber-700",
            bgGlow: "bg-amber-600/20",
            perks: ["Medal of Honor", "Certificates", "Swag Kit"]
        }
    ];

    const specialPrizes = [
        {
            title: "Best Innovation",
            amount: "₹5,000",
            icon: <Award className="w-10 h-10" />,
            color: "from-purple-500 to-pink-400"
        },
        {
            title: "Best UI/UX",
            amount: "₹3,000",
            icon: <Award className="w-10 h-10" />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Best Social Impact",
            amount: "₹3,000",
            icon: <Award className="w-10 h-10" />,
            color: "from-green-500 to-emerald-400"
        }
    ];

    return (
        <section ref={sectionRef} id="prizes" className="relative py-32 px-4 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="font-sanskrit text-6xl md:text-7xl bg-gradient-to-r from-saffron via-gold to-saffron bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                            पुरस्कार
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-ancient">
                        Prizes & Rewards
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Victory brings glory and riches. The bravest warriors shall be rewarded with treasures
                        worthy of their valor and skill.
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-saffron" />
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-saffron" />
                    </div>
                </div>

                {/* Main Prizes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {prizes.map((prize, index) => (
                        <div
                            key={index}
                            className={`prize-card group relative ${index === 0 ? 'md:-mt-8' : ''}`}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 ${prize.bgGlow} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500`} />

                            <div className={`relative h-full min-h-[450px] border-2 ${index === 0 ? 'border-gold' : 'border-white/20'} backdrop-blur-xl bg-black/40 rounded-2xl p-8 flex flex-col items-center text-center group-hover:border-opacity-100 transition-all duration-500 hover:scale-105`}>

                                {/* Position badge */}
                                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r ${prize.color} rounded-full text-black font-bold text-sm`}>
                                    {prize.position}
                                </div>

                                {/* Icon */}
                                <div className={`mt-8 mb-6 bg-gradient-to-br ${prize.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                                    {prize.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-ancient text-2xl text-white mb-2">
                                    {prize.title}
                                </h3>

                                {/* Sanskrit */}
                                <div className="font-sanskrit text-lg text-white/50 mb-4">
                                    {prize.sanskrit}
                                </div>

                                {/* Amount */}
                                <div className={`text-5xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-6`}>
                                    {prize.amount}
                                </div>

                                {/* Perks */}
                                <div className="space-y-2 w-full">
                                    {prize.perks.map((perk, i) => (
                                        <div key={i} className="flex items-center justify-center gap-2 text-white/70 text-sm">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${prize.color}`} />
                                            <span>{perk}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative corners */}
                                <div className={`absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 ${index === 0 ? 'border-gold' : 'border-white/20'} rounded-tl-2xl`} />
                                <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 ${index === 0 ? 'border-gold' : 'border-white/20'} rounded-br-2xl`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Prizes */}
                <div className="mt-20">
                    <h3 className="text-3xl font-ancient text-center text-white mb-10">
                        Special Category Awards
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {specialPrizes.map((prize, index) => (
                            <div
                                key={index}
                                className="prize-card group relative"
                            >
                                <div className={`relative border border-white/10 backdrop-blur-xl bg-black/40 rounded-xl p-6 flex flex-col items-center text-center group-hover:border-white/30 transition-all duration-500 hover:scale-105`}>

                                    {/* Icon */}
                                    <div className={`mb-4 bg-gradient-to-br ${prize.color} bg-clip-text text-transparent`}>
                                        {prize.icon}
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-tech text-lg text-white mb-3">
                                        {prize.title}
                                    </h4>

                                    {/* Amount */}
                                    <div className={`text-3xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                                        {prize.amount}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total Prize Pool */}
                <div className="mt-16 text-center">
                    <div className="inline-block border-2 border-saffron/50 backdrop-blur-xl bg-black/40 rounded-2xl px-12 py-6">
                        <div className="text-white/60 text-sm uppercase tracking-wider mb-2">Total Prize Pool</div>
                        <div className="text-6xl font-bold bg-gradient-to-r from-saffron via-gold to-saffron bg-clip-text text-transparent">
                            ₹56,000+
                        </div>
                    </div>
                </div>

                {/* Bottom decorative element */}
                <div className="mt-20 flex justify-center">
                    <div className="relative">
                        <div className="text-center text-white/40 text-sm tracking-[0.3em] uppercase">
                            यशो लभस्व
                        </div>
                        <div className="text-center text-white/30 text-xs mt-2">
                            Attain Glory
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prizes;
