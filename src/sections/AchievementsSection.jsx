import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      <header className="max-w-7xl mx-auto mb-24 space-y-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Recognition & Awards</span>
        </div>
        
        <ScrollFloat 
          containerClassName="text-center"
          textClassName="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none"
        >
          ACHIEVEMENTS
        </ScrollFloat>
        
        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-blue-500 mx-auto rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full mb-32">
        {/* Card 01 */}
        <div className="relative p-12 bg-[#0c0d10] border border-white/5 rounded-[3rem] shadow-2xl space-y-10 group overflow-hidden">
          <div className="absolute bottom-0 right-0 text-white opacity-5 transform translate-x-12 translate-y-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
            <Star className="w-64 h-64 fill-current" />
          </div>
          <div className="relative z-10 space-y-8">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">01 / 02</span>
            <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-blue-400 uppercase tracking-tight leading-none">TOP DISTRIBUTOR</h3>
              <p className="text-white/40 text-lg leading-relaxed font-medium">
                Recognized as one of the top distributors of Bajaj Auto Limited across multiple segments — a title earned through consistent excellence and volume.
              </p>
            </div>
          </div>
        </div>

        {/* Card 02 */}
        <div className="relative p-12 bg-blue-600 rounded-[3rem] shadow-2xl space-y-10 group overflow-hidden">
          <div className="absolute bottom-0 right-0 text-white opacity-10 transform translate-x-12 translate-y-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
            <Star className="w-64 h-64 fill-current" />
          </div>
          <div className="relative z-10 space-y-8">
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.4em]">02 / 02</span>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Trophy className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-white uppercase tracking-tight leading-none">EXCELLENCE AWARDS</h3>
              <p className="text-white/80 text-lg leading-relaxed font-medium">
                Awards of appreciation for outstanding service and commitment to the automotive industry — proof that quality speaks louder than words.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#0c0d10] border border-white/5 rounded-[4rem] p-16 md:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden group">
          <div className="flex justify-center gap-3">
             {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-orange-400 fill-current drop-shadow-[0_0_10px_rgba(251,146,60,0.4)]" />
             ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              QUALITY SERVICE • CUSTOMER SATISFACTION <br className="hidden md:block" /> • SUSTAINABLE GROWTH
            </h3>
            <p className="text-orange-400 font-bold uppercase tracking-[0.3em] italic text-sm">
              "To be the leading automotive spare parts supplier"
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
             {['17+ Years', 'Bajaj Authorized', 'Pan-India', 'Global Export'].map(tag => (
                <div key={tag} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white/50 uppercase tracking-widest hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300">
                   {tag}
                </div>
             ))}
          </div>

          {/* Stylized border quote at bottom */}
          <div className="pt-12 mt-12 border-t border-white/5 flex flex-col items-center">
             <div className="w-px h-16 bg-gradient-to-b from-orange-400 to-transparent mb-8"></div>
             <p className="text-white/40 text-xl font-medium italic max-w-3xl leading-relaxed">
                "We don't just sell spare parts — we provide reliability. Our commitment to quality ensures your vehicle remains in peak condition."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
