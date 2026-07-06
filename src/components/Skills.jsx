import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Software Development",

      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "REST APIs",
        "Git & GitHub",
      ],
    },

    {
      title: "Cloud & Infrastructure",

      skills: [
        "AWS",
        "Cloud Computing",
        "Networking",
        "Linux",
        "Virtualization",
        "Security Fundamentals",
      ],
    },

    {
      title: "Tools & Technologies",

      skills: [
        "VS Code",
        "PowerShell",
        "npm",
        "Vite",
        "Git",
        "Chrome DevTools",
      ],
    },
  ];

  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>{group.title}</h3>

            <div className="skills-container">
              {group.skills.map((skill) => (
                <span className="skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
