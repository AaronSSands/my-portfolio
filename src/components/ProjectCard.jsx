import { motion } from "framer-motion";

function ProjectCard({
  category = "Software Development",
  title = "Professional Portfolio",
  status = "Completed",
  description = "A professional project showcasing technical skills and continued learning.",
  technologies = ["React", "JavaScript", "CSS", "Vite", "EmailJS", "HTML"],
  github,
  demo,
}) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p>
        <strong>{category}</strong>
      </p>

      <p className="project-status">{status}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="skills-container">
        {technologies.map((tech) => (
          <span className="skill" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href={demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
