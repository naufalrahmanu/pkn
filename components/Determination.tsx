"use client";

import { motion } from "framer-motion";
import { History, Users, TrendingUp, ShieldAlert } from "lucide-react";

const FACTORS = [
    {
        title: "Faktor Historis",
        description: "Proses Pepera 1969 dinilai tidak demokratis sehingga menimbulkan ketidakpercayaan.",
        icon: History,
        color: "bg-blue-100 text-blue-700",
    },
    {
        title: "Faktor Sosiologis",
        description: "Identitas Melanesia, diskriminasi, dan rasa keterasingan melemahkan integrasi sosial.",
        icon: Users,
        color: "bg-amber-100 text-amber-700",
    },
    {
        title: "Faktor Ekonomi",
        description: "SDA dikuasai pihak luar, sementara masyarakat lokal tetap miskin → rasa ketidakadilan.",
        icon: TrendingUp,
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        title: "Faktor Politik & Keamanan",
        description: "Konflik separatis dan pendekatan represif menciptakan trauma dan rendahnya kepercayaan.",
        icon: ShieldAlert,
        color: "bg-red-100 text-red-700",
    },
];

export default function Determination() {
    return (
        <section id="factors" className="py-16 md:py-32 px-4 md:px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-primary"
                    >
                        Realitas di Balik Konflik
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Mengungkap faktor historis, sosiologis, ekonomi, dan politik & keamanan yang melatarbelakangi dinamika Papua.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FACTORS.map((factor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${factor.color}`}>
                                <factor.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{factor.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {factor.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
