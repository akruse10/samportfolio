import React, { useState } from 'react';
import LandingPage from './LandingPage.js';  // Adjust the path according to your project structure
import './App.css';
import PhotoViewer from './PhotoViewer';
import GridViewer from './GridViewer';
import InfoPage from './InfoPage';
const images = require.context('../public/photos', false, /\.(jpg|jpeg|png)$/);


  function App() {
    const [view, setView] = useState('landing');  // landing, photo, grid, info
    const [currentIndex, setCurrentIndex] = useState(0);

 const photos = images.keys().map(images);

    const handlePhotoClick = () => {
      if (view === 'photo') {
        const nextIndex = (currentIndex + 1) % photos.length;
        setCurrentIndex(nextIndex);
      }
    };

    const handleQuestionMarkClick = () => {
       setView('info');
   };

    const handleInfoClick = () => {
      setView('photo');
    };

    const handleNumberClick = () => {
      setView('grid');
    };

    const handleGridPhotoClick = (index) => {
      setCurrentIndex(index);
      setView('photo');
    };

    const handleInfoPageClick = () => {
         setView('photo'); // Return to the photo viewer from the info page
     };

     const handleLandingPageClick = () => {
         setView('photo');
     };


  // Array of image filenames you want to include in your portfolio

  return (
          
          <div className="App">
              {view === 'landing' && (
                  <div className="full-screen-background" onClick={handleLandingPageClick}>
                      <h1 className="centered-title">Sam Kruse</h1>
                  </div>
              )}
              {view === 'photo' && (
                  <PhotoViewer
                      photo={photos[currentIndex]}
                      onPhotoClick={handlePhotoClick}
                      onNumberClick={handleNumberClick}
                      pageNumber={`${currentIndex + 1}/${photos.length}`}
                      onQuestionMarkClick={handleQuestionMarkClick}
                  />
              )}
              {view === 'grid' && (
                  <GridViewer
                      photos={photos}
                      onPhotoClick={handleGridPhotoClick}
                  />
              )}
              {view === 'info' && (
                  <InfoPage onInfoClick={handleInfoPageClick} />
              )}
          </div>
      );
  }

export default App;
