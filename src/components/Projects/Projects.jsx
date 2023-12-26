import React from 'react';
import Project from './target/Project';
import KnowMore from './know-more/know-more';
import './Projects.css';
import firefoxImage from '../../assets/images/firefox.png'; // Importa la imagen
import discordImage from '../../assets/images/discord.jpg'; // Importa la imagen
import teslaImage from '../../assets/images/tesla.png'; // Importa la imagen
import { Java, Html, Css, ReactJs } from './tech/Tech'; // Fix the casing of the file name


const Projects = () => {
    // Projects.jsx

    const projects = [
        { id: 1, title: 'Firefox extension', description: [<Java />, <Css />, <Html />, <ReactJs />, <Css />], image: firefoxImage },
        { id: 2, title: 'Discord Clone', description: [<Java />, <Css />], image: discordImage },
        { id: 3, title: 'Tesla landing page', description: [<Java />, <Css />], image: teslaImage },
        { id: 4, title: 'Your Home Tick', description: [<Java />, <Css />], image: 'image3.jpg' },
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