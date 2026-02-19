import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src="/assets/logo-completo.png" alt="Vitapadel™ Logo" className="h-10 md:h-12 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Campi', path: '/campi' },
                        { name: 'Coperture', path: '/coperture' },
                        { name: 'Platee e Zavorre', path: '/platee-zavorre' },
                        { name: 'Accessori', path: '/accessori' },
                        { name: 'Chi Siamo', path: '/chi-siamo' },
                        { name: 'Contatti', path: '/contatti' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-white hover:text-padel-blue transition-colors font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-charcoal border-b border-white/10">
                    <nav className="flex flex-col p-4 space-y-4">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Campi', path: '/campi' },
                            { name: 'Coperture', path: '/coperture' },
                            { name: 'Platee e Zavorre', path: '/platee-zavorre' },
                            { name: 'Accessori', path: '/accessori' },
                            { name: 'Chi Siamo', path: '/chi-siamo' },
                            { name: 'Contatti', path: '/contatti' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-white hover:text-padel-blue block"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div>
                <div className="mb-6">
                    <img src="/assets/logo-completo.png" alt="Vitapadel™ Logo" className="h-12 md:h-14 w-auto" />
                </div>
                <div className="text-gray-400 text-sm space-y-1">
                    <p className="font-bold text-white mb-2">Vitapadel ™ è un marchio di Earth's Dreams SRL</p>
                    <p>Earth's Dreams SRL</p>
                    <p>P.IVA RO38752272</p>
                    <p>Stradela Carabus 15, 700275</p>
                    <p>Iasi, Romania</p>
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-4">Prodotti</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><Link to="/campi" className="hover:text-gold">Campi da Padel</Link></li>
                    <li><Link to="/coperture" className="hover:text-gold">Coperture</Link></li>
                    <li><Link to="/platee-zavorre" className="hover:text-gold">Platee e Zavorre</Link></li>
                    <li><Link to="/accessori" className="hover:text-gold">Accessori</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Contatti</h4>
                <ul className="space-y-2 text-gray-400">
                    <li>info@vitapadel.com</li>
                    <li>Tel: +39 320 376 1184</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Social</h4>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/vitapadel.andreazullo" target="_blank" rel="noopener noreferrer" className="hover:text-padel-blue transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/vitapadel.andreazullo" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                        <Instagram size={24} />
                    </a>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Vitapadel™. All rights reserved.</p>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
        </div>
    </footer>
);

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}
