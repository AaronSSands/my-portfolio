function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Technologies:</strong> {technologies}
      </p>

      <a href={link} target="_blank">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
