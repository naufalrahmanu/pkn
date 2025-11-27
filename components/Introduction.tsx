"use client";

import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <section id="intro" className="py-20 md:py-32 px-4 md:px-6 bg-background">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-primary">
                        Integrasi Nasional di Tengah Keberagaman
                    </h2>
                    <h3 className="text-xl md:text-2xl text-secondary font-medium italic">
                        "Keberagaman Indonesia menjadi kekuatan sekaligus tantangan integrasi bangsa"
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prose prose-lg md:prose-xl mx-auto text-muted-foreground leading-relaxed text-justify"
                >
                    <p>
                        Indonesia adalah negara kepulauan yang memiliki ribuan pulau serta ratusan etnis,
                        bahasa, dan budaya. Keberagaman ini merupakan kekayaan besar, namun pada saat yang
                        sama menjadi tantangan dalam menjaga integrasi nasional. Tanpa persatuan yang kuat,
                        keragaman justru dapat memicu konflik dan mengancam keutuhan NKRI.
                    </p>
                    <p className="mt-6">
                        Papua menjadi salah satu wilayah yang paling mencerminkan dinamika tersebut—meski
                        kaya sumber daya alam, Papua masih menghadapi ketimpangan pembangunan, persoalan
                        sosial-budaya, dan isu politik yang kompleks. Situasi ini menjadikan Papua bukan
                        hanya persoalan daerah, tetapi juga ujian bagi kokohnya integrasi nasional Indonesia.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
