import React from 'react';

export const PromiseSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amy-lightBlue rounded-full -translate-y-1/2 translate-x-1/3 opacity-50"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="w-full md:w-1/2 relative">
             <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden shadow-lg rotate-[-2deg]">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 p-8 text-center bg-amy-navy/5">
                    [IMAGE: Person looking exhausted/stressed in uniform]
                </div>
             </div>
             {/* Text Overlay */}
             <div className="absolute -bottom-6 -right-6 bg-amy-navy text-white p-6 rounded shadow-xl max-w-xs">
                 <p className="font-serif text-xl italic">"I didn't know how tight I was until I finally let go."</p>
             </div>
        </div>

        <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-amy-navy mb-6 leading-tight">
                Exhausted & <br/> <span className="text-amy-orange">High Alert.</span>
            </h2>
            
            <p className="text-xl font-bold text-slate-800 mb-6">
                ↑↑ Words to describe the feeling of carrying other people's emergencies all day.
            </p>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed border-l-4 border-amy-gold pl-6">
                <p>Your body stays on alert long after the shift ends. Sleep doesn’t come easy.</p>
                <p>Your shoulders stay raised. Your jaw never fully unclenches.</p>
                <p>And after a while, it feels like this is just who you are now.</p>
            </div>
        </div>

      </div>
    </section>
  );
};