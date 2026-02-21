import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Upload, Plus, Trash2, ArrowLeft, X } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import CosmicBackground from '../components/CosmicBackground';

const SudarshanChakraSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="2" opacity="0.6" fill="currentColor" fillOpacity="0.1" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line key={angle} x1="100" y1="100"
                x2={100 + 70 * Math.cos((angle * Math.PI) / 180)}
                y2={100 + 70 * Math.sin((angle * Math.PI) / 180)}
                stroke="currentColor" strokeWidth="1" opacity="0.3" />
        ))}
        {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((angle) => (
            <line key={`s-${angle}`}
                x1={100 + 65 * Math.cos((angle * Math.PI) / 180)}
                y1={100 + 65 * Math.sin((angle * Math.PI) / 180)}
                x2={100 + 85 * Math.cos(((angle + 7.5) * Math.PI) / 180)}
                y2={100 + 85 * Math.sin(((angle + 7.5) * Math.PI) / 180)}
                stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        ))}
        <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
    </svg>
);

const Registration = () => {
    const navigate = useNavigate();
    const container = useRef();

    // Add GSAP animations for background blur
    useGSAP(() => {
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

    const [members, setMembers] = useState([
        { name: '', email: '', contact: '' },
        { name: '', email: '', contact: '' }
    ]);
    const [file, setFile] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleMemberChange = (index, field, value) => {
        const newMembers = [...members];
        newMembers[index][field] = value;
        setMembers(newMembers);
    };

    const addMember = () => {
        if (members.length < 4) {
            setMembers([...members, { name: '', email: '', contact: '' }]);
        }
    };

    const removeMember = (index) => {
        if (members.length > 2) {
            const newMembers = members.filter((_, i) => i !== index);
            setMembers(newMembers);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Validate
            if (members.length < 2 || members.length > 4) {
                throw new Error("Team must have 2 to 4 members.");
            }
            if (!file) {
                throw new Error("Please upload a presentation.");
            }
            if (!selectedTrack) {
                throw new Error("Please select a Battle Arena (Track).");
            }
            for (const member of members) {
                if (!member.name || !member.email || !member.contact) {
                    throw new Error("Please fill in all member details.");
                }
            }

            let presentation_url = '';

            // Upload presentation to Supabase Storage
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            // If Supabase is configured with a 'presentations' bucket
            const { error: uploadError, data } = await supabase.storage
                .from('presentations')
                .upload(filePath, file);

            if (uploadError) {
                console.warn("Storage upload failed, perhaps bucket doesn't exist. Proceeding without URL.", uploadError.message);
                presentation_url = `Failed to upload: ${file.name}`;
            } else {
                const { data: publicData } = supabase.storage
                    .from('presentations')
                    .getPublicUrl(filePath);
                presentation_url = publicData.publicUrl;
            }

            // Insert into Supabase Table 'registrations'
            const { error: dbError } = await supabase
                .from('registrations')
                .insert([
                    {
                        members: members,
                        presentation_url: presentation_url,
                        track: selectedTrack
                    }
                ]);

            if (dbError) {
                throw new Error(dbError.message);
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <CosmicBackground />
                <div className="z-10 bg-black/50 backdrop-blur-md p-8 rounded-lg border border-neon-blue max-w-md w-full text-center">
                    <h2 className="text-3xl font-ancient text-saffron mb-4 text-glow">Registration Successful</h2>
                    <p className="text-gray-300 font-tech mb-8">Your squad is ready for the Dharmayuddha of Code.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-saffron text-black font-cyber px-6 py-2 rounded hover:bg-orange-600 transition-colors"
                    >
                        RETURN TO BATTLEGROUND
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div ref={container} className="min-h-screen text-white relative py-12 px-4 selection:bg-saffron selection:text-black overflow-hidden flex flex-col justify-center">
            {/* Background Effects matching Hero.jsx */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="bg-blur bg-blur-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-saffron/20 rounded-full blur-[100px]" />
                <div className="bg-blur bg-blur-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[80px]" />
            </div>

            <CosmicBackground />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

            {/* Floating Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-saffron pointer-events-none w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]">
                <SudarshanChakraSVG />
            </div>

            <div className="absolute top-4 left-4 z-20">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-saffron hover:text-white transition-colors font-tech"
                >
                    <ArrowLeft size={20} /> Back
                </button>
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-block mb-4">
                        <span className="font-sanskrit text-4xl md:text-5xl bg-gradient-to-r from-saffron via-gold to-saffron bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                            पंजीकरण
                        </span>
                    </div>
                    <h1 className="font-ancient text-5xl md:text-6xl text-white mb-4 text-glow tracking-wider">
                        JOIN THE BATTLE
                    </h1>
                    <p className="font-tech text-gray-400 text-lg">
                        Assemble your warriors for the Dharmayuddha of Code
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-saffron" />
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-saffron" />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute inset-0 bg-cyber-grid" style={{ backgroundSize: '30px 30px' }} />
                    </div>
                    {error && (
                        <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6 font-tech">
                            {error}
                        </div>
                    )}

                    <div className="space-y-8">
                        {members.map((member, index) => (
                            <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5 relative">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold font-cyber text-neon-blue">
                                        Warrior {index + 1} {index === 0 && <span className="text-sm text-saffron ml-2">(Leader)</span>}
                                    </h3>
                                    {index > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeMember(index)}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-tech text-gray-400 mb-1">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={member.name}
                                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                                            className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-tech"
                                            placeholder="Participant Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-tech text-gray-400 mb-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={member.email}
                                            onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                                            className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-tech"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-tech text-gray-400 mb-1">Contact Number</label>
                                        <input
                                            type="tel"
                                            required
                                            value={member.contact}
                                            onChange={(e) => handleMemberChange(index, 'contact', e.target.value)}
                                            className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-tech"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {members.length < 4 && (
                        <button
                            type="button"
                            onClick={addMember}
                            className="mt-6 flex items-center gap-2 text-neon-blue hover:text-white transition-colors font-cyber text-sm border border-neon-blue/30 px-4 py-2 rounded-lg bg-neon-blue/10 hover:bg-neon-blue/20"
                        >
                            <Plus size={16} /> ADD ANOTHER WARRIOR
                        </button>
                    )}

                    {/* Track Selection */}
                    <div className="mt-10 border-t border-white/10 pt-8">
                        <h3 className="text-xl font-bold font-cyber text-neon-blue mb-4">Battle Arena (Select Track)</h3>
                        <div className="relative">
                            <select
                                required
                                value={selectedTrack}
                                onChange={(e) => setSelectedTrack(e.target.value)}
                                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-tech cursor-pointer hover:border-neon-blue/50"
                            >
                                <option value="" disabled className="bg-charcoal text-gray-500">Select your domain of warfare</option>
                                <option value="💡 HealthTech" className="bg-charcoal text-white py-2">💡 HealthTech</option>
                                <option value="🌱 AgriTech" className="bg-charcoal text-white py-2">🌱 AgriTech</option>
                                <option value="📚 EduTech" className="bg-charcoal text-white py-2">📚 EduTech</option>
                                <option value="💰 FinTech" className="bg-charcoal text-white py-2">💰 FinTech</option>
                                <option value="🤖 AI-Driven Social Impact" className="bg-charcoal text-white py-2">🤖 AI-Driven Social Impact</option>
                            </select>
                            {/* Custom arrow for select */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-8">
                        <h3 className="text-xl font-bold font-cyber text-saffron mb-4">Strategic Assets (PPT Upload)</h3>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-white/5 border-white/20 hover:border-saffron/50 transition-all bg-black/30">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-3 text-gray-400" />
                                    <p className="mb-2 text-sm text-gray-400 font-tech">
                                        <span className="font-semibold text-saffron">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 font-tech">PPT, PPTX or PDF (MAX. 50MB)</p>
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".ppt,.pptx,.pdf"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        {file && (
                            <div className="mt-3 text-sm text-neon-blue font-tech flex justify-between items-center bg-neon-blue/10 p-2 rounded">
                                <span>Selected file: {file.name}</span>
                                <button type="button" onClick={() => setFile(null)} className="text-red-400 hover:text-red-300">
                                    <X size={16} />
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-10 w-full py-4 rounded font-cyber text-lg tracking-widest uppercase transition-all duration-300 relative z-10 overflow-hidden group
                            ${loading ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-transparent border border-saffron text-saffron hover:text-black'}`}
                    >
                        {!loading && <div className="absolute inset-0 w-0 bg-saffron transition-all duration-[400ms] ease-out group-hover:w-full -z-10"></div>}
                        {loading ? 'Submitting...' : 'Register Squad'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
