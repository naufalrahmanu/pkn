"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const SLIDES = [
    {
        title: "Pesona Alam Papua",
        description: "Surga tropis dengan laut biru jernih, pegunungan megah, dan panorama alam yang tak tertandingi.",
        color: "from-blue-900",
    },
    {
        title: "Keagungan Pakaian Adat",
        description: "Rok rumbia, koteka, dan hiasan kepala khas Papua menggambarkan identitas dan keunikan budaya setempat.",
        color: "from-amber-800",
    },
    {
        title: "Tanah Papua yang Kaya",
        description: "Dari emas hingga keanekaragaman hayati, Papua adalah wilayah dengan potensi sumber daya alam luar biasa.",
        color: "from-emerald-900",
    },
    {
        title: "Budaya yang Hidup dan Berwarna",
        description: "Tarian tradisional, seni ukir, dan ritual adat yang penuh makna mencerminkan kekayaan budaya Papua.",
        color: "from-purple-900",
    },
];

export default function HeadlineSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section id="gallery" className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-primary">
                    Keindahan & Kekayaan Papua
                </h2>

                <div className="relative max-w-6xl mx-auto group">
                    <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
                        <div className="flex">
                            {SLIDES.map((slide, index) => (
                                <div className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[500px]" key={index}>
                                    {/* Dummy Image Placeholder */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} to-black/80 z-0`} />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <span className="text-white/10 text-9xl font-bold uppercase tracking-widest select-none">
                                            Image {index + 1}
                                        </span>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <h3 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 font-serif">
                                                {slide.title}
                                            </h3>
                                            <p className="text-base md:text-xl text-gray-200 max-w-2xl">
                                                {slide.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                        onClick={scrollNext}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
}
