
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import InquiryForm from './components/InquiryForm';
import AIAssistant from './components/AIAssistant';
import { SERVICES, TESTIMONIALS, PHOTOS, PROCESS_STEPS } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        <div className="text-center px-6">
          <h2 className="text-gold font-serif italic text-3xl md:text-5xl animate-fade-in-up">
            "Capturing the light that lives within the shadows."
          </h2>
          <p className="text-neutral-600 text-[10px] uppercase tracking-[0.8em] mt-12 animate-fade-in font-bold" style={{ animationDelay: '1.5s' }}>
            MICHEAL BRAIN STUDIO
          </p>
          <div className="mt-8 h-[1px] w-0 bg-gold mx-auto animate-[grow_2.5s_ease-in-out_forwards]"></div>
        </div>
        <style>{`
          @keyframes grow { from { width: 0; } to { width: 300px; } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        `}</style>
      </div>
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <div className="animate-fade-in">
            <Hero onNavigate={setActivePage} />
            
            <section className="py-40 bg-[#050505]">
              <div className="container mx-auto px-6 text-center">
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">The Philosophy</span>
                <h2 className="text-4xl md:text-7xl font-serif italic text-white mb-12 leading-tight max-w-4xl mx-auto">
                  "Art is not what you see, but what you make others see."
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed font-light mb-12 max-w-2xl mx-auto">
                  Micheal Brain Photography is built on the belief that beauty is found in the unposed, the quiet, and the profound.
                </p>
                <button 
                  onClick={() => setActivePage('about')}
                  className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-white transition-all mb-12"
                >
                  Read My Bio
                </button>
              </div>
            </section>

            <section className="py-24 bg-neutral-950">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                  <div className="order-2 md:order-1">
                    <div className="relative group overflow-hidden rounded-sm shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full grayscale hover:grayscale-0 transition-all duration-1000" 
                        alt="Cinematic Perspective" 
                      />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold mb-6">Latest Narrative</h3>
                    <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 italic">The Silent Vow</h2>
                    <p className="text-neutral-500 mb-10 leading-relaxed font-light">
                      A visual essay on the intimacy of a Parisian dawn. This collection explores the contrast between historic grandeur and the fragility of a shared promise.
                    </p>
                    <button 
                      onClick={() => setActivePage('gallery')}
                      className="px-10 py-4 border border-gold text-gold text-[11px] uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all"
                    >
                      View the Essay
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'gallery':
        return <div className="pt-20 animate-fade-in"><Gallery /></div>;
      case 'about':
        return (
          <div className="pt-20 animate-fade-in bg-[#0a0a0a]">
            <section className="py-32">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-24">
                  <div className="flex-1 relative">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200" className="w-full grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm" alt="Micheal" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-5xl md:text-8xl font-serif font-light italic mb-10 text-white leading-tight">Micheal <br />Brain</h2>
                    <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light">
                      "My work is a dialogue with time. I am searching for the frame that captures not just the person, but the atmosphere that surrounds them."
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'services':
        return (
          <div className="pt-20 animate-fade-in bg-[#0a0a0a]">
            {/* Header */}
            <section className="py-32 border-b border-white/5">
              <div className="container mx-auto px-6 text-center">
                 <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-6 block">The Art of Bespoke</span>
                 <h1 className="text-6xl md:text-9xl font-serif font-light italic text-white mb-8">The Collections</h1>
                 <p className="text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
                   Carefully curated visual experiences designed for those who value heirloom quality and artistic integrity.
                 </p>
              </div>
            </section>

            {/* Interactive Service Grid - New Layout */}
            <section className="py-24">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {SERVICES.map((service, i) => (
                    <div 
                      key={i}
                      onMouseEnter={() => setHoveredService(i)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`relative aspect-[3/4] overflow-hidden group cursor-pointer transition-all duration-700 ${hoveredService !== null && hoveredService !== i ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'}`}
                    >
                      <img src={service.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={service.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                        <span className="text-gold font-serif italic text-2xl mb-2">0{i+1}</span>
                        <h3 className="text-white text-2xl font-serif mb-1">{service.title}</h3>
                        {/* Added starting price below the title */}
                        <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
                          Starting at {service.tiers[0].price}
                        </p>
                        <p className="text-white/60 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Tiers Section - Business Focus */}
            <section className="py-32 bg-[#050505]">
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                   <h2 className="text-4xl font-serif italic text-white mb-4">Investment Tiers</h2>
                   <div className="w-12 h-[1px] bg-gold mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {SERVICES[0].tiers.map((tier, i) => (
                    <div key={i} className="bg-neutral-900/50 p-12 border border-white/5 hover:border-gold/50 transition-all group">
                       <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4">{tier.name}</h4>
                       <div className="text-4xl font-serif text-white mb-8 italic">{tier.price}</div>
                       <ul className="space-y-4 mb-12">
                         {tier.features.map((f, idx) => (
                           <li key={idx} className="text-neutral-500 text-xs font-light flex items-center gap-3">
                             <span className="w-1 h-1 bg-gold rounded-full"></span>
                             {f}
                           </li>
                         ))}
                       </ul>
                       <button 
                        onClick={() => setActivePage('contact')}
                        className="w-full py-4 border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:bg-white group-hover:text-black transition-all"
                       >
                         Request Booking
                       </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* The Process Section - Interactive Flow */}
            <section className="py-40">
              <div className="container mx-auto px-6">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                   <div className="max-w-xl">
                      <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">The Workflow</span>
                      <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">A Dialogue <br />With Light</h2>
                   </div>
                   <p className="text-neutral-500 text-sm font-light max-w-xs mb-4">
                     From initial consult to final delivery, we ensure every step is handled with the utmost care and artistic precision.
                   </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 hidden lg:block"></div>
                   {PROCESS_STEPS.map((step, i) => (
                     <div key={i} className="relative pt-12">
                        <div className="absolute top-0 left-0 w-8 h-8 bg-neutral-900 border border-white/10 text-gold flex items-center justify-center text-[10px] font-bold -translate-y-1/2">
                          {step.step}
                        </div>
                        <h4 className="text-white font-serif italic text-2xl mb-6">{step.title}</h4>
                        <p className="text-neutral-500 text-sm font-light leading-relaxed">
                          {step.desc}
                        </p>
                     </div>
                   ))}
                 </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-[#050505] border-t border-white/5">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                  {TESTIMONIALS.map(t => (
                    <div key={t.id} className="text-center group">
                      <p className="text-xl font-serif italic text-neutral-300 leading-relaxed mb-10">"{t.content}"</p>
                      <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white mb-2">{t.name}</h4>
                      <p className="text-gold text-[9px] uppercase tracking-widest">{t.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      case 'contact':
        return <div className="pt-20 animate-fade-in"><InquiryForm /></div>;
      default:
        return <Hero onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-gold selection:text-white">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-md">
              <button onClick={() => setActivePage('home')} className="text-4xl font-serif italic text-white hover:text-gold transition-colors mb-8">
                Micheal Brain
              </button>
              <p className="text-neutral-500 font-light leading-relaxed mb-10">
                Crafting visual legacies for those who appreciate the poetry in the mundane.
              </p>
              <div className="flex gap-8">
                {['IG', 'BE', 'TW'].map(s => <a key={s} href="#" className="text-[10px] uppercase tracking-widest text-neutral-600 hover:text-gold font-bold">{s}</a>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <nav className="flex flex-col gap-4">
                <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Nav</h4>
                {['home', 'gallery', 'about', 'services', 'contact'].map(p => (
                  <button key={p} onClick={() => setActivePage(p)} className="text-neutral-500 hover:text-white text-xs uppercase tracking-widest text-left font-light">{p}</button>
                ))}
              </nav>
              <div>
                <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Newsletter</h4>
                <div className="flex border-b border-neutral-800 pb-2">
                   <input type="email" placeholder="Email" className="bg-transparent text-xs outline-none flex-1 font-light" />
                   <button className="text-gold uppercase text-[10px] font-bold">Join</button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold">&copy; 2024 Micheal Brain Photography.</p>
        </div>
      </footer>
      <AIAssistant />
    </div>
  );
};

export default App;
