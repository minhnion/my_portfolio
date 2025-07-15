import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "360 Air Pollution",
      description:
        "Developed an website visualize emission distributions into maps.",
      technologies: ["React Js", "Express Js", "MongoDB", "Node Js"],
      timeline: "Nov 2024 - Present",
      link: "https://inest-test.leira.com.vn/",
      image: "/images/360-air-pollution.jpg",
    },
    {
      id: 2,
      title: "Kitchen care E-commerce",
      description:
        "Built an e-commerce website for kitchen care products, allowing users to browse and purchase items online.",
      technologies: ["Next Js", "Express Js", "MongoDB", "Node Js"],
      timeline: "May 2024 - Present",
      link: "https://demo.kitchencare.vn/",
      image: "/images/kitchen-care.jpg",
    },
    {
      id: 3,
      title: "Medical Chat bot",
      description:
        "Developed a web-based chatbot to assist users with medical inquiries, provide health information, and guide them toward appropriate care based on symptoms.",
      technologies: ["NLP", "RAG", "Flask", "ReactJs", "MongoDB"],
      timeline: "May 2025",
      link: "https://github.com/minhnion/Medical-chat-bot-Backend",
      image: "/images/medical_chatbot.jpg",
    },
    {
      id: 4,
      title: "Deep fake detector",
      description:
        "A system that detects fake or manipulated images by analyzing visual inconsistencies using computer vision and deep learning techniques.",
      technologies: ["Computer Vision", "PyTorch", "FastAPI", "ReactJs"],
      timeline: "Mar 2025",
      link: "https://github.com/minhnion/RealFake_Detector",
      image: "/images/deepfake_detector.jpg",
    },
    {
      id: 5,
      title: "Fetal Health Classification",
      description:
        "Applied machine learning models to classify fetal health and neurobehavioral states based on cardiotocography signals.",
      technologies: ["Pandas", "Numpy", "Matplotlib", "Scikit-learn", "Pytorch"],
      timeline: "Apr 2025 - Jun 2025",
      link: "https://github.com/minhnion/CTG-Based_Fetal_Health_and_Neurobehavior_Classification",
      image: "/images/Fetal-Health-Classification.jpg",
    },
    {
      id: 6,
      title: "IOV Mobile App",
      description:
        "Developed a cross-platform mobile application for IOV to manage tasks related to the installation and assembly of automotive devices efficiently.",
      technologies: ["Flutter", "Firebase"],
      timeline: "Mar 2025",
      link: "https://apps.apple.com/vn/app/iov/id6740426999?l=vi&platform=iphone",
      image: "/images/iov_app.jpg",
    },
    {
      id: 7,
      title: "Library Management System",
      description:
        "Created an website to help librarians manage library and customers can search book information",
      technologies: ["React Js", "Flask", "Firebase"],
      timeline: "Oct 2024 - Jan 2025",
      link: "https://library-management-system-4m.web.app/",
      image: "images/library-management-system.jpg",
    },
    {
      id: 8,
      title: "Apartment Management",
      description:
        "Built a cross-platform application to help residents track and pay their fees online through VNPay. Additionally, it allows managers to monitor an apartment.",
      technologies: ["Flutter", "Flask", "Firebase"],
      timeline: "Oct 2024 - Jan 2025",
      link: "https://apartment-management-3928c.web.app/",
      image: "/images/apartment-management.jpg",
    },
    {
      id: 9,
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
              skills in Software Development and AI applications.
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
