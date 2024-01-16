import React, { useEffect } from "react";
import './Project.css';

const Project = ({ project }) => {
    const [isImageExpanded, setIsImageExpanded] = React.useState(false);

    // Agrega un manejador de eventos de clic al body cuando la imagen está expandida
    useEffect(() => {
        if (isImageExpanded) {
            const closeImage = () => setIsImageExpanded(false);
            document.body.addEventListener('click', closeImage);

            return () => document.body.removeEventListener('click', closeImage);
        }
    }, [isImageExpanded]);

    return (
        <div className="project-container">
            <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <p className="more-info">{project.moreInfo}</p> {/* Nuevo apartado more-info */}
                <p className="project-description">{project.description}</p>
            </div>
            <div></div> {/* Nuevo contenedor vacío */}
            <img src={project.image} alt={project.title} className={`project-image ${isImageExpanded ? 'expanded' : ''}`} onClick={(e) => { e.stopPropagation(); setIsImageExpanded(!isImageExpanded); }} />
        </div>
    );
};

export default Project;