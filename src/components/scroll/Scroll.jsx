import React from 'react';
import './Scroll.css'

function Scroll() {
    const scrollDown = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: window.innerHeight * 1.08, // 105% de la altura de la ventana
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
