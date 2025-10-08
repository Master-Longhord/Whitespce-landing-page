// src/App.jsx

import React from 'react';
import HeroSection from './components/sections/HeroSection.jsx';
import ProjectManagementSection from './components/sections/ProjectManagementSection.jsx'; // 1. Import it

function App() {
  return (
    <div>
      <HeroSection />
      <ProjectManagementSection /> {/* 2. Add it here */}
      {/* Other page sections will go below */}
    </div>
  );
}

export default App;