import React from 'react';
import './Interests.css';

const Interests = () => {
  const interestsList = [
    {
      title: "Software Development",
      icon: "data-icon",
      bgColor: "#fff9f0",
      iconColor: "#ffc107",
    },
    {
      title: "AI Applications",
      icon: "llm-icon",
      bgColor: "#f0f4ff",
      iconColor: "#a855f7",
    }
  ];

  return (
    <div className="interests">
      <h2 className="section-title">My interests</h2>
      
      <div className="interests-grid">
        {interestsList.map((interest, index) => (
          <div 
            className="interest-card" 
            key={index}
            style={{ backgroundColor: interest.bgColor }}
          >
            <div 
              className={`interest-icon ${interest.icon}`}
              style={{ color: interest.iconColor }}
            ></div>
            <div className="interest-title">{interest.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;