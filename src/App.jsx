//Import reusable compnents
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  //Controls whether the website is displayed in dark or light mode. The default is light mode.
  const [darkMode, setDarkMode] = useState(false);

  return (
    //Dynamically applies the dark class when dark mode is enabled, allowing for CSS styling based on the theme.
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* The main content of the application, including the hero section, about
      section, projects section, and contact section. */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
