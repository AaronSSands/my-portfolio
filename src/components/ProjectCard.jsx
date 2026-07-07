import { motion } from "framer-motion";

function ProjectCard({
  category,
  title,
  status,
  description,
  technologies,
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

      <h3>{title}</h3>

      <span
        className={`status ${
          status === "Complete"
            ? "complete"
            : status === "In Progress"
              ? "progress"
              : "planned"
        }`}
      >
        {status}
      </span>

      <p>{description}</p>

      <div className="skills-container">
        {technologies.map((tech) => (
          <span className="skill" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {github && github !== "#" && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}

        {demo && demo !== "#" && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
