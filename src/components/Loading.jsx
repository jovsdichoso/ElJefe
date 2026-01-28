// src/components/Loading.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png'; // Make sure this path is correct

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-900 transition-colors duration-300">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity, 
                    ease: "easeInOut"
                }}
                className="flex flex-col items-center justify-center"
            >
                {/* Logo Image Only */}
                <img
                    src={logoImg}
                    alt="Loading..."
                    className="w-24 h-auto dark:invert" // Inverts color in dark mode
                />
            </motion.div>

        </div>
    );
};

export default Loading;