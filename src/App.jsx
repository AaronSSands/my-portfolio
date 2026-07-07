// Import reusable components
import { useState } from "react";

import Navbar from "./components/Navbar";
import SystemStatus from "./components/SystemStatus";
import MouseGlow from "./components/MouseGlow";

import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Skills from "./components/Skills";
import CloudJourney from "./components/CloudJourney";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Controls whether the website is displayed in dark or light mode.
  const [glowMode, setGlowMode] = useState(true);

  return (
    <div className={glowMode ? "app glow" : "app"}>
      {/* Mouse glow effect */}
      <MouseGlow />

      {/* Navigation */}
      <Navbar glowMode={glowMode} setGlowMode={setGlowMode} />

      {/* System status */}
      <SystemStatus />

      {/* Main Content */}
      <main>
        <Hero />

        <Dashboard />

        <About />

        <Skills />

        <CloudJourney />

        <Education />

        <Projects />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
