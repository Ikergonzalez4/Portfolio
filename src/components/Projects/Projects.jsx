import React from 'react';
import Project from './target/Project';
import KnowMore from './know-more/know-more';
import './Projects.css';
import firefoxImage from '../../assets/images/firefox.png'; // Importa la imagen
import discordImage from '../../assets/images/discord.jpg'; // Importa la imagen
import teslaImage from '../../assets/images/tesla.png'; // Importa la imagen
import { Java, Html, Css, ReactJs } from './tech/Tech'; // Fix the casing of the file name
import safariTesla from '../../assets/images/safari-tesla.png'; 
import safariTeslaBkg from '../../assets/images/safari-tesla-bkg.png';
import yourhometick from '../../assets/images/yourhometick.png';
import pokedex from '../../assets/images/pokedex.png';


const Projects = () => {
    // Projects.jsx

    const projects = [
        { id: 1, title: 'Tesla landing page', moreInfo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus leo, venenatis commodo facilisis nullam tempor quam neque suscipit inceptos curae, habitasse mauris pulvinar sed molestie facilisi non ac. Ad aenean in justo vel viverra cubilia' , description: [<Java />, <Css />], image: safariTesla },
        { id: 2, title: 'Esland page', moreInfo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus leo, venenatis commodo facilisis nullam tempor quam neque suscipit inceptos curae, habitasse mauris pulvinar sed molestie facilisi non ac. Ad aenean in justo vel viverra cubilia', description: [<Java />, <Css />], image: safariTeslaBkg },
        { id: 3, title: 'Your Home Tick', moreInfo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus leo, venenatis commodo facilisis nullam tempor quam neque suscipit inceptos curae, habitasse mauris pulvinar sed molestie facilisi non ac. Ad aenean in justo vel viverra cubilia.', description: [<Java />, <Css />], image: yourhometick },
        { id: 4, title: 'Back End Pokedex', moreInfo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus leo, venenatis commodo facilisis nullam tempor quam neque suscipit inceptos curae, habitasse mauris pulvinar sed molestie facilisi non ac. Ad aenean in justo vel viverra cubilia.', description: [<Java />, <Css />], image: pokedex },    ];
    return (
        <div className="main-container">
            <h1 className="title-projects underline-effect">Projects</h1>
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