
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Sectors from './components/Sectors';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Sectors />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 group flex items-center gap-2 overflow-hidden max-w-[60px] hover:max-w-[200px] duration-500"
      >
        <MessageCircle size={28} className="shrink-0" />
        <span className="font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">Pedir no WhatsApp</span>
      </a>

      {/* Subtle Background Particles/Grain */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/asfalt-dark.png')` }}></div>
    </div>
  );
};

export default App;
