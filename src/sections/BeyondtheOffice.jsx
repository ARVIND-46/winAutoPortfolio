import Masonry from '../components/ui/Masonry';
import ScrollFloat from '../components/ui/ScrollFloat';

const optimizeCloudinaryUrl = (url) => {
  if (!url || !url.includes('res.cloudinary.com')) return url;
  return url.replace('/upload/', '/upload/f_auto,q_auto/');
};

const BeyondtheOffice = () => {
  const items = [
    { id: "1", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG1), height: 600, alt: "WinAuto team working with bike spares in Chennai" },
    { id: "2", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG2), height: 400, alt: "WinAuto inventory management for genuine auto parts" },
    { id: "3", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG3), height: 800, alt: "WinAuto warehouse showcase in Chennai" },
    { id: "4", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG4), height: 500, alt: "Professional automotive components distribution team" },
    { id: "5", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG5), height: 700, alt: "Genuine Bajaj spares quality check" },
    { id: "6", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG6), height: 550, alt: "WinAuto distribution network hub" },
    { id: "7", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG7), height: 450, alt: "Automotive spare parts logistics Chennai" },
    { id: "8", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG8), height: 750, alt: "WinAuto team excellence in service" },
    { id: "9", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG9), height: 600, alt: "Three wheeler spares authorized distributor" },
    { id: "10", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG10), height: 500, alt: "WinAuto team collaboration Chennai" },
    { id: "11", img: optimizeCloudinaryUrl(import.meta.env.VITE_TEAM_IMG11), height: 700, alt: "Corporate culture at WinAuto Chennai" },
  ];

  return (
    <section id="beyond-the-office" className="bg-[#060709] pt-40 pb-16 px-6 lg:px-12 relative overflow-hidden">
      <header className="max-w-7xl mx-auto mb-16 space-y-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.5em]">Our Culture</span>
        </div>       
        <ScrollFloat 
          containerClassName="text-center"
          textClassName="text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none"
        >
          BEYOND THE OFFICE
       </ScrollFloat>
        
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-400 mx-auto rounded-full"></div>
      </header>

      <div className="max-w-7xl mx-auto w-full">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.8}
          stagger={0.1}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.98}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>

      {/* Decorative background elements to match the theme */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default BeyondtheOffice;
