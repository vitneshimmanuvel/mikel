
import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-[#0a0a0a] overflow-hidden">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 pt-32 md:pt-0 z-10">
        <div className="overflow-hidden">
          <h2 className="text-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-bold reveal-text">
            Based in London / Available Worldwide
          </h2>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-8xl font-serif italic font-light mb-8 leading-[1.1] reveal-text" style={{ animationDelay: '0.2s' }}>
            The Poetry of <br />
            <span className="not-italic font-bold">The Lens</span>
          </h1>
        </div>
        <p className="max-w-md text-neutral-500 text-sm md:text-base mb-12 leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Micheal Brain captures the raw elegance of human connection. From grand ceremonies to the quietest whispers of a candid moment.
        </p>
        <div className="flex flex-wrap gap-8 items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={() => onNavigate('gallery')}
            className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-white hover:text-gold transition-colors"
          >
            Explore Portfolio
            <span className="w-12 h-[1px] bg-neutral-700 group-hover:bg-gold transition-all group-hover:w-16"></span>
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-500 hover:text-white transition-colors"
          >
            Book a Consult
          </button>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="flex-1 relative h-[60vh] md:h-screen mt-12 md:mt-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1800" 
          alt="Cinematic Landscape" 
          className="w-full h-full object-cover opacity-80 animate-pulse-slow"
          style={{ animationDuration: '10s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent hidden md:block"></div>
        <div className="absolute bottom-10 left-10 md:left-20 text-[10px] uppercase tracking-[0.5em] text-white/40">
          Capture // 001 // Vol. 24
        </div>
      </div>
    </section>
  );
};

export default Hero;
