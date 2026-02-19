import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

const ContactPage = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        formData.append("access_key", "6c629d48-9c9a-44fd-988b-1c42fa7c268f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                e.target.reset();
            } else {
                console.log("Error", data);
                setStatus('error');
            }
        } catch (error) {
            console.log("Error", error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-charcoal text-white py-20 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-padel-blue/5 -skew-x-12 transform translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/5 skew-x-12 transform -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16">

                    {/* Contact Information */}
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-4 py-1 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-bold tracking-widest uppercase mb-6">
                                Contattaci
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 italic">
                                Scendi in <span className="text-padel-blue">campo</span> con noi
                            </h1>
                            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                                Hai un progetto in mente o desideri maggiori informazioni sui nostri campi e coperture? Il nostro team di ingegneri e tecnici è pronto ad assisterti.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-padel-blue/20 group-hover:border-padel-blue/30 transition-all duration-300">
                                        <Phone className="text-padel-blue w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Telefono</p>
                                        <p className="text-xl font-bold">+39 320 376 1184</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                                        <Mail className="text-gold w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-xl font-bold">info@vitapadel.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                        <MapPin className="text-white w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Sede Operativa</p>
                                        <p className="text-xl font-bold">Stradela Carabus 15, Iasi, Romania</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl relative"
                        >
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <CheckCircle className="w-20 h-20 text-padel-blue mx-auto mb-6" />
                                    <h3 className="text-3xl font-bold mb-4">Messaggio Inviato!</h3>
                                    <p className="text-gray-400">Grazie per averci contattato. Ti risponderemo entro 24 ore.</p>
                                    <button
                                        onClick={() => setStatus(null)}
                                        className="mt-8 text-padel-blue hover:text-white transition-colors underline decoration-2 underline-offset-8"
                                    >
                                        Invia un altro messaggio
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-400 ml-1">Nome</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Mario Rossi"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-padel-blue/50 focus:bg-white/10 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-400 ml-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="mario@email.it"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-padel-blue/50 focus:bg-white/10 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-400 ml-1">Oggetto</label>
                                        <input
                                            required
                                            type="text"
                                            name="subject"
                                            placeholder="Richiesta preventivo campi da padel"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-padel-blue/50 focus:bg-white/10 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-400 ml-1">Messaggio</label>
                                        <textarea
                                            required
                                            rows="5"
                                            name="message"
                                            placeholder="Scrivi qui i dettagli del tuo progetto..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-padel-blue/50 focus:bg-white/10 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={status === 'sending'}
                                        type="submit"
                                        className={`w-full group relative overflow-hidden bg-padel-blue text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 ${status === 'sending' ? 'opacity-70 cursor-wait' : 'hover:bg-white hover:text-padel-blue'}`}
                                    >
                                        <span className="relative z-10 uppercase tracking-widest">
                                            {status === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}
                                        </span>
                                        {status !== 'sending' && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center italic">
                                        Cliccando su invia dichiari di aver letto la Privacy Policy.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
