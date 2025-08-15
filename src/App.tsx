import React, { useEffect, useState } from 'react';
import './App.css';
import {ProjectCard, Project} from './components/ProjectCard'
import {projects, postsURL} from './APIHelpers'
// import {sortPosts} from './dataServices'
import {Post, PostCard} from './components/PostCard'


function App() {

  const [posts, setPosts] = useState<Post[]>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() =>{

    const getPosts = async (postsURL: string) => {
      await fetch(postsURL)
              .then(resp=> resp.json())
              .then((posts) => {
                setLoading(false)
                let sorted: Post[] = posts.sort((a: Post, b: Post) => {return b.positive_reactions_count && a.positive_reactions_count ? b.positive_reactions_count - a.positive_reactions_count : null} )
                setPosts(sorted)
              })
  }
  getPosts(postsURL)
  }, [])

  const renderProjects = () => {
    return projects.map((project: Project) => <ProjectCard title={project.title} description={project.description} demo={project.demo} github={project.github} stack={project.stack} />)
  }

  const renderPosts = () => {

    return posts && posts.map( (post: Post) =>  <PostCard title={post.title} description={post.description} readable_publish_date={post.readable_publish_date} url={post.url} />)
  }

  return (
    <div className="App">
      <div className="content">
        <div className="header">
              <div className="pancake">
                <div className="profile-image"/>
                <div className="bio">
                  <p>Hello! I am </p> <h1>Santiago Salazar Pavajeau</h1> <p> a Senior Site Reliability Engineer passionate about making complex systems fast, resilient, and easy to operate. From managing 2k+ clusters in AWS to automating away thousands of alerts, I design infrastructure that just works — and keeps working.</p>
                  <button><a href="https://www.linkedin.com/in/santiago-salazar-pavajeau/" >LinkedIn</a></button> 
                  <button><a href="https://github.com/SantiagoSalazarPavajeau">Github</a></button>
                  <button><a href="https://drive.google.com/file/d/1XHk5-maozwReayUIgDEctcfgoeWjeZgO/view?usp=sharing">Resume</a></button>
                  <button><a href="https://dev.to/santispavajeau">Blog</a></button>
                </div>
              </div>
        </div>
          
        <div className="header2">
          {renderProjects()}
        </div>
        <div className="blogs">
          <div className="header3">
          <h1 className="blog-title">Technical Blog:</h1>   
            {renderPosts()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
