import React from "react";
import './Project.css';

const Project = ({ project }) => {
    return (
        <div className="project-container">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
            </div>
        </div>
    );
};

export default Project;