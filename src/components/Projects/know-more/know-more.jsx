import React from 'react';
import './know-more.css';

function KnowMore() {
    const scrollDown = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: window.innerHeight * 2.09, // 105% de la altura de la ventana
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