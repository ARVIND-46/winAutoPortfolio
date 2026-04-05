import React, { Suspense } from 'react';
import Layout from './layout/Layout';
import HeroSection from './sections/HeroSection';

const AboutSection = React.lazy(() => import('./sections/AboutSection'));
const HistorySection = React.lazy(() => import('./sections/HistorySection'));
const VisionSection = React.lazy(() => import('./sections/VisionSection'));
const MissionSection = React.lazy(() => import('./sections/MissionSection'));
const WhySection = React.lazy(() => import('./sections/WhySection'));
const ValuesSection = React.lazy(() => import('./sections/ValuesSection'));
const ServicesSection = React.lazy(() => import('./sections/ServicesSection'));
const AchievementsSection = React.lazy(() => import('./sections/AchievementsSection'));
const BeyondtheOffice = React.lazy(() => import('./sections/BeyondtheOffice'));
const BrandsSection = React.lazy(() => import('./sections/BrandsSection'));
const ContactSection = React.lazy(() => import('./sections/ContactSection'));
const CatalogSection = React.lazy(() => import('./sections/CatalogSection'));

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <HeroSection />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
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
        </Suspense>
      </div>
    </Layout>
  );
};

export default App;
