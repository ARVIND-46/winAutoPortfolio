import { Star, Zap, Package, Heart } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';

const WhySection = () => {
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

  return (
    <section id="why" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      <header className="max-w-7xl mx-auto mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">The Win Advantage</span>
        </div>
        
        <ScrollFloat 
          containerClassName="text-left"
          textClassName="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none"
        >
          WHY WE'RE THE BEST
        </ScrollFloat>
        
        <div className="w-24 h-1.5 bg-blue-500 rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full mb-32">
        {reasons.map((reason, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 p-12 bg-[#0c0d10] border border-white/5 rounded-[2.5rem] shadow-xl hover:border-blue-500/30 transition-all duration-500 group">
            <div className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500
              ${reason.color === 'blue' ? 'bg-blue-600 text-white' : 
                reason.color === 'green' ? 'bg-emerald-600 text-white' : 
                'bg-orange-600 text-white'}`}>
              <reason.icon className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tight leading-tight">{reason.title}</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-[#0c0d10] border border-white/5 rounded-[3rem] p-10 md:p-24 text-center space-y-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-500 uppercase tracking-tight italic">Commitment to Quality</h3>
          <p className="text-white/80 text-xl md:text-2xl font-medium italic leading-relaxed max-w-4xl mx-auto">
            "We don't just sell spare parts — we provide reliability. Our focus on quality ensures your vehicle remains in peak condition, giving you peace of mind on the road."
          </p>
          
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
