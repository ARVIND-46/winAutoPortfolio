import { ArrowRight, ChevronDown } from 'lucide-react';
import TextType from '../components/TextType';
const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
       {/* Cinematic Video Background */}
       <div className="absolute inset-0 z-0 opacity-40 overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            aria-label="WinAuto premium auto parts overview"
            title="WinAuto Cinematic Overview"
          >
            <source src="https://res.cloudinary.com/dp7mj2sk1/video/upload/v1775054840/PULSAR_N160_Cinematic_Video_4K_BajajPulsarOfficial_1080P_c7c5em.mp4" type="video/mp4" />
          </video>
       </div>
       
       {/* Overlay Gradient */}
       <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

       <div className="container mx-auto px-6 relative z-20 pt-20 md:pt-0">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-black text-white leading-[0.9] md:leading-[0.8] tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                 WIN <span className="text-blue-500 not-italic font-light">AUTO</span>
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
              <div className="border-l-2 border-blue-500 pl-4">
                 <span className="text-[10px] md:text-[11px] font-semibold text-blue-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                     Since 2008 • Chennai's House of Genuine Spares
                  </span>
              </div>
 
              <p className="text-sm md:text-lg text-zinc-400 max-w-md font-medium uppercase tracking-widest leading-relaxed drop-shadow-md">
                 Reliable bike spares and automotive components for over 17 years.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 text-center lg:text-left">
               <a href="#about" className="px-6 md:px-10 py-4 md:py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center md:justify-start gap-3 uppercase tracking-[0.2em] text-[10px] shadow-xl hover:-translate-y-1.5 active:scale-95 w-full md:w-auto">
                  Our Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </a>
               <a href="#contact" className="px-6 md:px-10 py-4 md:py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all uppercase tracking-[0.2em] text-[10px] hover:-translate-y-1.5 active:scale-95 shadow-lg w-full md:w-auto text-center">
                  Contact Now
               </a>
            </div>
          </div>
       </div>

       {/* Scroll Indicator */}
       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
          {/* <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent"></div> */}
          <a href="#about" className="text-white/40 hover:text-white transition-colors animate-bounce">
             <ChevronDown className="w-10 h-10" />
          </a>
       </div>
    </section>
  );
};

export default HeroSection;
