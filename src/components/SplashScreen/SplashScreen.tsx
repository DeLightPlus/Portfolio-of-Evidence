import React, { useState, useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish, onMinimize }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isComplete, setIsComplete] = useState(false);  
  const [typingMessage, setTypingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [countdown, setCountdown] = useState(10); 

  const questions = [
    "Hello, I'm De-Light-Plus, but you can call me DLP! What's your name?",
    "Nice to meet you! How are you feeling today?",
    "What brings you here to my creator's portfolio?",
    // "Press Enter or Click here to continue...",
  ];

  useEffect(() => {
    loadSavedMessages();
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (isComplete && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup
    }

    if (countdown <= 0) {
      handleFinish();
    }
  }, [isComplete, countdown]);

  const loadSavedMessages = () => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(savedMessages);
    if (savedMessages.length === 0) 
    {
      typeText(questions[0]);
    }
  };

  const typeText = (text) => {
    setIsTyping(true);
    let index = 0;
    setTypingMessage("");

    const interval = setInterval(() => {
        if (index < text.length) 
        {
            setTypingMessage((prev) => prev + text.charAt(index));
            index++;
        } 
        else 
        {
            clearInterval(interval);
            setMessages((prev) => [...prev, { text: text, from: "DLP" }]);
            setTypingMessage("");
            setIsTyping(false);
        }
    }, 50);
  };

  const handleUserInput = (e) => {
    if (e.key === "Enter" && userInput.trim() && !isTyping) 
    {
      const nextMessage = getNextQuestion();
      setMessages((prev) => [...prev, { text: userInput, from: "User" }]);
      setUserInput("");

      if (nextMessage) {
        setTimeout(() => typeText(nextMessage), 500);
      } else {
        setIsComplete(true);
      }
    }
  };

  const getNextQuestion = () => {
    const userMessages = messages.filter((msg) => msg.from === "User").length;
    return questions[userMessages + 1] || null;
  };

  const handleFinish = () => {
    onFinish(); 
  };

  return (
    <div className="splash-container">
        <div className="welcome-header">
            <h3>Welcome to </h3>
            <div className="logo-section">
                **********************************************************************************
                <h1>De-Light-Plus (DLP)<small>Chat</small></h1> 
                <p> Your friendly assistant to explore the portfolio and more.</p>
                **********************************************************************************
            </div>
        </div>
        
        <div className="intro-section">
            <br/>
            <p>De-Light-Plus (DLP) Chat is your personal assistant here to help you explore my portfolio. <br/>Feel free to ask me questions about my projects, skills, or anything you'd like to know!</p>
            <p>Let's start with a few quick questions to help guide you through the experience.</p>    
            <br/>       
        </div>

        
        <div className="splash-messages">
            {
                messages.map((msg, index) => (
                    <p key={index} className={msg.from === "DLP" ? "DLP" : "user"}>
                        {msg.from === "DLP" ? "DLP: " : "You: "} {msg.text}
                    </p>
                ))
            }

            {
            isTyping && (
            <p className="eliza typing">
                DLP: {typingMessage}
                <span className="cursor">|</span>
            </p>
            )
            }
        </div>

        {
            !isComplete && (
                <input
                type="text"
                className="input-box"
                placeholder="Type here and press Enter..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleUserInput}
                disabled={isTyping}
                />
            )
        }

        {
            isComplete && (
                <div className="progress-container">
                    <button className="continue-btn" onClick={handleFinish}>
                        Continue ({countdown}s)
                    </button>
                    <div className="progress-bar" style={{ width: `${countdown * 10}%` }} />
                </div>
            )
        }
    </div>
  );
};

export default SplashScreen;
