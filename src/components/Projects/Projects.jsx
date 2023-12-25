import React from 'react';
import Project from './target/Project';
import KnowMore from './know-more/know-more';
import './Projects.css';
import firefoxImage from '../../assets/images/firefox.png'; // Importa la imagen
import { Java, Html, Css } from './tech/Tech'; // Fix the casing of the file name


const Projects = () => {
    // Projects.jsx

    const projects = [
        { id: 1, title: 'Firefox extension', description: [<Java />, <Css />], image: firefoxImage },
        { id: 2, title: 'Discord Clone', description: <Html />, image: 'image2.jpg' },
        { id: 3, title: 'Tesla landing page', description: <Css />, image: 'image3.jpg' },
        { id: 4, title: 'Your Home Tick', description: null, image: 'image3.jpg' },
    ];
    return (
        <div className="main-container">
            <h1 className="title-projects">Projects</h1>
            <div className="projects-container">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
            <KnowMore />          
        </div>
    );
};

export default Projects;