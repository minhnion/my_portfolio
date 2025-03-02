import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactInfo = [
    { 
      type: "Email", 
      value: "nguyenminh2k4pchy@gmail.com",
      icon: "email-icon"
    },
    { 
      type: "Phone", 
      value: "0912337555",
      icon: "phone-icon"
    },
    { 
      type: "Location", 
      value: "Hanoi, Vietnam",
      icon: "location-icon"
    },
    { 
      type: "Gender", 
      value: "Male",
      icon: "gender-icon"
    }
  ];

  return (
    <div className="contact-info">
      {contactInfo.map((info, index) => (
        <div className="contact-item" key={index}>
          <div className={`contact-icon ${info.icon}`}></div>
          <div className="contact-details">
            <div className="contact-type">{info.type}</div>
            <div className="contact-value">{info.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;