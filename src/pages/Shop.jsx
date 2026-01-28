import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. THE MOCK DATABASE
const PRODUCTS = [
    {
        id: 1,
        name: "Metro Sunset",
        price: 850,
        status: "Available",
        image: "https://images.unsplash.com/photo-1520045864981-8fee96574dc9?q=80&w=2069&auto=format&fit=crop",
        category: "Street Shape"
    },
    {
        id: 2,
        name: "Midnight Purple",
        price: 900,
        status: "Low Stock",
        image: "https://images.unsplash.com/photo-1565896311069-b1d4285d8883?q=80&w=2070&auto=format&fit=crop",
        category: "Boxy Shape"
    },
    {
        id: 3,
        name: "Natural Maple",
        price: 750,
        status: "Sold Out",
        image: "https://images.unsplash.com/photo-1624823183489-4b68e775165d?q=80&w=1974&auto=format&fit=crop",
        category: "Street Shape"
    },
    {
        id: 4,
        name: "Graffiti Pro",
        price: 1200,
        status: "Available",
        image: "https://images.unsplash.com/photo-1547619292-240402b5ae5d?q=80&w=1974&auto=format&fit=crop",
        category: "Pro Model"
    },
];

const Shop = () => {
    const [filter, setFilter] = useState("All");

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300 pt-20 px-6">

            {/* HEADER SECTION */}
            <div className="text-center mb-12">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl mb-4 text-orange-500"
                    style={{ fontFamily: '"Permanent Marker", cursive' }}
                >
                    THE STASH
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 dark:text-gray-400"
                >
                    Fresh drops every Friday. Once they're gone, they're gone.
                </motion.p>
            </div>

            {/* FILTERS */}
            <div className="flex justify-center gap-4 mb-12">
                {["All", "Available", "Sold Out"].map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === tag
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-neutral-800 dark:text-gray-400 dark:hover:bg-neutral-700"
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* PRODUCT GRID */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-20"
            >
                <AnimatePresence>
                    {PRODUCTS.filter(item => filter === "All" || item.status === filter).map((product) => (
                        <motion.div
                            layout
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-white dark:bg-neutral-800 shadow-md rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-900/20 dark:hover:shadow-orange-900/20 transition-all duration-300 transform hover:-translate-y-2"
                        >

                            {/* PRODUCT IMAGE */}
                            <div className="h-64 overflow-hidden relative">
                                {product.status === "Sold Out" && (
                                    <div className="absolute inset-0 bg-white/70 dark:bg-black/70 flex items-center justify-center z-10">
                                        <span className="text-red-500 font-bold text-2xl -rotate-12 border-4 border-red-500 px-4 py-1" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                                            SOLD OUT
                                        </span>
                                    </div>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* PRODUCT DETAILS */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">{product.category}</p>
                                        <h3 className="text-2xl font-bold">{product.name}</h3>
                                    </div>
                                    <span className="text-xl font-light">₱{product.price}</span>
                                </div>

                                {/* STATUS BADGE */}
                                <div className="flex items-center gap-2 mt-4">
                                    <div className={`h-2 w-2 rounded-full ${product.status === "Available" ? "bg-green-500" :
                                        product.status === "Low Stock" ? "bg-yellow-500" : "bg-red-500"
                                        }`}></div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{product.status}</span>
                                </div>

                                {/* ACTION BUTTON */}
                                <button
                                    disabled={product.status === "Sold Out"}
                                    className={`w-full mt-6 py-3 font-bold rounded-lg transition-colors ${product.status === "Sold Out"
                                        ? "bg-gray-300 text-gray-500 dark:bg-neutral-700 dark:text-gray-500 cursor-not-allowed"
                                        : "bg-neutral-900 text-white hover:bg-orange-500 dark:bg-white dark:text-black dark:hover:bg-orange-500 dark:hover:text-white"
                                        }`}
                                >
                                    {product.status === "Sold Out" ? "RESTOCKING SOON" : "ADD TO CART"}
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

        </div>
    );
};

export default Shop;