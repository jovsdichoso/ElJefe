// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import heroImg from '../assets/Hero.jpg';

const Hero = () => {

    // ANIMATION SETTINGS (VARIANTS)
    const textContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each text line
                delayChildren: 0.5    // Wait for background to load a bit
            }
        }
    };

    const textItem = {
        hidden: { y: 40, opacity: 0 }, // Start lower and invisible
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">

            {/* 1. BACKGROUND IMAGE - SLOW ZOOM EFFECT */}
            <motion.div
                initial={{ scale: 1.2 }}       // Start slightly zoomed in
                animate={{ scale: 1 }}         // Slowly zoom out to normal
                transition={{ duration: 10, ease: "easeOut" }} // Takes 10 seconds (cinematic)
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                {/* Dark Overlay inside the motion div so it scales with the image */}
                <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>

            {/* 2. HERO CONTENT - STAGGERED ENTRANCE */}
            <motion.div
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 text-center px-4"
            >

                {/* Subtitle */}
                <motion.h2
                    variants={textItem}
                    className="text-orange-500 font-bold tracking-widest text-sm md:text-xl uppercase mb-2"
                >
                    Est. 2026 • Quezon City
                </motion.h2>

                {/* Main Title */}
                <motion.h1
                    variants={textItem}
                    className="text-6xl md:text-9xl text-white mb-6 transform -rotate-2 drop-shadow-xl"
                    style={{ fontFamily: '"Permanent Marker", cursive' }}
                >
                    EL JEFE
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={textItem}
                    className="text-gray-200 text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto"
                >
                    100% Handcrafted. Precision Shaped. <br className="hidden md:block" /> Built for the streets on your desk.
                </motion.p>

                {/* Button with "Pop" Effect */}
                <motion.div variants={textItem}>
                    <Link to="/shop">
                        <motion.button
                            whileHover={{ scale: 1.1 }} // Expands when hovered
                            whileTap={{ scale: 0.95 }}  // Shrinks when clicked
                            className="px-10 py-4 bg-orange-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] border border-orange-500 hover:bg-orange-500 transition-colors"
                        >
                            SHOP THE DROP
                        </motion.button>
                    </Link>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Hero;