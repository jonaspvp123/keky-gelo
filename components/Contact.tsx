
import React from 'react';
import { Phone, Clock, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-brand font-bold mb-8">Fale Conosco</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Dúvidas ou pedidos especiais? Entre em contato por um de nossos canais. Atendemos Araraquara e toda região num raio de 50km.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-3 rounded-xl">
                  <Clock className="text-sky-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Horário de Atendimento</h4>
                  <p className="text-slate-400 text-sm">Segunda a Sábado: 08h às 18h</p>
                  <p className="text-slate-400 text-sm">Domingos e Feriados: 08h às 12h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-3 rounded-xl">
                  <MapPin className="text-sky-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Localização</h4>
                  <p className="text-slate-400 text-sm">Araraquara, SP (Raio de 50km)</p>
                  <p className="text-slate-400 text-sm">Entrega rápida em toda a cidade</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-3 rounded-xl">
                  <Phone className="text-sky-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-slate-400 text-sm">(16) 99999-9999</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
               <a href="#" className="p-3 bg-slate-800 hover:bg-sky-500 transition-colors rounded-full text-white">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-3 bg-slate-800 hover:bg-sky-500 transition-colors rounded-full text-white">
                 <Facebook size={20} />
               </a>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Seu Nome</label>
                  <input type="text" placeholder="Ex: João Silva" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-sky-500 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Telefone</label>
                  <input type="text" placeholder="(16) 00000-0000" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-sky-500 focus:outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">O que você precisa?</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-sky-500 focus:outline-none appearance-none">
                  <option>Gelo em Cubos (5 kg)</option>
                  <option>Gelo em Cubos (2 kg)</option>
                  <option>Gelo Moído (12 kg)</option>
                  <option>Outros / Parcerias</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Mensagem</label>
                <textarea rows={4} placeholder="Conte-nos como podemos ajudar..." className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-sky-500 focus:outline-none"></textarea>
              </div>
              <a 
                href={WHATSAPP_LINK}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                Enviar via WhatsApp
                <Send size={18} />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
