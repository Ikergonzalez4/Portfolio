import React from 'react';

const Links = () => {
    const handleScroll = (vh) => {
        window.scrollTo(0, vh * window.innerHeight);
    };

    const buttonStyle = {
        margin: '20px 10px 0 5px',
        color: '#a906ea',
        fontSize: '1.2em',
    };

    return (
        <div>
            <button className="cool-hover" style={buttonStyle} onClick={() => handleScroll(1.07)}>About</button>
            <button className="cool-hover" style={buttonStyle} onClick={() => handleScroll(2.07)}>Projects</button>
            <button className="cool-hover" style={buttonStyle} onClick={() => handleScroll(3.07)}>Work</button>
        </div>
    );
};

export default Links;