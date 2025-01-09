
import React from 'react';
import SymbolCircle from '../../particles/SymbolCircle';
import RotatingCircles from '../../particles/RotatingCircles';


import About from '../About';
import Background from '../Background'; //Educational-Background
import SkillsMatrix from '../Skills/SkillsMatrix';
import WorkExperience from '../WorkExperience';
import Projects from '../Projects/Projects';
import Contact from '../Contact';



function Parallaxor() {
  return (
    <div className="app">    
        <div className="container"> {/* plx-wrp */}
            <section className="content-section" id="about"> {/* plx-grp */}
                <RotatingCircles />
                <div className="intro-layer">
                    <p className="tags">{'< >'} </p>
                        <div className="about-info">
                            <h1><span>H</span>i there</h1>
                            <h2 className="name">Name's 
                                <span className="shadow-text">P</span>
                                <span className="highlight-text">P</span>eter,
                            </h2>
                            <div className="smry">
                                <h3>Junior Web Developer</h3>
                                <p>Front-End | Back-End Developer</p>
                            </div>
                            
                            {/* <button className="contact-btn">Contact Me</button> */}
                        </div>
                    <p className="tags">{'< / >'}</p>
                </div>

                <div className="base-layer">
                    <SymbolCircle />
                </div> 

                <div className="about-me-layer" id='about-me'>
                    <About />
                </div>

                <div className="mid-layer">
                    <img src="src/assets/20240926-main.png" width={720}/>
                </div>                                

            </section>

            <section className="content-section" id="education">
                
                <div className="top-layer">
                    <p>Educational Background</p>                    
                </div>

                <Background />
                
            </section>


            <section className="content-section" id="skills">
                
                <div className="top-layer">
                    <p>Skills Matrix</p>                    
                </div>
                <SkillsMatrix />
                
            </section>

            <section className="content-section" id="work">
                <div className="top-layer">
                    <p className="section-title">Professional Work Experience</p>
                </div>               
                <WorkExperience />
            </section>

            <section className="content-section" id="projects">
                <div className="top-layer">
                    <p className="section-title">Projects</p>
                </div>  
                <Projects />
            </section>

            <section className="content-section" id="contacts">
               <Contact/>                
            </section>
            
            
        </div>           
            
    </div>
  )
}

export default Parallaxor

