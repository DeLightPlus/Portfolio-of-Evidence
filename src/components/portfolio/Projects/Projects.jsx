import { useState } from 'react';
import './Projects.css';

// Data for the projects
const projects = [
  {
    title: 'Weather App (OpenWeatherMap API)',
    description: 'A weather forecasting app that fetches real-time weather data using the OpenWeatherMap API.',
    technologies: ['React', 'OpenWeatherMap API', 'CSS'],
    duration: 'July 2024 – October 2024',
    previewImage: 'path/to/weather-app-image.jpg', 
    livePreviewLink: 'https://weather-app-demo-link.com',
    keyFeatures: [
      'Real-time weather data fetching',
      'Location search functionality',
      'Temperature unit conversion (Celsius/Fahrenheit)'
    ],
    challenges: [
      'Handling asynchronous nature of fetching data: Used async/await to handle API calls.',
      'Managing user input errors: Implemented input validation for city name errors to avoid crashes.'
    ]
  },
  {
    title: 'ShoppingList App (Redux Toolkit)',
    description: 'A shopping list app that allows users to add, remove, and manage items, using Redux Toolkit for state management.',
    technologies: ['React', 'Redux Toolkit', 'CSS'],
    duration: 'July 2024 – October 2024',    
    keyFeatures: [
      'State management with Redux Toolkit',
      'Add, remove, and edit shopping list items',
      'Data persistence using localStorage'
    ],
    challenges: [
      'Managing complex state transitions: Used Redux Toolkit\'s createSlice for better state handling.',
      'Persisting data across app restarts: Implemented localStorage to keep shopping list data intact.'
    ],
    previewImage: 'path/to/shoppinglist-app-image.jpg', 
    livePreviewLink: 'https://shoppinglist-app-demo-link.com',
  },
  {
    title: 'TodoList App (SQLite3)',
    description: 'A simple todo list app where users can add, remove, and edit tasks, with SQLite3 as the local database.',
    technologies: ['React', 'SQLite3', 'CSS'],
    duration: 'July 2024 – October 2024',   
    keyFeatures: [
      'Local database with SQLite3 for task management',
      'CRUD functionality for tasks (Create, Read, Update, Delete)',
      'Task filtering by completion status'
    ],
    challenges: [
      'Integrating SQLite3 with React: Used async functions to interact with the database without blocking the main thread.',
      'Ensuring data persistence: Designed the SQLite schema to persist tasks even after app restarts.'
    ],
    previewImage: '', 
    livePreviewLink: '', 

  },
];

const Projects = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title"><span>m</span>lab <span>Code</span>Tribe <small>(June 2024-Present)</small></h2>
      <div className="projects-list">

        {/* Memory Game Project */}
        <div className="project-card">
          <h3 className="project-title">Memory Game</h3>
          <p className="project-description">
            A fun and interactive card-guessing game that challenges your memory. 
            <br /> Built with DOM manipulation, this game allows players to match pairs of cards within a time limit.
          </p>
          <p className="project-technologies">
            <strong>Technologies Used:</strong> HTML, CSS, JavaScript
          </p>

          {/* Key Features Section */}
          <div className="project-features">
            <h4>Key Features:</h4>
            <ul>
              <li>Interactive card matching gameplay</li>
              <li>Timed challenge to improve memory</li>
              <li>Dynamic card shuffling and pair matching</li>
            </ul>
          </div>          

          {/* Challenges Faced and Solutions */}
          <div className="project-challenges">
            <h4>Challenges Faced and Solutions:</h4>
            <ul>
              <li>Challenge: Managing state of cards and match detection.<br />
                Solution: Used an array to track card states and compare matched pairs effectively with JavaScript.
              </li>
              <li>Challenge: Synchronizing time limit and game over condition.<br />
                Solution: Set up a countdown timer that halts the game when time runs out or all pairs are matched.
              </li>
            </ul>
          </div>
          {/* <hr/> */}

          {/* Preview Button and Modal */}
          <div className="project-actions">
            <button className="preview-btn" onClick={toggleModal}>
              Try a Preview 
            </button>
          </div>

          {/* Project Image Preview */}
          <div className="project-image">
            <img src="src/assets/screenshots/memorygame_Ss.PNG" alt="Memory Game Preview" className="project-preview-img" />
          </div> 

          {/* Modal for Preview */}
          <div className={`game-modal ${!isOpen ? 'go-back' : ''}`}>
            <button onClick={toggleModal}> ◀ Close The Game</button>
            <iframe 
              src={"src/components/portfolio/Projects/memory-game/index.html"} // Path to your HTML file in the public folder
              width="100%"
              height="100%"
              title="Memory Game Preview"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Dynamic Project Cards */}
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>

            {/* Key Features Section */}
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Challenges Faced Section */}
            <div className="project-challenges">
              <h4>Challenges Faced and Solutions:</h4>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            {/* Project Image Preview */}
            <div className="project-image">
              <img src={project.previewImage} alt={project.title} className="project-preview-img" />
            </div>

            {/* Live Preview Link */}
            <div className="project-actions">
              <a href={project.livePreviewLink} target="_blank" rel="noopener noreferrer">
                <button className="preview-btn">View Live Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
