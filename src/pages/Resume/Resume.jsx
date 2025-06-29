import React from "react";
import "./Resume.css";

const Resume = () => {
  const education = [
    {
      school: "Hanoi University of Science and Technology",
      degree: "Computer Science",
      specialization: "Web/App developer",
      period: "2022 - Present",
      description:
        "CPA: 3.86/4.0 , TOEIC: 795/990, Twice awarded Academic Achievement Scholarship Type A in university, Valedictorian of block A00, Hung Yen Province 2022",
    },
  ];

  const experience = [
    {
      position: "Web developer",
      company: "AI4LIFE Research Center, HUST",
      period: "November 2024 - Present",
      responsibilities: [
        "Develop Web for realistic projects using ReactJs, NodeJs, ExpressJs, MongoDB",
        "Visualizing emission distribution maps on the web",
        "Experience working in a team following the Agile model",
      ],
    },
    {
      position: "AI Researcher",
      company: "AI4LIFE Research Center, HUST",
      period: "November 2024 - Present",
      responsibilities: [
        "Research on Machine Learning and common algorithms such as: Regression, SVM, Decision Tree ...",
        "Implementing and evaluating deep learning models for object segmentation in computer vision applications",
      ],
    },
    {
      position: "App mobile developer",
      company: "BK STAR Center",
      period: "August 2024 - Present",
      responsibilities: [
        "Used the Flutter framework to develop cross-platform applications",
      ],
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Html", "Css", "JavaScript", "Dart", "Python"],
    },

    {
      category: "Web/App framework",
      items: ["React Js", "Next Js", "Flutter"],
    },

    {
      category: "Machine Learning & AI",
      items: [
        "Numpy",
        "Pandas",
        "Scikit-learn",
      ],
    },

    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "Postman", "Firebase"],
    },
  ];

  return (
    <div className="resume-page">
      <div className="container">
        <div className="content">
          <div className="resume-header">
            <h1 className="section-title">Resume</h1>
            <div className="section-underline"></div>
            <div className="resume-actions">
              <a href="/resume.pdf" download className="download-btn">
                Download PDF
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <div className="resume-item-header">
                  <h3 className="resume-item-title">{edu.school}</h3>
                  <span className="resume-item-period">{edu.period}</span>
                </div>
                <div className="resume-item-subtitle">
                  {edu.degree}, Specialization in {edu.specialization}
                </div>
                <div
                  className="resume-item-description"
                  dangerouslySetInnerHTML={{
                    __html: edu.description.replace(/, /g, "<br />"),
                  }}
                />
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            {experience.map((exp, index) => (
              <div className="resume-item" key={index}>
                <div className="resume-item-header">
                  <h3 className="resume-item-title">{exp.position}</h3>
                  <span className="resume-item-period">{exp.period}</span>
                </div>
                <div className="resume-item-subtitle">{exp.company}</div>
                <ul className="resume-item-list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div className="skill-group" key={index}>
                  <h3 className="skill-group-title">{skillGroup.category}</h3>
                  <div className="skills-list">
                    {skillGroup.items.map((skill, i) => (
                      <span className="skill-item" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
