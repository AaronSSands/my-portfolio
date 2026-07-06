function CloudJourney() {
  const focusAreas = [
    {
      title: "Cloud Computing",

      description:
        "Building knowledge of cloud concepts, infrastructure, deployment models, and scalable technology solutions.",
    },

    {
      title: "AWS Technologies",

      description:
        "Developing hands-on experience with AWS services, cloud architecture concepts, and best practices.",
    },

    {
      title: "Networking",

      description:
        "Strengthening knowledge of network fundamentals, communication protocols, and infrastructure design.",
    },

    {
      title: "Continuous Learning",

      description:
        "Expanding technical skills through coursework, projects, certifications, and hands-on experimentation.",
    },
  ];

  return (
    <section id="cloud">
      <h2>Cloud & Engineering Journey</h2>

      <p>
        I am currently pursuing a degree in Cloud and Network Engineering at
        Western Governors University with an AWS focus. My goal is to continue
        developing skills across cloud infrastructure, networking, and software
        development.
      </p>

      <div className="project-grid">
        {focusAreas.map((area) => (
          <div className="card" key={area.title}>
            <h3>{area.title}</h3>

            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CloudJourney;
