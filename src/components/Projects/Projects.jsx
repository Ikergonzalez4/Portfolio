import React from "react";
import Project from "./target/Project";
import KnowMore from "./know-more/know-more";
import "./Projects.css";

// shields
import htmlS from '../../assets/images/shields/htmlshield.svg';
import cssS from '../../assets/images/shields/cssshield.svg';
import reactS from '../../assets/images/shields/reactshield.svg';
import jsS from '../../assets/images/shields/jsshield.svg';
import nodeS from '../../assets/images/shields/nodejsshield.svg';
import mongodbS from '../../assets/images/shields/mongodbshield.svg';
import expressS from '../../assets/images/shields/expressjsshield.svg';
import discordS from '../../assets/images/shields/discordshield.svg';
import astroS from '../../assets/images/shields/astroshield.svg';
import pythonS from '../../assets/images/shields/pythonshield.svg';


// project images 
import firefoxImage from "../../assets/images/firefox.png"; // Importa la imagen
import discordImage from "../../assets/images/discord.jpg"; // Importa la imagen
import teslaImage from "../../assets/images/tesla.png"; // Importa la imagen
import safariTesla from "../../assets/images/safari-tesla.png";
import safariTeslaBkg from "../../assets/images/safari-tesla-bkg.png";
import yourhometick from "../../assets/images/yourhometick.png";
import pokedex from "../../assets/images/pokedex.png"; 



const Projects = () => {
  // Projects.jsx

  const projects = [
    {
        id: 1,
        title: "Auth",
        moreInfo: (
          <>
            Web page that allows user registration and login and add, edit and delete task list.
            <br />
            <a
              href="https://github.com/ikergonzalez4/Auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB REPO
            </a>
          </>
        ),
        description: (
        <>
            <div className="shield-container-top">
                <img src={htmlS} alt="HTML Shield" className="shield-image" />
                <img src={cssS} alt="CSS Shield" className="shield-image" />
                <img src={reactS} alt="React Shield" className="shield-image" />
                <img src={jsS} alt="Java Script Shield" className="shield-image" />
            </div>
            <br />
            <br />
            <div className="shield-container-bottom">
                <img src={nodeS} alt="Node JS Shield" className="shield-image" />
                <img src={expressS} alt="Express JS Shield" className="shield-image" />
                <img src={mongodbS} alt="Mongo DB Shield" className="shield-image" />
            </div>
        </>
        ),
        image: firefoxImage,
      },
    {
        id: 2,
        title: "Discord Bot",
        moreInfo: (
            <>
                Discord bot that allows the management of servers as well as various utilities such as the use of music. 
                <br />
                <a href="https://github.com/Ikergonzalez4/discord-bot" target="_blank" rel="noopener noreferrer">
                    GITHUB REPO
                </a>
            </>
        ),
        description: (
            <div className="shield-container">
              <img src={jsS} alt="Java Script Shield" className="shield-image" />
              <img src={discordS} alt="Discord Shield" className="shield-image" />
            </div>
          ),
        image: safariTeslaBkg,
    },
    {
        id: 3,
        title: "Your Home Tick",
        moreInfo: (
            <>
                Static web page that offers the sale of some services for clients. 
                <br />
                <a href="https://www.yourhometick.com" target="_blank" rel="noopener noreferrer">
                    LIVE WEBPAGE
                </a>
            </>
        ),
        description: (
            <div className="shield-container">
              <img src={htmlS} alt="HTML Shield" className="shield-image" />
              <img src={cssS} alt="CSS Shield" className="shield-image" />
              <img src={jsS} alt="Java Script Shield" className="shield-image" />
            </div>
          ),
        image: yourhometick,
    },
    {
      id: 4,
      title: "Back End Pokedex",
      moreInfo:
        "Web page with the pokedex of pokemons through database access.",
        description: (
            <div className="shield-container">
              <img src={htmlS} alt="HTML Shield" className="shield-image" />
              <img src={cssS} alt="CSS Shield" className="shield-image" />
              <img src={jsS} alt="Java Script Shield" className="shield-image" />
              <img src={astroS} alt="Astro Shield" className="shield-image" />
            </div>
          ),
      image: pokedex,
    },
  ];
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
