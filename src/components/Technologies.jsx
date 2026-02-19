import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TechCard = ({ title, description, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-padel-blue/50 transition-all duration-300"
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

const Technologies = () => {
    const technologies = [
        {
            title: "Coperture in Alluminio",
            description: "Strutture in alluminio aeronautico 6061-T6, garantite contro la corrosione e progettate per durare decenni.",
            image: "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-01.jpg"
        },
        {
            title: "Acciaio e Legno",
            description: "Solidità architettonica. Un mix perfetto tra la forza dell'acciaio e l'eleganza estetica del legno lamellare.",
            image: "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-09.jpg"
        },
        {
            title: "Coperture Telescopiche",
            description: "Versatilità totale. Una struttura completamente apribile per adattarsi a ogni stagione e condizione climatica.",
            image: "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-11.png"
        }
    ];

    return (
        <section className="py-24 bg-charcoal relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter"
                    >
                        Coperture <span className="text-padel-blue">Evolute</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-8"
                    >
                        Ingegneria e Protezione
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Soluzioni innovative progettate per resistere a ogni condizione climatica, garantendo massima luminosità e comfort 365 giorni l'anno.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {technologies.map((tech, index) => (
                        <TechCard key={index} {...tech} delay={index * 0.1} />
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/coperture" className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-padel-blue/30 text-white rounded-full font-bold hover:bg-padel-blue/10 hover:border-padel-blue transition-all uppercase tracking-widest text-sm group/btn">
                        Guarda Galleria coperture padel <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
