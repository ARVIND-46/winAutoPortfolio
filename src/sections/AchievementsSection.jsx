import ScrollFloat from '@/components/ui/ScrollFloat';
import MagicBento from '@/components/ui/MagicBento';
import CountUp from '@/components/ui/CountUp';
import BorderGlow from '@/components/ui/BorderGlow';

// Achievement Images
import img1 from '@/assets/Achivements/image1.png';
import img2 from '@/assets/Achivements/image2.png';
import img3 from '@/assets/Achivements/image3.png';
import img4 from '@/assets/Achivements/image4.png';

const AchievementsSection = () => {
  const achievementItems = [
    {
      color: '#0c0d10',
      title: 'Top Distributor',
      description: 'Recognized as one of the top distributors of Bajaj Auto Limited across multiple segments.',
      label: '01 / 02'
    },
    {
      color: '#2563eb',
      title: 'Excellence Awards',
      description: 'Awards of appreciation for outstanding service and commitment to the automotive industry.',
      label: '02 / 02'
    },
    {
      color: '#0c0d10',
      title: '17+ Years Experience',
      description: 'Over 17 years of dedicated excellence in the automotive spare parts industry.',
      label: 'Legacy'
    },
    {
      color: '#0c0d10',
      title: 'Bajaj Authorized',
      description: 'Official authorized distributor for Bajaj Auto Limited spare parts worldwide.',
      label: 'Partnership'
    },
    {
      color: '#0c0d10',
      title: 'Pan-India Network',
      description: 'Robust distribution network serving customers across the entire country.',
      label: 'Logistics'
    },
    {
      color: '#0c0d10',
      title: 'Global Export',
      description: 'Exporting premium automotive parts to international markets with reliability.',
      label: 'Global'
    }
  ];

  return (
    <section id="achievements" className="min-h-screen bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden">
      <header className="max-w-7xl mx-auto mb-24 space-y-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Recognition & Awards</span>
        </div>
        
        <ScrollFloat 
          containerClassName="text-center"
          textClassName="text-2xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none"
        >
          ACHIEVEMENTS
        </ScrollFloat>
        
        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-blue-500 mx-auto rounded-full"></div>
      </header>

      <div className="max-w-7xl mx-auto w-full mb-32">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 items-center">
          <div className="flex flex-col items-center gap-2 group">
            <div className="text-6xl md:text-8xl font-black flex items-baseline group-hover:scale-110 transition-transform duration-500">
              <CountUp to={17} className="text-blue-500 italic" duration={1.5} />
              <span className="text-orange-500 italic ml-1">+</span>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">Years Leading</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="text-6xl md:text-8xl font-black flex items-baseline group-hover:scale-110 transition-transform duration-500">
              <CountUp to={50} className="text-blue-500 italic" duration={1.5} />
              <span className="text-blue-500 italic">K</span>
              <span className="text-orange-500 italic ml-1">+</span>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">Parts Stocked</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="text-6xl md:text-8xl font-black text-blue-500 italic leading-[0.8] group-hover:scale-110 transition-transform duration-500">
              ∞
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500 uppercase mt-4">Commitment</span>
          </div>
        </div>

        <MagicBento 
          items={achievementItems}
          textAutoHide={false}
          glowColor="59, 130, 246" // Blue glow to match theme
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
        />

        {/* Recognition Gallery Section */}
        <div className="mt-32 space-y-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Awards & Recognition</h2>
            <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: img1, title: 'Authorized Distributor', desc: 'Official certification from Bajaj Auto Limited.' },
              { img: img2, title: 'Excellence in Service', desc: 'Recognized for outstanding customer support.' },
              { img: img3, title: 'Top Performer', desc: 'Annual achievement award for market leadership.' },
              { img: img4, title: 'Loyalty Award', desc: 'Commitment to the automotive ecosystem.' }
            ].map((item, idx) => (
              <BorderGlow
                key={idx}
                edgeSensitivity={30}
                glowColor="59 130 246"
                backgroundColor="#0a0b0e"
                borderRadius={24}
                glowRadius={50}
                glowIntensity={1.2}
                animated={true}
                colors={['#3b82f6', '#f97316', '#60a5fa']}
              >
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px]">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                    <p className="text-white/60 text-[10px] uppercase tracking-wider leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#0c0d10] border border-white/5 rounded-[4rem] p-16 md:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden group">
          <div className="flex justify-center gap-3">
             <div className="w-24 h-1 bg-blue-500/50 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight md:leading-none">
              QUALITY SERVICE • <br className="md:hidden" /> CUSTOMER SATISFACTION • <br className="md:hidden" /> SUSTAINABLE GROWTH
            </h3>
            <p className="text-orange-400 font-bold uppercase tracking-[0.3em] italic text-sm">
              "To be the leading automotive spare parts supplier"
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
             {['15+ Years', 'Bajaj Authorized', 'Pan-India', 'Global Export'].map(tag => (
                <div key={tag} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white/50 uppercase tracking-widest hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300">
                   {tag}
                </div>
             ))}
          </div>

          {/* Stylized border quote at bottom */}
          <div className="pt-12 mt-12 border-t border-white/5 flex flex-col items-center">
             {/* <div className="w-px h-16 bg-gradient-to-b from-orange-400 to-transparent mb-8"></div> */}
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
