import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="section-title">About me</h2>
      <div className="section-underline"></div>
      
      <div className="about-content">
        <p>
          I am a third-year bachelor's student at Hanoi University of Science and Technology, 
          majoring in Computer Science with a specialization in Software Development. 
          Additionally, I am also studying Machine Learning and AI.
        </p>
        
        <p>
          I am working at the
          <a href='https://www.facebook.com/profile.php?id=61567861203820' target='_blank' rel="noreferrer"> AI4LIFE Research Center</a>, 
          Hanoi University of Science and Technology under the supervision of Associate Professor, PhD 
          <a href="https://www.facebook.com/profile.php?id=61567861203820"  target='_blank' rel="noreferrer"> Nguyen Phi Le</a>.
        </p>
        
        <p>
          My research focuses on Web/App development and AI applications. 
          My current project involves studying air pollution in Vietnam and visualizing emission distribution maps on the Web.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;