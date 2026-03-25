
import React, { useState, useEffect } from 'react';
import { Menu, X, Snowflake } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-sky-500 p-2 rounded-lg group-hover:rotate-180 transition-transform duration-500">
            <Snowflake className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-brand font-extrabold tracking-tighter text-white">
            KEKY <span className="text-sky-400">GELO</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-semibold hover:text-sky-400 transition-colors">Início</a>
          <a href="#produtos" className="text-sm font-semibold hover:text-sky-400 transition-colors">Produtos</a>
          <a href="#setores" className="text-sm font-semibold hover:text-sky-400 transition-colors">Quem Atendemos</a>
          <a href="#contato" className="text-sm font-semibold hover:text-sky-400 transition-colors">Contato</a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
          >
            Pedir Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Início</a>
          <a href="#produtos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Produtos</a>
          <a href="#setores" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Quem Atendemos</a>
          <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Contato</a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white text-center py-4 rounded-xl font-bold shadow-lg"
          >
            Pedir no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
