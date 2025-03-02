import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="/images/profile.jpg" alt="Nguyễn Nhật Min" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Minh N. N</h1>
        <p className="profile-vietnamese">Vietnamese: Nguyễn Nhật Minh</p>
        <div className="profile-title">Web/App  developer & AI researcher</div>
      </div>
    </div>
  );
};

export default ProfileCard;