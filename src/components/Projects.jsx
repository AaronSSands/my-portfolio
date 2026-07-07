import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2>Active Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
