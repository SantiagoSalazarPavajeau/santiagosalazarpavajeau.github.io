import React from 'react';

export interface Project{
    title: string;
    description: string;
    demo: string;
    github: string;
    stack: string;  
}


export const ProjectCard = ({title, description, demo, github,stack}: Project) => {
    return (
        <>
            <div className="project-card">
            <h2>{title}</h2>
                <p>{description}</p>
                <a href={demo}>Demo</a>
                <a href={github}>Github</a>
                <p>{stack}</p>
            </div>          
        </>
    )
} 
