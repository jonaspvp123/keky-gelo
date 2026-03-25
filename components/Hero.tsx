
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Snowflake, MapPin } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),_transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.1),_transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
            <Snowflake className="text-sky-400 w-4 h-4 animate-spin-slow" />
            <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em]">Crystal Clear Premium Ice</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-brand font-extrabold leading-[1.05] mb-8 tracking-tighter text-white">
            Puro. Cristalino.<br />
            <span className="text-sky-400">Essencial.</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
            A Keky Gelo entrega a máxima pureza em cada cubo. Água 100% filtrada para elevar o nível do seu negócio ou celebração em Araraquara.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={WHATSAPP_LINK}
              className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-[2rem] font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_rgba(14,165,233,0.3)] group"
            >
              Fazer Pedido
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 px-8 py-5 rounded-[2rem] border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <MapPin className="text-sky-400 w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide text-slate-300">Raio de 50km de Araraquara</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Single Main Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Main Premium Card */}
          <div className="relative group">
            {/* Subtle Cyan Glow behind the card */}
            <div className="absolute -inset-4 bg-sky-500/10 blur-[60px] rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative w-[340px] h-[440px] md:w-[500px] md:h-[600px] rounded-[64px] bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden p-3">
              <div className="w-full h-full rounded-[52px] overflow-hidden relative border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1544371404-516d259f9720?auto=format&fit=crop&q=90&w=1000" 
                  alt="Cubos de Gelo Premium" 
                  className="w-full h-full object-cover brightness-[1.15] contrast-[1.05] group-hover:scale-105 transition-transform duration-[3s] ease-out"
                />
                
                {/* Overlay gradients for glossiness */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/5"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                
                {/* Product label floating inside the card */}
                <div className="absolute bottom-10 left-10">
                   <div className="flex flex-col">
                      <span className="text-sky-400 text-xs font-black uppercase tracking-[0.3em] mb-1">Destaque</span>
                      <h3 className="text-3xl font-brand font-extrabold text-white ice-text-glow">Gelo em Cubos</h3>
                      <span className="text-slate-400 font-medium">Pacote de 5kg</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Subtle Floating Accessory (Glass Element) */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 -right-8 w-32 h-32 bg-sky-400/10 backdrop-blur-2xl border border-white/20 rounded-[32px] z-20 flex items-center justify-center shadow-2xl overflow-hidden"
            >
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white/10,_transparent)] opacity-50"></div>
               <Snowflake className="text-sky-300/40 w-12 h-12" />
            </motion.div>
          </div>
          
          {/* Depth creation shape */}
          <div className="absolute -z-10 w-[110%] h-[110%] bg-sky-900/5 blur-[120px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
