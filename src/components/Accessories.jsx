import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Accessories = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-charcoal to-gray-900 relative border-t border-white/5">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-16">

                <div className="flex-1 w-full order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full" />
                        <img
                            src="/assets/palline-premium.png"
                            alt="Accessori Premium Padel"
                            className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:rotate-3 transition-transform duration-700"
                            style={{ clipPath: 'inset(0 0 2px 0)' }}
                        />
                    </motion.div>
                </div>

                <div className="flex-1 text-left order-1 md:order-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tighter"
                    >
                        Accessori <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Premium</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-8"
                    >
                        Per il Tuo Circolo
                    </motion.p>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                        Forniture professionali progettate per garantire la massima performance e durata.
                        Possibilità di <strong className="text-white">personalizzazione con il marchio del tuo club</strong> per un tocco di esclusività unico.
                    </p>
                    <Link to="/accessori" className="inline-block px-8 py-4 bg-gold text-charcoal rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-gold/20 uppercase tracking-wide">
                        scopri i nostri accessori
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Accessories;
