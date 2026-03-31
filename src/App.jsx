import { Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import HeroSection from './sections/HeroSection';

// Lazy load sections below the fold
const HistorySection = lazy(() => import('./sections/HistorySection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const VisionSection = lazy(() => import('./sections/VisionSection'));
const MissionSection = lazy(() => import('./sections/MissionSection'));
const WhySection = lazy(() => import('./sections/WhySection'));
const ValuesSection = lazy(() => import('./sections/ValuesSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const CatalogSection = lazy(() => import('./sections/CatalogSection'));
const AchievementsSection = lazy(() => import('./sections/AchievementsSection'));
const BeyondtheOffice = lazy(() => import('./sections/BeyondtheOffice'));
const BrandsSection = lazy(() => import('./sections/BrandsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <HeroSection />
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <HistorySection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <VisionSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <MissionSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <WhySection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <ValuesSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <CatalogSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <AchievementsSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <BeyondtheOffice />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-black" />}>
          <BrandsSection />
        </Suspense>
        <Suspense fallback={<div className="h-40 bg-black" />}>
          <ContactSection />
        </Suspense>
      </div>
    </Layout>
  );
};

export default App;
