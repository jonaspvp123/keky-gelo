
import React from 'react';
import { Snowflake } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-sky-500 p-1.5 rounded-lg">
              <Snowflake className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-brand font-extrabold tracking-tighter text-white">
              KEKY <span className="text-sky-400">GELO</span>
            </span>
          </div>

          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Keky Gelo Ind e Com Ltda EPP. Todos os direitos reservados.
          </p>

          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="https://kekygelo.com.br" className="hover:text-white transition-colors">kekygelo.com.br</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
