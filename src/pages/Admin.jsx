import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import CosmicBackground from '../components/CosmicBackground';
import { Download, Users, Briefcase, Lock } from 'lucide-react';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const idRef = useRef();
    const passwordRef = useRef();

    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const adminId = import.meta.env.VITE_ADMIN_ID || 'admin';
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'password2328';

    useEffect(() => {
        if (!isAuthenticated) return;

        setLoading(true);
        const fetchRegistrations = async () => {
            try {
                const { data, error: fetchError } = await supabase
                    .from('registrations')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (fetchError) throw fetchError;
                setRegistrations(data || []);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching registrations:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRegistrations();
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        const idInput = idRef.current?.value || '';
        const passwordInput = passwordRef.current?.value || '';
        if (idInput === adminId && passwordInput === adminPassword) {
            setIsAuthenticated(true);
            setError(null);
        } else {
            setError('Invalid Admin ID or Password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-charcoal flex items-center justify-center p-4">
                <CosmicBackground />
                <div className="z-10 bg-black/50 backdrop-blur-md p-8 rounded-lg border border-neon-blue max-w-sm w-full">
                    <div className="text-center mb-6">
                        <Lock className="w-12 h-12 text-neon-blue mx-auto mb-2" />
                        <h2 className="text-2xl font-ancient text-saffron text-glow">ADMIN ACCESS</h2>
                        <p className="text-gray-400 font-tech text-sm mt-1">Authenticate to enter Command Center</p>
                    </div>

                    {error && (
                        <div className="bg-red-900/50 border border-red-500 text-red-200 px-3 py-2 rounded mb-4 font-tech text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-tech text-gray-400 mb-1">Admin ID</label>
                            <input
                                type="text"
                                ref={idRef}
                                className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue font-tech"
                                placeholder="Enter ID"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-tech text-gray-400 mb-1">Password</label>
                            <input
                                type="password"
                                ref={passwordRef}
                                className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue font-tech"
                                placeholder="Enter Password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-saffron text-black font-cyber font-bold py-2 rounded hover:bg-orange-600 transition-colors tracking-widest"
                        >
                            LOGIN
                        </button>
                    </form>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full text-center mt-4 text-gray-400 hover:text-white font-tech text-sm transition-colors"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-charcoal flex items-center justify-center p-4">
                <CosmicBackground />
                <div className="z-10 text-saffron font-cyber animate-pulse">Loading Battle Logs...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-charcoal text-white relative py-12 px-4 selection:bg-saffron selection:text-black">
            <CosmicBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="font-ancient text-4xl text-neon-blue mb-2 text-glow">COMMAND CENTER</h1>
                        <p className="font-tech text-gray-400">Manage all registered squads</p>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-black/50 border border-white/20 text-white hover:text-saffron px-4 py-2 rounded transition-colors font-tech text-sm"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6 font-tech">
                        Error: {error}. Please ensure Supabase is correctly configured with a 'registrations' table.
                    </div>
                )}

                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-tech text-sm">
                            <thead className="bg-white/5 text-gray-300 uppercase font-cyber text-xs border-b border-white/10">
                                <tr>
                                    <th className="px-6 py-4">Squad Lead</th>
                                    <th className="px-6 py-4">Members</th>
                                    <th className="px-6 py-4">Contact Info</th>
                                    <th className="px-6 py-4">Track</th>
                                    <th className="px-6 py-4">Presentation</th>
                                    <th className="px-6 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {registrations.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500 italic">
                                            No squads registered yet.
                                        </td>
                                    </tr>
                                ) : (
                                    registrations.map((reg, idx) => {
                                        const members = reg.members || [];
                                        const leader = members[0] || {};

                                        return (
                                            <tr key={reg.id || idx} className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-bold text-saffron">{leader.name}</div>
                                                    <div className="text-gray-400 text-xs">{leader.email}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-1 text-neon-blue mb-1">
                                                        <Users size={14} /> {members.length} Warriors
                                                    </div>
                                                    <ul className="text-xs text-gray-400 space-y-1">
                                                        {members.map((m, i) => (
                                                            <li key={i}>{m.name}</li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td className="px-6 py-4 text-gray-300">
                                                    {members.map((m, i) => (
                                                        <div key={i} className="text-xs mb-1">
                                                            <span className="text-gray-500">{m.name}:</span> {m.contact}
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-cyber text-saffron">
                                                        {reg.track || 'Unspecified'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {reg.presentation_url ? (
                                                        reg.presentation_url.startsWith('http') ? (
                                                            <a
                                                                href={reg.presentation_url.toLowerCase().includes('.pdf') ? reg.presentation_url : `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(reg.presentation_url)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-1 text-neon-blue hover:text-white transition-colors"
                                                            >
                                                                <Briefcase size={16} /> View PPT
                                                            </a>
                                                        ) : (
                                                            <span className="text-yellow-500 text-xs">{reg.presentation_url}</span>
                                                        )
                                                    ) : (
                                                        <span className="text-gray-500 italic text-xs">No file</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-xs text-gray-500">
                                                    {new Date(reg.created_at).toLocaleDateString()}
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
