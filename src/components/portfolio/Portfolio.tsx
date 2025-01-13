// Portfolio.jsx
import React from 'react';
import Parallaxor from './Parallaxor/Parallaxor';
import './Portfolio.css';
import SideBar from './sidebar/sidebar';
import UserBlock from './userBlock/UserBlock';

const Portfolio = () => {

  
  return (
    <>
      {/* Profile Icon @top-right-corner */}
      <UserBlock />
      {/* Fixed Aside Menu */}
      <SideBar />

      <Parallaxor />
          
    </>
  );
};

export default Portfolio;
