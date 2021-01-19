import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProjectCard, Project} from './components/ProjectCard'
import projects from './data'

function App() {

  const renderProjects = () => {
    return projects.map((project: Project) => <ProjectCard title={project.title} description={project.description} demo={project.demo} github={project.github} stack={project.stack} />)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <header className="header">
          <div className="profile-card">
              <div className="pancake">
                <div className="profile-image"/>
                <div className="bio">
                  <p>Hello, I am </p> <h1>Santiago Salazar Pavajeau</h1> <p>I am a software engineer with a background in business and science with a passion for collaboration and innovative technical projects.</p>
                  <button><a href="https://www.linkedin.com/in/santiago-salazar-pavajeau/" >LinkedIn</a></button> 
                  <button><a href="https://twitter.com/santispavajeau">Twitter</a></button>
                  <button>Resume</button>
                  <button>Blog</button>
                </div>
              </div>
          </div>
          </header>
          
          <header className="header2">
            {renderProjects()}
          </header>

        </div>
      </header>
    </div>
  );
}

export default App;
