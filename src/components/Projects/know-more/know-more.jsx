import React from 'react';
import './know-more.css';

function KnowMore() {
    const scrollDown = (e) => {
        e.preventDefault();
        const isLightMode = document.body.classList.contains('light-mode');
        window.scrollTo({
            top: window.innerHeight * (isLightMode ? 2.12 : 2.07), // 210% de la altura de la ventana en modo claro, 207% en otros casos
            behavior: 'smooth'
        });
    };

    return (
        <div className="container-sc">
            <button onClick={scrollDown} className="scroll-button">
                REACH MY PROJECTS
            </button>
            <div id="target" className="target"></div>
        </div>
    );
}

export default KnowMore;