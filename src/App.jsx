import React, { useEffect } from 'react';
import AOS from 'aos';
import HeroSection from './components/sections/HeroSection.jsx';
import ProjectManagementSection from './components/sections/ProjectManagementSection.jsx'; // 1. Import it
import CollaborationSection from './components/sections/CollaborationSection.jsx';
import ExtensionSection from './components/sections/ExtensionSection.jsx'; 
import CustomiseSection from './components/sections/CustomiseSection.jsx';
import PricingSection from './components/sections/PricingSection.jsx';
import CtaSection from './components/sections/CtaSection.jsx';
import DataSecuritySection from './components/sections/DataSecuritySection.jsx'; 
import SponsorsSection from './components/sections/SponsorsSection.jsx';
import AppsSection from './components/sections/AppsSection.jsx';
import TestimonialsSection from './components/sections/TestimonialsSection.jsx';
import FinalCtaSection from './components/sections/FinalCtaSection.jsx';
import Footer from './components/layout/Footer.jsx'; 
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <ProjectManagementSection />
      <CollaborationSection />
      <ExtensionSection />
      <CustomiseSection />
      <PricingSection />
      <CtaSection />
      <DataSecuritySection /> 
      <SponsorsSection />
      <AppsSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer /> 
    </div>
  );
}
export default App;