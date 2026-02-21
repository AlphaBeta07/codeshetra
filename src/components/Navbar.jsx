import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Warriors', href: '#characters' },
        { name: 'Details', href: '#event-details' },
        { name: 'Battlegrounds', href: '#tracks' },
        { name: 'Schedule', href: '#timeline' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Rules', href: '#rules' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="font-ancient text-2xl font-bold text-saffron tracking-wider cursor-pointer"
                        >
                            CODEKSHESTRA
                        </motion.span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-tech text-gray-300 hover:text-neon-blue transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide"
                                >
                                    {item.name.toUpperCase()}
                                </a>
                            ))}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/register"
                                    className="bg-saffron hover:bg-orange-600 text-black font-cyber font-bold py-2 px-4 rounded clip-path-slant inline-block"
                                >
                                    JOIN NOW
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-charcoal border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium font-tech"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name.toUpperCase()}
                            </a>
                        ))}
                        <Link
                            to="/register"
                            className="w-full text-center block bg-saffron text-black font-cyber font-bold py-2 px-3 rounded mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            JOIN NOW
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
