
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, WHATSAPP_LINK } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-brand font-bold mb-4">Nossos <span className="text-sky-400">Produtos</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Gelo de alta durabilidade, cristalino e produzido com rigoroso controle de higiene.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 ${product.featured ? 'ring-2 ring-sky-500 shadow-2xl shadow-sky-500/10' : 'bg-slate-800/40 border border-slate-700'}`}
            >
              {product.featured && (
                <div className="absolute top-4 right-4 z-20 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  Mais Vendido
                </div>
              )}
              
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                    <span className="text-sky-400 font-bold text-lg">{product.weight}</span>
                  </div>
                  <div className="bg-sky-500/10 p-2 rounded-xl">
                    <CheckCircle2 className="text-sky-400 w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {product.description}
                </p>

                <a 
                  href={WHATSAPP_LINK}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${product.featured ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                >
                  <ShoppingCart size={18} />
                  Solicitar Cotação
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
