
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 border-y border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full bg-sky-500/5 border border-sky-500/10">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
