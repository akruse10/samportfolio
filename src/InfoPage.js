import React from 'react';

function InfoPage({ onInfoClick }) {
  return (
    <div className="info-page" onClick={onInfoClick}>
      <h1>sam.kruse92@gmail.com</h1>
      <p>Seattle, WA</p>
    </div>
  );
}

export default InfoPage;
