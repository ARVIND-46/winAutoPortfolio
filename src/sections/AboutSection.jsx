import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { UserCheck, ShieldCheck, Trophy, ArrowRight, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const headingRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const coreValues = [
    {
      id: '01',
      title: 'Genuine Quality Assurance',
      subtitle: 'CORE VALUE 01',
      description: 'At Win Auto, we prioritize the delivery of 100% genuine bike spares and auto parts. Our systematic inventory process ensures every order is double-checked for authenticity, maintaining the highest satisfaction for our Chennai clients.WinAuto has highly trained employees ensuring delivery of genuine bike spares and auto parts, maintaining the highest customer satisfaction in Chennai.',
      icon: UserCheck,
      stat: '100%',
      statLabel: 'COMMITMENT',
      color: 'blue',
      image: import.meta.env.VITE_CORE_IMG1,
      imageAlt: "Since 2008, we have set the standard for automotive distribution in Chennai. Our spacious, organized facility and streamlined logistics allow us to fulfill bulk orders with speed and precision you can rely on.WinAuto Customer Satisfaction Guarantee in Chennai"
    },
    {
      id: '02',
      title: 'Proven Operational Excellence',
      subtitle: 'CORE VALUE 02',
      description: 'We maintain the highest fill rate for bike spares in the market. With thousands of SKUs in stock at our Chennai hub, we ensure that the parts you need are always available when you need them.Since 2008, we have built a reliable reputation as a trusted automotive spares distributor among our Chennai and global client base.',
      icon: ShieldCheck,
      stat: '17+',
      statLabel: 'YEARS TRUSTED',
      color: 'cyan',
      image: import.meta.env.VITE_CORE_IMG2,
      imageAlt: "Trusted Spare Parts Distributor WinAuto Operations"
    },
    {
      id: '03',
      title: 'Unmatched Inventory Depth',
      subtitle: 'CORE VALUE 03',
      description: 'Our spare parts department maintains the highest fill rate for bike spares in the market, backed by massive stock inventory in our Chennai hub.',
      icon: Trophy,
      stat: '#1',
      statLabel: 'FILL RATE',
      color: 'orange',
      image: import.meta.env.VITE_ABOUT_IMG3, 
      imageAlt: "Win Auto Massive Stock Inventory and Fill Rate Hub"
    }
  ];

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    const modal = document.querySelector('.about-lightbox-modal');
    if (modal) {
      gsap.to(modal, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          setSelectedImage(null);
          document.body.style.overflow = '';
        }
      });
    } else {
      setSelectedImage(null);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      const modal = document.querySelector('.about-lightbox-modal');
      const content = document.querySelector('.about-lightbox-content');
      if (modal && content) {
        gsap.set(modal, { opacity: 0 });
        gsap.set(content, { scale: 0.8, opacity: 0, y: 20 });
        
        gsap.to(modal, { opacity: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to(content, { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: 0.1, 
          ease: 'expo.out' 
        });
      }
    }
  }, [selectedImage]);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.char');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(chars, 
        {
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: 1,
          ease: 'back.inOut(2)',
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.03,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const renderWords = (text) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className="inline-block char" style={{ opacity: 0 }}>
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section id="about" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Featured Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-32 items-center">
          
          {/* Our Story Text */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Our Story</span>
            </div>
            
            <h2 ref={headingRef} className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              <span className="overflow-hidden pb-1">{renderWords("ABOUT")}</span>
              <span className="overflow-hidden pb-1">{renderWords("WIN AUTO")}</span>
            </h2>
            
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
              We differentiate our business by offering quality genuine spare parts that others simply cannot match. With a massive, organized inventory stock visible right here, we guarantee we have what you need in stock.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
               <div 
                 className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative group border border-white/5 shadow-lg cursor-pointer"
                 onClick={() => handleImageClick(import.meta.env.VITE_ABOUT_IMG2)}
               >
                 <img width="800" height="600" src={import.meta.env.VITE_ABOUT_IMG2} alt="WinAuto Inventory Management" className="w-full h-full object-cover brightness-110 contrast-105 saturate-[1.2] group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                 <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                   <div className="opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-widest transition-opacity duration-300">View</div>
                 </div>
               </div>
               <div 
                 className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative group border border-white/5 shadow-lg cursor-pointer"
                 onClick={() => handleImageClick(import.meta.env.VITE_ABOUT_IMG3)}
               >
                 <img width="800" height="600" src={import.meta.env.VITE_ABOUT_IMG3} alt="WinAuto Warehouse Scale" className="w-full h-full object-cover brightness-110 contrast-105 saturate-[1.2] group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                 <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                   <div className="opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-widest transition-opacity duration-300">View</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Featured Image (60-70% width) */}
          <div 
            className="lg:col-span-7 xl:col-span-8 h-[400px] sm:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden relative group border border-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] cursor-pointer"
            onClick={() => handleImageClick(import.meta.env.VITE_ABOUT_IMG1)}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-orange-500/5 mix-blend-overlay z-10 pointer-events-none"></div>
            <img 
              width="1200"
              height="800"
              src={import.meta.env.VITE_ABOUT_IMG1} 
              alt="WinAuto Wide Aisle Premium Spare Parts Storage" 
              className="w-full h-full object-cover brightness-110 contrast-105 saturate-[1.2] group-hover:scale-105 transition-transform duration-[1.5s]" 
              loading="lazy" 
            />
            <div className="absolute inset-0 z-20 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-500 flex items-center justify-center pointer-events-none">
               <div className="opacity-0 group-hover:opacity-100 bg-black/60 backdrop-blur-md text-white text-sm px-6 py-3 rounded-full font-black uppercase tracking-widest transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                 Expand Full Image
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {coreValues.map((value) => (
            <div key={value.id} className="relative group p-8 sm:p-10 bg-[#0c0d10] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full">
              {/* Background Number */}
              <span className="absolute -bottom-10 -right-4 text-[8rem] sm:text-[12rem] font-black text-white/[0.02] leading-none pointer-events-none z-0">
                {value.id}
              </span>

              {value.image && (
                <div 
                  className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative z-10 border border-white/5 flex-shrink-0 shadow-lg cursor-pointer group/img"
                  onClick={() => handleImageClick(value.image)}
                >
                   <div className="absolute inset-0 bg-blue-600/5 group-hover/img:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                   <img width="800" height="600" src={value.image} alt={value.imageAlt} className="w-full h-full object-cover brightness-110 contrast-105 saturate-[1.2] group-hover/img:scale-110 transition-transform duration-700" loading="lazy" />
                   <div className="absolute inset-0 z-20 bg-blue-500/0 group-hover/img:bg-blue-500/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                     <div className="opacity-0 group-hover/img:opacity-100 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-widest transition-opacity duration-300">View</div>
                   </div>
                </div>
              )}

              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0
                  ${value.color === 'blue' ? 'bg-blue-600/10 text-blue-500' : 
                    value.color === 'cyan' ? 'bg-cyan-600/10 text-cyan-500' : 
                    'bg-orange-600/10 text-orange-500'}`}>
                  <value.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-blue-500/60 uppercase tracking-[0.3em]">
                    {value.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight italic">
                    {value.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 relative z-10 flex-grow">
                <p className="text-white/50 text-sm leading-relaxed font-medium pb-8 border-b border-white/5">
                  {value.description}
                </p>
                
                <div className="pt-6">
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-black text-blue-500 tracking-tighter">
                      {value.stat}
                    </span>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1">
                      {value.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto border-l-4 border-blue-600 pl-10 py-4 mb-24">
          <blockquote className="text-2xl md:text-4xl font-black text-white uppercase  tracking-normal leading-tight opacity-90">
            "We gained continuous success due to our reliable and stable reputation."
          </blockquote>
          <cite className="block mt-6 text-sm font-bold text-blue-500 uppercase tracking-widest not-italic">
            — WIN AUTO, SINCE 2008
          </cite>
        </div>

        {/* Partnering Section */}
        <div className="space-y-8">
           <p className="text-xs font-bold text-white/30 uppercase tracking-[0.4em]">Interested in Partnering?</p>
           <a href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs hover:-translate-y-1 shadow-xl hover:shadow-blue-600/20">
              Get in touch
              <ArrowRight className="w-4 h-4" />
           </a>
        </div>
      </div>

      {/* Lightbox Modal via Portal (Matches Masonry logic exactly) */}
      {selectedImage && createPortal(
        <div 
          className="about-lightbox-modal fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
          onClick={closeLightbox}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/10 z-[10000] cursor-pointer"
          >
            <X size={32} />
          </button>
          
          <div 
            className="about-lightbox-content relative max-w-7xl w-full h-full flex items-center justify-center p-4 pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 pointer-events-auto"
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default AboutSection;
