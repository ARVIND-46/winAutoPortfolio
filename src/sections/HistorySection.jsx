import { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ScrollFloat from '@/components/ui/ScrollFloat';
import founderImg from '@/assets/FounderImage.webp';

gsap.registerPlugin(ScrollTrigger);

const HistorySection = () => {
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  const timelineData = [
    { year: '2008', title: 'Company Founded', description: 'Started operations in Chennai' },
    { year: '2011', title: 'Expanded 2-Wheeler', description: 'Wider range of spare parts' },
    { year: '2015', title: '3-Wheeler Division', description: 'Launch of specialized spares' },
    { year: '2019', title: 'International Export', description: 'Global operations started' },
    { year: '2024', title: 'Global Market', description: 'Strong international presence' },
  ];

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const items = el.querySelectorAll('.timeline-item');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(items, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="history" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-900 rounded-full blur-[120px]"></div>
      </div>

      <header className="max-w-7xl mx-auto mb-24 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Our Legacy</span>
        </div>
        
        <ScrollFloat 
          containerClassName="text-left"
          textClassName="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-none"
        >
          HISTORY
        </ScrollFloat>
        
        <div className="w-24 h-1.5 bg-blue-500 rounded-full"></div>
      </header>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Main Card */}
          <div className="lg:col-span-12 bg-white/5 backdrop-blur-md p-10 lg:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 font-bold uppercase text-[9px] tracking-widest">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Foundation Year
              </div>

              <div className="space-y-4">
                <ScrollReveal 
                  containerClassName="my-0"
                  textClassName="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase  skew-x-[-12deg] tracking-tight"
                  baseRotation={0}
                  baseOpacity={0.1}
                >
                  FOUNDATION (2008)
                </ScrollReveal>
                
                <ScrollReveal 
                  textClassName="text-sm md:text-base lg:text-lg text-gray-300 font-medium tracking-tight opacity-90 leading-relaxed"
                  containerClassName="my-0"
                  baseRotation={2}
                >
                  Win Auto was established in the year 2008 at Chennai, Tamil Nadu, India for distribution of Bajaj spare parts for both 2-wheeler and 3-wheeler vehicles.
                </ScrollReveal>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-5 group/founder">
                  <div className="w-16 h-16 rounded-full aspect-square overflow-hidden border-2 border-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <img 
                      width="64"
                      height="64"
                      src={founderImg} 
                      alt="Founders" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] mb-0.5">Founded by</p>
                    <p className="text-xl font-bold text-white uppercase italic tracking-tight">M.K Anand & B Arun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20 space-y-12 text-center">
            <h4 className="text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px] opacity-40">Our Journey At A Glance</h4>
            
            <div className="relative">
              {/* Vertical line on mobile, horizontal on desktop */}
              <div className="absolute top-10 left-6 md:left-0 w-[1px] md:w-full h-[calc(100%-80px)] md:h-[1px] bg-gradient-to-b md:bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-6" ref={timelineRef}>
                {timelineData.map((item, index) => (
                  <div key={index} className="relative group timeline-item pt-4 md:pt-0">
                    <div className="flex flex-row md:flex-col items-center gap-6 md:gap-0 md:space-y-6">
                      <div className="relative z-10 w-12 h-12 bg-[#0a0b0d] flex-shrink-0 flex items-center justify-center rounded-full border border-blue-500/30 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-500">
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                      </div>
                      
                      <div className="space-y-2 text-left md:text-center">
                        <p className="text-2xl font-black text-blue-500 italic tracking-tighter">{item.year}</p>
                        <h5 className="text-white text-[11px] font-black uppercase tracking-tight opacity-70 group-hover:opacity-100">{item.title}</h5>
                        <p className="text-gray-500 text-[9px] font-bold uppercase leading-tight max-w-[100px] md:mx-auto">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
