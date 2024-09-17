import React, { useState } from 'react';
import ProfileList from './Components/ProfileList';
import MapComponent from './Components/MapComponent';
import './App.css';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const profiles = [
    { 
      id: 1, 
      name: 'Pratik Mishra', 
      profilePic: 'https://randomuser.me/api/portraits/men/9.jpg', 
      mobile: '8423697457', 
      gender: 'Male', 
      address: '123 Akurdigaon', 
      lat: 18.6527534, 
      lng: 73.7801387, 
      qualification: 'B.Sc. Computer Science', 
      summary: 'An experienced software engineer with 5 years of expertise in frontend development.' 
    },
    { 
      id: 2, 
      name: 'Ubaid Khan', 
      profilePic: 'https://randomuser.me/api/portraits/men/4.jpg', 
      mobile: '6478154863', 
      gender: 'Male', 
      address: '456 Chakan', 
      lat: 18.7311036, 
      lng: 73.849803, 
      qualification: 'BBA(CA)', 
      summary: 'Experienced in creating Computer Application with 10 years of experience.' 
    },
    { 
      id: 2, 
      name: 'Shreya Sharma', 
      profilePic: 'https://randomuser.me/api/portraits/women/8.jpg', 
      mobile: '7245983219', 
      gender: 'Female', 
      address: '235 Ravet', 
      lat: 18.6522574, 
      lng: 73.7418967, 
      qualification: 'M.Sc. Data Science', 
      summary: 'A data scientist with a passion for machine learning and data analytics and 5 years experience.' 
    }
  ];

  const handleLocationClick = (profile) => {
    setSelectedProfile(profile);
    setShowMap(true); 
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  return (
    <div className="app">
      <ProfileList profiles={profiles} onLocationClick={handleLocationClick} />
      {showMap && (
        <div className="map-container">
          <MapComponent selectedProfile={selectedProfile} />
          <button onClick={handleCloseMap} className="close-map-btn">Close Map</button>
        </div>
      )}
    </div>
  );
};

export default App;
