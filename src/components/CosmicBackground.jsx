import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Shield, Sword, Zap } from 'lucide-react';

const CosmicBackground = () => {
    const container = useRef();

    useGSAP(() => {
        // Create random stars
        const starCount = 100;
        const stars = [];
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'absolute bg-white rounded-full pointer-events-none opacity-20';
            const size = Math.random() * 3;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            container.current.appendChild(star);
            stars.push(star);
        }

        // Parallax effect for stars
        gsap.to(stars, {
            y: (i) => -Math.random() * 200 - 100,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        // Floating artifacts
        gsap.to(".floating-artifact", {
            y: "random(-50, 50)",
            x: "random(-30, 30)",
            rotation: "random(-45, 45)",
            duration: "random(10, 20)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Parallax for artifacts
        gsap.to(".floating-artifact", {
            y: (i) => i % 2 === 0 ? -300 : -150,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5
            }
        });
    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 -z-20 bg-deep-void overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-10" />

            {/* War Artifacts - Parallax Layers */}
            <div className="floating-artifact absolute top-[20%] left-[10%] opacity-20 text-saffron">
                <Shield size={120} strokeWidth={0.5} />
            </div>
            <div className="floating-artifact absolute top-[60%] right-[10%] opacity-20 text-neon-blue">
                <Sword size={150} strokeWidth={0.5} className="rotate-45" />
            </div>
            <div className="floating-artifact absolute top-[80%] left-[15%] opacity-20 text-gold">
                <Zap size={100} strokeWidth={0.5} />
            </div>
            <div className="floating-artifact absolute top-[40%] right-[20%] opacity-10 text-white">
                <Shield size={80} strokeWidth={0.5} />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
        </div>
    );
};

export default CosmicBackground;
