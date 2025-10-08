import React from 'react';
import HeroSection from './components/sections/HeroSection.jsx';
import ProjectManagementSection from './components/sections/ProjectManagementSection.jsx'; // 1. Import it
import CollaborationSection from './components/sections/CollaborationSection.jsx';

function App() {
  return (
    <div>
      <HeroSection />
      <ProjectManagementSection />
      <CollaborationSection />
    </div>
  );
}

export default App;