import { motion } from 'framer-motion';
import { Ruler, PencilLine, HardHat } from 'lucide-react';

const EngineeringSection = () => {
    const expertise = [
        { icon: Ruler, text: "Ingegneria Strutturale Avanzata" },
        { icon: PencilLine, text: "Architettura Sportiva d'Elite" },
        { icon: HardHat, text: "Project Management Certificato" }
    ];

    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -left-20 top-1/2 w-40 h-80 bg-gold/10 -skew-x-12 blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side with Sport-Style Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative group"
                    >
                        {/* Skewed Background frame */}
                        <div className="absolute -inset-4 border-2 border-gold/20 rounded-[40px] -skew-x-2 group-hover:skew-x-0 transition-transform duration-700 pointer-events-none" />

                        <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                            <img
                                src="/assets/team-ing.jpg"
                                alt="Team Ingegneria Vitapadel™"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                            />
                            {/* Technical Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                                    <p className="text-white font-display font-black italic uppercase tracking-widest text-lg">
                                        Team Tecnico Specializzato
                                    </p>
                                    <p className="text-gold text-xs uppercase tracking-[0.2em] font-bold">Ingegneria & Architettura</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4"
                        >
                            Dall'Idea al Record
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-bold text-white mb-8 uppercase tracking-tighter italic leading-[0.9]"
                        >
                            Visione <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">Ingegneristica</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 mb-10"
                        >
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                                Il nostro team comprende <span className="text-white font-bold">ingegneri strutturisti e architetti specialisti</span> in impianti sportivi di ultima generazione.
                            </p>
                            <p className="text-gray-400 text-base md:text-lg italic border-l-2 border-gold/40 pl-6">
                                Non ci limitiamo a costruire campi: progettiamo il cuore pulsante del tuo business. Trasformiamo la complessità tecnica in un'eccellenza architettonica capace di attrarre giocatori e valorizzare il tuo investimento.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="grid sm:grid-cols-1 gap-4"
                        >
                            {expertise.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-white font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background Text Overlay */}
            <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none -translate-y-12">
                <span className="text-[15rem] font-display font-black text-white uppercase italic whitespace-nowrap leading-none">
                    Engineering Excellence Engineering Excellence
                </span>
            </div>
        </section>
    );
};

export default EngineeringSection;
