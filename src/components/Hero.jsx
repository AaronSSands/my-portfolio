import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        {/* Main introduction */}
        <h1>Aaron Sands</h1>

        {/* Professional title */}
        <h2>Developer | Cloud & Network Engineering Student</h2>

        {/* Professional summary */}
        <p>
          I build modern web applications while expanding my expertise in cloud
          computing, networking, and AWS technologies. I enjoy solving problems
          through technology and continuously developing new skills.
        </p>

        {/* Professional links */}
        <div className="hero-buttons">
          <a href="#projects">View Projects</a>

          <a href="/resume.pdf">Resume</a>

          <a
            href="https://github.com/AaronSSands"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aaronsands1988/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
