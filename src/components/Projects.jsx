import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description:
        "A React application for managing tasks with reusable components.",
      technologies: "React, JavaScript, CSS",
      link: "https://github.com/yourusername/task-manager",
    },

    {
      title: "Weather Dashboard",
      description: "A weather application using API calls and dynamic data.",
      technologies: "React, API, JavaScript",
      link: "https://github.com/yourusername/weather-app",
    },

    {
      title: "Portfolio Website",
      description: "My personal developer portfolio built with React.",
      technologies: "React, Vite, GitHub Pages",
      link: "https://github.com/yourusername/my-portfolio",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
