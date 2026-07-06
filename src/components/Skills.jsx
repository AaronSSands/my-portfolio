function Skills() {
  // Skills are stored as data so they can easily be updated later
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Vite",
    "Responsive Design",
    "REST APIs",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        // Creates a badge for each skill in the array
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
