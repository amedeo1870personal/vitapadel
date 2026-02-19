import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Award, Users, ShieldCheck } from 'lucide-react';

const CardItem = ({ title, description, icon: Icon, delay, color, number }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.02, rotate: -1 }}
        className="relative p-10 group cursor-default h-full"
    >
        {/* Animated Background Skew */}
        <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl -skew-x-6 group-hover:skew-x-0 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20" />

        {/* Decorative Background Number */}
        <span className="absolute bottom-4 right-8 text-8xl font-display font-black text-white/[0.03] italic select-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
            {number}
        </span>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
            <div className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${color} p-[1px] shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full bg-charcoal rounded-[15px] flex items-center justify-center">
                    <Icon className="text-white w-8 h-8" />
                </div>
            </div>

            <h3 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-tighter italic flex items-center gap-3">
                <span className={`w-1 h-6 bg-gradient-to-b ${color} rounded-full`} />
                {title}
            </h3>

            <p className="text-gray-400 text-base leading-relaxed font-medium">
                {description}
            </p>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-0 right-12 w-12 h-1 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-transform duration-500`} />
    </motion.div>
);

const ChiSiamoPage = () => {
    const gradientText = "inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-fuchsia-600 bg-clip-text text-transparent px-2";

    return (
        <div className="bg-charcoal text-white pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-padel-blue/5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter italic mb-8">
                            Dalla Passione <span className={gradientText}>per lo Sport</span> alla Costruzione di Club Vincenti
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            La storia di Vitapadel™ è il racconto di una visione: trasformare l'amore per il gioco in eccellenza ingegneristica per i centri sportivi del futuro.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-black/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-8 italic">
                                La nostra <span className="text-gold">storia</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                                <p>
                                    Tutto ha avuto inizio da un profondo amore per lo sport, in particolare per il tennis e il padel, che ha unito i nostri fondatori in un progetto ambizioso: elevare gli standard delle strutture sportive moderne.
                                </p>
                                <p>
                                    Ci siamo specializzati nella progettazione e costruzione di campi da padel e coperture tecniche, portando l'innovazione tecnologica in un settore dove la qualità del dettaglio fa la differenza tra un semplice campo e uno spazio di eccellenza.
                                </p>
                                <p className="text-white font-medium italic">
                                    "Non costruiamo solo strutture, creiamo i presupposti per il successo del vostro Club."
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-4 bg-padel-blue/20 blur-3xl opacity-30 rounded-full" />
                            <div className="rounded-3xl shadow-2xl relative z-10 w-full h-[400px] overflow-hidden">
                                <img
                                    src="/assets/andrea-padel1.jpg"
                                    alt="Vitapadel™ Team in Action"
                                    className="w-full h-full object-cover object-[center_20%]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Spotlight */}
            <section className="py-20 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-block px-4 py-1 bg-white/5 backdrop-blur-md border border-gold/30 rounded-full text-gold text-sm font-bold tracking-widest uppercase mb-6">
                                Il Nostro Founder
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-8 italic">
                                Andrea <span className={gradientText}>Zullo</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                                <p>
                                    Andrea Zullo incarna perfettamente lo spirito di Vitapadel™. Giocatore di tennis di lungo corso, vincitore di alcuni tornei italiani, sia di tennis che di padel, ha trasferito la sua esperienza agonistica e la sua dedizione nel mondo del padel.
                                </p>
                                <p>
                                    Oggi, come istruttore di Padel certificato dalla federazione italiana FITP, Andrea conosce ogni sfumatura di ciò che serve a un giocatore per dare il meglio: rimbalzo perfetto, sicurezza strutturale e comfort ambientale.
                                </p>
                                <p>
                                    Questa comprensione profonda del mondo sportivo, vissuta in prima persona sul campo, è il valore aggiunto che offriamo ai nostri clienti. Portiamo una visione tecnica unica in ogni progetto di design e costruzione.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-4 bg-gold/20 blur-3xl opacity-30 rounded-full" />
                            <img
                                src="/assets/andrea-padel2.jpg"
                                alt="Andrea Zullo - Founder Vitapadel™"
                                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square"
                            />
                            <div className="absolute bottom-8 left-8 bg-charcoal/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl z-20 max-w-xs">
                                <p className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Competenza sul campo</p>
                                <p className="text-sm font-light">"Solo chi ha vissuto la tensione del match sa cosa serve a un centro sportivo per eccellere."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Dream */}
            <section className="py-20 bg-black/50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        <CardItem
                            number="01"
                            icon={Target}
                            title="La nostra Missione"
                            description="Innovare costantemente per offrire soluzioni 'chiavi in mano' che fondono design italiano e robustezza strutturale, trasformando ogni investimento sportivo in un successo duraturo."
                            color="from-yellow-400 to-fuchsia-600"
                            delay={0.1}
                        />
                        <CardItem
                            number="02"
                            icon={Eye}
                            title="La nostra Visione"
                            description="Diventare il punto di riferimento globale per la costruzione di Club d'eccellenza, dove l'esperienza sportiva è al centro di ogni scelta architettonica e tecnologica."
                            color="from-fuchsia-500 to-purple-600"
                            delay={0.2}
                        />
                        <CardItem
                            number="03"
                            icon={Rocket}
                            title="Il nostro Sogno"
                            description="Creare una comunità di atleti e investitori uniti dalla qualità degli spazi, dove ogni partita giocata in una nostra struttura sia un'emozione indimenticabile."
                            color="from-gold via-yellow-400 to-orange-500"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-gold relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-black/5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-8 italic text-charcoal">
                            Oltre la costruzione, <span className="underline decoration-charcoal underline-offset-8">Partnership pura</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-charcoal/80 font-medium italic leading-relaxed mb-12">
                            "Sappiamo cosa significa giocare, allenarsi e competere. Per questo non progettiamo semplici strutture, ma veri spazi di eccellenza per massimizzare il vostro ritorno sull'investimento."
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center group">
                                <Award className="w-10 h-10 mb-4 text-charcoal group-hover:scale-110 transition-transform" />
                                <p className="font-bold uppercase text-sm tracking-widest text-charcoal">Qualità Premium</p>
                            </div>
                            <div className="flex flex-col items-center group">
                                <Users className="w-10 h-10 mb-4 text-charcoal group-hover:scale-110 transition-transform" />
                                <p className="font-bold uppercase text-sm tracking-widest text-charcoal">Focus umano</p>
                            </div>
                            <div className="flex flex-col items-center group">
                                <ShieldCheck className="w-10 h-10 mb-4 text-charcoal group-hover:scale-110 transition-transform" />
                                <p className="font-bold uppercase text-sm tracking-widest text-charcoal">Affidabilità Certificata</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChiSiamoPage;
