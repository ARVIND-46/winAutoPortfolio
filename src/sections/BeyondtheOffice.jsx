import Masonry from '../components/ui/Masonry';
import ScrollFloat from '../components/ui/ScrollFloat';

// Import team images
import img1 from '../assets/Teams/image.png';
import img2 from '../assets/Teams/image1.png';
import img3 from '../assets/Teams/image11.png';
import img4 from '../assets/Teams/image2.png';
import img5 from '../assets/Teams/image3.png';
import img6 from '../assets/Teams/image4.png';
import img7 from '../assets/Teams/image6.png';
import img8 from '../assets/Teams/image7.png';
import img9 from '../assets/Teams/image9.png';

const BeyondtheOffice = () => {
  const items = [
    { id: "1", img: img1, height: 600 },
    { id: "2", img: img2, height: 400 },
    { id: "3", img: img3, height: 800 },
    { id: "4", img: img4, height: 500 },
    { id: "5", img: img5, height: 700 },
    { id: "6", img: img6, height: 550 },
    { id: "7", img: img7, height: 450 },
    { id: "8", img: img8, height: 750 },
    { id: "9", img: img9, height: 600 },
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
          textClassName="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none"
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
