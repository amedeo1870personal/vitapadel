import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourtCard = ({ title, image, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300"
    >
        <div className="aspect-[4/3] overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-display font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
        </div>
    </motion.div>
);

const ProductsShowcase = () => {
    const courts = [
        {
            title: "Campo Standard",
            image: "/assets/vitapadel-campi-da-padel-01.png",
            description: "Struttura in acciaio zincato a caldo 80x80x3mm. La scelta ideale per club che cercano solidità e durata senza compromessi."
        },
        {
            title: "Campo Panoramico",
            image: "/assets/campi/vitapadel-campi-da-padel-22.jpeg",
            description: "Struttura rinforzata 120x120x3mm con vetri temperati da 12mm o stratificati (6+1,52PVB+6mm o 8+1,52PVB+8mm). Visibilità migliorata per un'esperienza di gioco superiore."
        },
        {
            title: "Campo Super Panoramico",
            image: "/assets/campi/vitapadel-campi-da-padel-19.jpeg",
            description: "Il top di gamma. Massima visibilità senza montanti posteriori, vetri temperati da 12mm o stratificati (6+1,52PVB+6mm o 8+1,52PVB+8mm) e design esclusivo per eventi e tornei."
        }
    ];

    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Background Text Accent */}
            <div className="absolute -top-10 -right-20 opacity-[0.02] select-none pointer-events-none hidden lg:block">
                <span className="text-[20rem] font-display font-black text-white uppercase italic leading-none">
                    COURTS
                </span>
            </div>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter"
                    >
                        I Nostri Campi <span className="text-gold">da Padel</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-8"
                    >
                        Tecnologia e Qualità
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Ingegneria da record e materiali premium. Scopri la nostra gamma di campi professionali progettati per durare nel tempo.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {courts.map((court, index) => (
                        <CourtCard key={index} {...court} delay={index * 0.1} />
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/campi" className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-gold/30 text-white rounded-full font-bold hover:bg-gold/10 hover:border-gold transition-all uppercase tracking-widest text-sm group/btn">
                        Guarda Galleria campi da padel <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsShowcase;
