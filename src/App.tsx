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
                setPosts(posts)
              })
  }
  getPosts(postsURL)
  }, [])

  const renderProjects = () => {
    return projects.map((project: Project) => <ProjectCard title={project.title} description={project.description} demo={project.demo} github={project.github} stack={project.stack} />)
  }

  const renderPosts = () => {
    return posts && posts.map( (post: Post) =>  <PostCard title={post.title} description={post.description} readable_publish_date={post.readable_publish_date} />)
  }

  return (
    <div className="App">

        <div className="header">
        {/* <img src={bg} alt="sky" /> */}
              <div className="pancake">
                <div className="profile-image"/>
                <div className="bio">
                  <p>Hello, I am </p> <h1>Santiago Salazar Pavajeau</h1> <p>I am a software engineer with a background in business and science with a passion for collaboration and innovative technical projects.</p>
                  <button><a href="https://www.linkedin.com/in/santiago-salazar-pavajeau/" >LinkedIn</a></button> 
                  <button><a href="https://twitter.com/santispavajeau">Twitter</a></button>
                  <button><a href="https://docs.google.com/document/d/1CMit1ahDwgmCB30EgI9euKEVLYz6YYXTIG7H19If2bg/edit?usp=sharing">Resume</a></button>
                  <button><a href="https://dev.to/santispavajeau">Blog</a></button>
                </div>
              </div>
        </div>
          
          <div className="header2">
            {renderProjects()}
          </div>
          <div className="header2">       
            {renderPosts()}
          </div>

    </div>
  );
}

export default App;