
import React, { useState } from 'react';
import { CATEGORIES, PHOTOS } from '../constants';
import { Category } from '../types';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredPhotos = activeCategory === 'All' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Portfolio</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest font-bold transition-all pb-2 border-b-2 ${
                  activeCategory === cat ? 'text-amber-500 border-amber-500' : 'text-neutral-500 border-transparent hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden aspect-[4/5] bg-neutral-900 rounded-sm cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-amber-500 text-xs tracking-widest uppercase mb-2 font-bold">{photo.category}</span>
                <h3 className="text-xl font-serif text-white">{photo.title}</h3>
                <div className="mt-4 w-10 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
