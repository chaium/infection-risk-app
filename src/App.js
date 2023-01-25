import React from 'react';
import profileImage from './img/chai.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Infection Risk App</h1>
      <h2>Author: Chai Um</h2>
      <img src={profileImage} alt="profile-image" /> 
    </div>
  );
}

export default App;
