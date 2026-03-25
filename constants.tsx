
import React from 'react';
import { 
  Building2, 
  Store, 
  Utensils, 
  Music, 
  Wine, 
  Fuel, 
  ThermometerSnowflake, 
  Truck,
  ShieldCheck,
  Droplets
} from 'lucide-react';
import { Product, Sector } from './types';

export const WHATSAPP_NUMBER = '5516999999999'; // Example number
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+fazer+um+pedido+de+gelo.`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Gelo em Cubos',
    description: 'Produzido com água 100% filtrada, ideal para drinks e bebidas em geral.',
    weight: '2 kg',
    image: 'https://images.unsplash.com/photo-1551410224-699683e15636?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Gelo em Cubos',
    description: 'Nosso produto campeão de vendas. Perfeito para festas e grandes eventos.',
    weight: '5 kg',
    image: 'https://images.unsplash.com/photo-1551727041-5b347d65b633?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '3',
    name: 'Gelo Moído',
    description: 'Textura ideal para conservação de alimentos, concreteiras e grandes recipientes.',
    weight: '12 kg',
    image: 'https://images.unsplash.com/photo-1498654203975-e99571684df1?auto=format&fit=crop&q=80&w=800',
  },
];

export const SECTORS: Sector[] = [
  {
    title: 'Postos de Gasolina',
    description: 'Abastecimento rápido e constante para sua conveniência.',
    icon: 'Fuel',
  },
  {
    title: 'Distribuidoras',
    description: 'Parcerias sólidas para revenda em grande escala.',
    icon: 'Store',
  },
  {
    title: 'Restaurantes & Bares',
    description: 'Gelo cristalino que valoriza a apresentação dos seus drinks.',
    icon: 'Utensils',
  },
  {
    title: 'Concreteiras',
    description: 'Gelo moído para controle térmico em obras de engenharia.',
    icon: 'Building2',
  },
  {
    title: 'Eventos & Buffets',
    description: 'Suporte completo para festas de todos os tamanhos.',
    icon: 'Music',
  },
  {
    title: 'Panificadoras',
    description: 'Essencial para o controle de temperatura na panificação.',
    icon: 'Store',
  },
];

export const FEATURES = [
  {
    title: 'Água 100% Filtrada',
    description: 'Garantia de pureza e sabor inalterado nas suas bebidas.',
    icon: <Droplets className="w-6 h-6 text-sky-400" />,
  },
  {
    title: 'Entrega Ágil',
    description: 'Atendemos Araraquara e região (raio de 50km) com rapidez.',
    icon: <Truck className="w-6 h-6 text-sky-400" />,
  },
  {
    title: 'Padrão de Qualidade',
    description: 'Processos rigorosos de higiene e fabricação.',
    icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
  },
  {
    title: 'Sempre Fresco',
    description: 'Produção diária para garantir a melhor conservação.',
    icon: <ThermometerSnowflake className="w-6 h-6 text-sky-400" />,
  },
];
