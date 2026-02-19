import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = ({ title, subtitle, description, images, onImageClick }) => (
    <div className="mb-24">
        <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 uppercase tracking-tight">
                {title}
            </h3>
            <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">
                {subtitle}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl border-l border-gold/30 pl-6">
                {description}
            </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, index) => {
                const isVideo = src.endsWith('.mp4') || src.endsWith('.mov');
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => onImageClick(src)}
                        className="relative group overflow-hidden rounded-xl border border-white/10 cursor-pointer"
                    >
                        {isVideo ? (
                            <video
                                src={src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                        ) : (
                            <img
                                src={src}
                                alt={`${title} - ${index + 1} `}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                        )}
                        {/* Image Numbering Overlay */}
                        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/70 tracking-widest pointer-events-none">
                            {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                );
            })}
        </div>
    </div>
);

const CoperturePage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [allImages, setAllImages] = useState([]);

    const categories = {
        alluminio: {
            title: "Strutture in Alluminio",
            subtitle: "Leggerezza e Durata Eterna",
            description: "Tendostrutture in lega di alluminio 6061-T6 (alluminio aeronautico). Il vantaggio principale è l'assenza totale di corrosione, garantendo una durata eccezionale. Personalizzabili in dimensioni e altezza, con teli PVC da 850g/m² per la massima resistenza.",
            images: [
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-01.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-03.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-08.mp4",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-05.mp4",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-06.mp4",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-04.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-09.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-10.mp4",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-11.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-13.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-15.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-17.jpeg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-22.mp4",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-21.mov",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-19.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-20.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-18.jpg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-23.mp4",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-24.jpeg",
                "/assets/coperture/alluminio/vitapadel-coperture-alluminio-da-padel-25.jpeg",
            ]
        },
        acciaio: {
            title: "Acciaio e Legno Lamellare",
            subtitle: "Solidità ed Eleganza Architettonica",
            description: "Design elegante e strutturalmente solido. Progettate per integrarsi perfettamente in circoli sportivi di alto livello, combinando la resistenza dell'acciaio al calore estetico del legno lamellare. Un connubio perfetto tra natura e tecnologia.",
            images: [
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-01.png",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-02.png",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-03.png",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-04.jpg",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-05.jpg",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-06.jpg",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-07.jpg",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-08.jpg",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-09.jpg",
                "/assets/coperture/acciaio/vitapadel-coperture-acciaio-da-padel-11.mp4",
            ]
        },
        telescopiche: {
            title: "Coperture Telescopiche",
            subtitle: "Versatilità Totale Stagionale",
            description: "La novità esclusiva che massimizza la versatilità del tuo campo. Una copertura completamente apribile che ti permette di godere del gioco all'aperto in estate e di una protezione totale in inverno. Il meglio di entrambi i mondi.",
            images: [
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-01.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-02.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-03.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-04.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-05.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-06.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-07.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-08.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-09.jpg",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-10.mp4",
                "/assets/coperture/telescopiche/vitapadel-coperture-telescopiche-da-padel-11.png",
            ]
        }
    };

    useEffect(() => {
        setAllImages([...categories.alluminio.images, ...categories.acciaio.images, ...categories.telescopiche.images]);
    }, []);

    const openLightbox = (src) => setSelectedImage(src);
    const closeLightbox = () => setSelectedImage(null);

    const currentIndex = selectedImage ? allImages.indexOf(selectedImage) : -1;

    const nextImage = useCallback(() => {
        if (currentIndex !== -1) {
            const nextIdx = (currentIndex + 1) % allImages.length;
            setSelectedImage(allImages[nextIdx]);
        }
    }, [currentIndex, allImages]);

    const prevImage = useCallback(() => {
        if (currentIndex !== -1) {
            const prevIdx = (currentIndex - 1 + allImages.length) % allImages.length;
            setSelectedImage(allImages[prevIdx]);
        }
    }, [currentIndex, allImages]);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, nextImage, prevImage]);

    // Prevent scroll
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    return (
        <section className="py-24 bg-charcoal relative">
            <div className="container mx-auto px-4">
                {/* Header Standardized Section */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tighter"
                    >
                        Coperture <span className="text-padel-blue">Evolute</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-8"
                    >
                        Ingegneria e Protezione
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl"
                    >
                        Soluzioni innovative progettate per resistere a ogni condizione climatica, garantendo massima luminosità e comfort 365 giorni l'anno.
                    </motion.p>
                </div>

                {/* Galleries for each category */}
                <GallerySection
                    {...categories.alluminio}
                    onImageClick={openLightbox}
                />

                <GallerySection
                    {...categories.acciaio}
                    onImageClick={openLightbox}
                />

                <GallerySection
                    {...categories.telescopiche}
                    onImageClick={openLightbox}
                />
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
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
                            key={selectedImage}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full flex items-center justify-center pointer-events-none px-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedImage.endsWith('.mp4') || selectedImage.endsWith('.mov') ? (
                                <video
                                    src={selectedImage}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10 pointer-events-auto"
                                />
                            ) : (
                                <img
                                    src={selectedImage}
                                    alt="Full Screen"
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-padel-blue/10 border border-white/10 pointer-events-auto"
                                />
                            )}
                        </motion.div>

                        <button
                            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 font-display text-sm uppercase tracking-widest">
                            {currentIndex + 1} / {allImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CoperturePage;
