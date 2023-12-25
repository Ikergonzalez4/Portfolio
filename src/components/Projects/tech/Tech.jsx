import React from 'react';

export const Java = () => <div className="tech">Java</div>;
export const Html = () => <div className="tech">HTML</div>;
export const Css = () => <div className="tech">CSS</div>;
export const ReactJs = () => <div className="tech">ReactJS</div>;

const Tech = () => {
    return (
        <div className="work-content">
            <Java />
            <Html />
            <Css />
            <ReactJs />
        </div>
    );
}

export default Tech;