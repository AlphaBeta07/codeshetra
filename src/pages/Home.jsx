import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import EventDetails from '../components/EventDetails';
import TracksHorizontal from '../components/TracksHorizontal';
import Timeline from '../components/Timeline';
import Prizes from '../components/Prizes';
import Rules from '../components/Rules';
import Guidelines from '../components/Guidelines';
import Accommodations from '../components/Accommodations';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const mainRef = useRef();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    useGSAP(() => {
        const sections = gsap.utils.toArray('section:not(:first-child)');
        sections.forEach((section) => {
            gsap.fromTo(section,
                { opacity: 0, scale: 0.9, y: 100 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 90%",
                        end: "top 40%",
                        scrub: 1,
                    }
                }
            );
        });

        // Background warping effect on scroll
        gsap.to(".bg-cyber-grid", {
            scale: 1.5,
            opacity: 0.2,
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
    }, { scope: mainRef });

    return (
        <div ref={mainRef} className="relative min-h-screen flex flex-col selection:bg-saffron selection:text-black">
            <CosmicBackground />

            <Navbar />

            <main className="flex-grow pt-16">
                <Hero />

                {/* Scroll hint in the style of the shared image */}
                <div className="flex flex-col items-center justify-center gap-2 opacity-50 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-default pointer-events-none">
                    <span className="font-cyber text-[10px] tracking-[0.4em] uppercase">Scroll to Advance</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-saffron to-transparent" />
                </div>


                <EventDetails />

                <TracksHorizontal />

                <Timeline />

                <Prizes />

                <div className="relative z-10 px-4 space-y-24">
                    <Rules />
                    <Guidelines />
                    <Accommodations />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
