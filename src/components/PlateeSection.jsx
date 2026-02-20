import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Drill } from 'lucide-react';

const PlateeSection = () => {
    return (
        <section className="py-24 bg-charcoal relative border-t border-white/5 overflow-hidden">
            {/* Ambient Background Effect */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">

                    {/* Content Column */}
                    <div className="flex-1 text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Fondazioni Certificate
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter"
                        >
                            Platee e <span className="text-gold">Zavorre modulari</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl lg:mx-0 text-left"
                        >
                            Dalla platea fissa al sistema modulare: soluzioni evolute per costruire dove gli altri si fermano. Sfrutta l'efficienza di strutture mobili e rimovibili senza i vincoli del cemento tradizionale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to="/platee-zavorre"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal rounded-full font-bold uppercase tracking-widest text-sm hover:bg-yellow-500 transition-all shadow-lg shadow-gold/10"
                            >
                                Scopri le Soluzioni <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Column - Dynamic Presentation */}
                    <motion.div
                        className="flex-1 w-full relative"
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-[4/3]">
                            <img
                                src="/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-06.png"
                                alt="Platee e Zavorre Modulari"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay tag */}
                            <div className="absolute top-6 right-6 bg-charcoal/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hidden md:flex items-center gap-2">
                                <Drill className="text-gold w-4 h-4" />
                                <span className="text-white font-bold text-[10px] uppercase tracking-widest">Installazione Rapida</span>
                            </div>
                        </div>

                        {/* Decorative floating elements for "dynamic" feel */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-padel-blue/20 blur-[60px] rounded-full z-0" />
                        <div className="absolute -top-12 -right-12 w-48 h-48 border border-gold/10 rounded-full z-0 pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default PlateeSection;
