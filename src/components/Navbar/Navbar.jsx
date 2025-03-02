import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { title: "About", path: "/", icon: "user-icon" },
    { title: "Resume", path: "/resume", icon: "resume-icon" },
    { title: "Projects", path: "/projects", icon: "projects-icon" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map((item, index) => (
          <Link 
            to={item.path} 
            key={index}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <div className={`nav-icon ${item.icon}`}></div>
            <div className="nav-title">{item.title}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;