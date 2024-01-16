import React from 'react';
import './Scroll.css'

function Scroll() {
    const scrollDown = (e) => {
        e.preventDefault();
        const isLightMode = document.body.classList.contains('light-mode');
        window.scrollTo({
            top: window.innerHeight * (isLightMode ? 1.11 : 1.06), // 111% de la altura de la ventana en modo claro, 106% en otros casos
            behavior: 'smooth'
        });
    };

    return (
        <div className="see-more">
            <a href="#" onClick={scrollDown}>
                &#8595;
            </a>
        </div>
    );
}

export default Scroll;