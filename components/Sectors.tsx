
import React from 'react';
import * as Icons from 'lucide-react';
import { SECTORS } from '../constants';

const Sectors: React.FC = () => {
  return (
    <section id="setores" className="py-24 relative overflow-hidden">
      {/* Decorações de fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-sky-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-brand font-bold mb-4">Atendemos Diversos <span className="text-sky-400">Segmentos</span></h2>
            <p className="text-slate-400">Seja você um comércio ou pessoa física organizando um evento, a Keky Gelo tem a solução ideal para seu negócio.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-3 text-sm font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Disponível para Parcerias Recorrentes
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector, index) => {
            const IconComponent = (Icons as any)[sector.icon];
            return (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:scale-110 transition-all duration-500">
                  <IconComponent className="text-sky-400 group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sector.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
