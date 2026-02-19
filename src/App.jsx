import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import ProductsShowcase from './components/ProductsShowcase';
import Technologies from './components/Technologies';
import EngineeringSection from './components/EngineeringSection';
import Accessories from './components/Accessories';
import AccessoriesPage from './components/AccessoriesPage';
import Features from './components/Features';
import CampiPage from './components/CampiPage';
import CoperturePage from './components/CoperturePage';
import PlateeSection from './components/PlateeSection';
import PlateePage from './components/PlateePage';
import PrivacyPage from './components/PrivacyPage';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './components/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import ChiSiamoPage from './components/ChiSiamoPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <div className="relative h-screen">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/hero-structure.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/assets/hero-video-2.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/60 z-10" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                      Il tuo Padel Club <span className="text-gold">chiavi in mano</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 font-light">
                      Progettazione, produzione e installazione di campi e coperture da record.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Pillars (Chiavi in mano, Ingegneria, Performance) */}
              <Features />

              {/* Engineering Team */}
              <EngineeringSection />

              {/* Sections */}
              <div id="campi"><ProductsShowcase /></div>
              <div id="coperture"><Technologies /></div>
              <div id="platee"><PlateeSection /></div>
              <div id="accessori"><Accessories /></div>
            </>
          } />

          {/* Individual Pages Routes */}
          <Route path="/campi" element={<><div className="pt-20"><CampiPage /></div></>} />
          <Route path="/coperture" element={<><div className="pt-20"><CoperturePage /></div></>} />
          <Route path="/platee-zavorre" element={<><div className="pt-20"><PlateePage /></div></>} />
          <Route path="/accessori" element={<><div className="pt-20"><AccessoriesPage /></div></>} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
