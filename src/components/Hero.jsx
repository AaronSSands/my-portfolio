import { Cloud, Code2, Network, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-panel"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-content">
          <p className="hero-brand">AS SYSTEMS</p>

          <h1>Aaron Sands</h1>

          <h2>Cloud & Network Engineering Student</h2>

          <p className="hero-focus">AWS Focus • React Developer</p>

          <p className="hero-description">
            I enjoy building reliable software, exploring cloud technologies,
            and solving technical challenges through hands-on projects and
            continuous learning.
          </p>

          <div className="hero-actions">
            <a href="#projects">Explore Projects</a>
            <a href="/resume.pdf">Download Resume</a>
            <a href="#contact">Establish Connection</a>
          </div>

          <div className="hero-tech">
            <span>
              <Code2 size={16} /> React
            </span>
            <span>
              <Cloud size={16} /> AWS
            </span>
            <span>
              <Network size={16} /> Networking
            </span>
            <span>
              <ShieldCheck size={16} /> Systems
            </span>
          </div>
        </div>

        <div className="hero-status">
          <div className="status-card">
            <p className="status-label">System Status</p>
            <h3>
              <span></span> Online
            </h3>
          </div>

          <div className="logo-orb">AS</div>

          <div className="status-card">
            <p className="status-label">Current Mission</p>
            <p>
              Building modern software and cloud infrastructure while growing
              toward AWS-focused engineering roles.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
