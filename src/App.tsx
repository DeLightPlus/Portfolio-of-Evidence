import "./App.css";
import React, { useState, useEffect } from 'react';

import AnimatedCursor from "./components/cursor/AnimatedCursor";

import Portfolio from "./components/portfolio/Portfolio"
import SymbolCircle from "./components/particles/SymbolCircle";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() 
{
  const [showSplash, setShowSplash] = useState(true);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [chatMaximized, setChatMaximized] = useState(false);

  const handleSplashFinish = () => {
    setShowSplash(false);
    setChatMinimized(true);  // Minimize after splash screen
  };

  const handleChatToggle = () => {
    setChatMinimized(!chatMinimized);
    setChatMaximized(false);  // Reset maximize on minimize
  };

  const handleChatMaximize = () => setChatMaximized(true);
  const handleChatRestore = () => setChatMaximized(false);

  return (

    <>
    {/* <AnimatedCursor /> */}

    {
      showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />  
      ):(
        <>
          {
            chatMinimized && (
              <button onClick={handleChatToggle} className="minimized-chat">
                Chat 🤖
              </button>
            )
          }

          {
            !chatMinimized && (
              <div
                className={`chat-modal ${
                  chatMaximized ? "maximized" : "restored"
                }`}
              > 

                <div className="chat-modal-content">
                  <div className="chat-header">
                    <h2>De-Light<small><sub>Plus Chat</sub></small></h2>
                    <div className="chat-controls">
                      <button
                        onClick={handleChatToggle}
                        className="control-btn minimize-btn"
                      > _
                      </button>

                      {
                        chatMaximized ? (
                          <button
                            onClick={handleChatRestore}
                            className="control-btn restore-btn"
                          >
                            ◱
                          </button>
                        ) : (
                          <button
                            onClick={handleChatMaximize}
                            className="control-btn maximize-btn"
                          >
                            ▢
                          </button>
                        )
                      }

                    </div>
                  </div>

                  <SplashScreen onFinish={handleChatToggle} />
                </div>
              </div>
            )
          }


          <Portfolio />

          <div className="app">
            {/* <h2>Hello World</h2> */}     

            <div className="container">
              <section className="content-section" id="about">
                <p className="tags">{'< >'} </p>
                <div className="about-info">
                  <h1>Hi,</h1>
                  <h2>Name's <span>P</span><span>P</span>eter,</h2>
                  <h2>Full-stack Developer</h2>
                  <p>Front-End | Back-End Developer</p>
                  <button className="contact-btn">Contact Me</button>
                </div>
                <p className="tags">{'< / >'}</p>
                
              </section>
              <SymbolCircle />

              <section className="content-section" id="skills">
                  <h1>Skills</h1>
                  <p>Here you can list your technical skills.</p>
              </section>

              <section className="content-section" id="work">
                  <h1>Work</h1>
                  <p>Highlight some of your work experience.</p>
              </section>

              <section className="content-section" id="contacts">
                  <h1>Contact</h1>
                  <p>Provide your contact details or a form here.</p>
              </section>
                
              <section className="content-section" id="projects">
                <h1>Projects</h1>
                <p>Showcase your projects with descriptions or links.</p>
              </section>
            </div>

            
          
          </div>
        </>
      )
    }
   
    </>
    
  );
}

export default App;
