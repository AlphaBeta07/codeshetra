/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'saffron': '#FF9933', // Deep Saffron (War/Energy)
                'gold': '#FFD700', // Royal Gold (Victory)
                'charcoal': '#121212', // Charcoal Black (Background)
                'neon-blue': '#00FFFF', // Neon Blue (Technology)
                'deep-void': '#050505',
            },
            fontFamily: {
                'ancient': ['"Cinzel Decorative"', 'serif'],
                'cyber': ['"Courier Prime"', 'monospace'],
                'tech': ['"Rajdhani"', 'sans-serif'],
                'sanskrit': ['"Tiro Devanagari Sanskrit"', '"Noto Sans Devanagari"', 'serif'],
            },
            backgroundImage: {
                'cyber-grid': "linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)",
            },
            keyframes: {
                shimmer: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            },
            animation: {
                shimmer: 'shimmer 3s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
