import React from 'react';

function PhotoViewer({ photo, onPhotoClick, onNumberClick, pageNumber, onQuestionMarkClick }) {
    return (
        <div className="photo-viewer" onClick={onPhotoClick}>
            <img src={photo} alt="Display" style={{ width: '100%', height: 'auto' }} />
            <div className="page-number" onClick={e => {
                e.stopPropagation();  // Prevents the photo click event from firing when clicking on the page number
                onNumberClick();
            }}>
                {pageNumber}
            </div>
            <h1 className="info-link" onClick={e => {
                e.stopPropagation();  // Prevents the photo click event from firing when clicking on the "?"
                onQuestionMarkClick();
            }}>?</h1>
        </div>
    );
}

export default PhotoViewer;
