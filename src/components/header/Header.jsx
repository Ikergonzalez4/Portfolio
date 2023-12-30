import React, { useEffect, useRef } from 'react';
import linkedinIcon from '../../assets/images/linkedin.svg';
import githubIcon from '../../assets/images/github.svg';
import discordIcon from '../../assets/images/discord.svg';
import avatar from '../../assets/images/memoji.png';
import Scroll from '../scroll/Scroll';



function Header() {

    return (
        <header className="App-header">
            <div style={{ fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
                <h1 className="apple-style">Hi, my name is Iker</h1>       
                {/* TODO: writing animation */}
                <h3 className="apple-style-h3">and I'm a Software Developer</h3>
                <a className="button" href="/src/components/ContactForm.jsx">Contact Me</a>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/iker-gonzález-camacho-85077220b/">
                        <img className="icon" src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/ikergonzalez4/">
                        <img className="icon" src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://discord.com/qmiras44/">
                        <img className="icon" src={discordIcon} alt="Discord" />
                    </a>
                </div>
            </div>
            <div className="Avatar">
                <img src={avatar} alt="" />
            </div>
            <Scroll />
        </header>
    );
}

export default Header;