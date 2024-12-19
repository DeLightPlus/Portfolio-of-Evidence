import React from 'react';
import './RotatingCircles.css'; // Import the CSS file

const RotatingCircles = () => {
  return (
    <div className="circle-container">
        <div className="circle circle-outer">
            <div className="circle circle-middle">
                <div className="circle circle-inner"></div>
            </div>
        </div>
    </div>
  );
};

export default RotatingCircles;
