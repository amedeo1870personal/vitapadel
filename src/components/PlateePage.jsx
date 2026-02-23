import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureBlock = ({ number, title, points, isReversed, image }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${isReversed ? 'md:flex-row-reverse' : ''}`}
    >
        <div className="flex-1 w-full">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-video">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                    <span className="text-8xl font-display font-bold text-white/5 absolute -top-16 -left-4">
                        {number}
                    </span>
                </div>
            </div>
        </div>

        <div className="flex-1 w-full relative z-10">
            <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold font-display font-bold text-xl border border-gold/20">
                    {number}
                </span>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">
                    {title}
                </h3>
            </div>

            <div className="space-y-6 pl-4 border-l border-gold/20 ml-6">
                {points.map((point, idx) => (
                    <div key={idx} className="relative">
                        <h4 className="font-bold text-gold text-lg mb-1 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            {point.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                            {point.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

const PlateePage = () => {
    const features = [
        {
            number: "01",
            title: 'Platea "Dual Function"',
            image: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-07.png",
            points: [
                {
                    title: "Massima Efficienza",
                    desc: "Un'unica struttura che funge sia da pavimentazione di gioco che da ancoraggio per le colonne della copertura."
                },
                {
                    title: "Risparmio Reale",
                    desc: "Elimina la necessità di costosi cordoli perimetrali, riducendo drasticamente i costi di installazione e velocizzando il cantiere."
                }
            ]
        },
        {
            number: "02",
            title: "Kit Zavorre Modulari",
            image: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-03.png",
            points: [
                {
                    title: "Zero Vincoli",
                    desc: "La soluzione ideale per aree con vincoli paesaggistici, archeologici o demaniali dove è vietato l'uso del cemento."
                },
                {
                    title: "Posa Non Invasiva",
                    desc: "Sistema semplicemente appoggiato al suolo, conforme alle normative più severe nelle zone protette."
                }
            ]
        },
        {
            number: "03",
            title: "Investimento Mobile",
            image: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-01.png",
            points: [
                {
                    title: "Rimovibile e Riutilizzabile",
                    desc: "A differenza delle platee monolitiche, i nostri kit possono essere smontati e trasportati facilmente in un nuovo sito."
                },
                {
                    title: "Eco-Sostenibile",
                    desc: "Evita demolizioni e costi di smaltimento in discarica, preservando il valore del tuo investimento nel tempo e rispettando l'ambiente."
                }
            ]
        }
    ];

    const galleryImages = [
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-01.png", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-02.png", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-03.png", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-04.png", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-05.png", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-06.png", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-07.png", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-08.mp4", type: "video" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-09.mp4", type: "video" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-10.jpg", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-11.jpg", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-13.jpg", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-15.jpg", type: "image" },
        { src: "/assets/platee-zavorre/vitapadel-platee-e-zavorre-da-padel-16.jpg", type: "image" },
    ];

    return (
        <section className="bg-charcoal min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-padel-blue/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-left max-w-4xl mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter"
                    >
                        Platee di Fondazione <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
                            Certificate Zavorre
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-white font-medium mb-8"
                    >
                        Soluzioni Evolute per Fondazioni Sportive
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block relative"
                    >
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl italic border-l-4 border-gold pl-6 py-2">
                            "Dalla platea fissa al sistema modulare: costruisci dove gli altri si fermano."
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {features.map((feat, index) => (
                        <FeatureBlock
                            key={index}
                            {...feat}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="mt-24">
                    <h3 className="text-2xl font-display font-bold text-white mb-8 uppercase tracking-widest text-center">
                        Gallery Realizzazioni
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-square rounded-xl overflow-hidden border border-white/10 group"
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
                                        alt={`Realizzazione ${idx + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                                {/* Image Numbering Overlay */}
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/70 tracking-widest pointer-events-none group-hover:opacity-100 transition-opacity">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block p-10 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md w-full max-w-4xl shadow-2xl"
                    >
                        <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase">
                            Basi Solide per il Tuo Investimento
                        </h3>
                        <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                            Dalle platee tradizionali ai sistemi di zavorre certificate, offriamo la fondazione perfetta per ogni esigenza normativa e di suolo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contatti" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold text-charcoal rounded-full font-bold hover:bg-yellow-500 transition-all uppercase tracking-widest text-sm shadow-xl shadow-gold/20">
                                <ShoppingBag className="w-5 h-5" /> Richiedi Informazioni Tecniche
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PlateePage;
