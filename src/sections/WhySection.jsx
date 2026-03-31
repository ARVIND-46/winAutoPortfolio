import { useEffect, useRef } from 'react';
import { Star, Zap, Package, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSwap, { Card } from '@/components/ui/CardSwap';

gsap.registerPlugin(ScrollTrigger);

const WhySection = () => {
  const headingRef = useRef(null);

  const reasons = [
    {
      title: 'Stand out from competitors',
      description: 'We differentiate our business by offering quality genuine spare parts that others simply cannot match.',
      icon: Star,
      color: 'blue'
    },
    {
      title: 'Better Value & Faster Delivery',
      description: 'Offering customers better value, faster delivery, larger range and specialist products unavailable elsewhere.',
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Specialist Products',
      description: 'Differentiating through products that are difficult to obtain elsewhere — a core strength of Win Auto.',
      icon: Package,
      color: 'green'
    },
    {
      title: 'Long-term Relationships',
      description: 'Focusing on building stronger, lasting customer partnerships built on trust, consistency and mutual respect.',
      icon: Heart,
      color: 'orange'
    },
  ];

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

  const renderText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="inline-block char" style={{ opacity: 0 }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="why" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <header className="space-y-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">The Win Advantage</span>
          </div>
          
          <div ref={headingRef} className="flex flex-col gap-0 pb-2">
            <h2 className="text-5xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-2 overflow-hidden py-2">
              {renderText("WHY")}
            </h2>
            
            <h2 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase leading-[1] opacity-30 [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] text-transparent mb-2 overflow-hidden py-2">
              {renderText("WE'RE")}
            </h2>

            <h2 className="text-5xl sm:text-8xl md:text-9xl font-black text-blue-500 tracking-tighter uppercase leading-[1] overflow-hidden py-2">
              {renderText("THE BEST")}
            </h2>
          </div>
          
          <div className="w-32 md:w-48 h-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mt-8 shadow-[0_0_20px_rgba(37,99,235,0.4)]"></div>
          
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20 lg:pb-0">
            {reasons.slice(0, 2).map((reason, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{reason.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </header>

        <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
          <CardSwap
            width={450}
            height={320}
            cardDistance={40}
            verticalDistance={50}
            delay={4000}
            pauseOnHover={true}
            skewAmount={4}
          >
            {reasons.map((reason, index) => (
              <Card key={index} customClass="p-8 border-white/10 flex flex-col justify-between group overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-xl 
                    ${reason.color === 'blue' ? 'bg-blue-600' : 
                      reason.color === 'green' ? 'bg-emerald-600' : 
                      'bg-orange-600'}`}>
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic tracking-tight mb-4">{reason.title}</h3>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-32">
        <div className="bg-[#0c0d10] border border-white/5 rounded-[3rem] p-10 md:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-500 uppercase tracking-tight italic">Commitment to Quality</h3>
          <p className="text-white/70 text-lg md:text-xl font-medium italic leading-relaxed max-w-4xl mx-auto">
            "We don't just sell spare parts — we provide reliability. Our focus on quality ensures your vehicle remains in peak condition, giving you peace of mind on the road."
          </p>
          
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

