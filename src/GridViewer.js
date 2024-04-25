import React from 'react';

function GridViewer({ photos, onPhotoClick }) {
  return (
    <div className="grid-viewer">
      {photos.map((photo, index) => (
        <div className="grid-cell" key={index}>
        <img key={index} src={photo} alt={`Photo ${index + 1}`} onClick={() => onPhotoClick(index)} />
        </div>
      ))}
    </div>
  );
}

export default GridViewer;
