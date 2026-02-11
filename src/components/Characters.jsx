import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const characters = [
    {
        id: 1,
        name: "Krishna",
        title: "द्वारकाधीश",
        subtitle: "Lord of Dwarka",
        role: "Divine Charioteer",
        description: "The supreme personality, charioteer of Arjuna, and the one who delivered the Bhagavad Gita on the battlefield of Kurukshetra.",
        color: "from-blue-500 to-cyan-400",
        bgGlow: "bg-blue-500/20"
    },
    {
        id: 2,
        name: "Arjuna",
        title: "पार्थ",
        subtitle: "Son of Pritha",
        role: "The Greatest Archer",
        description: "The mighty warrior and third Pandava, blessed by Lord Krishna with divine wisdom and unmatched archery skills.",
        color: "from-emerald-500 to-teal-400",
        bgGlow: "bg-emerald-500/20"
    },
    {
        id: 3,
        name: "Karna",
        title: "अंगराज",
        subtitle: "King of Anga",
        role: "The Tragic Hero",
        description: "Born with divine armor and earrings, the greatest warrior cursed by fate, known for his unwavering loyalty and generosity.",
        color: "from-amber-500 to-yellow-400",
        bgGlow: "bg-amber-500/20"
    },
    {
        id: 4,
        name: "Bhima",
        title: "वृकोदर",
        subtitle: "Wolf-Bellied",
        role: "The Mighty Warrior",
        description: "The second Pandava, blessed with the strength of ten thousand elephants, and the one who fulfilled the vow of vengeance.",
        color: "from-red-500 to-orange-400",
        bgGlow: "bg-red-500/20"
    },
    {
        id: 5,
        name: "Draupadi",
        title: "पांचाली",
        subtitle: "Princess of Panchala",
        role: "The Fire-Born Queen",
        description: "Born from fire, the wife of five Pandavas, whose humiliation sparked the great war and changed the course of history.",
        color: "from-pink-500 to-rose-400",
        bgGlow: "bg-pink-500/20"
    },
    {
        id: 6,
        name: "Bhishma",
        title: "गंगापुत्र",
        subtitle: "Son of Ganga",
        role: "The Grand Patriarch",
        description: "The invincible warrior bound by terrible vows, who chose the time of his own death and lay on a bed of arrows.",
        color: "from-slate-400 to-gray-300",
        bgGlow: "bg-slate-400/20"
    },
    {
        id: 7,
        name: "Yudhishthira",
        title: "धर्मराज",
        subtitle: "King of Dharma",
        role: "The Righteous Emperor",
        description: "The eldest Pandava, embodiment of truth and righteousness, who never spoke a lie except once that cost him dearly.",
        color: "from-indigo-500 to-purple-400",
        bgGlow: "bg-indigo-500/20"
    },
    {
        id: 8,
        name: "Duryodhana",
        title: "कौरवराज",
        subtitle: "King of Kauravas",
        role: "The Ambitious Prince",
        description: "The eldest Kaurava, a skilled mace fighter whose jealousy and ambition led to the greatest war in history.",
        color: "from-violet-600 to-purple-500",
        bgGlow: "bg-violet-600/20"
    },
    {
        id: 9,
        name: "Drona",
        title: "द्रोणाचार्य",
        subtitle: "The Master Teacher",
        role: "Guru of Warriors",
        description: "The greatest teacher of warfare, who trained both Pandavas and Kauravas in the art of combat and strategy.",
        color: "from-orange-500 to-amber-400",
        bgGlow: "bg-orange-500/20"
    },
    {
        id: 10,
        name: "Shakuni",
        title: "गांधारराज",
        subtitle: "King of Gandhara",
        role: "The Master Manipulator",
        description: "The cunning uncle of Kauravas, whose dice game and schemes set the stage for the devastating war of Kurukshetra.",
        color: "from-gray-600 to-slate-500",
        bgGlow: "bg-gray-600/20"
    },
    {
        id: 11,
        name: "Abhimanyu",
        title: "वीरबालक",
        subtitle: "The Young Hero",
        role: "Son of Arjuna",
        description: "The brave young warrior who knew how to enter the Chakravyuha but not escape, sacrificing his life at a tender age.",
        color: "from-sky-500 to-blue-400",
        bgGlow: "bg-sky-500/20"
    },
    {
        id: 12,
        name: "Kunti",
        title: "पृथा",
        subtitle: "Mother of Pandavas",
        role: "The Blessed Queen",
        description: "The mother of the Pandavas and Karna, who bore the burden of a terrible secret that shaped the destiny of her sons.",
        color: "from-fuchsia-500 to-pink-400",
        bgGlow: "bg-fuchsia-500/20"
    }
];

const CharacterCard = ({ character, index }) => {
    const cardRef = useRef();

    useGSAP(() => {
        gsap.fromTo(cardRef.current,
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
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1,
                }
            }
        );
    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer"
        >
            {/* Glow effect */}
            <div className={`absolute inset-0 ${character.bgGlow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />

            {/* Character Image Placeholder */}
            <div className={`relative h-48 bg-gradient-to-br ${character.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

                {/* Character silhouette/icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/30 text-6xl font-bold font-sanskrit">
                        {character.name.charAt(0)}
                    </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Sanskrit title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="font-sanskrit text-2xl text-white/90 mb-0.5 group-hover:text-white transition-colors">
                        {character.title}
                    </h3>
                    <p className="text-white/60 text-xs tracking-wider uppercase">
                        {character.subtitle}
                    </p>
                </div>
            </div>

            {/* Character Info */}
            <div className="relative p-4 space-y-2">
                <div>
                    <h2 className="text-xl font-bold text-white mb-0.5 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {character.name}
                    </h2>
                    <p className={`text-xs font-semibold bg-gradient-to-r ${character.color} bg-clip-text text-transparent`}>
                        {character.role}
                    </p>
                </div>

                <p className="text-white/70 text-xs leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors">
                    {character.description}
                </p>

                {/* Decorative line */}
                <div className={`h-0.5 w-12 bg-gradient-to-r ${character.color} rounded-full group-hover:w-full transition-all duration-500`} />
            </div>

            {/* Corner accent */}
            <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${character.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
        </div>
    );
};

const Characters = () => {
    const sectionRef = useRef();
    const titleRef = useRef();

    useGSAP(() => {
        gsap.fromTo(titleRef.current,
            {
                opacity: 0,
                y: -50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="characters" className="relative py-32 px-4 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-saffron/5 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="font-sanskrit text-6xl md:text-7xl bg-gradient-to-r from-saffron via-gold to-saffron bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                            महायोद्धा
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Legendary Warriors
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Meet the immortal heroes and villains of the greatest epic ever told.
                        Each character shaped the destiny of Bharatavarsha through their choices,
                        valor, and sacrifices.
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-saffron" />
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-saffron" />
                    </div>
                </div>

                {/* Characters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {characters.map((character, index) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div className="mt-20 flex justify-center">
                    <div className="relative">
                        <div className="text-center text-white/40 text-sm tracking-[0.3em] uppercase">
                            धर्मो रक्षति रक्षितः
                        </div>
                        <div className="text-center text-white/30 text-xs mt-2">
                            Dharma protects those who protect it
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Characters;
