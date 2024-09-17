import React from 'react';
import './ProfileList.css';

const ProfileList = ({ profiles, onLocationClick }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.profilePic} alt={`${profile.name}'s profile`} className="profile-pic" />
          <h2>{profile.name}</h2>
          <p><strong>Mobile No:</strong> {profile.mobile}</p>
          <p><strong>Gender:</strong> {profile.gender}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Qualification:</strong> {profile.qualification}</p>
          <p><strong>Summary:</strong> {profile.summary}</p>
          <div className="profile-buttons">
            <button className="location-btn" onClick={() => onLocationClick(profile)}>Location</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
