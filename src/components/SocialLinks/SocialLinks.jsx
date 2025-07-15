import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    { platform: "github", url: "https://github.com/minhnion", icon: "github-icon" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/minh-nguy%E1%BB%85n-nh%E1%BA%ADt-826359271/", icon: "linkedin-icon" },
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a 
          href={link.url} 
          target='_blank'
          rel="noreferrer"
          className="social-button" 
          key={index}
          aria-label={link.platform}
        >
          <div className={`social-icon ${link.icon}`}></div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;