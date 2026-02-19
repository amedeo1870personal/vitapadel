import { motion } from 'framer-motion';
import { ShoppingBag, Star, ShieldCheck, Zap } from 'lucide-react';

const AccessoriesPage = () => {
    const galleryItems = [
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-07.jpeg", type: "image" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-08.jpeg", type: "image" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-09.jpeg", type: "image" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-10.jpeg", type: "image" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-13.jpeg", type: "image" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-01.mp4", type: "video" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-02.mp4", type: "video" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-03.mp4", type: "video" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-04.mp4", type: "video" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-05.mp4", type: "video" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-06.mp4", type: "video" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-11.mp4", type: "video" },
        { src: "/assets/accessori/palline/vitapadel-palline-da-padel-15.mp4", type: "video" },
    ];

    return (
        <section className="bg-charcoal min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter"
                    >
                        Palline Premium Padel <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
                            Gialle e Fucsia
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-8"
                    >
                        Vendita per circoli e personalizzazione
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                    >
                        Scopri la nostra selezione di palline premium per il Padel, disponibili nelle iconiche colorazioni Giallo e Fucsia.
                        Progettate per le esigenze dei circoli sportivi più prestigiosi, le nostre palline offrono una performance di rimbalzo costante
                        e una durata superiore ai record del settore. Grazie al nostro servizio esclusivo, puoi
                        <strong className="text-white"> personalizzare il prodotto con il marchio del tuo club</strong>, garantendo un'immagine coordinata e professionale in ogni match.
                    </motion.p>
                </div>

                {/* Content grid - Enhanced Sport Style */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        { icon: Zap, title: "Performance", desc: "Rimbalzo omogeneo e velocità controllata per un gioco di alto livello.", color: "from-yellow-400 to-orange-500", glow: "shadow-yellow-500/20" },
                        { icon: ShieldCheck, title: "Durata", desc: "Feltro di alta qualità ultra-resistente all'attrito e all'umidità.", color: "from-pink-500 to-purple-600", glow: "shadow-pink-500/20" },
                        { icon: Star, title: "Custom", desc: "Logo del tuo club stampato direttamente sulle palline e sui tubi.", color: "from-blue-400 to-cyan-500", glow: "shadow-blue-500/20" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            whileHover={{ scale: 1.02, rotate: -1 }}
                            className="relative p-10 group cursor-default"
                        >
                            {/* Animated Background Skew */}
                            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl -skew-x-6 group-hover:skew-x-0 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20" />

                            {/* Decorative Background Number */}
                            <span className="absolute bottom-4 right-8 text-8xl font-display font-black text-white/[0.03] italic select-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
                                0{idx + 1}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] ${item.glow} shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="w-full h-full bg-charcoal rounded-[15px] flex items-center justify-center">
                                        <item.icon className="text-white w-8 h-8" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-tighter italic flex items-center gap-3">
                                    <span className={`w-1 h-6 bg-gradient-to-b ${item.color} rounded-full`} />
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-base leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className={`absolute top-0 right-12 w-12 h-1 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-transform duration-500`} />
                        </motion.div>
                    ))}
                </div>

                {/* Multi-column Gallery */}
                <div className="columns-1 md:columns-2 lg:columns-4 gap-4 px-4">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 4) * 0.1 }}
                            className="mb-4 relative group overflow-hidden rounded-2xl border border-white/10"
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`Pallina Padel ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            )}
                            {/* Image Numbering Overlay */}
                            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/70 tracking-widest pointer-events-none">
                                {(idx + 1).toString().padStart(2, '0')}
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block p-10 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md max-w-4xl shadow-2xl"
                    >
                        <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase">
                            Fai brillare il tuo Club
                        </h3>
                        <p className="text-gray-400 mb-8 text-lg">
                            Contattaci oggi stesso per ricevere un listino prezzi riservato ai circoli sportivi e scoprire le opzioni di personalizzazione.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contatti" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold text-charcoal rounded-full font-bold hover:bg-yellow-500 transition-all uppercase tracking-widest text-sm shadow-xl shadow-gold/20">
                                <ShoppingBag className="w-5 h-5" /> Richiedi Preventivo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AccessoriesPage;
