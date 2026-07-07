import { ShieldCheck } from "lucide-react";

function Navbar({ glowMode, setGlowMode }) {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-brand">
        <ShieldCheck size={28} />
        <div>
          <span>AS Systems</span>
          <small> Engineering Portfolio</small>
        </div>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">Profile</a>
        <a href="#skills">Tech Stack</a>
        <a href="#education">Training</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <div className="system-status">
          <span></span>
          Online
        </div>

        <button className="theme-toggle" onClick={() => setGlowMode(!glowMode)}>
          {glowMode ? "Glow On" : "Glow Off"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
