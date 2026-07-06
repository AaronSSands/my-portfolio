function Education() {
  const learning = [
    {
      title: "Cloud & Network Engineering",

      organization: "Western Governors University",

      description:
        "Currently pursuing a degree focused on cloud computing, networking, infrastructure, and technology solutions with an AWS focus.",
    },

    {
      title: "Software Development",

      organization: "Self-Directed Learning",

      description:
        "Building practical experience through React development, modern JavaScript, web technologies, and application deployment.",
    },

    {
      title: "Cloud Certifications",

      organization: "AWS Learning Path",

      description:
        "Developing knowledge of AWS services, cloud concepts, architecture, security, and best practices.",
    },
  ];

  return (
    <section id="education">
      <h2>Education & Learning</h2>

      <div className="project-grid">
        {learning.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>

            <h4>{item.organization}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
