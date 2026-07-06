import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      category: "Software Development",

      title: "Professional Portfolio",

      status: "Completed",

      description:
        "A responsive developer portfolio built with React and Vite. Includes dark mode, reusable components, and an integrated contact form.",

      technologies: ["React", "JavaScript", "CSS", "Vite", "EmailJS"],

      github: "https://github.com/AaronSSands/my-portfolio",

      demo: "https://AaronSSands.github.io/my-portfolio/",
    },

    {
      category: "Cloud & Infrastructure",

      title: "AWS Cloud Projects",

      status: "In Progress",

      description:
        "Hands-on AWS projects focused on cloud services, deployment, architecture, and understanding scalable infrastructure.",

      technologies: ["AWS", "Cloud Computing", "Networking"],

      github: "#",

      demo: "#",
    },

    {
      category: "Networking",

      title: "Networking Labs",

      description:
        "Practical networking exercises focused on infrastructure concepts, troubleshooting, and system communication.",

      technologies: ["Networking", "Linux", "Security"],

      github: "#",

      demo: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            category={project.category}
            title={project.title}
            status={project.status}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
