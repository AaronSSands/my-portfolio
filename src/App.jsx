//Import reusable compnents
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CloudJourney from "./components/CloudJourney";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  //Controls whether the website is displayed in dark or light mode. The default is light mode.
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Dynamically applies the dark class when dark mode is enabled, allowing for CSS styling based on the theme.
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content of the application */}
      <main>
        <Skills />

        <CloudJourney />

        <Education />

        <Projects />

        <Contact />
      </main>

      {/* Website footer */}
      <Footer />
    </div>
  );
}

export default App;
