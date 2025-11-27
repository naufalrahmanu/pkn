"use client";

import { motion } from "framer-motion";
import { MessageCircle, Hammer, HeartHandshake, FileCheck } from "lucide-react";

const SOLUTIONS = [
    {
        title: "Dialog & Rekonsiliasi Berkelanjutan",
        description: "Membangun ruang dialog yang jujur antara pemerintah, tokoh adat, gereja, perempuan Papua, dan generasi muda untuk memulihkan kepercayaan dan menyelesaikan konflik secara damai.",
        icon: MessageCircle,
        gradient: "from-blue-500/10 to-blue-500/5",
        border: "border-blue-200",
        iconColor: "text-blue-600",
    },
    {
        title: "Pembangunan Inklusif & Berkeadilan",
        description: "Pemerataan akses pendidikan, kesehatan, infrastruktur, dan pemberdayaan ekonomi agar masyarakat Papua memperoleh manfaat langsung dari kekayaan alamnya sendiri.",
        icon: Hammer,
        gradient: "from-amber-500/10 to-amber-500/5",
        border: "border-amber-200",
        iconColor: "text-amber-600",
    },
    {
        title: "Pendekatan Keamanan Humanis",
        description: "Mengutamakan perlindungan warga sipil dan mengurangi pendekatan militeristik. Mengedepankan keamanan berbasis kesejahteraan dan penghormatan hak asasi manusia.",
        icon: HeartHandshake,
        gradient: "from-emerald-500/10 to-emerald-500/5",
        border: "border-emerald-200",
        iconColor: "text-emerald-600",
    },
    {
        title: "Penguatan Otonomi Khusus yang Transparan",
        description: "Optimalisasi dana Otsus secara akuntabel dan memperkuat peran pemimpin lokal dalam pengambilan keputusan untuk memastikan pembangunan sesuai kebutuhan masyarakat Papua.",
        icon: FileCheck,
        gradient: "from-purple-500/10 to-purple-500/5",
        border: "border-purple-200",
        iconColor: "text-purple-600",
    },
];

export default function Solutions() {
    return (
        <section id="solutions" className="py-16 md:py-32 px-4 md:px-6 bg-muted/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-primary"
                    >
                        Solusi untuk Memperkuat Integrasi Nasional
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1 w-20 bg-secondary mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {SOLUTIONS.map((sol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl border ${sol.border} bg-gradient-to-br ${sol.gradient} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className="flex items-start gap-6">
                                <div className={`p-3 rounded-xl bg-white shadow-sm ${sol.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                    <sol.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {sol.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {sol.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
