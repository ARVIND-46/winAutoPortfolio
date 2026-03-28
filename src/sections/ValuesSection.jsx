import { Shield, Scale, Users, Trophy } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';

const ValuesSection = () => {
  return (
    <section id="values" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      <header className="max-w-7xl mx-auto mb-24 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Culture & People</span>
          </div>
          <ScrollFloat 
            containerClassName="text-left"
            textClassName="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.85]"
          >
            CORE VALUES
          </ScrollFloat>
          <div className="w-16 md:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full"></div>
        </div>
        
        <p className="text-lg md:text-2xl text-blue-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] italic">
          "Teamwork & People Focused"
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
        <div className="space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 h-20 bg-[#0c0d10] border border-white/5 text-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl group-hover:border-blue-500/50 transition-all duration-500">
              <Users className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-blue-400 uppercase italic tracking-tight leading-tight">120+ Trained Employees</h3>
              <p className="text-white/40 leading-relaxed font-medium text-base sm:text-lg">
                Win Auto recognizes the most important asset of the company is the employee. We work together as a team with mutual respect.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 h-20 bg-[#0c0d10] border border-white/5 text-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl group-hover:border-blue-500/50 transition-all duration-500">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-blue-400 uppercase italic tracking-tight leading-tight">High Ethical Standards</h3>
              <p className="text-white/40 leading-relaxed font-medium text-base sm:text-lg">
                We adhere to high ethical standards with the aim of doing the right thing at the right time and right place.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
           <div className="absolute inset-0 bg-blue-600 rounded-[2rem] md:rounded-[3rem] transition-transform duration-700 group-hover:scale-[1.02]"></div>
           <div className="relative z-10 p-8 sm:p-20 text-center space-y-8 sm:space-y-12">
              <div className="inline-flex items-center justify-center p-6 sm:p-8 bg-black/10 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] text-white border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">Foundation of Success</h3>
                <p className="text-white/90 text-base sm:text-xl font-bold italic leading-relaxed uppercase tracking-tight">
                  "Teamwork, mutual respect, honesty & hard work is the foundation of our success."
                </p>
              </div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
