import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import ScrollFloat from '../components/ui/ScrollFloat';
import twoWheelerImg from '../assets/Catalog/two-wheeler.png';
import threeWheelerImg from '../assets/Catalog/three-wheeler.png';

const CatalogSection = () => {
  const catalogs = [
    {
      id: '01',
      title: 'TWO WHEELER CATALOG',
      subtitle: 'Pulsar, Dominar, Platina & More',
      description: 'Access the complete Electronic Parts Catalog (EPC) for the entire Bajaj Two-Wheeler range.',
      image: twoWheelerImg,
      link: 'https://epc.gladminds.co/',
      tag: 'EPC ACCESS',
      accent: 'blue'
    },
    {
      id: '02',
      title: 'THREE WHEELER CATALOG',
      subtitle: 'RE, Maxima, Compact & Others',
      description: 'Detailed parts information and service manuals for all Bajaj Three-Wheeler commercial vehicles.',
      image: threeWheelerImg,
      link: 'https://drive.google.com/drive/folders/0B0CTYb43hP0_fi1OejMyVkpMTjJ3MjV3eEZMMGh1NG5zS0RISk1XTnZQVlhKWXhnMTd4VzA?resourcekey=0-tmpfAtCf_moyD-gKm8fLlQ',
      tag: 'DRIVE ACCESS',
      accent: 'orange'
    }
  ];

  return (
    <section id="catalog" className="min-h-screen bg-[#050608] py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <header className="max-w-7xl mx-auto mb-24 space-y-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Digital Assets</span>
        </div>
        
        <ScrollFloat 
          containerClassName="text-left"
          textClassName="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-none"
        >
          OUR CATALOG
        </ScrollFloat>
        
        <p className="text-white/40 text-lg sm:text-2xl font-medium max-w-2xl italic uppercase tracking-tight">
          Instant access to comprehensive parts data for the entire Bajaj range.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto relative z-10 w-full">
        {catalogs.map((item) => (
          <a 
            key={item.id} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col bg-[#0c0d10] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.5)] active:scale-[0.98]"
          >
            {/* Image Container with Parallax-like effect */}
            <div className="relative h-[300px] sm:h-[450px] overflow-hidden">
              <img 
                src={item.image} 
                alt={`${item.title} - Genuine Bajaj Bike Spares`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 px-6 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
                <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                  Open Link
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-10 sm:p-14 space-y-8">
              <div className="space-y-3">
                 <div className="flex items-center gap-2 mb-4">
                    {item.accent === 'blue' ? <Zap className="w-4 h-4 text-blue-500" /> : <ShieldCheck className="w-4 h-4 text-orange-500" />}
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${item.accent === 'blue' ? 'text-blue-500' : 'text-orange-500'}`}>
                      {item.tag}
                    </span>
                 </div>
                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none italic group-hover:text-blue-400 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-white/40 font-bold uppercase tracking-widest text-xs sm:text-sm">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-white/50 text-base sm:text-lg leading-relaxed font-medium">
                {item.description}
              </p>

              <div className="flex items-center gap-4 text-white font-black uppercase text-sm tracking-widest pt-4 group-hover:gap-6 transition-all duration-500">
                 Explore Catalog <ArrowRight className="w-5 h-5 text-blue-500" />
              </div>
            </div>

            {/* Background ID Number */}
            <div className="absolute bottom-4 right-8 text-[6rem] sm:text-[10rem] font-black text-white/[0.02] leading-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-700 italic">
              {item.id}
            </div>
          </a>
        ))}
      </div>

      {/* Decorative Spacer */}
      <div className="h-32"></div>
    </section>
  );
};

export default CatalogSection;
