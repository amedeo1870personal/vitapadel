import { motion } from 'framer-motion';
import { Key, Ruler, ShieldCheck } from 'lucide-react';

const FeatureItem = ({ number, title, description, icon: Icon, delay, color, glow }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.02, rotate: -1 }}
        className="relative p-10 group cursor-default"
    >
        {/* Animated Background Skew */}
        <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl -skew-x-6 group-hover:skew-x-0 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20" />

        {/* Decorative Background Number */}
        <span className="absolute bottom-4 right-8 text-8xl font-display font-black text-white/[0.03] italic select-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
            {number}
        </span>

        {/* Content */}
        <div className="relative z-10">
            <div className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${color} p-[1px] ${glow} shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
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

const Features = () => {
    const data = [
        {
            number: "01",
            icon: Key,
            title: 'Soluzione "Chiavi in Mano"',
            description: "Dalla progettazione ingegneristica alla clubhouse, fino alle gradinate e agli spogliatoi. Siamo il tuo unico referente per eliminare lo stress.",
            color: "from-yellow-400 to-orange-500",
            glow: "shadow-yellow-500/20"
        },
        {
            number: "02",
            icon: Ruler,
            title: "Ingegneria da Record",
            description: "Creatori della tendostruttura più grande d'Italia (4.550 m²). Coperture innovative in acciaio o legno lamellare o alluminio progettate per durare.",
            color: "from-blue-400 to-cyan-500",
            glow: "shadow-blue-500/20"
        },
        {
            number: "03",
            icon: ShieldCheck,
            title: "Performance e Durata",
            description: "Utilizziamo solo materiali di primissima scelta. Campi progettati per un'esperienza di gioco superiore e alta redditività.",
            color: "from-padel-blue to-blue-600",
            glow: "shadow-padel-blue/20"
        }
    ];

    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-padel-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <FeatureItem key={index} {...item} delay={index * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
