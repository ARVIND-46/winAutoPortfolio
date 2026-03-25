import { UserCheck, ShieldCheck, Trophy, ArrowRight } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';

const AboutSection = () => {
  const coreValues = [
    {
      id: '01',
      title: 'Customer Satisfaction',
      subtitle: 'CORE VALUE 01',
      description: 'Win Auto has highly trained employees ensuring delivery of our best work, which results in the highest customer satisfaction level across every engagement.',
      icon: UserCheck,
      stat: '100%',
      statLabel: 'COMMITMENT',
      color: 'blue'
    },
    {
      id: '02',
      title: 'Reliable Reputation',
      subtitle: 'CORE VALUE 02',
      description: 'Since we began, we gained continuous success due to our reliable and stable reputation among our client base — built transaction by transaction, year after year.',
      icon: ShieldCheck,
      stat: '17+',
      statLabel: 'YEARS TRUSTED',
      color: 'cyan'
    },
    {
      id: '03',
      title: 'Market Leader',
      subtitle: 'CORE VALUE 03',
      description: 'Our spare parts department maintains the highest fill rate among its competitors in the market, backed by massive stock inventory and global distribution reach.',
      icon: Trophy,
      stat: '#1',
      statLabel: 'FILL RATE',
      color: 'orange'
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="max-w-7xl mx-auto mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Our Story</span>
          </div>
          
          <ScrollFloat 
            containerClassName="text-left"
            textClassName="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none"
          >
            ABOUT WIN AUTO
          </ScrollFloat>
          
          <div className="w-24 h-1.5 bg-blue-500 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {coreValues.map((value) => (
            <div key={value.id} className="relative group p-10 bg-[#0c0d10] border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500">
              {/* Background Number */}
              <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-white/[0.02] leading-none pointer-events-none">
                {value.id}
              </span>

              <div className={`w-16 h-16 rounded-2xl mb-10 flex items-center justify-center shadow-lg
                ${value.color === 'blue' ? 'bg-blue-600/10 text-blue-500' : 
                  value.color === 'cyan' ? 'bg-cyan-600/10 text-cyan-500' : 
                  'bg-orange-600/10 text-orange-500'}`}>
                <value.icon className="w-8 h-8" />
              </div>

              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-bold text-blue-500/60 uppercase tracking-[0.3em]">
                  {value.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight italic">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium pb-8 border-b border-white/5">
                  {value.description}
                </p>
                
                <div className="pt-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-blue-500 tracking-tighter">
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
          <blockquote className="text-2xl md:text-3xl font-medium text-white/80 italic leading-relaxed">
            "Since we begun, we gained continuous success due to our reliable and stable reputation among our client base."
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
    </section>
  );
};

export default AboutSection;
