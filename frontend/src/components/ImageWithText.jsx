// ImageWithText.jsx
import React from 'react';
import '../assets/styles/imagewithtext.css';

const ImageWithText = ({ image, text }) => {
  return (
    <div className="image-with-text-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay-text">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default ImageWithText;
