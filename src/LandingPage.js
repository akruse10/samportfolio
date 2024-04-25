import React from 'react';
import './App.css';  // Import specific CSS for the landing page

const LandingPage = ({ onContinue }) => {
  return (
    <div className="full-screen-background" onClick={onContinue}>
      <h1 className="centered-title">Sam Kruse</h1>
    </div>
  );
};

export default LandingPage;
