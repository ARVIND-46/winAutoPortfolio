import { TrendingUp, Package, Infinity as InfinityIcon, Target } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';

const VisionSection = () => {
  return (
    <section id="vision" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-12 mb-24">
          <div className="space-y-4">
            <ScrollFloat 
              containerClassName="text-left"
              textClassName="text-3xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]"
            >
              OUR VISION
            </ScrollFloat>
            <div className="w-16 md:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full"></div>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-white/40 font-medium leading-relaxed">
            We are driven by a singular ambition — to become the most trusted automotive spare parts supplier, setting the benchmark for quality and service excellence.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-32">
          <div className="space-y-4 group">
            <div className="text-6xl font-black text-blue-500 tracking-tighter transition-transform group-hover:scale-105 duration-500">
              17<span className="text-orange-400">+</span>
            </div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-[0.4em]">Years Leading</p>
          </div>
          <div className="space-y-4 group">
            <div className="text-6xl font-black text-blue-500 tracking-tighter transition-transform group-hover:scale-105 duration-500">
              50<span className="text-orange-400 font-sans tracking-tight">K+</span>
            </div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-[0.4em]">Parts Stocked</p>
          </div>
          <div className="space-y-4 group">
            <div className="text-7xl font-black text-blue-500 tracking-tighter flex items-center gap-2 transition-transform group-hover:scale-105 duration-500">
              <InfinityIcon className="w-16 h-16 text-blue-400" />
            </div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-[0.4em]">Commitment</p>
          </div>
        </div>

        {/* Vision Statement Box */}
        <div className="relative group overflow-hidden">
           <div className="absolute inset-0 bg-blue-600 rounded-[2rem] md:rounded-[3rem] transition-transform duration-700 group-hover:scale-[1.02]"></div>
           <div className="relative z-10 p-8 sm:p-12 md:p-24 space-y-8 md:space-y-12">
              <blockquote className="text-xl sm:text-3xl md:text-5xl font-bold text-white leading-[1.2] md:leading-[1.15] tracking-tight max-w-5xl italic">
                "To be the leading automotive spare parts supplier in the market & achieve the highest quality service for maximum customer satisfaction."
              </blockquote>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                 <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <Target className="w-3 h-3 text-white" />
                 </div>
                 <span className="text-[10px] font-black text-white uppercase tracking-widest">
                    Win Auto Vision Statement
                 </span>
              </div>
           </div>

           {/* Decorative shapes for the box */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl -ml-20 -mb-20"></div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
