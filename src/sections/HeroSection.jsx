import { ArrowRight, ChevronDown } from 'lucide-react';
import TextType from '../components/TextType';
import Hyperspeed from '../components/Hyperspeed';
import { useMemo } from 'react';

const HeroSection = () => {
  const hyperspeedOptions = useMemo(() => ({
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [12, 80],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3
    }
  }), []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
       {/* Cinematic Background */}
       <div className="absolute inset-0 z-0 opacity-60">
          <Hyperspeed effectOptions={hyperspeedOptions} />
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
                 <TextType 
                    text={["Leading Bajaj Distributor", "Authorized Motul Partner", "Excellence in Spare Parts"]}
                    className="text-sm sm:text-lg md:text-xl font-semibold text-blue-400 uppercase tracking-[0.2em] md:tracking-[0.3em] italic opacity-90"
                    typingSpeed={60}
                    pauseDuration={2500}
                    cursorCharacter="_"
                 />
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                 <span className="text-[10px] md:text-[11px] font-semibold text-blue-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                     Since 2008 • House of Genuine Parts
                  </span>
              </div>
 
              <p className="text-sm md:text-lg text-zinc-400 max-w-md font-medium uppercase tracking-widest leading-relaxed drop-shadow-md">
                 Reliability and stability at the core of our business for over 15 years.
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
