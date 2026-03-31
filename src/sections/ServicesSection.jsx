import { useEffect, useRef } from 'react';
import { Package, Globe, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Globe3D } from "@/components/ui/3d-globe";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sampleMarkers = [
  { lat: 28.6139, lng: 77.209, src: "https://assets.aceternity.com/avatars/6.webp", label: "New Delhi" },
  { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
  { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
  { lat: 31.2304, lng: 121.4737, src: "https://assets.aceternity.com/avatars/9.webp", label: "Shanghai" },
];

export function Globe3DDemo() {
  return (
    <Globe3D
      markers={sampleMarkers}
      config={{
        atmosphereColor: "#2563eb",
        atmosphereIntensity: 15,
        bumpScale: 5,
        autoRotateSpeed: 0.3,
      }}
    />
  );
}

const ServicesSection = () => {
  const headingRef = useRef(null);

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
      <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden pb-1">
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className="inline-block char" style={{ opacity: 0 }}>
            {char}
          </span>
        ))}
      </span>
    ));
  };

  const services = [
    {
      id: '01',
      title: 'BAJAJ SPARE PARTS',
      description: 'Distribution of genuine Bajaj spare parts for Pulsar, Dominar, Discover, Platina, and 3-wheeler vehicles — factory-certified quality.',
      icon: Package,
      tag: 'GENUINE PARTS',
      color: 'blue'
    },
    {
      id: '02',
      title: 'PAN-INDIA DISTRIBUTION',
      description: 'Nationwide logistics network ensuring rapid delivery of bike spares and auto parts across India with real-time tracking.',
      icon: Truck,
      tag: 'NATIONWIDE',
      color: 'blue'
    },
    {
      id: '03',
      title: 'INTERNATIONAL EXPORTS',
      description: 'Exporting genuine Bajaj components and automotive parts to global markets, meeting all international quality standards.',
      icon: Globe,
      tag: 'GLOBAL REACH',
      color: 'green'
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      <header className="max-w-7xl mx-auto mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">What We Do</span>
        </div>
        
        <h2 ref={headingRef} className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-none text-left">
          {renderWords("OUR SERVICES")}
        </h2>
        
        <div className="w-24 h-1.5 bg-blue-500 rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full mb-32">
        {services.map((service) => (
          <div key={service.id} className="relative p-8 sm:p-12 bg-[#0c0d10] border border-white/5 rounded-[2rem] sm:rounded-[3rem] shadow-2xl hover:border-blue-500/30 transition-all duration-700 group overflow-hidden">
            {/* Background Number */}
            <div className="absolute bottom-0 right-0 text-[8rem] sm:text-[12rem] font-black text-white/[0.03] leading-none -mr-8 -mb-12 group-hover:text-white/[0.05] transition-colors duration-700">
              {service.id}
            </div>

            <div className="relative z-10 space-y-8 sm:space-y-12">
              <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 
                ${service.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'}`}>
                <service.icon className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm sm:text-base leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                   <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                      {service.tag}
                   </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#0c0d10] border border-white/5 rounded-[2.5rem] md:rounded-[4rem] p-8 sm:p-12 lg:p-20 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 sm:space-y-10 relative z-10">
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">Exporting Excellence</h3>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed font-medium uppercase tracking-tight italic">
                 Apart from distributing spares all over India, we export to countries like Sri Lanka, Singapore, Malaysia, and several nations across Africa.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Sri Lanka', 'Singapore', 'Malaysia', 'Africa'].map(country => (
                  <div key={country} className="flex items-center gap-2 sm:gap-3 bg-white/5 px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl border border-white/10 text-[9px] sm:text-[10px] font-black tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 group-hover:text-white" />
                      {country}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] flex items-center justify-center bg-blue-500/5 rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden group">
               <Globe3DDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

