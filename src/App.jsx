import Layout from './layout/Layout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import HistorySection from './sections/HistorySection';
import VisionSection from './sections/VisionSection';
import MissionSection from './sections/MissionSection';
import WhySection from './sections/WhySection';
import ValuesSection from './sections/ValuesSection';
import ServicesSection from './sections/ServicesSection';
import AchievementsSection from './sections/AchievementsSection';
import BeyondtheOffice from './sections/BeyondtheOffice';
import BrandsSection from './sections/BrandsSection';
import ContactSection from './sections/ContactSection';
import CatalogSection from './sections/CatalogSection';

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <HeroSection />
        <HistorySection />
        <AboutSection />
        <VisionSection />
        <MissionSection />
        <WhySection />
        <ValuesSection />
        <ServicesSection />
        <CatalogSection />
        <AchievementsSection />
        <BeyondtheOffice />
        <BrandsSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default App;
