import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Interests from '../../components/Interests/Interests';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import './Home.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="sidebar">
          <ProfileCard />
          <SocialLinks />
          <ContactInfo />
        </div>
        <div className="content">
          <AboutMe />
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default Home;