// Portfolio.jsx
// import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <>
      {/* Fixed Aside Menu */}
      <aside className="fixed-menu">
        <div className="logo">
          <div className="logo-actual">
            <div className="fstLetter">K</div>
            <div className="sndLetter">P</div>
          </div>

          <div className="nameNstack">
            <div className="name">Peter</div>
            <div className="description">
              Full-stack developer
            </div>
          </div>

                 
          
        </div>

        <div className="menu">
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contacts</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="social-icons">
          <div>in</div>
          <div>G</div>
          <div>f</div>
        </div>
      </aside>     
    </>
  );
};

export default Portfolio;
