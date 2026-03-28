import LogoLoop from '../components/LogoLoop';
const brandImages = import.meta.glob('../assets/brands/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const BrandsSection = () => {
  const brands = [
    { name: 'BAJAJ', file: 'Bajaj.png' },
    { name: 'MOTUL', file: 'motul.png' },
    { name: 'KBX', file: 'KBX.png' },
    { name: 'FLASH', file: 'Flash.png', color: 'text-blue-500' },
    { name: 'LUMINAZ', file: 'Luminaz.png', color: 'text-teal-500' },
    { name: 'ADVIK', file: 'Advik.png', color: 'text-white' },
    { name: 'ANABOND', file: 'Anabond.png', color: 'text-green-500' },
    { name: 'UCAL', file: 'Ucal.png', color: 'text-blue-400' },
    { name: 'NP', file: 'Np.png', color: 'text-red-500' },
    { name: 'OETIKER', file: 'Otiker.png', color: 'text-white' },
  ].map(brand => {
    const imagePath = `../assets/brands/${brand.file}`;
    const importedImage = brandImages[imagePath];
    return {
      ...brand,
      src: importedImage?.default || importedImage,
      isImage: !!importedImage
    };
  });

  return (
    <section id="brands" className="bg-[#060709] py-32 px-6 lg:px-12 relative overflow-hidden border-t border-white/5">
      <header className="max-w-7xl mx-auto mb-20 space-y-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em]">Authorized Logistics & Technical Partners</span>
        </div>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-400 mx-auto rounded-full"></div>
      </header>

      <div className="max-w-7xl mx-auto w-full mb-24">
        {/* Mobile View: Grid */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {brands.slice(0, 12).map((brand, index) => (
            <div key={index} className="h-32 bg-[#0c0d10] border border-white/5 rounded-3xl flex items-center justify-center p-4 group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               {brand.isImage ? (
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="h-full w-auto object-contain transition-all duration-700 group-hover:scale-110"
                  />
                ) : (
                  <span className={`text-2xl font-black italic tracking-tighter ${brand.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}>
                    {brand.name}
                  </span>
                )}
            </div>
          ))}
        </div>

        {/* Desktop View: LogoLoop */}
        <div className="hidden md:block py-10">
          <LogoLoop 
            logos={brands}
            speed={40}
            gap={80}
            logoHeight={100}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#060709"
            renderItem={(brand) => (
              <div className="h-24 bg-[#0c0d10] border border-white/5 rounded-[2rem] min-w-[200px] flex items-center justify-center p-4 group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {brand.isImage ? (
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="h-full w-auto object-contain transition-all duration-700 group-hover:scale-110"
                  />
                ) : (
                  <span className={`text-2xl md:text-3xl font-black italic tracking-tighter ${brand.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}>
                    {brand.name}
                  </span>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">Trusted by industry-leading brands worldwide</p>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
         <div className="max-w-7xl mx-auto h-full grid grid-cols-6 gap-0">
            {[...Array(7)].map((_, i) => (
               <div key={i} className="border-l border-white h-full"></div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default BrandsSection;
