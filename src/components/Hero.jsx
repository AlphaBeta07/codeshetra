import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Sword, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const container = useRef();
    const subHeadlineRef = useRef();
    const textRef = useRef();
    const buttonsRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".bg-blur", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2
        })
            .from(subHeadlineRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8
            }, "-=0.5")
            .from(".char", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.7)"
            }, "-=0.4")
            .from(textRef.current, {
                opacity: 0,
                y: 20,
                duration: 1
            }, "-=0.5")
            .from(buttonsRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, "-=0.6")
            .from(".decorative", {
                x: -50,
                opacity: 0,
                duration: 1
            }, "-=0.5");

        // Floating animation for background blur
        gsap.to(".bg-blur-1", {
            x: "random(-20, 20)",
            y: "random(-20, 20)",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        gsap.to(".bg-blur-2", {
            x: "random(-30, 30)",
            y: "random(-30, 30)",
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: container });

    const title = "CODEKSHESTRA";

    return (
        <section ref={container} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="bg-blur bg-blur-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-saffron/20 rounded-full blur-[100px]" />
                <div className="bg-blur bg-blur-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div>
                    <h2 ref={subHeadlineRef} className="font-cyber text-neon-blue tracking-[0.3em] mb-4 text-sm md:text-base">
                        // THE DHARMAYUDDHA OF CODE //
                    </h2>
                    <h1 className="font-ancient text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 text-glow flex justify-center whitespace-nowrap">
                        {title.split("").map((char, i) => (
                            <span key={i} className={`char inline-block ${i >= 4 ? 'text-saffron' : ''}`}>
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                <p ref={textRef} className="font-tech text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    "Just as warriors gathered at Kurukshetra, <br className="hidden md:block" />
                    coders shall unite at Codekshestra to showcase their prowess."
                </p>

                <div ref={buttonsRef} className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link
                        to="/register"
                        className="group relative px-10 py-4 bg-transparent border border-saffron text-saffron font-ancient font-bold text-xl tracking-wider overflow-hidden hover:text-black transition-colors duration-300 inline-block"
                    >
                        <div className="absolute inset-0 w-0 bg-saffron transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative flex items-center gap-2">
                            <Sword className="w-6 h-6 rotate-90" /> JOIN THE BATTLE
                        </span>
                    </Link>
                    {/* 
                    <button className="px-10 py-4 bg-transparent border border-neon-blue/30 text-neon-blue font-cyber text-lg hover:bg-neon-blue/10 transition-colors uppercase tracking-widest">
                        EXPLORE PROTOCOLS
                    </button> */}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="decorative absolute bottom-10 left-10 hidden md:block opacity-50">
                <Cpu className="text-saffron w-12 h-12 mb-2" />
                <div className="font-cyber text-xs text-saffron tracking-tighter">SYSTEM::ONLINE</div>
                <div className="font-cyber text-xs text-saffron tracking-tighter">loc::KURUKSHETRA_2026</div>
            </div>
        </section>
    );
};

export default Hero;
