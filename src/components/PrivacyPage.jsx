import { motion } from 'framer-motion';

const PrivacyPage = () => {
    return (
        <section className="bg-charcoal min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-padel-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-12 uppercase tracking-tighter"
                    >
                        Privacy <span className="text-gold">Policy</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-invert max-w-none space-y-8 text-gray-300"
                    >
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">1. Titolare del Trattamento</h2>
                            <p>
                                Il Titolare del trattamento è Earth's Dreams SRL, con sede legale in Stradela Carabus 15, 700275, Iasi, Romania.
                                Email di contatto: info@vitapadel.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">2. Tipi di Dati raccolti</h2>
                            <p>
                                Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono:
                                Dati di utilizzo, Strumenti di Tracciamento, nome, cognome, numero di telefono e email.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">3. Modalità e luogo del trattamento</h2>
                            <h3 className="text-xl font-semibold text-white mb-2">Modalità di trattamento</h3>
                            <p>
                                Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
                                Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
                            </p>
                            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Base giuridica del trattamento</h3>
                            <p>
                                Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti condizioni:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>l'Utente ha prestato il consenso per una o più finalità specifiche;</li>
                                <li>il trattamento è necessario all'esecuzione di un contratto con l'Utente e/o all'esecuzione di misure precontrattuali;</li>
                                <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">4. Finalità del Trattamento</h2>
                            <p>
                                I Dati dell'Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi, individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: Contattare l'Utente, Visualizzazione di contenuti da piattaforme esterne e Statistica.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">5. Diritti dell'Utente</h2>
                            <p>
                                Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l'Utente ha il diritto di:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>revocare il consenso in ogni momento;</li>
                                <li>opporsi al trattamento dei propri Dati;</li>
                                <li>accedere ai propri Dati;</li>
                                <li>verificare e chiedere la rettificazione;</li>
                                <li>ottenere la limitazione del trattamento;</li>
                                <li>ottenere la cancellazione o rimozione dei propri Dati Personali;</li>
                                <li>richiedere la portabilità dei dati.</li>
                            </ul>
                        </section>

                        <section className="pt-8 border-t border-white/10">
                            <p className="text-sm italic">
                                Ultima modifica: 19 Febbraio 2026
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPage;
