import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CampiPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const images = [
        "/assets/vitapadel-campi-da-padel-01.png",
        "/assets/vitapadel-campi-da-padel-02.png",
        "/assets/vitapadel-campi-da-padel-03.png",
        "/assets/campi/vitapadel-campi-da-padel-04.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-05.png",
        "/assets/campi/vitapadel-campi-da-padel-06.jpg",
        "/assets/campi/vitapadel-campi-da-padel-07.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-08.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-09.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-10.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-11.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-13.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-15.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-16.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-17.jpeg",
        "/assets/campi/vitapadel-campi-da-padel-18.jpeg",
    ];

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const nextImage = useCallback(() => {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const prevImage = useCallback(() => {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, nextImage, prevImage]);

    // Prevent scroll when lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedIndex]);

    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tighter"
                    >
                        I Nostri Campi <span className="text-gold">da Padel</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-8"
                    >
                        Tecnologia e Qualità
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Offriamo diverse soluzioni di campi da padel con strutture in acciaio zincato a caldo e verniciato.
                        Tutti i campi includono vetri temperati da 12mm, illuminazione LED da 200W e manto testurizzato Ultra Turf by VITAPADEL™.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => openLightbox(index)}
                            className="relative group overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Vita Padel Campo ${index + 1}`}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            {/* Image Numbering Overlay */}
                            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/70 tracking-widest pointer-events-none">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm px-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={closeLightbox}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <motion.div
                            key={selectedIndex}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full flex items-center justify-center pointer-events-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selectedIndex]}
                                alt="Full Screen"
                                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-gold/10 border border-white/10 pointer-events-auto"
                            />
                        </motion.div>

                        <button
                            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 font-display text-sm uppercase tracking-widest">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CampiPage;
