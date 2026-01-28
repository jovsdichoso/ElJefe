import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="text-neutral-900 dark:text-white transition-colors duration-300">

            {/* SECTION 1: HERO */}
            <Hero />

            {/* SECTION 2: LATEST DROP PREVIEW */}
            <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* VIDEO SIDE (Replaced Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center" // Added flex justify-center
                    >
                        <div className="relative group p-2 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-700">

                            {/* Facebook Reel Iframe - React Formatted */}
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4456645344622293%2F&show_text=false&width=560&t=0"
                                width="560"
                                height="314"
                                style={{ border: 'none', overflow: 'hidden', borderRadius: '12px' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>

                        </div>
                    </motion.div>

                    {/* TEXT SIDE (Keep this the same, just updated the title to match the video) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <div className="flex items-center gap-2">
                            <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">FEATURED CLIP</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">@ElJefeFingerboard</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                            See It In Action
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            Photos don't do it justice. Watch how the 5-ply maple responds to real street tricks.
                            Smooth pop, perfect concave, and graphics that slide.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <Link to="/shop" className="text-neutral-900 dark:text-white border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition">
                                Shop This Setup
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            
            {/* SECTION 3: THE PROCESS / TRUST (Updated Icons) */}
            <section className="bg-gray-100 dark:bg-neutral-800 py-16 transition-colors duration-300">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    {/* ICON 1: LAYERS (Premium Maple) */}
                    <motion.div variants={fadeInUp} className="p-6">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Premium 5-Ply</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Sourced for durability and perfect pop.</p>
                    </motion.div>

                    {/* ICON 2: HAND (Hand Shaped) */}
                    <motion.div variants={fadeInUp} className="p-6 border-l-0 md:border-l border-gray-300 dark:border-neutral-700">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Hand Shaped</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Every curve sanded by hand in the PH.</p>
                    </motion.div>

                    {/* ICON 3: FLAME (Real Wear) */}
                    <motion.div variants={fadeInUp} className="p-6 border-l-0 md:border-l border-gray-300 dark:border-neutral-700">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Real Wear Graphics</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Graphics that slide and wear like real skates.</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTION 4: NEWSLETTER / FOOTER */}
            <section className="py-24 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Don't Miss the Next Drop</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">Join the inner circle. Get notified before we sell out.</p>
                    <div className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 text-black dark:text-white"
                        />
                        <button className="bg-black dark:bg-white text-white dark:text-black font-bold px-6 py-3 rounded-lg hover:opacity-80 transition">
                            JOIN
                        </button>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default Home;