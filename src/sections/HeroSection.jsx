import { ArrowRight, ChevronDown } from 'lucide-react';
import TextType from '../components/TextType';
import heroBg from '../assets/hero-bg-landscape.webp';

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
       {/* Cinematic Image Background with Ken Burns */}
       <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <img
            src={heroBg}
            alt="WinAuto premium auto parts overview"
            className="w-full h-full object-cover opacity-50 animate-kenburns origin-center"
          />
       </div>
       
       {/* Overlay Gradient with Radial Depth */}
       <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/60 via-black/80 to-black/100 md:from-black/20 md:via-black/60 md:to-black/90"></div>

       <div className="container mx-auto px-6 relative z-20 pt-20 md:pt-0">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-black text-white leading-[0.9] md:leading-[0.8] tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                 WIN <span className="text-blue-400 not-italic font-light drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]">AUTO</span>
              </h1>
              
              <div className="h-8 md:h-12 flex items-center">
                 <h2 className="sr-only">Premium Bike Spares and Auto Parts in Chennai</h2>
                 <TextType 
                    text={["Bike Spares Chennai", "Authorized Bajaj Distributor", "Genuine Auto Parts", "Motul Lubricants Partner"]}
                    className="text-sm sm:text-lg md:text-xl font-semibold text-blue-400 uppercase tracking-[0.2em] md:tracking-[0.3em] italic opacity-90"
                    typingSpeed={60}
                    pauseDuration={2500}
                    cursorCharacter="_"
                 />
              </div>
              <div className="border-l-2 border-blue-400 pl-4 mb-4 md:mb-0">
                 <span className="text-[10px] md:text-xs font-bold text-blue-300 uppercase tracking-[0.25em] md:tracking-[0.3em] drop-shadow-md">
                     Since 2008 • Chennai's House of Genuine Spares
                  </span>
              </div>
 
              <p className="text-sm md:text-lg text-zinc-400 max-w-md font-medium uppercase tracking-widest leading-loose md:leading-relaxed drop-shadow-md pt-2 md:pt-0">
                 Reliable bike spares and automotive components for over 17 years.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 text-center lg:text-left">
               <a href="#about" className="px-6 md:px-10 py-4 md:py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center md:justify-start gap-3 uppercase tracking-[0.2em] text-[10px] shadow-xl hover:-translate-y-1.5 active:scale-95 w-full md:w-auto">
                  Our Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </a>
               <a href="#contact" className="px-6 md:px-10 py-4 md:py-5 bg-transparent text-white font-bold rounded-2xl border-2 border-white/40 hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-[0.2em] text-[10px] hover:-translate-y-1.5 active:scale-95 shadow-lg w-full md:w-auto text-center">
                  Contact Now
               </a>
            </div>
          </div>
       </div>

       {/* Scroll Indicator */}
       <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-50 flex flex-col items-center gap-6">
          <a href="#about" className="text-white/40 hover:text-white transition-colors animate-bounce">
             <ChevronDown className="w-8 h-8 md:w-10 md:h-10" />
          </a>
       </div>
    </section>
  );
};

export default HeroSection;
