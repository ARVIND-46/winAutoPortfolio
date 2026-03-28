import { Target, CheckCircle, Clock } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';

const MissionSection = () => {
  const missionPoints = [
    {
      id: '01',
      title: 'Highest Quality',
      description: 'To deliver the highest quality of work in the most efficient and economical way — every part, every time.',
      icon: CheckCircle,
      color: 'blue'
    },
    {
      id: '02',
      title: 'Customer Satisfaction',
      description: 'To achieve the highest level of customer satisfaction through dedicated service and genuine parts.',
      icon: Target,
      color: 'blue'
    },
    {
      id: '03',
      title: 'Timely Completion',
      description: 'To ensure work completion within the stipulated time frame, respecting every client\'s schedule and deadline.',
      icon: Clock,
      color: 'orange'
    },
  ];

  return (
    <section id="mission" className="min-h-screen bg-[#0a0b0d] py-32 px-6 lg:px-12 relative overflow-hidden">
      <header className="text-center mb-24 space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">What Drives Us</span>
        </div>
        <ScrollFloat 
          containerClassName="text-center"
          textClassName="text-4xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-none"
        >
          OUR MISSION
        </ScrollFloat>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-400 mx-auto rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {missionPoints.map((point) => (
          <div key={point.id} className="relative p-8 sm:p-12 bg-[#0c0d10] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl hover:border-blue-500/30 transition-all duration-500 group">
            <div className="space-y-6 sm:space-y-8">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                
              </span>
              
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 
                ${point.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-orange-600 text-white'}`}>
                <point.icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight leading-tight">
                  {point.title}
                </h3>
                <p className="text-white/40 text-sm sm:text-base leading-relaxed font-medium">
                  {point.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
