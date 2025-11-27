"use client";

import { motion } from "framer-motion";

export default function Aspiration() {
    return (
        <section id="aspiration" className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center text-center">
            {/* Background with Slow Zoom */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black z-0"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 10, ease: "linear" }}
            >
                {/* Dummy Image Placeholder */}
                <div className="absolute inset-0 bg-[url('/dummy-aspiration.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay" />
            </motion.div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            <div className="container relative z-20 px-4 md:px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight">
                        “Menguatkan Integrasi Nasional Melalui Dialog dan Keadilan bagi Papua”
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-base md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light">
                        Sebuah harapan untuk masa depan di mana setiap warga Papua merasa didengar,
                        dihargai, dan memiliki ruang setara dalam kehidupan berbangsa. Integrasi sejati
                        hanya dapat tercapai ketika kesejahteraan, kepercayaan, dan martabat masyarakat
                        Papua dipulihkan melalui keadilan yang berkelanjutan.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 flex flex-col items-center gap-8"
                >
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />

                    <a
                        href="https://padlet.com/rayendraogyanagata/suara-kalian-penting-apa-yang-ingin-kalian-sampaikan-8mv299nqj70s6xbh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-secondary-foreground bg-secondary hover:bg-secondary/90 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(197,160,89,0.5)] hover:shadow-[0_0_30px_rgba(197,160,89,0.7)]"
                    >
                        Berikan Aspirasi
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
