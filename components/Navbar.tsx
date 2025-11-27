"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Beranda", href: "#hero" },
        { name: "Pengenalan", href: "#intro" },
        { name: "Galeri", href: "#gallery" },
        { name: "Faktor", href: "#factors" },
        { name: "Solusi", href: "#solutions" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-foreground"
                        : "bg-transparent py-6 text-white"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 z-50 relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-bold font-serif text-xl">
                            P
                        </div>
                        <span className={`font-serif font-bold text-lg md:text-xl tracking-tight ${scrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}>
                            Papua Integrasi
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? "text-muted-foreground" : "text-white/90"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#aspiration"
                            className="px-6 py-2.5 rounded-full bg-secondary text-secondary-foreground font-bold text-sm hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg shadow-secondary/20"
                        >
                            Aspirasi
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 relative p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} className="text-foreground" />
                        ) : (
                            <Menu size={28} className={scrolled ? "text-foreground" : "text-white"} />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif font-medium text-foreground hover:text-secondary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#aspiration"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-bold text-xl hover:bg-secondary/90 transition-all shadow-xl"
                        >
                            Aspirasi
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
