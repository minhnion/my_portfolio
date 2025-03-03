import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "360 Air Pollution",
      description:
        "Developed an website visualize emission distributions into maps",
      technologies: ["React Js", "Express Js"],
      timeline: "Nov 2024 - Present",
      link: "https://inest.gu-bdlab.com/",
      image: "/images/360-air-pollution.jpg",
    },
    {
      id: 2,
      title: "Library Management System",
      description:
        "Created an website to help librarians manage library and customers can search book information",
      technologies: ["React Js", "Flask", "Firebase"],
      timeline: "Oct 2024 - Jan 2025",
      link: "https://library-management-system-4m.web.app/",
      image: "images/library-management-system.jpg",
    },
    {
      id: 3,
      title: "Apartment Management",
      description:
        "Built a cross-platform application to help residents track and pay their fees online through VNPay. Additionally, it allows managers to monitor an apartment.",
      technologies: ["Flutter", "Flask", "Firebase"],
      timeline: "Oct 2024 - Jan 2025",
      link: "https://apartment-management-3928c.web.app/",
      image: "/images/apartment-management.jpg",
    },
    {
      id: 4,
      title: "Predict student grade",
      description:
        "Used algorithms in machine learning such as: linear regression, random forest, ANN to predict grade of student.",
      technologies: ["Pandas", "Numpy", "Matplotlib", "Scikit-learn", "Tensorlow"],
      timeline: "Jan 2025",
      link: "https://github.com/minhnion/predict-grade-of-student",
      image: "/images/predict-student-grade.jpg",
    },
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <div className="content">
          <div className="projects-header">
            <h1 className="section-title">Projects</h1>
            <div className="section-underline"></div>
            <p className="projects-description">
              Here are some of the key projects I've worked on, showcasing my
              skills in Software Development and Machine Learning.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-timeline">{project.timeline}</div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span className="tech-tag" key={index}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
