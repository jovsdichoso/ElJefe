import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';

const About = () => {
    // Animation Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300 pt-20">

            {/* 1. HERO HEADER */}
            <div className="text-center px-6 py-16 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, rotate: -10, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: -2, scale: 1 }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="text-5xl md:text-7xl mb-6 text-orange-500 transform -rotate-2"
                    style={{ fontFamily: '"Permanent Marker", cursive' }}
                >
                    WHO IS EL JEFE?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300"
                >
                    From a DIY garage project in Quezon City to a pro-tier fingerboard brand.
                </motion.p>
            </div>

            {/* 2. THE STORY SECTION */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-orange-500 rounded-xl rotate-2 opacity-50 group-hover:rotate-0 transition duration-500"></div>
                            <img
                                src={aboutImg}
                                alt="Crafting Process"
                                className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/5] md:aspect-square"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-wider">Not A Factory. <br /> A Workshop.</h2>
                        <div className="h-1 w-20 bg-orange-500"></div>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            Most fingerboards you buy online are mass-produced in big factories. They feel generic. They lack soul.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            <strong className="text-black dark:text-white">El Jefe is different.</strong> Every single deck is pressed, shaped, sanded, and lacquered by hand right here in Quezon City. We control every curve of the concave and every millimeter of the wheelbase.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            We don't just sell toys. We sell professional miniature skateboards designed for performance.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* 3. THE STATS */}
            <section className="bg-neutral-100 dark:bg-neutral-800 py-16 transition-colors duration-300">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >

                    <motion.div variants={item} className="space-y-2">
                        <span className="text-4xl md:text-5xl font-black text-orange-500">2026</span>
                        <p className="text-sm font-bold uppercase tracking-widest">Established</p>
                    </motion.div>

                    <motion.div variants={item} className="space-y-2">
                        <span className="text-4xl md:text-5xl font-black text-black dark:text-white">100%</span>
                        <p className="text-sm font-bold uppercase tracking-widest">Handmade</p>
                    </motion.div>

                    <motion.div variants={item} className="space-y-2">
                        <span className="text-4xl md:text-5xl font-black text-orange-500">5-Ply</span>
                        <p className="text-sm font-bold uppercase tracking-widest">Construction</p>
                    </motion.div>

                    <motion.div variants={item} className="space-y-2">
                        <span className="text-4xl md:text-5xl font-black text-black dark:text-white">PH</span>
                        <p className="text-sm font-bold uppercase tracking-widest">Quezon City</p>
                    </motion.div>

                </motion.div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section className="py-24 text-center px-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your setup?</h2>
                    <Link to="/shop">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-full hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all shadow-lg"
                        >
                            BROWSE THE COLLECTION
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

        </div>
    );
};

export default About;