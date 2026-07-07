import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2>System Profile</h2>
      <div className="about-content">
        <p>
          I am a Cloud and Network Engineering student at Western Governors
          University with an AWS focus, building practical experience across
          software development, cloud technologies, and infrastructure.
        </p>

        <p>
          My current development focus is creating responsive web applications
          using React and JavaScript while strengthening my understanding of
          cloud architecture, networking concepts, and modern technology
          solutions.
        </p>

        <p>
          I enjoy learning how applications are built from the user interface
          all the way through deployment and the underlying systems that support
          them.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
