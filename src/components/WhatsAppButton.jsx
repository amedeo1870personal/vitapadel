import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = "393203761184";
    const message = encodeURIComponent("Ciao VITAPADEL, vorrei ricevere maggiori informazioni.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 right-8 z-[100]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
            >
                {/* Ping animation effect */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-20 group-hover:opacity-40"></span>

                {/* Label that shows on hover */}
                <span className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl pointer-events-none border border-white/20 backdrop-blur-md">
                    Parla con noi su WhatsApp
                </span>

                {/* Main Button */}
                <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] transition-all duration-300 transform group-hover:scale-110 active:scale-95">
                    <MessageCircle className="w-8 h-8" />
                </div>
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
