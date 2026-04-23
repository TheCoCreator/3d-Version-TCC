
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image?: string;
  stars: number;
}

const TESTIMONIAL_DATA: Testimonial[] = [
  {
    id: 1,
    quote: "I’ve been carrying stress in my body for so long that I forgot what real calm felt like. During the session something shifted. It wasn’t fake calm. It was real. And that night I slept for the first time in a long time.",
    author: "Robin H.",
    role: "Health Care",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200",
    stars: 5
  },
  {
    id: 2,
    quote: "I felt calm for the first time in months. I actually slept through the night after the very first session. It's an anchor I didn't know I was missing.",
    author: "Wendy",
    role: "HSA",
    stars: 5
  },
  {
    id: 3,
    quote: "My shoulders dropped and my chest loosened. I felt lighter. It's hard to put into words how much this hour matters to me now.",
    author: "Angela",
    role: "CCA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    stars: 5
  },
  {
    id: 4,
    quote: "It was the first time in months my body wasn’t on high alert. No talking, no rehashing calls—just pure, much-needed reset.",
    author: "S. K.",
    role: "Continuing Care Nurse",
    stars: 5
  },
  {
    id: 5,
    quote: "As a paramedic, my 'on' switch is always stuck. Tim's sessions are the only thing that consistently helps me switch back to 'civilian' mode before I walk through my front door.",
    author: "Mark T.",
    role: "Paramedic",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    stars: 5
  }
];

export const TestimonialsSection: React.FC = () => {
  const fallbackAvatar = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200";

  return (
    <section className="w-full bg-white py-32 px-6 relative overflow-hidden">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amy-gold/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
            <p className="text-amy-orange font-black uppercase tracking-[0.3em] text-[10px] mb-6">Real-World Impact</p>
            <h2 className="text-4xl md:text-7xl font-black text-amy-navy tracking-tighter leading-none mb-8">
                From the <span className="text-amy-gold italic font-serif">Frontline.</span>
            </h2>
            <div className="w-20 h-1.5 bg-amy-gold/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {TESTIMONIAL_DATA.map((t) => (
                <div 
                  key={t.id} 
                  className={`bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-amy transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${t.id % 2 === 0 ? 'lg:translate-y-8' : ''}`}
                >
                    <div className="flex gap-1 mb-8">
                        {[...Array(t.stars)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amy-gold fill-amy-gold" />
                        ))}
                    </div>
                    
                    <p className="text-xl text-slate-700 italic mb-10 leading-relaxed font-serif flex-grow">
                        “{t.quote}”
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200/50">
                        {t.image ? (
                            <img 
                                src={t.image} 
                                alt={t.author} 
                                className="w-14 h-14 rounded-2xl object-cover border-4 border-white shadow-sm rotate-[-3deg]"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    if (target.src !== fallbackAvatar) {
                                        target.src = fallbackAvatar;
                                    }
                                }}
                            />
                        ) : (
                            <div className="w-14 h-14 bg-amy-navy rounded-2xl text-white flex items-center justify-center font-black text-lg shadow-sm rotate-[-3deg]">
                                {t.author.charAt(0)}
                            </div>
                        )}
                        <div>
                            <p className="font-black text-amy-navy uppercase tracking-widest text-xs">
                                {t.author}
                            </p>
                            <p className="text-amy-orange font-bold text-[10px] uppercase tracking-wider mt-0.5">
                                {t.role}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Closing Sentiment */}
        <div className="mt-32 text-center">
            <p className="font-script text-4xl text-amy-gold rotate-[-2deg]">
                Their shoulders dropped. Yours can too.
            </p>
        </div>
      </div>
    </section>
  );
};
