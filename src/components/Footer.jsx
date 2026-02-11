import React from 'react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-deep-void border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="mb-12">
                    <h2 className="font-ancient text-3xl md:text-5xl text-white mb-4">
                        "May the Best Warriors Prevail!"
                    </h2>
                    <p className="font-ancient text-xl text-saffron">
                        Victory to the Righteous, Victory to Truth.
                    </p>
                </div>
<div className="text-gray-600 font-tech text-sm">
                    <p>© 2026 CODEKSHESTRA. </p>
                    {/* <p className="mt-2">Forged in the fires of Innovation.</p> */}
                </div>
                {/* <div className="flex justify-center gap-8 mb-12">
                    <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div> */}


            </div>

            {/* Background Grain/Noise could be added here if needed */}
        </footer>
    );
};

export default Footer;
