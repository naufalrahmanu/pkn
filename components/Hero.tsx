"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-primary text-primary-foreground flex items-center justify-center">
            {/* Background Dummy Div */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-black z-0" />

            {/* Optional: Overlay Pattern or Texture (Dummy) */}
            <div className="absolute inset-0 opacity-20 bg-[url('/dummy-pattern.png')] bg-cover bg-center z-0 mix-blend-overlay" />

            <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        Membaca Akar Konflik Papua dan Masa Depan Integrasi Bangsa
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-base md:text-xl lg:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed text-balance">
                        Memahami akar persoalan Papua hari ini untuk merumuskan arah kebijakan,
                        pembangunan, dan rekonsiliasi yang memperkuat integrasi Indonesia di masa depan.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-10"
                >
                    <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
