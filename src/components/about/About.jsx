import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../pages/Contact.jsx';
import htmlImage from '../../assets/images/html.svg';
import cssImage from '../../assets/images/css.svg';
import jsImage from '../../assets/images/js.svg';
import reactImage from '../../assets/images/react.svg';
import vueImage from '../../assets/images/vue.svg';
import nodeImage from '../../assets/images/nodejs.svg';
import nextjsImage from '../../assets/images/next-js.svg';
import mongodbImage from '../../assets/images/mongodb.svg';
import javaImage from '../../assets/images/java.svg';
import kotlinImage from '../../assets/images/kotlin.svg';
import swiftImage from '../../assets/images/swift.svg';
import phytonImage from '../../assets/images/phyton.svg';
import mysqlImage from '../../assets/images/mysql.svg';
import figmaImage from '../../assets/images/figma.svg';
import accessImage from '../../assets/images/access.svg';
import firebaseImage from '../../assets/images/firebase.svg';
import gitImage from '../../assets/images/git.svg';
import photoshopImage from '../../assets/images/photoshop.svg';
import wireframe from '../../assets/images/wireframe.png'
import Scroll from '../scroll/Scroll.jsx';

function About() {
    return (
    <div className="about-container">
            <div className="description">
                <h1>
                <span className="underline-effect">My Skills and</span> 
                    <span className="underline-effect">experiences</span>
                </h1>
                <p>My experience spans both web technologies as well as cross-platform technologies.</p>
                <p>Beyond the basics, I actively explore emerging technologies to contribute to my productivity. My persistent and hardworking nature, coupled with a strong work ethic, positions me as a valuable asset on any project or team.</p>
                <p>I approach challenges with unwavering persistence, viewing them as opportunities for growth. Every project is an opportunity to expand my skill set and adopt a mindset of constant improvement. I am excited to bring my knowledge and experience to projects that demand innovation and excellence.</p>
                <p>If you have any questions or concerns please do not hesitate to <Link to="/contact">contact me</Link></p>            
            </div>
            <h1>
                <span className="techs underline-effect">Technologies</span> 
            </h1>
            <div className="skills">
                <div className="image-container">
                    <img src={htmlImage} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className="image-container">
                    <img src={cssImage} alt="CSS" />
                    <p>CSS</p>
                </div>
                <div className="image-container">
                    <img src={jsImage} alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className="image-container">
                    <img src={reactImage} alt="ReactJS" />
                    <p>ReactJS</p>
                </div>
                <div className="image-container">
                    <img src={vueImage} alt="Vue" />
                    <p>Vue</p>
                </div>
                <div className="image-container">
                    <img src={nodeImage} alt="Node" />
                    <p>Node</p>
                </div>
                <div className="image-container">
                    <img src={nextjsImage} alt="NextJS" />
                    <p>NextJS</p>
                </div>
                <div className="image-container">
                    <img src={mongodbImage} alt="MongoDB" />
                    <p>MongoDB</p>
                </div>
                <div className="image-container">
                    <img src={wireframe} alt="X" />
                    <p>X</p>
                </div>
                <div className="image-container">
                    <img src={wireframe} alt="X" />
                    <p>X</p>
                </div>
                <div className="image-container">
                    <img src={javaImage} alt="Java" />
                    <p>Java</p>
                </div>
                <div className="image-container">
                    <img src={kotlinImage} alt="Kotlin" />
                    <p>Kotlin</p>
                </div>
                <div className="image-container">
                    <img src={swiftImage} alt="Swift" />
                    <p>Swift</p>
                </div>
                <div className="image-container">
                    <img src={phytonImage} alt="Phyton" />
                    <p>Phyton</p>
                </div>
                <div className="image-container">
                    <img src={mysqlImage} alt="MySQL" />
                    <p>MySQL</p>
                </div>
                <div className="image-container">
                    <img src={figmaImage} alt="Figma" />
                    <p>Figma</p>
                </div>
                <div className="image-container">
                    <img src={photoshopImage} alt="Photoshop" />
                    <p>Photoshop</p>
                </div>
                <div className="image-container">
                    <img src={firebaseImage} alt="Firebase" />
                    <p>Firebase</p>
                </div>
                <div className="image-container">
                    <img src={gitImage} alt="Git" />
                    <p>Git</p>
                </div>
                <div className="image-container">
                    <img src={accessImage} alt="Microsoft Access" />
                    <p>Access</p>
                </div>
            </div>
        </div>
    );
}

export default About;