import React, { useState } from 'react';
import LandingPage from './LandingPage.js';  // Adjust the path according to your project structure
import './App.css';
import PhotoViewer from './PhotoViewer';
import GridViewer from './GridViewer';
import InfoPage from './InfoPage';



  function App() {
    const [view, setView] = useState('landing');  // landing, photo, grid, info
    const [currentIndex, setCurrentIndex] = useState(0);
    const photos = ['000040050007.jpg', '000040060004.jpg', '000666410001.jpg', '20210130-img2420.jpg', 'img1154.jpg', 'img1470.jpg', 'img2632.jpg', 'img2676.jpg', 'img268.jpg', 'img317.jpg', 'img327.jpg', 'img3572.jpg', 'img3575.jpg', 'img3585.jpg', 'img3586.jpg', 'img3587.jpg', 'img3592.jpg', 'img3594.jpg', 'img3605.jpg', 'img3609.jpg', 'img3610-2.jpg', 'img3611.jpg', 'img3613.jpg', 'img3615.jpg', 'img3618.jpg', 'img3621.jpg', 'img3622.jpg', 'img3623.jpg', 'img3629.jpg', 'img3631.jpg', 'img3634-2.jpg', 'img3635.jpg', 'img3636.jpg', 'img3653.jpg', 'img3654.jpg', 'img3657.jpg', 'img3663.jpg', 'img3665.jpg', 'img3668.jpg', 'img3670.jpg', 'img3672.jpg', 'img3673.jpg', 'img3677.jpg', 'img3685.jpg', 'img3687.jpg', 'img3690.jpg', 'img3693.jpg', 'img3703.jpg', 'img3704.jpg', 'img3705.jpg', 'img3706.jpg', 'img3710.jpg', 'img3711.jpg', 'img3713.jpg', 'img3714.jpg', 'img3718.jpg', 'img3721.jpg', 'img3722.jpg', 'img3723.jpg', 'img3724.jpg', 'img3725.jpg', 'img3726.jpg', 'img3727.jpg', 'img3728.jpg', 'img3729.jpg', 'img3730.jpg', 'img3732.jpg', 'img3733.jpg', 'img3734.jpg', 'img3735.jpg', 'img3736.jpg', 'img590.jpg', 'img597.jpg'];  // Make sure these images are in the `public` directory


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
