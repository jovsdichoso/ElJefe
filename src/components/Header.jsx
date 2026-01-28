import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import logoImg from '../assets/logo.png';

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-sm font-bold text-orange-600 dark:text-orange-500 transition relative"
            : "text-sm font-bold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition";

    return (
        // 2. Change <nav> to <motion.nav>
        <motion.nav
            initial={{ y: -100, opacity: 0 }} // Start: Hidden above the screen
            animate={{ y: 0, opacity: 1 }}    // End: Slides down to normal position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smoothness
            className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO SECTION */}
                <Link to="/" className="flex items-center gap-2 group">
                    <motion.img
                        whileHover={{ scale: 1.1, rotate: -5 }} // Fun hover effect
                        whileTap={{ scale: 0.9 }}
                        src={logoImg}
                        alt="El Jefe Logo"
                        className="h-10 w-auto transition-all duration-300 dark:invert"
                    />
                </Link>

                {/* NAVIGATION LINKS */}
                <div className="hidden md:flex items-center gap-8">
                    {['/', '/shop', '/about'].map((path, index) => (
                        <NavLink key={path} to={path} className={navLinkClass}>
                            {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}
                        </NavLink>
                    ))}
                </div>

                {/* THEME TOGGLE */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }} // Spins when hovered!
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 shadow-sm"
                >
                    {isDark ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                    )}
                </motion.button>

            </div>
        </motion.nav>
    );
};

export default Header;